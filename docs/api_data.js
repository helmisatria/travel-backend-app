define({ "api": [
  {
    "type": "GET",
    "url": "/",
    "title": "Homepage",
    "name": "Homepage",
    "group": "home",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>Nama Depan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    firstname : Helmi\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    firstname : Helmi\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "routes/index.js",
    "groupTitle": "home",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/"
      }
    ]
  }
] });