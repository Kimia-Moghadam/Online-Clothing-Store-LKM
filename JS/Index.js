// APi //

const apiUrl = 'https://fakestoreapi.com/products';

//  Best Selling Products Part  //

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('Best-Product');
    data.slice(1,6).forEach(product => {
      let shortTitle = product.title.length > 50 ? product.title.substring(0,46) + '' : product.title;
      const productCard = `
      <div class="products rounded-3 me-4 d-flex flex-column justify-content-start align-items-center ">
        <img class="products-image " src="${product.image}" alt="">
        <div class="products-title mb-4 pb-3">${shortTitle}</div>
        <div class="products-price mb-4">$${product.price}</div>
        <button class="add-to-shopping-bag btn px-3 py-2" onclick="getProductData('${product.image}', '${shortTitle}', '${product.price}')">Add To Shopping Bag</button>
      </div>`;
      container.innerHTML += productCard;
    });
    const productCard =`
    <div class="more-shape">
    <a href="../Layout/Best-Selling-Products.html" class="position-sticky text-decoration-none d-flex flex-column justify-content-center align-items-center">
      <img src="../Assets/Svgs/icons8-arrow-60 (1).png" alt="More">
      <span>More</span>
    </a>
    </div>`
      container.innerHTML += productCard;
  });

//  Women Products Part  //

fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const container = document.getElementById('Show-Woman');
  data.slice(14,19).forEach(product => {
    let shortTitle = product.title.length > 50 ? product.title.substring(0,46) + '...' : product.title;
    const productCard = `
    <div class="products rounded-3 me-4 d-flex flex-column justify-content-start align-items-center">
      <img class="products-image" src="${product.image}" alt="">
      <div class="products-title mb-4 pb-3">${shortTitle}</div>
      <div class="products-price mb-4">$${product.price}</div>
      <button class="add-to-shopping-bag btn px-3 py-2" onclick="getProductData('${product.image}', '${shortTitle}', '${product.price}')">Add To Shopping Bag</button>
    </div>`;
    container.innerHTML += productCard;
  });
  const productCard =`
    <div class="more-shape">
    <a href="../Layout/Show-Women-Products.html" class="position-sticky text-decoration-none d-flex flex-column justify-content-center align-items-center">
      <img src="../Assets/Svgs/icons8-arrow-60.png" alt="More">
      <span>More</span>
    </a>
    </div>`
  container.innerHTML += productCard;
});

  //  men Products Part  //

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('Show-man');
    data.slice(0,4).forEach(product => {
      let shortTitle = product.title.length > 50 ? product.title.substring(0,46) + '' : product.title;
      const productCard = `
      <div class="products rounded-3 d-flex flex-column justify-content-start align-items-center">
        <img class="products-image" src="${product.image}" alt="">
        <div class="products-title mb-4 pb-3">${shortTitle}</div>
        <div class="products-price mb-4">$${product.price}</div>
        <button class="add-to-shopping-bag btn px-3 py-2" onclick="getProductData('${product.image}', ${shortTitle}', '${product.price}')">Add To Shopping Bag</button>
      </div>`;
      container.innerHTML += productCard;
    });
    const productCard =`
      <div class="more-shape ms-2">
        <a href="../Layout/Show-Men-Products.html" class="position-sticky text-decoration-none d-flex flex-column justify-content-center align-items-center">
          <img src="../Assets/Svgs/icons8-arrow-60.png" alt="More">
          <span>More</span>
        </a>
      </div>`
      container.innerHTML += productCard;
  });
  
  //  accessories Products Part  //

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('Show-accessories');
    data.slice(4,8).forEach(product => {
      let shortTitle = product.title.length > 50 ? product.title.substring(0,46) + '' : product.title;
      const productCard = `
      <div class="products rounded-3 d-flex flex-column justify-content-start align-items-center">
        <img class="products-image " src="${product.image}" alt="">
        <div class="products-title mb-4 pb-3">${shortTitle}</div>
        <div class="products-price mb-4">$${product.price}</div>
        <button class="add-to-shopping-bag btn px-3 py-2" onclick="getProductData('${product.image}', '${shortTitle}', '${product.price}')">Add To Shopping Bag</button>
      </div>`;
      container.innerHTML += productCard;
    });
    const productCard =`
    <div class="more-shape">
         <a href="../Layout/Show-Accessories-Products.html" class="position-sticky text-decoration-none d-flex flex-column justify-content-center align-items-center">
            <img src="../Assets/Svgs/icons8-arrow-60.png" alt="More">
            <span>More</span>
          </a>
      </div>`
      container.innerHTML += productCard;
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