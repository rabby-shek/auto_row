function generate(){
    var SHOW = Number(document.getElementById("value").value);
    var takeValue = document.getElementById("show");


    //product generation section 
    for(var i = 0 ; i < SHOW;i++){
        const product = document.createElement("div");
        product.innerHTML = "<div>" + "Product" + "</div>"  
        +"<select id='price'>"
        +
        "<option  value='5000'>" + "realme" + "</option>"
        +
        "<option  value='17000'>" + "oppo" + "</option>"
        +
        "<option  value='10000'>" + "infinix" + "</option>"
        +
        "<option  value='20000'>" + "samsung" + "</option>";
        document.getElementById("show").appendChild(product);
         
        }


        //quntity field generation section
        for(var i = 0 ; i < SHOW;i++){
            var quantity = document.createElement("div");
            quantity.innerHTML = "<div>" + "Quantity" + "</div>"
            + "<input type= 'number'>"  
            document.getElementById("quantity").appendChild(quantity);
             
            }


            var RATE = document.getElementById('price').value;
            //rate generation field
            for(var i = 0 ; i < SHOW;i++){
                const rate = document.createElement("div");
                rate.innerHTML = "<div>" + "Rate" + "</div>"
                + "<div>" + RATE  + "<div>"; 
                document.getElementById("rate").appendChild(rate);
                 
                }

                var quantity = document.getElementById("quantity").value;
                var RATE = document.getElementById('price').value;
                for(var i = 0 ; i < SHOW;i++){
                    const total = document.createElement("div");
                    
                    total.innerHTML = "<div>" + "Total" + "</div>"
                    + "<div>" + quantity  + "<div>"; 
                    document.getElementById("total").appendChild(total);
                     
                    }


}
