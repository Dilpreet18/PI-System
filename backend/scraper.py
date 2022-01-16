from autoscraper import AutoScraper
amazon_url = "https://www.amazon.in/s?k=iphones"
flipkart_url = 'https://www.flipkart.com/search?q=iphone'

amazon_wanted_list = ["41,999", "Apple iPhone 11 (64GB) - Black"]
flipkart_wanted_list = ["₹53,999", "APPLE iPhone 12 (White, 64 GB)"]

scraper = AutoScraper()
amazon_result = scraper.build(amazon_url, amazon_wanted_list)
flipkart_result = scraper.build(flipkart_url, flipkart_wanted_list)

print(scraper.get_result_similar(amazon_url, grouped=True),
      scraper.get_result_similar(flipkart_url, grouped=True))

# scraper.set_rule_aliases({'rule_qe5f': 'Title', 'rule_il60': 'price'})
# scraper.keep_rules(['rule_qe5f', 'rule_il60'])
# scraper.save('amazonData')
