from flask import Flask, flash, session, render_template, redirect, url_for, json, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')


if __name__ == "__main__":
    app.debug = True
    app.run()