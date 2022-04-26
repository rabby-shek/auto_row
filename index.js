

function generate() {
    var SHOW = Number(document.getElementById("value").value);
    var takeValue = document.getElementById("show");




    //product generation section 
    for (var i = 0; i < SHOW; i++) {
        var product = document.createElement("div");
        product.innerHTML = "<div>" + "Product" + "</div>"
            + "<select id='price' onchange='changeValue();'>"
            +
            "<option  value='5000'>" + "realme" + "</option>"
            +
            "<option  value='17000'>" + "oppo" + "</option>"
            +
            "<option  value='10000'>" + "infinix" + "</option>"
            +
            "<option  value='20000'>" + "samsung" + "</option>";
        +"</select>";
        document.getElementById("show").appendChild(product);

    }



    //quntity field generation section
    for (var i = 0; i < SHOW; i++) {
        var quantity = document.createElement("div");
        quantity.innerHTML = "<div>" + "Quantity" + "</div>"
            + "<input type= 'number'>"
        document.getElementById("quantity").appendChild(quantity);

    }






    //rate generation field


    
    let RATE = document.getElementById('price').value;
        for (var i = 0; i < SHOW; i++) {
            const rate = document.createElement("div");
            rate.innerHTML = "<div>" + "Rate" + "</div>"
                + "<div>" + RATE + "<div>";
            document.getElementById("rate").appendChild(rate);

        }
       





    








    //total calculation section

    var quantity = Number(document.getElementById("quantity").value);
    for (var i = 0; i < SHOW; i++) {
        const total = document.createElement("div");

        total.innerHTML = "<div>" + "Total" + "</div>"
            + "<div>" + RATE + "<div>";
        document.getElementById("total").appendChild(total);

    }







}
function changeValue(){
    let RATE = parseInt(document.getElementById('price').value);
   console.log(typeof (RATE));
   console.log(RATE);
   


   

}