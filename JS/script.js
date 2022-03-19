(function () {

    class Pizza {
        constructor(name = '', size = {}, crust = {}, topping = {}, orders = 1) {
            this.name = name;
            this.size = size;
            this.crust = crust;
            this.topping = topping;
            this.orders = 1
        }
    };

    let pizza_sizes = [
        {
            type: 'Large',
            price: '1500'
        },
        {
            type: 'Medium',
            price: '1000'
        },
        {
            type: 'Small',
            price: '500'
        }
    ];

    let pizza_crusts = [
        {
            type: 'Crispy',
            price: '150'
        },
        {
            type: 'Stuffed',
            price: '100'
        }
    ];

    let pizza_toppings = [
        {
            type: 'Vegetables',
            price: 50
        },
        {
            type: 'Fruits',
            price: 50
        },
        {
            type: 'Chicken',
            price: 50
        }
    ];

    // Inputs 
    let pizza_size_input = document.getElementById('pizza-size'), 
        pizza_crust_input = document.getElementById('pizza-crust')
        pizza_topping_input = document.getElementById('pizza-topping');

    // Populating pizza_sizes in pizza-size select input
    for (let i = 0; i < pizza_sizes.length; i++) {
        let el = document.createElement("option");
        el.textContent = `${pizza_sizes[i].type} - Ksh. ${pizza_sizes[i].price}`;
        el.value = pizza_sizes[i].type;
        pizza_size_input.appendChild(el);
    }

    // Populating pizza_crusts in pizza-crust select input
    for (let i = 0; i < pizza_crusts.length; i++) {
        let el = document.createElement("option");
        el.textContent = `${pizza_crusts[i].type} - Ksh. ${pizza_crusts[i].price}`;
        el.value = pizza_crusts[i].type;
        pizza_crust_input.appendChild(el);
    }

    // Populating pizza_toppings in pizza-topping select input
    for (let i = 0; i < pizza_toppings.length; i++) {
        let el = document.createElement("option");
        el.textContent = `${pizza_toppings[i].type} - Ksh. ${pizza_toppings[i].price}`;
        el.value = pizza_toppings[i].type;
        pizza_topping_input.appendChild(el);
    }

    let pizza_name = '', 
        pizza_crust = {}, 
        pizza_topping = {}, 
        pizza_size = {};

    document.getElementById('pizza-name').addEventListener('change', (e) => {
        pizza_name = e.target.value;
    });

    pizza_size_input.addEventListener('change', e => {
        let obj = pizza_sizes.find((size) => size.type === e.target.value);
        pizza_size = obj;
    });

    pizza_crust_input.addEventListener('change', e => {
        let obj = pizza_crusts.find((crust) => crust.type === e.target.value);
        pizza_crust = obj;
    });

    pizza_topping_input.addEventListener('change', e => {
        let obj = pizza_toppings.find((topping) => topping.type === e.target.value);
        pizza_topping = obj;
    });

    // Listening for form submission
    document.getElementById('order-form').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(`Pizza Name: ${JSON.stringify(pizza_name)}`);
        console.log(`Pizza Size: ${JSON.stringify(pizza_size)}`);
        console.log(`Pizza Crust: ${JSON.stringify(pizza_crust)}`);
        console.log(`Pizza Topping: ${JSON.stringify(pizza_topping)}`);
        alert('Form Submitted !');
    });

}());
