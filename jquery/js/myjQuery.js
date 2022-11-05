$(document).ready(function () {
    console.log($);
    console.log(jQuery);

    // $('selector').action()
    $('p').click(function () {
        // $('p').hide();
        // $(this).hide();
        $(this).css("color", "red");
    });

    // for adding multiple events
    $('div').on(
        {
            click: function () {
                console.log('Thanks for clicking', this);
            },

            mouseleave: function () {
                console.log('mouseleave');
            }
        }
    );

    // $('#div-para').hide(3000,function(){
    //     console.log('hidden');
    // })

    // $('#div-para').show(3000,function(){
    //     console.log('shown');
    // })

    // $('#toggle-btn').click(function () {
    //     $('#div-para').toggle(1000);
    // });


    // // fadeOut(), fadeIn(), fadeToggle(), fadeTo()
    // $('#toggle-btn').click(function (time, opacity) {
    //     $('#div-para').fadeToggle(1000);
    // });


    // // slideDown(), slideUp(), slideToggle()
    // $('#toggle-btn').click(function (time, opacity) {
    //     $('#div-para').slideToggle(1000);
    // });

    // // Animate function in jQuery
    // $('#div-para').animate({
    //     opacity:0.3,
    //     height: '150px',
    //     width: '350'
    // },2000);

    $('#div-para').animate({ opacity: 0.2 }, 2000);
    $('#div-para').animate({ width: '400px' }, 2000);
    $('#div-para').animate({ opacity: 1 }, 2000);

    // $('#div-para').stop();// stops the animation right there

    // text() function works as innerText
    console.log($('#div-para').text())
    $('#div-para').text('This is Rownok Zahan Rupa. I am 23 years old. I live in Nilphamari. I have completed my graduation this year.');

    // $('#div-para').empty();
    // $('#div-para').remove();

    $('#div-para').addClass("class1 Class2");
    $('#div-para').removeClass("class1");

    // // html() function works as innerHTML
    // $('body').html('<p>Rownok Zahan Rupa</p>');

    // val() function works as .value 
    $('#inpu').val('Rownok');

    //adding CSS
    $('#div-para').css('backgroundColor','blueviolet');
    console.log($('#div-para').css('backgroundColor'));
})