// Defining all the products

function ProductItem(t, p, img, d, id, q, ppu) {
    this.title = t;
    this.price = p;
    this.img = img;
    this.description = d;
    this.id = id;
    this.quantity = q;
    this.pricePerUnit = ppu;
}

let product1 = new ProductItem("Amaryllis", 79, "img/amaryllis.png", "Stora (18-19cm) rosa blommor blommor på korta stabila stjälkar.", 1, 1, 79);
let product2 = new ProductItem("Ardisia", 249, "img/Ardisia.png", "De vackra bären som kommer i olika nivåer gör denna växt mycket dekorativ.", 2, 1, 249);
let product3 = new ProductItem("Benjaminfikus", 399, "img/Benjaminfikus.png", "Benjaminfikus är en tät och buskig växt med blanka blad som finns i olika färger och storlekar beroende på sort.", 3, 1, 399);
let product4 = new ProductItem("Rosa Fönsterazalea", 49, "img/Fonsterazalea_rosa.png", "Otroligt vacker växt som är uppskattad av många. De nya sorterna är lättskötta! ", 4, 1, 49);
let product5 = new ProductItem("Fönsterazalea", 79, "img/Fonsterazalea.png", "Otroligt vacker växt som är uppskattad av många. De nya sorterna är lättskötta! ", 5, 1, 79);
let product6 = new ProductItem("Förmakspalm", 399, "img/Formakspalm.png", "Fin, lite större krukväxt som är mycket tålig och kan bli gammal.", 6, 1, 399);
let product7 = new ProductItem("Gullranka Liten", 59, "img/Gullranka_liten.png", "En klassisk växt som är både tålig och lättplacerad.", 7, 1, 59);
let product8 = new ProductItem("Gullranka Stor", 79, "img/Gullranka.png", "En klassisk växt som är både tålig och lättplacerad.", 8, 1, 79);
let product9 = new ProductItem("Julros", 199, "img/julros.png", "Njut av julrosen inne under vintern och plantera ut den till våren.", 9, 1, 199);
let product10 = new ProductItem("Monstera", 2990, "img/monstera.png", "Mycket lättskött växt med stora, vackra, flikiga blad.", 10, 1, 2990);
let product11 = new ProductItem("Novemberkaktus", 59, "img/novemberkaktus.png", "Från Brasiliens djungel kommer denna växt som med sina fantastiska färger lyser upp i höstmörkret.", 11, 1, 59);
let product12 = new ProductItem("Papuasköld", 199, "img/papuaskold.png", "Mörkt gröna blad med purpurfärgad undersida. Trivs på ljusa platser.", 12, 1, 199);
let product13 = new ProductItem("Paraplyaralia", 79, "img/Paraplyaralia.png", "Mycket lättskött och tålig växt!", 13, 1, 79);
let product14 = new ProductItem("Princettia", 49, "img/Princettia.png", "En kraftig och tålig växt med karamellrosa stjärnor och mörkt gröna blad.", 14, 1, 49);
let product15 = new ProductItem("Rosenkalla", 149, "img/Rosenkalla.png", "Elegant växt med luftrenande egenskaper.", 15, 1, 149);
let product16 = new ProductItem("Rumsgran", 179, "img/Rumsgran.png", "Lättskött liten barrväxt som sprider hemtrevlig stämning.", 16, 1, 179);
let product17 = new ProductItem("Svärmorstunga", 129, "img/Svarmors_tunga.png", "Lättskött liten barrväxt som sprider hemtrevlig stämning.", 17, 1, 129);
let product18 = new ProductItem("Vågbladskalatera", 79, "img/Vagbladskalatea.png", "Tät växt med fina blad som har vågiga kanter och rödlila undersida.", 18, 1, 79);
let product19 = new ProductItem("Zamiakalla Raven", 279, "img/Zamiakalla.png", "En av de mest tåliga och lättskötta krukväxterna!", 19, 1, 279);
let product20 = new ProductItem("Zebrasköld", 299, "img/Zebraskold.png", "Mörkt gröna blad med purpurfärgad undersida. Trivs på ljusa platser.", 20, 1, 299);

let products = [];
products.push(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20);

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Runs the following when HTML document is loaded:
$(document).ready(function () {

    printProducts();

    showBadge();

    createCart();

    changeFooterIcon();
});

// Products catalog
function printProducts() {

    $.each(products, function (i, product) {

        // Generate content based on the products
        let cardDiv = $("<div>")
            .addClass("product-card mx-0 mt-2 mt-md-3 px-1 px-md-2 col-6 col-md-4 col-lg-3")
            .attr("id", "carddiv");

        let productCard = $("<div>")
            .addClass("card h-100 d-flex flex-column")
            .appendTo(cardDiv);

        let cardTitle = $("<h5>")
            .addClass("card-title text-center py-2 px-1 m-0 py-md-3")
            .html(product.title)
            .appendTo(productCard);

        let imgDiv = $("<div>")
            .addClass("card-body p-2 pb-md-3")
            .attr("id", "imgdiv")
            .appendTo(productCard);

        let productImg = $("<img>")
            .attr("src", product.img)
            .attr("alt", product.description)
            .addClass("img-fluid")
            .appendTo(imgDiv);

        let cardFooter = $("<div>")
            .addClass("card-footer px-2 py-2 px-sm-3 pt-sm-2 pb-sm-1 d-flex justify-content-between")
            .attr("id", "cardfooter")
            .appendTo(productCard);

        let productPrice = $("<span>")
            .attr("id", "productprice")
            .html(product.pricePerUnit + "<span class='currency-smaller-text'>SEK</span>")
            .appendTo(cardFooter);

        let productDescr = $("<p>")
            .addClass("p-2 mb-0 productDescr")
            .attr("id", "descrdiv" + i)
            .attr("style", "display: none")
            .html(product.description)
            .appendTo(productCard);

        let dialogButton = $("<button>")
            .attr("type", "button")
            .attr("id", "descriptionbutton")
            .addClass("btn btn-sm px-1 py-0 px-sm-2 py-sm-1")
            .html("Läs mer")
            .appendTo(cardFooter)
            // when clicked productDescr will be visible    
            .click(function () {
                $("#descrdiv" + i).toggle("slow");
            });

        let addToCartButton = $("<button>")
            .attr("type", "button")
            .addClass("btn btn-sm rounded-0 mt-1 py-sm-2")
            .attr("id", "addtocart")
            .html("Lägg i kundvagn")
            .on("click", { added: product }, addToCart)
            .appendTo(productCard);

        $("#productrow").append(cardDiv);

    });
};

// Badge
function showBadge() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    // get sum of quantity products in cart
    let prodTotal = cart.reduce(function (prev, cur) {
        return prev + cur.quantity;
    }, 0);

    if (cart.length === 0) {
        $(".badge").collapse();
    }
    else {
        $(".badge").html(prodTotal).addClass("show");
    }
};

// Cart
function createCart() {

    console.log("createCart() starts");

    // update the actual value of cart from LS cart if there is something
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    // reset cart
    $('#cart').popover('dispose');

    // create cart header/title
    let cartTitleContainer = $("<div>")
        .attr("id", "myCartTitle")
        .on("click", function () {
            $("#cart").popover('hide');
        });

    let cartTitleSpan = $("<span>")
        .html("VARUKORG");

    let cartCloseButton = $("<button>")
        .attr("type", "button")
        .attr("id", "cartclosebutton")
        .addClass("close")
        .attr("aria-label", "Close");

    let cartCloseButtonSpan = $("<span>")
        .attr("aria-hidden", "true")
        .addClass("align-top")
        .html("&times;");

    cartCloseButtonSpan.appendTo(cartCloseButton);

    cartTitleSpan.appendTo(cartTitleContainer);
    cartCloseButton.appendTo(cartTitleContainer);

    // check whether the cart coming from LS is empty or not
    if (cart.length === 0) {

        // create empty cart with a message
        $('#cart').popover({
            placement: 'left',
            template: '<div class="popover" role="tooltip"><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            container: 'body',
            boundary: 'viewport',
            html: true,
            title: cartTitleContainer,
            content: "Din varukorg är tom."
        });
    }
    else {

        // create cart body      
        let cartMainContainer = $("<div>")
            .attr("id", "cartMainContainer");

        let cartItemContainer = $("<div>")
            .addClass("container py-1 px-0 ")
            .attr("id", "cartItemContainer");

        // cart body > cart items list
        $.each(cart, function (index, value) {
            let cartItem = $("<div>")
                .addClass("row no-gutters mx-0 px-0 my-1 py-1 py-sm-3 px-sm-3 border-bottom")
                .attr("id", "cartItem");

            let cartItemImgContainer = $("<div>")
                .addClass("col-5")
                .attr("id", "cartItemImgContainer");

            // cart Item Data
            let cartItemData = $("<div>")
                .addClass("row no-gutters pl-md-2")
                .attr("id", "cartItemData");

            let cartItemQuantityContainer = $("<div>")
                .addClass("col-12 pt-1 d-flex flex-nowrap align-items-center justify-content-start")
                .attr("id", "cartItemQuantityContainer");

            let cartItemTitleAndPrice = $("<div>")
                .addClass("col-12 pt-1 pb-2")
                .html(value.title + "<br />" + value.pricePerUnit * value.quantity + " SEK");

            let cartItemDecrease = $("<button>")
                .addClass("btn btn-sm mr-1")
                .attr("type", "button")
                .attr("id", "button-circle")
                .text("-")
                .on("click", { added: this }, function (event) {

                    console.log("You want to decrease", event.data.added, event.data.added.quantity);

                    // console.log(cart);
                    if (event.data.added.quantity > 1) {

                        $.each(cart, function (index, product) {
                            if (product.id === event.data.added.id) {
                                product.quantity--;
                                product.price = product.pricePerUnit * product.quantity;
                            }
                        });

                        localStorage.setItem("cart", JSON.stringify(cart));
                        createCart();
                        showBadge();
                        $("#cart").popover('show');

                    } else {
                        console.log("you cant decrease from one!");
                    }
                });

            let cartItemQuantity = $("<span>")
                .addClass("px-0 mx-1")
                .html(value.quantity);

            let cartItemIncrease = $("<button>")
                .addClass("btn btn-sm ml-1")
                .attr("type", "button")
                .attr("id", "button-circle")
                .text("+")
                .on("click", { added: this }, function (event) {
                    console.log("You want to increase", event.data.added, event.data.added.quantity);

                    // console.log(cart);
                    $.each(cart, function (index, product) {
                        if (product.id === event.data.added.id) {
                            product.quantity++;
                            product.price = product.pricePerUnit * product.quantity;
                        }
                    });

                    localStorage.setItem("cart", JSON.stringify(cart));
                    createCart();
                    $("#cart").popover('show');

                });

            // Trash in cart, with function to trash and save the result in LS.
            let cartItemTrash = $("<button>")
                .html("<i class='fas fa-trash-alt'></i>")
                .addClass("btn ml-4 mr-4")
                .attr("type", "button")
                .attr("id", "cartProdDelButton")
                .on("click", function () {
                    cart.splice(index, 1);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    $(this).parents("#cartItem").remove();

                    createCart();
                    showBadge();
                    $("#cart").popover('show');
                });

            cartItemQuantityContainer.append(cartItemDecrease);
            cartItemQuantityContainer.append(cartItemQuantity);
            cartItemQuantityContainer.append(cartItemIncrease);
            cartItemQuantityContainer.append(cartItemTrash);

            cartItemData.append(cartItemTitleAndPrice);
            cartItemData.append(cartItemQuantityContainer);

            let cartItemDataContainer = $("<div>")
                .addClass("col-7")
                .attr("id", "cartItemDataContainer")
                .append(cartItemData);

            let cartItemImg = $("<img>")
                .attr("src", value.img)
                .addClass("img-fluid")
                .attr("id", "cartItemImg")
                .attr("alt", value.description);

            cartItemImgContainer.append(cartItemImg);
            cartItem.append(cartItemImgContainer);
            cartItem.append(cartItemDataContainer);

            cartItemContainer.append(cartItem);
            cartMainContainer.append(cartItemContainer);
        });

        // cart body > cart "Total price" display
        let cartTotalPriceContainer = $("<div>")
            .addClass("container p-0")
            .attr("id", "cartTotalPriceContainer");

        let cartTotalPriceRow = $("<div>")
            .addClass("row no-gutters m-0 p-0 border-bottom")
            .attr("id", "cartTotalPriceRow");

        let cartTotalPriceCol = $("<div>")
            .addClass("col-12 d-flex justify-content-center")
            .attr("id", "cartTotalPriceCol");

        let totalPrice = 0;

        $.each(cart, function (index, product) {

            console.log(product.price);
            totalPrice = totalPrice + product.price;

        });

        let cartTotalPriceData = $("<p>")
            .attr("id", "cartTotalPriceData")
            .addClass("h5 text-dark")
            .append(totalPrice + " SEK");

        cartTotalPriceData.appendTo(cartTotalPriceCol);
        cartTotalPriceCol.appendTo(cartTotalPriceRow);
        cartTotalPriceRow.appendTo(cartTotalPriceContainer);

        cartTotalPriceContainer.appendTo(cartMainContainer);

        // cart body > cart "Place order" button
        let cartToCheckoutButtonContainer = $("<div>")
            .addClass("container py-1 px-0")
            .attr("id", "cartToCheckoutButtonContainer");

        let cartToCheckoutButtonRow = $("<div>")
            .addClass("row no-gutters m-0 p-0 py-1")
            .attr("id", "cartToCheckoutButtonRow");

        let cartToCheckoutButtonCol = $("<div>")
            .addClass("col-12 d-flex justify-content-center")
            .attr("id", "cartToCheckoutButtonCol");

        let toCheckoutButton = $("<button>")
            .attr("type", "button")
            .attr("id", "toCheckoutButton")
            .addClass("btn")
            .on("click", function () { location.href = "html/checkout.html" })
            .html("TILL KASSAN");

        toCheckoutButton.appendTo(cartToCheckoutButtonCol);
        cartToCheckoutButtonCol.appendTo(cartToCheckoutButtonRow);
        cartToCheckoutButtonRow.appendTo(cartToCheckoutButtonContainer);
        cartToCheckoutButtonContainer.appendTo(cartMainContainer);

        // enable cart Popover
        $('#cart')
            .popover({
                placement: 'left',
                template: '<div class="popover" role="tooltip"><h3 class="popover-header"></h3><div class="popover-body p-0"></div></div>',
                html: true,
                container: 'body',
                boundary: 'viewport',
                title: cartTitleContainer,
                content: cartMainContainer
            });
    }
    showBadge();
    console.log("createCart() ends");
};

// When adding to cart
function addToCart(event) {
    console.log(event);

    if (cart.length == 0) {
        // if there is nothing in the cart        
        console.log("there was nothing in the cart, lets add this product: ", event.data.added.title);

        cart.push(event.data.added);

        localStorage.setItem("cart", JSON.stringify(cart));

    } else {

        let foundProduct = false;

        $.each(cart, function (index, product) {

            if (product.id === event.data.added.id) {
                console.log("something similar!", product.title, product.quantity);
                product.quantity++;
                product.price = product.pricePerUnit * product.quantity;
                foundProduct = true;
            }
        });

        // add of a loop over the order array to add total price?
        if (!foundProduct) {
            console.log("new product! we simply add it");
            cart.push(event.data.added);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    }

    createCart();
    showBadge();
};

function changeFooterIcon() {
    // Footer Start \\

    // Change Facebook Icon color when hover over img. 
    $('#imgfb').hover(
        function () {
            $(this).attr('src', 'img/002-facebook_color.png')
        },
        function () {
            $(this).attr('src', 'img/002-facebook_grey.png')
        });

    // Change Instagram Icon color when hover over img. 
    $('#imgig').hover(
        function () {
            $(this).attr('src', 'img/003-instagram_color.png')
        },
        function () {
            $(this).attr('src', 'img/003-instagram_grey.png')
        });

    // Change Twitter Icon color when hover over img. 
    $('#imgtwi').hover(
        function () {
            $(this).attr('src', 'img/005-twitter_color.png')
        },
        function () {
            $(this).attr('src', 'img/005-twitter_grey.png')
        });
    // Footer End \\
};