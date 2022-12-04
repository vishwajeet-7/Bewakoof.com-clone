    let wishlistarray=JSON.parse(localStorage.getItem("wishlist")) || []
    display(wishlistarray);
function display(arr) {
            document.getElementById("product").innerHTML=null
            arr.map(function (elem, index) {
                let div = document.createElement("div")
                let image = document.createElement("img")
                image.setAttribute("Src", elem.img_url)
                image.setAttribute("alt", elem.name)
                let div2 = document.createElement("div")
                let bk = document.createElement("h5")
                
                let name = document.createElement("p")
                name.textContent = elem.name
                let pricebox = document.createElement("div")
                let price = document.createElement("h5")
                price.textContent = "₹" + elem.price
                let mrp = document.createElement("h6")
                mrp.textContent = elem.strikedoffprice
                pricebox.append(price, mrp)
                let btn=document.createElement("button")
                btn.textContent="MOVE TO BAG"
                div.append(image, div2, name, pricebox,btn)
                document.getElementById("product").append(div)
                btn.addEventListener("click", addtocart)
                function addtocart() {
                    let arr = JSON.parse(localStorage.getItem("Bagarray")) || []
                    arr.push(elem);
                    localStorage.setItem("Bagarray", JSON.stringify(arr));
                    let remove = wishlistarray.splice(index, 1)
                    localStorage.setItem("wishlist", JSON.stringify(wishlistarray));
                    display(wishlistarray)
                }
            })
        }
$(function(){
 $("#top").load("/Navbar/Navbar.html"); 
});