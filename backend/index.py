from flask import Flask, request
from autoscraper import AutoScraper
from flask_cors import CORS


amazon_scraper = AutoScraper()
amazon_scraper.load('amazonData')

flipkart_scraper = AutoScraper()
flipkart_scraper.load('flipkart')

app = Flask(__name__)
CORS(app)


def get_result(search_query):
    url = 'https://www.amazon.in/s?k=%s' % search_query
    flipkart_url = 'https://www.flipkart.com/search?q=%s' % search_query
    amazon_result = amazon_scraper.get_result_similar(url, group_by_alias=True)
    flipkart_result = flipkart_scraper.get_result_similar(
        flipkart_url, group_by_alias=True)
    return _aggregate_result(amazon_result), _aggregate_result(flipkart_result)


def _aggregate_result(result):
    final_result = []
    print(list(result.values())[0])
    for i in range(len(list(result.values())[0])):
        try:
            final_result.append({alias: result[alias][i] for alias in result})
        except:
            pass
    return final_result


@ app.route('/', methods=['GET'])
def search_api():
    query = request.args.get('query')
    print(query)
    return dict(result=get_result(query))


if __name__ == '__main__':
    app.run(port=8080, host='0.0.0.0')
