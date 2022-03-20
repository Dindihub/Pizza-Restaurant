(function () {

    // Method 
    function Pizza (name = '', size = {}, crust = {}, topping = {}, orders = 1) {
        this.name = name;
        this.size = size;
        this.crust = crust;
        this.topping = topping;
        this.orders = parseInt(orders);
    };

    // Using prototype property to add getTotal function to Pizza Constructor function
    Pizza.prototype.getTotal = function() {
        return (this.size.price + this.crust.price + this.topping.price) * this.orders;
    };

    let pizzaSizes = [
        {
            type: 'Large',
            price: 1500
        },
        {
            type: 'Medium',
            price: 1000
        },
        {
            type: 'Small',
            price: 500
        }
    ];

    let pizzaCrusts = [
        {
            type: 'Crispy',
            price: 150
        },
        {
            type: 'Stuffed',
            price: 100
        }
    ];

    let pizzaToppings = [
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
    let pizzaSizeInput = document.getElementById('pizza-size'), 
        pizzaCrustInput = document.getElementById('pizza-crust')
        pizzaToppingInput = document.getElementById('pizza-topping'),
        pizzaNameInput = document.getElementById('pizza-name'),
        nameInput = document.getElementById('customer-name'),
        phoneNumberInput = document.getElementById('phone-number'),
        orderNumberInput = document.getElementById('order-number'),
        deliveryInput = document.getElementById('delivery')
        orderSummaryTable = document.querySelector('.order-summary');

    // Populating pizza_sizes in pizza-size select input
    for (let i = 0; i < pizzaSizes.length; i++) {
        let el = document.createElement("option");
        el.textContent = `${pizzaSizes[i].type} - Ksh. ${pizzaSizes[i].price}`;
        el.value = pizzaSizes[i].type;
        pizzaSizeInput.appendChild(el);
    }

    // Populating pizza_crusts in pizza-crust select input
    for (let i = 0; i < pizzaCrusts.length; i++) {
        let el = document.createElement("option");
        el.textContent = `${pizzaCrusts[i].type} - Ksh. ${pizzaCrusts[i].price}`;
        el.value = pizzaCrusts[i].type;
        pizzaCrustInput.appendChild(el);
    }

    // Populating pizza_toppings in pizza-topping select input
    for (let i = 0; i < pizzaToppings.length; i++) {
        let el = document.createElement("option");
        el.textContent = `${pizzaToppings[i].type} - Ksh. ${pizzaToppings[i].price}`;
        el.value = pizzaToppings[i].type;
        pizzaToppingInput.appendChild(el);
    }

    let pizzaName = '', 
        pizzaCrust = {}, 
        pizzaTopping = {}, 
        pizzaSize = {},
        customerName = '',
        customerPhoneNumber = '',
        orders = 0,
        deliveryOption = '';

    pizzaNameInput.addEventListener('change', (e) => {
        pizzaName = e.target.value;
    });

    pizzaSizeInput.addEventListener('change', e => {
        let obj = pizzaSizes.find((size) => size.type === e.target.value);
        pizzaSize = obj;
    });

    pizzaCrustInput.addEventListener('change', e => {
        let obj = pizzaCrusts.find((crust) => crust.type === e.target.value);
        pizzaCrust = obj;
    });

    pizzaToppingInput.addEventListener('change', e => {
        let obj = pizzaToppings.find((topping) => topping.type === e.target.value);
        pizzaTopping = obj;
    });

    nameInput.addEventListener('change', e => {
        customerName = e.target.value;
    });

    phoneNumberInput.addEventListener('change', e => {
        customerPhoneNumber = e.target.value;
    });

    orderNumberInput.addEventListener('change', e => {
        orders = e.target.value;
    });

    deliveryInput.addEventListener('change', e => {
        deliveryOption = e.target.value;
    });

    let pizzaOrders = [];

    // Listening for form submission
    document.getElementById('order-forms').addEventListener('submit', (e) => {
        e.preventDefault();
        // JavaScript Form Validation
        if(
            pizzaNameInput.value === "" ||
            pizzaCrustInput.value === "" || 
            pizzaSizeInput.value === "" || 
            pizzaToppingInput.value === "" ||
            orderNumberInput.value === ""
            // nameInput.value === "" ||
            // pizzaNameInput.value === "" ||
            // phoneNumberInput.value === "" ||
            // deliveryInput.value === ""
        ) {
            alert("Please fill all the fields !");
        }

        // create a pizza object using pizza class
        let pizza = new Pizza(pizzaName, pizzaSize, pizzaCrust, pizzaTopping, orders);
        pizzaOrders.push(pizza);

        // clear input fields
        clearInputFields();

        // Displaying Order Summary Table
        orderSummaryTable.style.display = "table";

        insertRows();
    });

    // Clearing input fields
    function clearInputFields() {
        pizzaNameInput.value = "";
        pizzaCrustInput.value = ""; 
        pizzaSizeInput.value = ""; 
        pizzaToppingInput.value = "";
        orderNumberInput.value = "";
    }

    // Inserting each element of pizza orders elements into order summary table
    function insertRows () {
        let rows = '';
        pizzaOrders.map((pizza) => {
            rows += `<tr>
                <td>${pizza.name}</td>
                <td>${pizza.size.type}</td>
                <td>${pizza.crust.type}</td>
                <td>${pizza.topping.type}</td>
                <td>${pizza.orders}</td>
                <td>${pizza.getTotal()}</td>
            </tr>`;
        });
        document.getElementById('table-body').innerHTML = rows;
    }

}());
