from flask import Flask, session, request
import os

app = Flask(__name__)
app.secret_key = "secret-key"


@app.route("/")
def index():
    if "count" not in session:
        session["count"] = 0
    session["count"] += 1

    return f"""
    <h1>Flask Static Assets & Session Management</h1>
    <p>Visit count: {session['count']}</p>
    <p>Session ID: {request.cookies.get('session', 'No session cookie')}</p>
    <p>Static file test: <a href="/static/test.txt">test.txt</a></p>
    """


if __name__ == "__main__":
    app.run(debug=True, port=5000)
