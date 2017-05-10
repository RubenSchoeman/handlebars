var templatetwo = $('#handlebars-two').html();

var templateScriptTwo = Handlebars.compile(templatetwo);

var contexttwo = { "name" : "Ruben", "occupation" : "developer" };

var htmltwo = templateScript(contexttwo);

$('#testtwo').append(htmltwo);
