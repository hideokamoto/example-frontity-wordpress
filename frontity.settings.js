const settings = {
  "name": "frontity-example",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "WordPress Theme Unittest",
      "description": "Frontity example site using WordPress Theme Unittest posts"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Edge Case Category",
              "/category/edge-case-2/"
            ],
            [
              "Content Tags",
              "/tag/content-2/"
            ],
            [
              "About",
              "/about/"
            ]
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
          "api": "https://b5d85ac952f05c2bcb7e0b42979eff431beac2f1.hl-a.getshifter.co/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
