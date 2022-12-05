document.getElementById("debit").addEventListener("click", debit)
document.getElementById("wallet").addEventListener("click", wallet)
document.getElementById("upi").addEventListener("click", upi)
document.getElementById("netbanking").addEventListener("click", netbanking)
document.getElementById("cash").addEventListener("click", cashondel)
let x = localStorage.getItem("totalAmount")
document.getElementById("total").textContent=x
function cashondel() {
    document.getElementById("display").innerHTML = null
     document.getElementById("cash").style.backgroundColor = "white";
    document.getElementById("cash").style.borderLeft="5px solid #42a2a2";
    document.getElementById("cash").style.backgroundColor = "rgb(245,245,245)";
    let tag = document.createElement("h3")
    tag.textContent = "Cash Collection Charges: Costs ₹ 35 Extra"
     let paybtn = document.createElement("button")
    paybtn.textContent = "Pay";
    paybtn.style.marginLeft = "80px";
    paybtn.style.width = "320px";
    paybtn.style.height = "50px";
    paybtn.style.border = "none";
    paybtn.style.borderRadius = "5px";
    paybtn.style.color = "white";
    paybtn.style.backgroundColor = "rgb(66,162,162)";
    let div = document.createElement("div")
    tag.style.marginLeft="50px"
    div.append(tag, paybtn)
    document.getElementById("display").append(div); 
    paybtn.addEventListener("click", payment)
    function payment() {
        alert("Payment Successfully")
         document.getElementById("display").innerHTML = null
    }
}
function netbanking() {
     document.getElementById("display").innerHTML = null
    document.getElementById("netbanking").style.backgroundColor = "white";
    document.getElementById("netbanking").style.borderLeft="5px solid #42a2a2";
    document.getElementById("netbanking").style.backgroundColor = "rgb(245,245,245)";
    let div3=document.createElement("div")
    let pimg = document.createElement("img")
    pimg.setAttribute("src", "https://images.bewakoof.com/web/icici-1556185960.png")
    let name = document.createElement("h4")
    pimg.style.width="50px"
    name.textContent="ICICI"
    div3.append(pimg, name);
    
    let div4=document.createElement("div")
    let pnimg = document.createElement("img")
    pnimg.setAttribute("src", "https://images.bewakoof.com/web/axis-1556185962.png")
    pnimg.style.width="50px"
    let name2 = document.createElement("h4")
    name2.textContent="Axis"
    div4.append(pnimg, name2);
    
    let div5=document.createElement("div")
    let mimg = document.createElement("img")
    mimg.setAttribute("src", "https://images.bewakoof.com/web/sbi-1556185961.png")
    let name3 = document.createElement("h4")
    mimg.style.width="50px"
    name3.textContent="SBI"
    div5.append(mimg, name3);
    div3.style.display="flex"
   
    let div6=document.createElement("div")
    let fimg = document.createElement("img")
    fimg.setAttribute("src", "https://images.bewakoof.com/web/hdfc-1556185961.png")
    let name4 = document.createElement("h4")
    fimg.style.width="50px"
    name4.textContent = "HDFC"
    name.style.marginLeft="40px"
    name2.style.marginLeft="40px"
    name3.style.marginLeft="40px"
    name4.style.marginLeft = "40px"
    fimg.style.height="50px"
    pimg.style.height="50px"
    pnimg.style.height="50px"
    mimg.style.height="50px"
    div6.append(fimg, name4);
    let div = document.createElement("div")
     div4.style.display="flex"
    div5.style.display="flex"
    div6.style.display = "flex"
    div4.style.marginLeft="50px"
    div3.style.marginLeft="50px"
    div5.style.marginLeft="50px"
    div6.style.marginLeft="50px"
    div5.style.marginBottom="30px"
    div6.style.marginBottom="30px"
    div4.style.marginBottom="30px"
    div3.style.marginBottom = "30px"
    div3.addEventListener("click", paydiv3)
    div4.addEventListener("click", paydiv4)
    div5.addEventListener("click", paydiv5)
    div6.addEventListener("click", paydiv6)
     let paybtn = document.createElement("button")
    paybtn.textContent = "Pay";
    paybtn.style.marginLeft = "80px";
    paybtn.style.width = "320px";
    paybtn.style.height = "50px";
    paybtn.style.border = "none";
    paybtn.style.borderRadius = "5px";
    paybtn.style.color = "white";
    paybtn.style.backgroundColor = "rgb(66,162,162)";
    paybtn.addEventListener("click", payment)
    function payment() {
        alert("Payment Successfully")
         document.getElementById("display").innerHTML = null
    }
    function paydiv4() {
       
        div.append(paybtn)
    }
     function paydiv5() {
       
        div.append(paybtn)
    }
     function paydiv6() {
       
        div.append(paybtn)
    }
    function paydiv3() {
       
        div.append(paybtn)
    }
    div.append(div3,div4,div5,div6)
   document.getElementById("display").append(div); 
}
function upi() {
    document.getElementById("display").innerHTML = null
    document.getElementById("upi").style.backgroundColor = "white";
    document.getElementById("upi").style.borderLeft="5px solid #42a2a2";
    document.getElementById("upi").style.backgroundColor = "rgb(245,245,245)";
    let divx = document.createElement("div")
     let limg1 = document.createElement("img")
    limg1.setAttribute("src", "https://images.bewakoof.com/web/ic-gpay-payment-gray-v1.jpg")
     let limg2 = document.createElement("img")
    limg2.setAttribute("src", "https://images.bewakoof.com/web/ic-bhim-upi-gray-payment-v1.jpg")
     let limg3 = document.createElement("img")
    limg3.setAttribute("src", "https://images.bewakoof.com/web/ic-phone-pe-gray-payment-v1.jpg")
     let limg4 = document.createElement("img")
    limg4.setAttribute("src", "https://images.bewakoof.com/web/ic-more-option-payment-v1.jpg")
    limg4.style.width="80px"
    limg4.style.marginBottom="10px"
    limg4.style.marginLeft="13px"
    limg3.style.marginLeft="13px"
    limg2.style.marginLeft="10px"
    limg1.style.marginLeft="10px"
    limg3.style.width="80px"
    limg2.style.width="80px"
    limg1.style.width = "80px"
    let inp = document.createElement("input")
    let div = document.createElement("div")
    let btn = document.createElement("button")
    inp.style.height="50px"
    inp.style.marginTop="90px"
    inp.style.width="500px"
    inp.style.borderLeft="none"
    inp.style.borderTop="none"
    inp.style.borderRight = "none"
    inp.style.marginLeft = "30px"
    btn.style.height="50px"
    btn.style.width = "300px"
    btn.style.border = "none"
    btn.style.borderRadius = "5px"
    inp.style.outline = "none"
    btn.style.backgroundColor = "rgb(148,148,148)"
    btn.textContent="Verify"
    btn.style.marginTop="50px"
    btn.style.marginLeft = "150px"
    btn.addEventListener("click", btnfun)
    function btnfun() {
        if (inp.value === "1234@ybl") {
            alert("Verifyed")
            document.getElementById("display").innerHTML = null
            let btn2 = document.createElement("button")
            btn2.style.background="rgb(66,162,162)"
            btn2.textContent="Pay"
            btn2.style.color = "white";
            btn2.style.height = "50px";
            btn2.style.width = "300px";
            btn2.style.border = "none";
            btn2.style.borderRadius = "5px";
            btn2.textContent = "Pay";
            btn2.style.marginTop = "50px";
            btn2.style.marginLeft = "150px";
            btn2.addEventListener("click", btn2fun)
            function btn2fun() {
                alert("Payment Successfully")
                 document.getElementById("display").innerHTML = null
            }
            document.getElementById("display").append(btn2); 
        }
        else {
            alert("Wrong UPI Id")
        }
    }
    divx.append(limg1, limg2, limg3, limg4)
    div.append(divx, inp, btn)
    div.style.display="grid"
    document.getElementById("display").append(div); 
}
function wallet() {
    document.getElementById("display").innerHTML = null
    document.getElementById("wallet").style.backgroundColor = "white";
    document.getElementById("wallet").style.borderLeft="5px solid #42a2a2";
    document.getElementById("wallet").style.backgroundColor = "rgb(245,245,245)";
    let div3=document.createElement("div")
    let pimg = document.createElement("img")
    pimg.setAttribute("src", "https://images.bewakoof.com/web/paytm-round-v1.png")
    let name = document.createElement("h4")
    pimg.style.width="50px"
    name.textContent="Paytm wallet"
    div3.append(pimg, name);
    
    let div4=document.createElement("div")
    let pnimg = document.createElement("img")
    pnimg.setAttribute("src", "https://images.bewakoof.com/web/ic-phonepe-3x-payment-v1.png")
    pnimg.style.width="50px"
    let name2 = document.createElement("h4")
    name2.textContent="PhonePe"
    div4.append(pnimg, name2);
    
    let div5=document.createElement("div")
    let mimg = document.createElement("img")
    mimg.setAttribute("src", "https://images.bewakoof.com/web/ic-mobikwik-3x-payment-v1.png")
    let name3 = document.createElement("h4")
    mimg.style.width="50px"
    name3.textContent="Mobikwik"
    div5.append(mimg, name3);
    div3.style.display="flex"
   
    let div6=document.createElement("div")
    let fimg = document.createElement("img")
    fimg.setAttribute("src", "https://images.bewakoof.com/web/ic-freecharge-3x-payment-v1.png")
    let name4 = document.createElement("h4")
    fimg.style.width="50px"
    name4.textContent = "Freecharge"
    name.style.marginLeft="40px"
    name2.style.marginLeft="40px"
    name3.style.marginLeft="40px"
    name4.style.marginLeft = "40px"
    fimg.style.height="50px"
    pimg.style.height="50px"
    pnimg.style.height="50px"
    mimg.style.height="50px"
    div6.append(fimg, name4);
    let div = document.createElement("div")
     div4.style.display="flex"
    div5.style.display="flex"
    div6.style.display = "flex"
    div4.style.marginLeft="50px"
    div3.style.marginLeft="50px"
    div5.style.marginLeft="50px"
    div6.style.marginLeft="50px"
    div5.style.marginBottom="30px"
    div6.style.marginBottom="30px"
    div4.style.marginBottom="30px"
    div3.style.marginBottom = "30px"
    div3.addEventListener("click", paydiv3)
    div4.addEventListener("click", paydiv4)
    div5.addEventListener("click", paydiv5)
    div6.addEventListener("click", paydiv6)
     let paybtn = document.createElement("button")
    paybtn.textContent = "Pay";
    paybtn.style.marginLeft = "80px";
    paybtn.style.width = "320px";
    paybtn.style.height = "50px";
    paybtn.style.border = "none";
    paybtn.style.borderRadius = "5px";
    paybtn.style.color = "white";
    paybtn.style.backgroundColor = "rgb(66,162,162)";
    paybtn.addEventListener("click", payment)
    function payment() {
        alert("Payment Successfully")
         document.getElementById("display").innerHTML = null
    }
    function paydiv4() {
       
        div.append(paybtn)
    }
     function paydiv5() {
       
        div.append(paybtn)
    }
     function paydiv6() {
       
        div.append(paybtn)
    }
    function paydiv3() {
       
        div.append(paybtn)
    }
    div.append(div3,div4,div5,div6)
   document.getElementById("display").append(div); 
}
function debit() {
    document.getElementById("display").innerHTML=null
    document.getElementById("debit").style.backgroundColor = "white";
    document.getElementById("debit").style.borderLeft="5px solid #42a2a2";
    document.getElementById("debit").style.backgroundColor = "rgb(245,245,245)";
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    let inp2 = document.createElement("input")
    inp2.type="date"
    let inp1 = document.createElement("input")
    let inp3 = document.createElement("input")
    let inp4 = document.createElement("input")
    let im1 = document.createElement("img")
    im1.setAttribute("Scr", "https://images.bewakoof.com/web/ic-visa-gray-payment-v1.jpg")
    let divx = document.createElement("div")
    divx.append(im1)
    let btn = document.createElement("button");
    btn.style.height = "50px"
    btn.textContent = "Pay"
    btn.style.border="none"
    btn.style.backgroundColor="rgb(148,148,148)"
    div2.append(divx,inp1, inp2, inp3, inp4,btn)
    div2.style.display="grid"
    inp1.setAttribute("placeholder","Card Number")
    inp2.setAttribute("placeholder","Valid through(MM/YY)")
    inp3.setAttribute("placeholder","CVV")
    inp4.setAttribute("placeholder","Name On Card")
    

    div1.append(div2)
    div2.style.marginLeft="50px"
    inp1.style.width="500px"
    inp1.style.height="10px"
    inp1.style.marginBottom="50px"
    inp1.style.marginTop="10px"
    inp2.style.width="500px"
    inp2.style.height="10px"
    inp2.style.marginBottom="50px"
    inp2.style.marginTop="10px"
    inp3.style.width="500px"
    inp3.style.height="10px"
    inp3.style.marginBottom="50px"
    inp3.style.marginTop="10px"
    inp4.style.width="500px"
    inp4.style.height="10px"
    inp4.style.marginBottom="50px"
    inp4.style.marginTop = "10px";
    inp1.style.borderTop="none"
    inp1.style.borderLeft="none"
    inp1.style.borderRight="none"
    inp2.style.borderTop="none"
    inp2.style.borderLeft="none"
    inp2.style.borderRight="none"
    inp3.style.borderTop="none"
    inp3.style.borderLeft="none"
    inp3.style.borderRight="none"
    inp4.style.borderTop = "none"
    inp1.style.outline="none"
    inp2.style.outline="none"
    inp3.style.outline="none"
    inp4.style.outline="none"
    inp4.style.borderLeft="none"
    inp4.style.borderRight="none"
    document.getElementById("display").append(div1);
    btn.addEventListener("click", checkit)
    function checkit() {
    console.log(inp2.value)
    if (inp1.value == "1234" && inp2.value === "2022-12-30" && inp3.value == "122") {
        alert("Payment Successfully")
         document.getElementById("display").innerHTML = null
    }
    else {
        alert("Wrong credential")
    }
}
}


