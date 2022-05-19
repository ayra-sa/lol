const settings = {
  "name": "vektora-lb",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Lol Boosting",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "lb",
      "state": {
        "theme": {
          "menu": [
            ['Product', '/product/'],
            ['About', '/about/'],
            ['Hiring', '/hiring/'],
            ['Blog', '/blog/'],
            ['FAQ', '/faq/'],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.frontity.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
