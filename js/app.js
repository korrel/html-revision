'use strict';

$(function () {

    $('.navbar-item').on('click', function(/*event*/) {
        // this = event.currentTarget;
        $(".navbar-nav li").removeClass('active');
        $(this).addClass('active');
    });

    /*/////////////////////////////////////////////////////*/

    // var onTexte = "Sebastien Renoult";

    // function ma_lettre () {
    //     for( let i=0; i<onTexte.length; i++) {
    //         // $(container).html(onTexte.charAt(i));
    //         console.log(onTexte[i]);
    //     };
    // };
    // setTimeout (ma_lettre,1000);



    // var container = $('<h1></h1>').html();
    // $('body').append(container);

    /*/////////////////////////////////////////////////////*/


    // effet d'apparition texte lettre par lettre
    // trim() enlève les espaces au début et à la fin de la chaine
    var word = $('#tap-text').text().trim();


    // on vide la div qui contient le mot
    $('#tap-text').empty();

    //parcourir les lettres du mot
    for (let i=0; i<word.length; i++){
        console.log(word[i]);

        setTimeout(function() {
            console.log(i);
            $('#tap-text').append(word[i]);
        }, 300*i);
    }

});