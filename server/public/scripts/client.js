console.log('client.js loaded');

$(document).ready(function(){
    console.log('jquery loaded');
    handleGetQuote();
    $('#submitQuote').on('click', handleSubmitQuote);
    $('#randomQuote').on('click', handleRandomQuote);
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
    $('#quoteCards').empty();
    for (thing of quoteArray){
        $('#quoteCards').append(
            `<div class="card" style="width: 18rem; height: 36rem;">
                <img class="card-img-top" src="${thing.imgURL}" alt="${thing.person}">
                <div class="card-body">
                    <blockquote class="bg-gray secondary">
                    <p>
                    <em>"${thing.quote}"</em>
                    </p>
                    <small>${thing.person}
                    </small>
                    </blockquote>
                    <!--
                    <h5 class="card-title">${thing.person}</h5>
                    <p class="card-text">${thing.quote}</p>
                    -->
                </div>
            </div>`
        )};
};

function handleSubmitQuote(){
    console.log('submit button clicked');
    $.ajax({
        url: '/new-quote',
        method: 'POST',
        data: {
            quote : $('#quoteInput').val(),
            person : $('#personInput').val(),
            imgURL: $('#imgInput').val()
        }
    }).done(function(res){
        console.log(res);
    }).fail(function(err){
        console.log(err);
    });

    $('#quoteInput').val('');
    $('#personInput').val('');
    $('#imgInput').val('');
    $('#quoteInput').focus();
    handleGetQuote();
}

function handleRandomQuote(){
    console.log('random quote btton clicked');
    $.ajax({
        url: '/random',
        method: 'GET'
    }).done(function(res){
        displayQuotes(res);
    }).fail(function(err){
        console.log(err);
    });
}