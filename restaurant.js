fetch("http://kea-alt-del.dk/t5/api/categories")
        .then(function(response) {
            return response.json()
        }).then(function(data) {
            data.forEach(buildCategory)
            getProducts();
        })

    function buildCategory(data) {
        const section = document.createElement("section");
        const header = document.createElement("h2");

        header.textContent = data;
        section.setAttribute("id", data)
        section.appendChild(header);
        document.querySelector("main").appendChild(section);

    }









    function getProducts() {
        fetch("http://kea-alt-del.dk/t5/api/productlist")
            .then(function(response) {
                return response.json()
            }).then(function(data) {
                data.forEach(showDish)
            })
    }

    function showDish(dish) {
        console.log(dish);

        const template = document.querySelector("template").content;
        const copy = template.cloneNode(true);


        copy.querySelector(".name").textContent = dish.name;
        copy.querySelector(".image").textContent = dish.image;
        copy.querySelector(".price").textContent = dish.price;
        copy.querySelector(".discount").textContent = dish.discount;

        dish.discount;

        if (dish.discount) {

            copy.querySelector(".discount").textContent = Math.round(dish.price - dish.discount / 100 * dish.price);

            copy.querySelector(".price").classList.add("markDiscount");
        } else {
            copy.querySelector(".discount").remove();
        }

        copy.querySelector(".description").textContent = dish.shortdescription;


        if (dish.vegetarian === true) {
            copy.querySelector(".V").classList.remove("V");
        } else {
        }

         if (dish.alcohol > 0) {
            copy.querySelector(".A").classList.remove("A");
        } else {
        }





        const menuScroll = document.querySelector("h1");

        window.addEventListener('scroll', scrollingStarted);

        function scrollingStarted() {

            menuScroll.classList.add('menucolor');
        }









        document.querySelector("#" + dish.category).appendChild(copy);
    }
