require 'httparty'
require 'nokogiri'
require 'byebug'
def scraper
  url = 'https://playoverwatch.com/en-us/news'
  unparsed_page = HTTParty.get(url)
  parsed_page = Nokogiri::HTML(unparsed_page)
  news_videos = parsed_page.css('.u-video')
  news_array = news_videos.map do |news|
    {link_url: "#{news.attributes["href"].value}",
    image: "#{news.children[0].values[1].slice(/bn.*g/)}",
    header:"#{news.css('h3').children.text}"
  }
  end
  byebug
end
scraper
