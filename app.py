from flask import Flask, redirect, url_for, request, jsonify
import requests
import json
import random

app = Flask(__name__)

@app.route('/')
def index():
    return redirect(url_for('static',filename='index.html'))


@app.route('/randomtextme/api/generate')
def generate_gibberish():
    nump = random.randrange(5,10)
    resp = requests.get('http://randomtext.me/api/gibberish/p-{0}/25-45'.format(nump))
    data = resp.json()
    text_lst = data['text_out'].split('\r')
    reformated_resp = {}
    reformated_text_lst = []
    for text in text_lst:
        reformated_text = text[3:len(text)-4]
        reformated_text_lst.append(reformated_text)
        reformated_resp['text_out'] = reformated_text_lst
    return jsonify(reformated_resp)

@app.route('/randomtextme/api/headline')
def generate_headline():
    resp = requests.get('http://www.randomtext.me/api/gibberish/h2/6-10/')
    data = resp.json()
    text = data['text_out']
    reformated_resp = {}
    reformated_text = text[4:len(text)-5]
    reformated_resp['text_out'] = reformated_text
    return jsonify(reformated_resp)

@app.route('/quotesondesign/api/generate')
def generate_quote():
    resp = requests.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    data = resp.json()
    content = data[0]['content']
    text = content[3:len(content)-5]
    reformated_resp = {'content': text, 'title': data[0]['title']}
    return jsonify(reformated_resp)

@app.route('/whatdoestrumpthink/api/generate/')
def generate_trump():
    resp = requests.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
    data = resp.json()
    message = data['message']
    reformated_resp = {'message': message}
    return jsonify(reformated_resp)

@app.route('/dogs/api/generate')
def generate_dog():
    resp = requests.get('https://dog.ceo/api/breeds/image/random')
    data = resp.json();
    message = data['message']
    reformated_resp = {'message': message}
    return jsonify(reformated_resp)

if __name__ == '__main__':
    app.run(debug=True)
