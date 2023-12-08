let checkButtnss = document.querySelectorAll("input");
let form = document.querySelector("form");


let foodList = [
    {
        name: "Fulkopi Masala",
        id: 1,
        url: "https://images.unsplash.com/photo-1598511796318-7b8256bd2b20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzdGZvb2R8fHx8fHwxNzAyMDM0NjQ2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
    },
    {
        name: "Fry Bread",
        id: 2,
        url: "https://images.unsplash.com/photo-1652687029232-ab6a091cb0ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzdGZvb2R8fHx8fHwxNzAyMDM0NjQz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
    },
    {
        name: "Pizza",
        id: 3,
        url: "https://images.unsplash.com/photo-1634629377376-6c6bae2d8bcf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzdGZvb2R8fHx8fHwxNzAyMDM0ODUw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
    },
    {
        name: "Pasta",
        id: 4,
        url: "https://images.unsplash.com/photo-1528738064262-9f834cbdfda1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzdGZvb2R8fHx8fHwxNzAyMDM0OTAw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
    },
    {
        name: "Onion Burger",
        id: 5,
        url: "https://images.unsplash.com/photo-1571161932870-41bc96691d58?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzdGZvb2R8fHx8fHwxNzAyMDM0OTQ3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
    },
    {
        name: "Potatp Fry",
        id: 6,
        url: "https://images.unsplash.com/photo-1576777647209-e8733d7b851d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzdGZvb2R8fHx8fHwxNzAyMDM0OTQ5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
    }
];




form.addEventListener("submit", (e) => {
    e.preventDefault();
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById("displayOrder").innerHTML = null;
            let slcList = [];

            checkButtnss.forEach((itm) => {
                if (itm.checked == true) {
                    slcList.push(itm.name);
                }
            });
            console.log(slcList);

            let filteredList = foodList.filter((itm) => {
                for (let i = 0; i < slcList.length; i++) {
                    if (slcList[i] == itm.name) {
                        return itm;
                    }
                }
            });
            resolve(filteredList);
            
        }, 2000)
    })


    prom.then((reslv) => {
        reslv.forEach((itm) => {
            let cartItm = document.createElement("div");
            let img = document.createElement("img");
            let orderId = document.createElement("p");
            let name = document.createElement("h2");
            orderId.innerText = `Id: ${(itm.id)}`;
            name.innerText = itm.name;
            img.src = itm.url;
            cartItm.appendChild(img);
            cartItm.appendChild(orderId);
            cartItm.appendChild(name);
            document.getElementById("displayOrder").appendChild(cartItm);
        });
    }, (err) => {
        document.getElementById("displayOrder").innerHTML = "<h1>Sorry something went wrong</h1>";
    })
});