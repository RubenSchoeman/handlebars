module.exports = function(width, height) {
    return width * height;
};

var template = $('#handlebars-demo').html();


// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context =  {
    "person" : [
        {
            "name" : "Ruben",
            "city" : "Pretoria",
            "food" : "Biltong",
            "image" : "<img src='index.jpeg'>"
        },
        {
            "name" : "Schan",
            "city" : "Cape Town",
            "food" : "Pizza",
            "image" : "<img src='index.jpeg'>"
        },
        {
            "name" : "Reinhardt",
            "city" : "Pretoria",
            "food" : "Noodles",
            "image" : "<img src='index.jpeg'>"
        },
        {
            "name" : "Don",
            "city" : "Somerset Wes",
            "food" : "Sushi",
            "image" : "<img src='index.jpeg'>"
        },
        {
            "name" : "Jason",
            "city" : "Table View",
            "food" : "Lamb Chops",
            "image" : "<img src='index.jpeg'>"
        },
        {
            "name" : "Shipo",
            "city" : "Soweto",
            "food" : "Pap",
            "image" : "<img src='index.jpeg'>"
        }
    ]
};

// html = 'My name is Ritesh Kumar. I am a developer.'
var html = templateScript(context);


// Insert the HTML code into the page
$('#test').html(html);
