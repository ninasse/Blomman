$(document).ready(function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function printOrder(){
        cart = JSON.parse(localStorage.getItem("cart")) || [];

        $("#orderRow").remove();

        let orderRow = $("<div>")
            .addClass("row orderRow-smaller-text")
            .attr("id", "orderRow")
            .appendTo(orderctn);

        $.each(cart, function(i, product) {
            // Append to prodRow
            let prodRow = $("<div>")
                .addClass("col-12 px-0")
                .attr("id", "prodRow")
                .appendTo(orderRow);

            let prodRowRow = $("<div>")
            .addClass("row d-flex no-gutters py-2 align-items-center justify-content-center justify-content-md-between")
            .attr("id", "prodRowRow")
            .appendTo(prodRow);

            let imgContainer = $("<div>")
                .addClass("col-2 pl-1 pl-md-0")
                .attr("id", "imgContainer")
                .appendTo(prodRowRow);

            // Append to above div imgContainer 
            let orderImg = $("<img>")
                .attr("src", "../" + product.img)
                .addClass("img-fluid")
                .appendTo(imgContainer);
            
            let prodTitle = $("<span>")
                .addClass("col-2 px-md-3 should-hyphenate")
                .html(product.title)
                .appendTo(prodRowRow);

            let quantityContainer = $("<div>")
                .addClass("col-3 col-md-2 d-flex align-items-center px-1")
                .appendTo(prodRowRow);

            let prodPrice = $("<span>")
                .addClass("col-2")
                .attr("id", "prodPrice")
                .html(product.pricePerUnit + "<p class='currency-smaller-text-checkout'>SEK</p>")
                .appendTo(prodRowRow);

            let totalPrice = $("<span>")
                .addClass("col-2")
                .attr("id", "totalPrice")
                .html(product.quantity * product.pricePerUnit + "<p class='currency-smaller-text-checkout'>SEK</p>")
                .appendTo(prodRowRow);

            let deleteSpan = $("<span>")        
                .addClass("col-1")
                .attr("id", "deleteSpan")
                .appendTo(prodRowRow);

            // Append to quantityContainer
            let minusButton = $("<button>")
                .addClass("btn btn-sm")
                .attr("type", "button")
                .attr("id", "minusButton")
                .html("<i class='fa fa-minus'></i>")
                .on("click", { added: this }, function(event) {
                    console.log("You want to decrease", event );
                    if (event.data.added.quantity > 1) {

                        $.each(cart, function(index, product) {
                            if (product.id === event.data.added.id) {
                                product.quantity--;
                                product.price = product.pricePerUnit * product.quantity;
                            }
                        });

                        localStorage.setItem("cart", JSON.stringify(cart));
                        printOrder();

                    } else {
                        console.log("you cant decrease from one!");
                    }
                })
                .appendTo(quantityContainer);
            
            let quantitySpan = $("<span>")
                .addClass("px-1 px-md-3")
                .attr("id", "quantitySpan")
                .html(product.quantity)
                .appendTo(quantityContainer);

            let plusButton = $("<button>")
                .addClass("btn btn-sm")
                .attr("type", "button")
                .attr("id", "plusButton")
                .html("<i class='fa fa-plus'></i>")
                .on("click", { added: this }, function (event) {
                    console.log("You want to increase", event.data.added, event.data.added.quantity );
                    
                    // console.log(cart);

                    $.each(cart, function(index, product) {
                        if (product.id === event.data.added.id) {
                            product.quantity++;
                            product.price = product.pricePerUnit * product.quantity;
                        }
                    });

                    localStorage.setItem("cart", JSON.stringify(cart));
                    printOrder();

                })
                .appendTo(quantityContainer);

                // Append to deleteSpan                            
            let deleteButton = $("<button>")
                .addClass("btn btn-sm")
                .attr("type", "button")
                .attr("id", "deleteButton")
                .html("<i class='fas fa-trash-alt'></i>")
                .on("click", function(){
                    console.log("You want to remove");
                    cart.splice(i , 1);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    $(this).parents("#prodRow").remove();
                    printOrder();
                })
                .appendTo(deleteSpan);
            });

            printTotal();
    };

    function printTotal() { 
        cart = JSON.parse(localStorage.getItem("cart")) || [];

        let sumTotal = 0;

        $.each(cart, function(index, product) {
            sumTotal = sumTotal + product.price;
        });

        $("#sumTotal").html(sumTotal + "<p class='currency-smaller-text-checkout'>SEK</p>");

        let vatTotal = sumTotal * 0.25;

        $("#vatTotal").html(vatTotal + "<p class='currency-smaller-text-checkout'>SEK</p>");

        console.log(sumTotal);
    };

    function submitForm() {
        'use strict';
        
        // Get the forms we want to add validation styles to
        let forms = document.getElementsByClassName("needs-validation");
        let custForm = document.getElementById("customerform");
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function() {
            document.getElementById("submitCForm").addEventListener("click", function(event) {
                if (custForm.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    $("#paymentMethod").slideToggle();
                    $("#customerDetails").slideUp();
                }
                custForm.classList.add('was-validated');
                }, false); 
        });
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
 
    printOrder();
    
    $("#submitCForm").on("click", submitForm());

    $("#showCustomerDetails").on("click", function(){
        $("#customerDetails").slideToggle();
    });
    $("#showTermsAndC").on("click", function(){
        $("#termsAndConditions").slideToggle();   
    }).one("click", function(){
        $("#paymentMethod").slideUp();
    });
    
    changeFooterIcon();

});