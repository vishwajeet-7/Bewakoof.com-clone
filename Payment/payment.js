document.getElementById("debit").addEventListener("click", debit)
function debit() {
    document.getElementById("display")
    document.getElementById("debit").style.backgroundColor = "white";
    document.getElementById("debit").style.borderLeft="5px solid #42a2a2";
    document.getElementById("debit").style.backgroundColor = "rgb(245,245,245)";
    let div1 = document.createElement("div")
    let tag = document.createElement("h1")
    tag.textContent="chchc"
    let image = document.createElement("img")
    image.setAttribute("scr", "https://images.bewakoof.com/web/ic-rupay-payment-v1.jpg")
    div1.append(image,tag)
    document.getElementById("display").append(div1);
}