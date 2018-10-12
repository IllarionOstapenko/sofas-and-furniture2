$('body').append('<button class="btn-up" />');
$('.btn-up').click(function(){
    $('html').animate({'scrollTop':0}, 1500);
});


