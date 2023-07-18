const boxInnerHTML = document.querySelector(".boxContainer");
const sebet = document.querySelector(".sebet")
const number = document.querySelector(".number")
const basketInnerHTML = document.querySelector(".basketInnerHTML")
let n = 6;



const data = [
    {
        id: "1",
        img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg",
        name: "Poster v1",
        about: "Bu posterdir",
        price: "19",
        count: 1,
    },
    {
        id: "2",
        img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg",
        name: "Ismixan v2",
        about: "Bu posterdir",
        price: "129",
        count: 1,
    },
    {
        id: "3",
        img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg",
        name: "Poster v3",
        about: "Bu posterdir",
        price: "60",
        count: 1,
    },
    {
        id: "4",
        img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard3-1000x1000.jpg",
        name: "Poster v4",
        about: "Bu posterdir",
        price: "59",
        count: 1,
    },
    {
        id: "5",
        img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Postcard-6-min-1000x1000.jpg",
        name: "Poster v5",
        about: "Bu posterdir",
        price: "22",
        count: 1,
    },
    {
        id: "6",
        img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV5-min-1000x1000.jpg",
        name: "Poster v6",
        about: "Bu posterdir",
        price: "49",
        count: 1,
    },
    {
        id: "7",
        img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2021/08/PostcardV6-1000x1000.jpg",
        name: "Poster v7",
        about: "Bu posterdir",
        price: "139",
        count: 1,
    },
    {
        id: "8",
        img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV5-min-1000x1000.jpg",
        name: "Poster v8",
        about: "Bu posterdir",
        price: "72",
        count: 1,
    },
    {
        id: "9",
        img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard3-1000x1000.jpg",
        name: "Poster v9",
        about: "Bu posterdir",
        price: "89",
        count: 1,
    },
    {
        id: "10",
        img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg",
        name: "Poster v10",
        about: "Bu posterdir",
        price: "59",
        count: 1,
    },
    {
        id: "11",
        img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg",
        name: "Poster v11",
        about: "Bu posterdir",
        price: "19",
        count: 1,
    },
    {
        id: "12",
        img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg",
        name: "Poster v12",
        about: "Bu posterdir",
        price: "55",
        count: 1,
    }
]
const removeAll = document.getElementById("rmv")

function show() {
    data.slice(0, n).map((element) => {
        boxInnerHTML.innerHTML += `          
        <div class="cart">
        <div class="sebet">
                <div class="textSebet">
                    <p class="soz">Add to cart</p>
                </div>
                <div class="back" data-id = "${element.id}">
                    <i class="fa-solid fa-cart-shopping" data-id = "${element.id}"></i>
                </div>
            </div>
            <div class="cartImg">
            <img src="${element.img}" alt="">
            </div>
            <h1>${element.name}</h1>
            <p>${element.about}</p>
            <span>${element.price} $</span>
            </div>`
    })
}
show();


const loadMore = document.querySelector(".loadMore");
loadMore.onclick = function () {
    boxInnerHTML.innerHTML = ""
    n += 6
    if (n == data.length) {
        loadMore.style.display = "none"
    }
    show()
    addBus()

}

let basket = [];

basket = JSON.parse(localStorage.getItem("basket")) || []

basket.map((item) =>
    basketInnerHTML.innerHTML += `
<div class="menu_content" id=${item.id}>
<div class="image">
<img id="img" src="${item.img}">
</div>
<div class="nameProduct">
<h3>${item.name}</h3>
<span class="count">${item.count}x</span>
<span class="price">${item.price} $</span>
</div>
<div class="removeProduct"><i class="fa-solid fa-trash-can"></i></div>
</div>
`)
function addBus() {
    const addToBusket = document.querySelectorAll(".back")
    addToBusket.forEach((item) => {
        item.onclick = function (e) {
            const id = e.target.getAttribute("data-id");
            const findProduct = data.find(item => item.id == id);
            const existProduct = basket.find(isi => isi.id == id);
            if (!existProduct) {
                basket.push(findProduct);
            }
            else {
                findProduct.count++
            }
            say()
            totals()
            basketShow()
            localStorage.setItem("basket", JSON.stringify(basket))
            names()
        }
    })

}
addBus()


function say() {
    number.innerHTML = basket.length
}
say()


const navbar = document.querySelector(".navbar")
window.addEventListener("scroll", function () {
    navbar.classList.toggle("navblack", window.scrollY > 700)
})

//Responsivlik üçün
window.addEventListener("scroll", function () {
    navbar.classList.toggle("navblack2", window.scrollY > 350)
})



function totals() {
    const total = document.querySelector(".umumiMebleg");
    let price = 0;
    basket.forEach(item => price += item.price * item.count)
    total.innerHTML = price
}
totals()

function basketShow() {
    basketInnerHTML.innerHTML = ""
    basket.map((item) =>
        basketInnerHTML.innerHTML += `
<div class="menu_content" id=${item.id}>
<div class="image">
    <img id="img" src="${item.img}">
</div>
<div class="nameProduct">
    <h3>${item.name}</h3>
    <span class="count">${item.count}x</span>
    <span class="price">${item.price} $</span>
</div>
<div class="removeProduct"><i class="fa-solid fa-trash-can"></i></div>
</div>
`)


    const remove = document.querySelectorAll(".removeProduct")
    remove.forEach(item => {
        item.onclick = function () {
            basket = basket.filter(item1 => item1.id != item.parentNode.id);
            item.parentNode.remove()
            totals()
            say()
            names()
            localStorage.setItem("basket", JSON.stringify(basket))
        }
    })
}
localStorage.setItem("basket", JSON.stringify(basket))
basketShow()



removeAll.onclick = function () {
    basket = []
    basketInnerHTML.innerHTML = ""
    totals()
    say()
    localStorage.setItem("basket", JSON.stringify(basket))
    names()

}
removeAll.style.display = "none"
function names() {
    if (basket.length <= 0) {
        removeAll.style.display = "none"
    } else if (basket.length > 0) {
        removeAll.style.display = "block"
    }
}
names()


const search = document.querySelector(".boxSearch");

search.oninput = function () {
    boxInnerHTML.innerHTML = ""
    data.filter(item => item.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())).map(
        itemmap => {
            boxInnerHTML.innerHTML += `<div class="cart">
        <div class="sebet">
                <div class="textSebet">
                    <p class="soz">Add to cart</p>
                </div>
                <div class="back" data-id = "${itemmap.id}">
                    <i class="fa-solid fa-cart-shopping" data-id = "${itemmap.id}"></i>
                </div>
            </div>
            <div class="cartImg">
            <img src="${itemmap.img}" alt="">
            </div>
            <h1>${itemmap.name}</h1>
            <p>${itemmap.about}</p>
            <span>${itemmap.price} $</span>
            </div>`
            addBus()
        })
}


