$('.tombol').click(function() {
    // animate content
    $('.halaman').addClass('animate_content');
    $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.halaman').removeClass('animate_content');
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function() {
        $('.halaman').removeClass('fadeIn');
    }, 1100);

});


$('.tombol2').click(function() {
    // animate content
    $('.halaman').addClass('animate_content');
    $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.halaman').removeClass('animate_content');
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function() {
        $('.halaman').removeClass('fadeIn');
    }, 1100);

});


$('.kehome').click(function() {
    setTimeout(function() {
        $('.home').addClass('fadeIn');
    }, 1100);

    PuterLagu();
});


$('.kehalaman2').click(function() {
    setTimeout(function() {
        $('.halaman2').addClass('fadeIn');
    }, 1100);

    JalaninTeks();
    PuterLagu();
    Ambilnama();
});

var i = 0;
var txt = "Happy valentine ya ayyyy, terimakasih ya udah nemenin aku selama ini walaupun aku banyak kurangnya, makasih bangettt. Dan juga kamu itu wanita yang sangat kusayangi setelah ibuku, kamuu itu cantikk, maniss, imuttt, walaupun agak cebol dikit hehehehe, kamu itu jangan pernah insecure ya ayy mu itu gk ada kurangnya itu aja sihh ku gk bisa ngasih kata-kata yg banyak karena aku bukan pendukung anis:v, makasihh ya ayy udah mau sama akuu dan juga udah ngisi kesedihan di hatiku menjadi kebahagiaan yang sangat berarti, sehat-sehat terus orang sehat, ilopyuuuuuuuuuuuuuuuuuu:3";
var speed = 100;

function JalaninTeks() {
    if (i < txt.length) {
        document.getElementById("tekss").innerHTML += txt.charAt(i);
        i++;
        setTimeout(JalaninTeks, speed);
    }
};


function PuterLagu() {
    var lagu = document.getElementById("lagu");
    return lagu.paused ? lagu.play() : lagu.pause();
};

function Ambilnama() {
    var x = document.getElementById("nama").value;
    document.getElementById("tampilnama").innerHTML = x;
};