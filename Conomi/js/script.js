let arr = ["Beans", "Carrots", "Apples", "Garlic", "Mushrooms", "Tomatoes", "Chilli peppers", "Broccoli", "Watermelons", "Lemons", "Grapes"]
let row = document.getElementById("row")
let card = document.getElementById("card")
let card10 = document.getElementById("card10")
let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let card4 = document.getElementById("card4")
let card5 = document.getElementById("card5")
let card6 = document.getElementById("card6")
let card7 = document.getElementById("card7")
let card8 = document.getElementById("card8")
let card9 = document.getElementById("card9")
let shop = document.getElementById("shop")
let open = document.getElementById("open")
let open2 = document.getElementById("open2")
let open3 = document.getElementById("open3")
let open4 = document.getElementById("open4")
let open5 = document.getElementById("open5")
let open6 = document.getElementById("open6")
let open7 = document.getElementById("open7")
let open8 = document.getElementById("open8")
let open9 = document.getElementById("open9")
let open10 = document.getElementById("open10")

let sop = 0;
arr.forEach(elem => {
    row.innerHTML += ` <i class="product__item-card">${elem}</i>`
});
function count(id) {
    if (id == 1 ) { 
        card.style.display ="none"
        open.style.display = "block"
        conter(true)
    } else if ( id == 2) {
        card2.style.display ="none"
        open2.style.display = "block"
        conter(true)
    }
    else if ( id== 3) {
        card3.style.display ="none"
        open3.style.display = "block"
        conter(true)
    }else if ( id== 4) {
        card4.style.display ="none"
        open4.style.display = "block"
        conter(true)
    }else if ( id== 5) {
        card5.style.display ="none"
        open5.style.display = "block"
        conter(true)
    }else if ( id == 6) {
        card6.style.display ="none"
        open6.style.display = "block"
        conter()
    }else if ( id== 7) {
        card7.style.display ="none"
        open7.style.display = "block"
        conter()
    }else if ( id== 8) {
        card8.style.display ="none"
        open8.style.display = "block"
        conter(true)
    }else if ( id== 9) {
        card9.style.display ="none"
        open9.style.display = "block"
        conter(true)
    }else if ( id== 10) {
        card10.style.display ="none"
        open10.style.display = "block"
        conter(true)
    } else if (id == 11 ) { 
        card.style.display ="block"
        open.style.display = "none"
        conter(false)
    }
    else if (id == 12 ) { 
        card2.style.display ="block"
        open2.style.display = "none"
        conter(false)
    }else if (id == 13 ) { 
        card3.style.display ="block"
        open3.style.display = "none"
        conter(false)
    }else if (id == 14 ) { 
        card4.style.display ="block"
        open4.style.display = "none"
        conter(false)
    }else if (id == 15 ) { 
        card5.style.display ="block"
        open5.style.display = "none"
        conter(false)
    }else if (id == 16 ) { 
        card6.style.display ="block"
        open6.style.display = "none"
        conter(false)
    }else if (id == 17 ) { 
        card7.style.display ="block"
        open7.style.display = "none"
        conter(false)
    }else if (id == 18 ) { 
        card8.style.display ="block"
        open8.style.display = "none"
        conter(false)
    }else if (id == 19 ) { 
        card9.style.display ="block"
        open9.style.display = "none"
        conter(false)
    }else if (id == 20 ) { 
        card10.style.display ="block"
        open10.style.display = "none"
        conter(false)
    }
}
function conter(arg) {
    if (arg) {
        sop ++
        shop.innerHTML = sop
    } else {
        sop --
        shop.innerHTML = sop
    }
}
const account = ()=>{
    window.open("./Conponets/Account.html")
}