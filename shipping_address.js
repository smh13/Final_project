let basket_arr = JSON.parse(localStorage.getItem("basket_items"))||[];
let shipping_details = JSON.parse(localStorage.getItem("shipping_data"))||[];

console.log(shipping_details)
displaybasket(basket_arr)

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
    localStorage.setItem("shipping_data",JSON.stringify(obj))
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