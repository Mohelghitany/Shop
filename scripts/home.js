
const products = [
    {
        id: 1,
        name: "Lighter",
        description: "A top-quality item that you must have in your collection.",
        price: 10.99,
        image: "images/product1.jpeg"
    },
    {
        id: 2,
        name: "Cleaner",
        description: "A stylish and modern item that enhances any space.",
        price: 15.99,
        image: "images/product2.jpeg"
    },
    {
        id: 3,
        name: "Scoop",
        description: "This product is known for its durability and performance.",
        price: 12.50,
        image: "images/product3.jpeg"
    },
    {
        id: 4,
        name: "scissors",
        description: "A compact yet powerful product designed for efficiency.",
        price: 20.00,
        image: "images/product4.jpeg"
    },
    {
        id: 5,
        name: "Earnings",
        description: "An essential product to make your life easier.",
        price: 7.25,
        image: "images/product5.jpeg"
    },
    {
        id: 6,
        name: "Holder",
        description: "A premium item with unmatched quality.",
        price: 25.75,
        image: "images/product6.jpeg"
    },
    {
        id: 7,
        name: "Bathroom Set",
        description: "Perfect for both casual and professional use.",
        price: 19.99,
        image: "images/product7.jpeg"
    },
    {
        id: 8,
        name: "scale",
        description: "A popular choice among customers for its versatility.",
        price: 14.75,
        image: "images/product8.jpeg"
    },
    {
        id: 9,
        name: "Bathroom Set",
        description: "An affordable option without compromising on quality.",
        price: 11.00,
        image: "images/product9.jpeg"
    },
    {
        id: 10,
        name: "Bird Cage",
        description: "A lightweight product that's easy to carry and use.",
        price: 9.50,
        image: "images/product10.jpeg"
    },
    {
        id: 11,
        name: "Chain",
        description: "An elegant and practical solution for your everyday needs.",
        price: 16.50,
        image: "images/product11.jpeg"
    },
    {
        id: 12,
        name: "Lighter",
        description: "Designed with comfort and style in mind.",
        price: 30.00,
        image: "images/product12.jpeg"
    },
    {
        id: 13,
        name: "Networking",
        description: "A highly rated product for both home and office use.",
        price: 22.99,
        image: "images/product13.jpeg"
    },
    {
        id: 14,
        name: "Office Supply Kit",
        description: "An eco-friendly product made from sustainable materials.",
        price: 8.99,
        image: "images/product14.jpeg"
    },
    {
        id: 15,
        name: "Microwave",
        description: "A classic product that never goes out of style.",
        price: 13.25,
        image: "images/product15.jpeg"
    },
    {
        id: 16,
        name: "Mixer",
        description: "An innovative product that brings efficiency to a new level.",
        price: 24.99,
        image: "images/product16.jpeg"
    },
    {
        id: 17,
        name: "Speaker",
        description: "Designed for those who appreciate modern aesthetics.",
        price: 18.75,
        image: "images/product17.jpeg"
    },
    {
        id: 18,
        name: "dryer",
        description: "This product stands out for its unique design and functionality.",
        price: 21.00,
        image: "images/product18.jpeg"
    },
    {
        id: 19,
        name: "Bamboo stool",
        description: "A reliable product that's built to last.",
        price: 17.50,
        image: "images/product19.jpeg"
    },
    {
        id: 20,
        name: "Brush",
        description: "A premium product that offers superior comfort and quality.",
        price: 26.00,
        image: "images/product20.jpeg"
    },
    {
        id: 21,
        name: "Fan",
        description: "Perfect for daily use, easy to handle and maintain.",
        price: 12.00,
        image: "images/product21.jpeg"
    },
    {
        id: 22,
        name: "Cosmatic",
        description: "A stylish product with a modern look and feel.",
        price: 14.99,
        image: "images/product22.jpeg"
    },
    {
        id: 23,
        name: "Soap dish",
        description: "Designed to offer convenience and enhance your lifestyle.",
        price: 29.99,
        image: "images/product23.jpeg"
    },
    {
        id: 24,
        name: "motor",
        description: "A versatile product suitable for multiple purposes.",
        price: 16.75,
        image: "images/product24.jpeg"
    },
    {
        id: 25,
        name: "Accessories Box",
        description: "A budget-friendly option without skimping on features.",
        price: 8.50,
        image: "images/product25.jpeg"
    },
    {
        id: 26,
        name: "Charger",
        description: "A top-seller due to its exceptional performance.",
        price: 23.00,
        image: "images/product26.jpeg"
    },
    {
        id: 27,
        name: "Video Conferencing Kit",
        description: "A sleek and compact design perfect for any occasion.",
        price: 27.50,
        image: "images/product27.jpeg"
    },
    {
        id: 28,
        name: "Video Conferencing Kit",
        description: "An essential product for those who value quality and efficiency.",
        price: 19.25,
        image: "images/product28.jpeg"
    },
    {
        id: 29,
        name: "Food Container",
        description: "A reliable product with a simple yet effective design.",
        price: 11.99,
        image: "images/product29.jpeg"
    },
    {
        id: 30,
        name: "Water Bottle",
        description: "The ultimate product for professionals and enthusiasts alike.",
        price: 35.00,
        image: "images/product30.jpeg"
    }
];

const productList = document.getElementById('productList');
const cart = JSON.parse(localStorage.getItem('cart')) || []; 
const cartCount = document.getElementById('cartCount');


products.forEach(product => {
    const productCard = `
        <div class="col-md-4">
            <div class="card product">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">Price: $${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    productList.innerHTML += productCard;
});


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = event.target.getAttribute('data-id');
        const product = products.find(p => p.id == productId);
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart)); 
        updateCartCount();
        alert(`${product.name} added to cart!`);
    }
});


function updateCartCount() {
    cartCount.textContent = cart.length;
}

updateCartCount();
