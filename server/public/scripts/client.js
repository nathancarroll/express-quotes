console.log('client.js loaded');

$(document).ready(function(){
    console.log('jquery loaded');
    $('#getQuote').on('click', handleGetQuote);
});

function handleGetQuote(){
    console.log('get quote clicked');
    $.ajax({
        url: '/quotes',
        type: 'GET'
    }).done(function(res){
        console.log(res);
        displayQuotes(res);
    }).fail(function(err){
        alert('Quotes not found!');
        console.log(err);
    })
}

function displayQuotes(quoteArray){
    for (thing of quoteArray){
        $('#quoteList').append(`<li>"${thing.quote}" --${thing.person}`);
    };
};