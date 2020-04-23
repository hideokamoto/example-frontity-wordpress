const settings = {
  "name": "frontity-example",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "WordCamp Europe 2020 (Frontity example)",
      "description": "Frontity example site using WordCamp Europe 2020 posts"
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
              "Announcements",
              "/category/announcements/"
            ],
            [
              "Contributors",
              "/tag/contributors/"
            ],
            [
              "About",
              "/what-is-wordcamp-europe/"
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
          "api": "https://2020.europe.wordcamp.org/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
