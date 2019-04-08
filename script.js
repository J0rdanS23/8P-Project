var photo = [];
var itemName = [];
var itemPrice = [];
var total = 0;

$("#add").click(function() {
    var url = $("#url").val();
    var name = $("#name").val();
    var price = $("#price").val();
    if (url === "" || name === "" || price === "") {
        alert("Please fill out all the input fields.");
    } else {
        itemName.push(name);
        itemPrice.push(price);
        photo.push(url);
        $("#cart").text(itemName.length);
        $("#pimage").append("<div class='pimage'><img src='" + url + "'> <div>");
        $("#pname").append("<div class='pname'><p>" + name + "</p><div>");
        $("#product").append("<div class='product'><p>$" + price + "</p><div>");
        $("#cart").append("<div class='cart'><div>");
        price = parseInt(price);
        total = total + price;
        console.log(total);
        $("#total").text(total);
        $("input").val("");
    }
});

$("#buy").click(function() {
alert("You bought $"+total+" worth of items! Make sure to blow your money away to your lord and savior GABEN!");    
});