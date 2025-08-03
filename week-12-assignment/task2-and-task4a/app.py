from flask import Flask, render_template, request, redirect, url_for, flash
import sqlite3

app = Flask(__name__)
app.config["SECRET_KEY"] = "your-secret-key-here"


def get_db_connection():
    # Create and return a database connection
    conn = sqlite3.connect("data/users.db")
    conn.row_factory = sqlite3.Row
    return conn


@app.route("/")
def index():
    # Display all users (READ)
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users ORDER BY created_at DESC")
        users = cursor.fetchall()
        conn.close()
        return render_template("index.html", users=users)
    except Exception as e:
        flash(f"Error loading users: {str(e)}", "error")
        return render_template("index.html", users=[])


@app.route("/user/<int:user_id>")
def view_user(user_id):
    # View a user (READ)
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
        user = cursor.fetchone()
        conn.close()

        if user is None:
            flash("User not found", "error")
            return redirect(url_for("index"))

        return render_template("view_user.html", user=user)
    except Exception as e:
        flash(f"Error loading user: {str(e)}", "error")
        return redirect(url_for("index"))


@app.route("/user/<int:user_id>/edit", methods=["GET", "POST"])
def edit_user(user_id):
    # Edit a user (UPDATE)
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        if request.method == "POST":
            name = request.form.get("name", "").strip()
            email = request.form.get("email", "").strip()

            # Validation
            if not name:
                flash("Name is required", "error")
                cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
                user = cursor.fetchone()
                conn.close()
                return render_template("edit_user.html", user=user)

            # Update the user
            cursor.execute(
                "UPDATE users SET name = ?, email = ? WHERE id = ?",
                (name, email, user_id),
            )
            conn.commit()
            conn.close()
            flash("User updated successfully!", "success")
            return redirect(url_for("view_user", user_id=user_id))

        # GET request - show edit form
        cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
        user = cursor.fetchone()
        conn.close()

        if user is None:
            flash("User not found", "error")
            return redirect(url_for("index"))

        return render_template("edit_user.html", user=user)

    except Exception as e:
        flash(f"Error updating user: {str(e)}", "error")
        return redirect(url_for("index"))


@app.route("/add", methods=["POST"])
def add_user():
    # Add a new user (CREATE)"""
    try:
        name = request.form.get("name", "").strip()
        email = request.form.get("email", "").strip()

        # Validation
        if not name:
            flash("Name is required", "error")
            return redirect(url_for("index"))

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (name, email) VALUES (?, ?)", (name, email))
        conn.commit()
        conn.close()

        flash("User added successfully!", "success")
        return redirect(url_for("index"))

    except Exception as e:
        flash(f"Error adding user: {str(e)}", "error")
        return redirect(url_for("index"))


@app.route("/delete/<int:user_id>", methods=["POST"])
def delete_user(user_id):
    # Delete a user (DELETE)
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Check if user exists
        cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
        user = cursor.fetchone()

        if user is None:
            flash("User not found", "error")
            conn.close()
            return redirect(url_for("index"))

        # Delete the user
        cursor.execute("DELETE FROM users WHERE id = ?", (user_id,))
        conn.commit()
        conn.close()

        flash("User deleted successfully!", "success")
        return redirect(url_for("index"))

    except Exception as e:
        flash(f"Error deleting user: {str(e)}", "error")
        return redirect(url_for("index"))


if __name__ == "__main__":
    app.run(debug=True, port=5001)
