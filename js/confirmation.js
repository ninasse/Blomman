$(document).ready(function() { 

        changeFooterIcon();
        loadOrderNumber()

});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

min = 10000;
max = 99999;

let buyOrder = Math.floor(Math.random() * (max - min + 1) + min);

function loadOrderNumber() {

    localStorage.setItem(buyOrder, JSON.stringify(cart));

    $("#on").text(buyOrder);
};


function changeFooterIcon() { 
    
    // Footer Start \\

    // Change Facebook Icon color when hover over img. 
    $('#imgfb').hover(
        function(){
            $(this).attr('src','../img/002-facebook_color.png')
        },
        function(){
            $(this).attr('src','../img/002-facebook_grey.png')
        });

    // Change Instagram Icon color when hover over img. 
    $('#imgig').hover(
        function(){
            $(this).attr('src','../img/003-instagram_color.png')
        },
        function(){
            $(this).attr('src','../img/003-instagram_grey.png')
        });

    // Change Twitter Icon color when hover over img. 
    $('#imgtwi').hover(
        function(){
            $(this).attr('src','../img/005-twitter_color.png')
        },
        function(){
            $(this).attr('src','../img/005-twitter_grey.png')
    });
    // Footer End \\
};