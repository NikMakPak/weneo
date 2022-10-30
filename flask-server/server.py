from flask import Flask, request

app=Flask(__name__)

@app.route("/nlp")
def text_nlp():
    text = request.args.get('text_analize')
    if(text!=''):
        from rutermextract import TermExtractor
        term_extractor = TermExtractor()
        dict = {}

        for term in term_extractor(text):
           dict.update({term.normalized:term.count})
        return {"answer": dict}
    return {"answer": False}

if __name__ == "__main__":
    app.run(debug=True)