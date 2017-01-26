const path = require('path');
const express = require('express');
const app = express();

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
  }
}

// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/../dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
const dataDemo = [
        {
            "_id": "2312E34245324h228868",
            "productName": "Blue EverBlue Model 1200EX",
            "productCode": "GDN-0011",
            "category": "electronique",
            "releaseDate": "Tue Jan 16 2017 08:00:00 GMT+0100",
            "endDate":"Tue Jan 29 2017 23:59:59 GMT+0100",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare eleifend sollicitudin. Etiam ut ultrices diam, eu tincidunt velit. Praesent sed est vitae lectus pellentesque dictum. Etiam posuere id dui nec fringilla. Praesent sed aliquam velit. Donec pellentesque egestas arcu, a maximus dui auctor in. Nam metus sapien, vehicula id turpis sed, tempus blandit tortor. Nam elementum at sapien eu volutpat. Fusce condimentum accumsan arcu, vel ullamcorper lectus pretium et. Aenean vehicula vitae lorem vel molestie. Sed id ipsum ornare, cursus nulla ac, interdum nisi. Nulla vitae ex massa. Quisque maximus purus eget ante blandit tempor. Curabitur non tincidunt sem, at mattis nibh. Cras vitae efficitur massa. Aliquam orci neque, venenatis at augue et, pretium finibus arcu. ",
            "priceBase": 100.00,
            "contributor": ["2312E34245324h228868", "2312E34245324h228868"],
            "discount": 40,
            "minContributor": 10,
            "gallery":["http://placehold.it/350x250", "http://placehold.it/800x600"],
            "thumbnail": "http://placehold.it/350x250"
        },  
        {
            "_id": "2312E34245324h228868",
            "productName": "VANILLE & CHOCOLAT jupe longue",
            "productCode": "GDN-0011",
            "category": "vetement",
            "releaseDate": "Tue Jan 27 2017 08:00:00 GMT+0100",
            "endDate":"Tue Jan 29 2017 23:59:59 GMT+0100",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare eleifend sollicitudin. Etiam ut ultrices diam, eu tincidunt velit. Praesent sed est vitae lectus pellentesque dictum. Etiam posuere id dui nec fringilla. Praesent sed aliquam velit. Donec pellentesque egestas arcu, a maximus dui auctor in. Nam metus sapien, vehicula id turpis sed, tempus blandit tortor. Nam elementum at sapien eu volutpat. Fusce condimentum accumsan arcu, vel ullamcorper lectus pretium et. Aenean vehicula vitae lorem vel molestie. Sed id ipsum ornare, cursus nulla ac, interdum nisi. Nulla vitae ex massa. Quisque maximus purus eget ante blandit tempor. Curabitur non tincidunt sem, at mattis nibh. Cras vitae efficitur massa. Aliquam orci neque, venenatis at augue et, pretium finibus arcu. ",
            "priceBase": 100.00,
            "contributor": ["2312E34245324h228868", "2312E34245324h228868"],
            "discount": 40,
            "minContributor": 10,
            "gallery":["http://placehold.it/350x250", "http://placehold.it/800x600"],
            "thumbnail": "http://placehold.it/350x250"
        },  
        {
            "_id": "2312E34245324h228868",
            "productName": "Blue EverBlue Model 1200EX",
            "productCode": "GDN-0011",
            "category": "electronique",
            "releaseDate": "Tue Jan 16 2017 08:00:00 GMT+0100",
            "endDate":"Tue Jan 29 2017 23:59:59 GMT+0100",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare eleifend sollicitudin. Etiam ut ultrices diam, eu tincidunt velit. Praesent sed est vitae lectus pellentesque dictum. Etiam posuere id dui nec fringilla. Praesent sed aliquam velit. Donec pellentesque egestas arcu, a maximus dui auctor in. Nam metus sapien, vehicula id turpis sed, tempus blandit tortor. Nam elementum at sapien eu volutpat. Fusce condimentum accumsan arcu, vel ullamcorper lectus pretium et. Aenean vehicula vitae lorem vel molestie. Sed id ipsum ornare, cursus nulla ac, interdum nisi. Nulla vitae ex massa. Quisque maximus purus eget ante blandit tempor. Curabitur non tincidunt sem, at mattis nibh. Cras vitae efficitur massa. Aliquam orci neque, venenatis at augue et, pretium finibus arcu. ",
            "priceBase": 100.00,
            "contributor": ["2312E34245324h228868", "2312E34245324h228868"],
            "discount": 40,
            "minContributor": 10,
            "gallery":["http://placehold.it/350x250", "http://placehold.it/800x600"],
            "thumbnail": "http://placehold.it/350x250"
        },  
        {
            "_id": "2312E34245324h228868",
            "productName": "Blue EverBlue Model 1200EX",
            "productCode": "GDN-0011",
            "category": "electronique",
            "releaseDate": "Tue Jan 16 2017 08:00:00 GMT+0100",
            "endDate":"Tue Jan 29 2017 23:59:59 GMT+0100",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare eleifend sollicitudin. Etiam ut ultrices diam, eu tincidunt velit. Praesent sed est vitae lectus pellentesque dictum. Etiam posuere id dui nec fringilla. Praesent sed aliquam velit. Donec pellentesque egestas arcu, a maximus dui auctor in. Nam metus sapien, vehicula id turpis sed, tempus blandit tortor. Nam elementum at sapien eu volutpat. Fusce condimentum accumsan arcu, vel ullamcorper lectus pretium et. Aenean vehicula vitae lorem vel molestie. Sed id ipsum ornare, cursus nulla ac, interdum nisi. Nulla vitae ex massa. Quisque maximus purus eget ante blandit tempor. Curabitur non tincidunt sem, at mattis nibh. Cras vitae efficitur massa. Aliquam orci neque, venenatis at augue et, pretium finibus arcu. ",
            "priceBase": 100.00,
            "contributor": ["2312E34245324h228868", "2312E34245324h228868"],
            "discount": 40,
            "minContributor": 10,
            "gallery":["http://placehold.it/350x250", "http://placehold.it/800x600"],
            "thumbnail": "http://placehold.it/350x250"
        },  
        {
            "_id": "2312E34245324h228868",
            "productName": "Blue EverBlue Model 1200EX",
            "productCode": "GDN-0011",
            "category": "electronique",
            "releaseDate": "Tue Jan 16 2017 08:00:00 GMT+0100",
            "endDate":"Tue Jan 29 2017 23:59:59 GMT+0100",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare eleifend sollicitudin. Etiam ut ultrices diam, eu tincidunt velit. Praesent sed est vitae lectus pellentesque dictum. Etiam posuere id dui nec fringilla. Praesent sed aliquam velit. Donec pellentesque egestas arcu, a maximus dui auctor in. Nam metus sapien, vehicula id turpis sed, tempus blandit tortor. Nam elementum at sapien eu volutpat. Fusce condimentum accumsan arcu, vel ullamcorper lectus pretium et. Aenean vehicula vitae lorem vel molestie. Sed id ipsum ornare, cursus nulla ac, interdum nisi. Nulla vitae ex massa. Quisque maximus purus eget ante blandit tempor. Curabitur non tincidunt sem, at mattis nibh. Cras vitae efficitur massa. Aliquam orci neque, venenatis at augue et, pretium finibus arcu. ",
            "priceBase": 100.00,
            "contributor": ["2312E34245324h228868", "2312E34245324h228868"],
            "discount": 40,
            "minContributor": 10,
            "gallery":["http://placehold.it/350x250", "http://placehold.it/800x600"],
            "thumbnail": "http://placehold.it/350x250"
        },  
        {
            "_id": "2312E34245324h228868",
            "productName": "Blue EverBlue Model 1200EX",
            "productCode": "GDN-0011",
            "category": "electronique",
            "releaseDate": "Tue Jan 16 2017 08:00:00 GMT+0100",
            "endDate":"Tue Jan 29 2017 23:59:59 GMT+0100",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare eleifend sollicitudin. Etiam ut ultrices diam, eu tincidunt velit. Praesent sed est vitae lectus pellentesque dictum. Etiam posuere id dui nec fringilla. Praesent sed aliquam velit. Donec pellentesque egestas arcu, a maximus dui auctor in. Nam metus sapien, vehicula id turpis sed, tempus blandit tortor. Nam elementum at sapien eu volutpat. Fusce condimentum accumsan arcu, vel ullamcorper lectus pretium et. Aenean vehicula vitae lorem vel molestie. Sed id ipsum ornare, cursus nulla ac, interdum nisi. Nulla vitae ex massa. Quisque maximus purus eget ante blandit tempor. Curabitur non tincidunt sem, at mattis nibh. Cras vitae efficitur massa. Aliquam orci neque, venenatis at augue et, pretium finibus arcu. ",
            "priceBase": 100.00,
            "contributor": ["2312E34245324h228868", "2312E34245324h228868"],
            "discount": 40,
            "minContributor": 10,
            "gallery":["http://placehold.it/350x250", "http://placehold.it/800x600"],
            "thumbnail": "http://placehold.it/350x250"
        },  
        {
            "_id": "2312E34245324h228868",
            "productName": "Blue EverBlue Model 1200EX",
            "productCode": "GDN-0011",
            "category": "electronique",
            "releaseDate": "Tue Jan 16 2017 08:00:00 GMT+0100",
            "endDate":"Tue Jan 29 2017 23:59:59 GMT+0100",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare eleifend sollicitudin. Etiam ut ultrices diam, eu tincidunt velit. Praesent sed est vitae lectus pellentesque dictum. Etiam posuere id dui nec fringilla. Praesent sed aliquam velit. Donec pellentesque egestas arcu, a maximus dui auctor in. Nam metus sapien, vehicula id turpis sed, tempus blandit tortor. Nam elementum at sapien eu volutpat. Fusce condimentum accumsan arcu, vel ullamcorper lectus pretium et. Aenean vehicula vitae lorem vel molestie. Sed id ipsum ornare, cursus nulla ac, interdum nisi. Nulla vitae ex massa. Quisque maximus purus eget ante blandit tempor. Curabitur non tincidunt sem, at mattis nibh. Cras vitae efficitur massa. Aliquam orci neque, venenatis at augue et, pretium finibus arcu. ",
            "priceBase": 100.00,
            "contributor": ["2312E34245324h228868", "2312E34245324h228868"],
            "discount": 40,
            "minContributor": 10,
            "gallery":["http://placehold.it/350x250", "http://placehold.it/800x600"],
            "thumbnail": "http://placehold.it/350x250"
        }
    ];
app.get('/promotions', function(req, res){
  res.json(dataDemo)
})
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);