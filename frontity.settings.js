const settings = {
  "name": "f1",
  "state": {
    "frontity": {
      "url": "https://it.londonos.uk",
          "title": "LONDONOS™ - Data Cable / Fibre Optic Cabling / IT Move / WiFi - Contractor",
          "description": "Londonos data cabling contractor ready to help you with initial planning stages through installation, configuration, testing of your new IT infrastructure."
    }
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [
            ["Services", "/services/"],
            ["About Us", "/about-us/"],
             ["Projects", "/projects/"],
              ["Service Area", "/service-area/"],
            ["Blog", "/blog/"],            
            ["Contact", "/contact/"],
            
               
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "all"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          api: "https://it.londonos.uk/wp-json/",
          url: "https://it.londonos.uk",
          "homepage": "/home",
              "postsPage": "/blog",
          
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    // "frontity-contact-form-7",
      "@awsmin/frontity-wp-job-openings",
      "@aamodtgroup/frontity-contact-form-7",
   "@frontity/yoast",
  ]
};

export default settings;
