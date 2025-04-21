    //  Geting Items  //

let x = localStorage.getItem('Shopping-Bag');
const cartItem = JSON.parse(x) || []; 
console.log(cartItem);
const cartItems = document.getElementById('cartItems');
const productMap = {};

    //  Calculating Quality  //

cartItem.forEach((product) => {
    const productPrice = parseFloat(product.price.replace(/[$,]/g, '')); 
    if (productMap[product.title]) {
        productMap[product.title].quantity += 1;
        productMap[product.title].totalPrice = parseFloat(productMap[product.title].totalPrice) + productPrice;
    } else {
        productMap[product.title] = {
            ...product,
            quantity: 1,
            totalPrice: productPrice
            };
        }
    });

    //  Showing Items  //

for (const product of Object.values(productMap)) {
    let shortTitle = product.title.length > 50 ? product.title.substring(0,46) + '' : product.title;
    product.totalPrice = product.totalPrice.toFixed(2); 
    const productItem = `
        <div class="products rounded-3 me-4 d-flex flex-column justify-content-center align-items-center">
            <img class="products-image" src="${product.image}" alt="">
            <div class="products-title mb-1 pb-3">${shortTitle}</div>
            <div class="products-quantity mb-2">Quantity: ${product.quantity}</div>
            <div class="products-price mb-4">Total Price: $${product.totalPrice}</div>
            <button class="remove-from-shopping-bag btn px-1 py-2" data-title="${product.title}">Remove From Shopping Bag</button>
        </div>
    `;
    cartItems.innerHTML += productItem; 
}

    //  Removing From The Cart  //

cartItems.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-from-shopping-bag')) {
        const title = event.target.getAttribute('data-title');
        const index = cartItem.findIndex(item => item.title === title);
        if (index !== -1) {
            cartItem.splice(index, 1); 
            localStorage.setItem('Shopping-Bag', JSON.stringify(cartItem));
            location.reload(); 
        }
    }
});

    //  Calculating Price  //

const shippingCost = 5.00; 
let totalCost = 0;
for (const product of Object.values(productMap)) {
    const priceWithoutDollar = product.totalPrice.replace('$', '');
    totalCost += parseFloat(priceWithoutDollar);
}

const grandTotal = (totalCost + shippingCost).toFixed(2);

    //  Show Total Price  //
    
const totalDisplay = `
    <div class="total-summary mt-4">
        <div class="total-cost">Subtotal: $${totalCost.toFixed(2)}</div>
        <div class="shipping-cost">Shipping: $${shippingCost.toFixed(2)}</div>
        <div class="grand-total">Total: $${grandTotal}</div>
        <button class="btn btn-primary mt-3" onclick="proceedToPayment()">Proceed to Payment</button>
        <button class="btn btn-primary mt-3 d-block" onclick="resetShoppingBag()">Reset Shopping Bag</button>
    </div>
`;
document.getElementById('cartSummary').innerHTML = totalDisplay;

    //  Payment Procces  //

function proceedToPayment() {
    alert("Proceeding to payment...");
}

    //  Reset The Cart  //

function resetShoppingBag() {
    cartItem.length = 0; 
    localStorage.setItem('Shopping-Bag', JSON.stringify(cartItem)); 
    location.reload(); 
}

    //  EMail Part  //

    function redirectToLogin() {
        window.location.href = `login.html`;}
