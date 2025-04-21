//  Women Products Part  //

const apiUrl = 'https://fakestoreapi.com/products';
fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const container = document.getElementById('Show-Woman-Products');
  
  data.slice(14, 19).forEach(product => {
    let shortTitle = product.title.length > 1 ? product.title.substring(0, 40) + '' : product.title;
    const productCard = `
    <div class="product-one products rounded-3 d-flex flex-column justify-content-start align-items-center ">
      <img class="products-image" src="${product.image}" alt="">
      <div class="products-title mb-4 pb-3">${shortTitle}</div>
      <div class="products-price mb-4">$${product.price}</div>
      <button class="add-to-shopping-bag btn px-3 py-2"onclick="getProductData('${product.image}', '${shortTitle}', '${product.price}')">Add To Shopping Bag</button>
    </div>`;
    container.innerHTML += productCard;
  });
});

//  Go To Shopping Bag from API  //

function getProductData(image,title, price) {
  debugger
  const div=document.createElement('div')
  const ul=document.createElement('ul')
  ul.className = 'list-group-item';
  ul.textContent = `${image}-${title} - ${price}`;
  div.appendChild(ul);
  const local=JSON.stringify(div)
  let cart = JSON.parse(localStorage.getItem('Shopping-Bag')) || [];
  cart.push({ image, title, price });
  localStorage.setItem('Shopping-Bag', JSON.stringify(cart));
}

//  Go To Shopping Bag from HTML  //

function getHTMLProductData(button) {
  const productDiv = button.parentElement;
  const image = productDiv.querySelector('.products-image').src;
  const title = productDiv.querySelector('.products-title').textContent;
  const price = productDiv.querySelector('.products-price').textContent;

  const div = document.createElement('div');
  const ul = document.createElement('ul');
  ul.className = 'list-group-item';
  ul.textContent = `${image} - ${title} - ${price}`;
  div.appendChild(ul);

  let cart = JSON.parse(localStorage.getItem('Shopping-Bag')) || [];
  cart.push({ image, title, price });
  localStorage.setItem('Shopping-Bag', JSON.stringify(cart));
}
//  EMail Part  //

function redirectToLogin() {
  window.location.href = `login.html`;}