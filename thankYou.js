let cart_arr = JSON.parse(localStorage.getItem("cart_items"))||[];
let shipping_details = JSON.parse(localStorage.getItem("shipping_data"))||[];

// Populating the total values.
var total = 0;
cart_arr.map(function(elem){
    total+=Number(elem['Price'].split("$")[1])
})
document.querySelector("#sub_total").textContent = "$"+total;
document.querySelector("#total").textContent = "$"+Number(total+4.5+5.25);
document.querySelector("#shipping_type").textContent = shipping_details['shipping_method']


// Calling the functions to display cart and shipping details.
displayCart(cart_arr)
displayShipping(shipping_details)


function displayCart(arr)
{   
    let show_cart = document.querySelector(".show_cart")
    arr.map(function(elem){
        let div = document.createElement("div");
        let img = document.createElement("img");
        let text_div = document.createElement("div");
        let p1 = document.createElement("p")
        p1.textContent = elem['Name']
        let p2 = document.createElement("p")
        p2.textContent = elem['Type']
        let p3 = document.createElement("p")
        p3.textContent = elem['Price']
        text_div.append(p1,p2,p3)
        img.setAttribute("src",elem['img'])

        text_div.setAttribute("id","text_div")
        div.append(img,text_div)
        show_cart.append(div)
    })
}


function displayShipping(elem)
{   
    shipping_arr = document.querySelector(".shipping_details")
    var name = document.createElement("p");
    name.textContent = "Name: "+elem['first_name']+" "+elem['last_name']
    var address = document.createElement("p");
    address.textContent = "Address: "+elem['Address1']+" "+elem['Address2']+" "+elem['state']+"/"+elem['country']
    var shipping_method = document.createElement("p")
    shipping_method.textContent = "Order will be delievered by "+elem['shipping_method']+" services"

    shipping_arr.append(name,address,shipping_method)
}
