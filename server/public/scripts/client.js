console.log('client.js loaded');

$(document).ready(function(){
    console.log('jquery loaded');
    $('#getQuote').on('click', handleGetQuote);
    $('#submitQuote').on('click', handleSubmitQuote);
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
    $('#quoteList').empty();
    for (thing of quoteArray){
        $('#quoteList').append(`<li>"${thing.quote}" --${thing.person}`);
    };
};

function handleSubmitQuote(){
    console.log('submit button clicked');
    $.ajax({
        url: 'new-quote',
        type: 'POST',
        data: {
            quote : $('#quoteInput').val(),
            person : $('#personInput').val()
        }
    }).done(function(res){
        console.log(res);
    }).fail(function(err){
        console.log(err);
    })

    handleGetQuote();
}