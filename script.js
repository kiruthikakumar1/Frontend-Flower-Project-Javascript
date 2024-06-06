
var hambuts = document.querySelector(".hambut")
var wishes = document.querySelectorAll(".wish")
var cartopen = document.querySelectorAll(".a5")
var cartrem = document.querySelector(".delete")
var cartnumber = document.querySelectorAll(".cartcount")
var sidebaropen = document.querySelector(".sidebar")
var bars = document.querySelector(".bar")
var carty = document.querySelectorAll(".cart")
var carted = document.querySelector(".cartitems")

hambuts.addEventListener("click", function () {
    var bars = document.querySelector(".bar")
    bars.classList.toggle("active")
})

wishes.forEach(wished => {
    wished.addEventListener('click', () => {
        wished.classList.toggle("wishy")
    })
})

load()
function load() {
    cartopen.forEach(carts => {
        carts.addEventListener('click', open)
    })

    var delitem = document.querySelectorAll(".deletecart")
    delitem.forEach(remlist => {
        remlist.addEventListener("click", gone)
    })

    cartrem.addEventListener('click', removed)

    carty.forEach(changes => {
        changes.addEventListener('click', add)
    })
}

function open() {
    sidebaropen.classList.add("start")
    load()
}

function gone() {
    let cleared = this.parentElement
    cleared.remove()
    let modern = cleared.querySelector(".newtitle").textContent
    n.delete(modern)
    cartnumber.forEach(count => {
        count.innerHTML = n.size
    })
}

function removed() {
    sidebaropen.classList.remove("start")
    load()
}

var n = new Set()
function add() {
    let food = this.parentElement.parentElement
    let heading = food.querySelector('.imghead').textContent
    let amount = food.querySelector('.money').textContent
    let photo = food.querySelector('.flower').src
    this.style.backgroundColor = "lightgreen"
    if (n.has(heading) == false) {
        n.add(heading)
        tocart(heading, amount, photo)
    }
    else {
        alert("This product is already exist in cart")
    }
}

function tocart(heading, amount, photo) {
    let added = `<div class="items">
<div class="cartimg"><img src=${photo} alt=""></div>
<div class="cartinfo">
    <h3 class="newtitle">${heading}</h3>
    <div class="quant">
        <h4 class="newprice">Rs.<span id="currency">${amount}</span></h4>
        <label for="quantity">Quantity:</label>
        <input type="number" class="quantity" id="myInput" value="1" min="1" oninput="finals()">
    </div>
    <div>
         <h4 id="updates">Pack of 1 : Rs. ${amount}</h4>
    </div>
</div>
<ion-icon name="trash" class="deletecart"></ion-icon>
</div>`

    cartnumber.forEach(count => {
        count.innerHTML = n.size
    })
    var divv = document.createElement("div")
    divv.innerHTML = added
    carted.append(divv)
    load()
}

function finals() {
    var quants = document.querySelectorAll(".quantity")
    quants.forEach(pack => {
        let one = pack.parentElement.parentElement
        let money = one.querySelector("#currency").innerHTML
        let packs = one.querySelector("#myInput").value
        one.querySelector("#updates").innerHTML = "Pack of " + packs + ": Rs." + (packs * money)
    })
}

var pics = document.querySelectorAll(".fort")
pics.forEach(photo => {
    photo.addEventListener('click', fortunes)
})

var q = []
function fortunes() {
    var photos = this.parentElement
    var titles = photos.querySelector(".fort").title
    if (q.length == 0) {
        q.push(titles)
        var messages
        switch (titles) {
            case "blue":
                messages = "Don’t forget to tell yourself positive things daily! You must love yourself internally to glow externally."
                break;
            case "white":
                messages = "A truly happy person is one who can enjoy the scenery while on a detour."
                break;
            case "red":
                messages = "It’s not whether you get knocked down, it’s whether you get up."
                break;
            case "rose":
                messages = "you are never too old to set another goal or dream a new dream."
                break;
            case "pink":
                messages = "Winners never quit and quitters never win."
                break;
        }
        var newmsgs = document.createElement("div")
        newmsgs.id = "newmsg"
        var mes = document.createElement("div")
        mes.innerHTML = messages
        newmsgs.appendChild(mes)
        photos.append(newmsgs)
    }
    else {
        alert("Oops !!! You have only one try")
    }
}


