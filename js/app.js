const close1 = document.getElementById("close1")
const close2 = document.getElementById("close2")
const close3 = document.getElementById("close3")
const close4 = document.getElementById("close4")

const item1 =document.getElementById("cart-item1")
const item2 =document.getElementById("cart-item2")
const item3 =document.getElementById("cart-item3")
const item4 =document.getElementById("cart-item4")

close1.addEventListener("click",()=>{
    item1.remove()
})
close2.addEventListener("click",()=>{
    item2.remove()
})
close3.addEventListener("click",()=>{
    item3.remove()
})
close4.addEventListener("click",()=>{
    item4.remove()
})











let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = ()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active')
}

let cartItem = document.querySelector(".cart-items-container"); 
document.querySelector("#cart-btn").onclick = ()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector(".search-form"); 
document.querySelector("#serach-btn").onclick = ()=>{
    searchForm     .classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active')
}

window.onscroll =()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active')
}