let basket_arr = JSON.parse(localStorage.getItem("basket_items"))||[];
let shipping_details = JSON.parse(localStorage.getItem("shipping_data"))||[];

// Populating the total values.
var total = 0;
basket_arr.map(function(elem){
    total+=Number(elem['Price'].split("$")[1])
})
document.querySelector("#sub_total").textContent = "$"+total;
document.querySelector("#total").textContent = "$"+Number(total+4.5+5.25);
document.querySelector("#shipping_type").textContent = shipping_details['shipping_method']

// Calling the functions to display basket and shipping details.
displaybasket(basket_arr)
displayShipping(shipping_details)
document.querySelector("#myForm").addEventListener("submit",billing)

function billing(event)
{
    event.preventDefault()
    let form = document.querySelector("#myForm");
    let obj = {
        "first_name":form.first_name.value,
        "last_name":form.last_name.value,
        "Address1":form.addr1.value,
        "Address2":form.addr2.value,
        "country":form.country.value,
        "state":form.state.value,
        "zip_code":form.zip_code.value,
        "phone":form.phone.value,
        "shipping_method":document.querySelector('input[name="shipping_method"]:checked').value
    }
    shipping_details.push(obj)
    localStorage.setItem("shipping_details",JSON.stringify(shipping_details))
    window.location.href = "payment.html"
}
function displaybasket(arr)
{   
    let show_basket = document.querySelector(".show_basket")
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
        show_basket.append(div)
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


document.querySelector("#myForm").addEventListener("submit",payFunction);

function payFunction(event)
{   
    let form = document.querySelector("#myForm");
    event.preventDefault()
    var obj = {
        "card_number":form.number.value,
        "cvv":form.cvv.value,
        "exp_date":form.exp_date.value,
        "name":form.name.value
    }
    if(document.querySelector("#OTP").value == "6969")
    {
        localStorage.setItem("card_details",JSON.stringify(obj))
        window.location.href="thankYou.html";
    }
    else{
        window.alert("Wrong OTP entered!")
    }
}