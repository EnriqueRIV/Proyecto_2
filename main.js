// Variables
const products = [
    {
      name: 'LAYA',
      price: 5,
      seller: 'Carrefour',
      image: 'https://res.cloudinary.com/dkwfauuct/image/upload/v1696491332/FreshshShop/layavino_al30ry.jpg',
      description: 'Vino tinto fluido, elegantes aromas de fruta madura roja, florales y especiados. Ideal para combinar con carnes rojas, arroces, marisco, embutidos, setas y legumbres.'
    },
    {
      name: 'HONORO VERA GARNACHA',
      price: 5,
      seller: 'El Corte Inglés',
      image: 'https://res.cloudinary.com/dkwfauuct/image/upload/v1696491332/FreshshShop/honoro-vera-garnachavino_xlosfe.jpg',
      description: 'Vino tinto jóven, 2 meses de barrica que le confiere aromas y sabores propios de la madera, no muy usual en los vinos jóvenes. Acompañante de platos basados en carne, guisos o estofados.'
    },
    {
      name: 'LAUS',
      price: 4,
      seller: 'Mercadona',
      image: 'https://res.cloudinary.com/dkwfauuct/image/upload/v1696491332/FreshshShop/laus-tinto-jovenvino_cbvfop.jpg',
      description: 'Vino suave y sedoso. Magnífica opción para disfrutar con amigos en aperitivo, para maridar pastas, carnes blancas o ensaladas.'
    },
    {
      name: 'PROTOS TINTO ROBLE',
      price: 9,
      seller: 'Carrefour',
      image: 'https://res.cloudinary.com/dkwfauuct/image/upload/v1696491332/FreshshShop/protos-tinto-roblevino_ql57ol.jpg',
      description: 'Vino criado durante 6 meses en barricas de roble americano y otros 6 en botella. Vino muy versátil para tomar en cualquier momento, nunca defrauda.'
    },
    {
      name: 'BORSAO SELECCION',
      price: 4,
      seller: 'El Corte Inglés',
      image: 'https://res.cloudinary.com/dkwfauuct/image/upload/v1696491332/FreshshShop/borsao-seleccionvino_qimzmt.jpg',
      description: 'Vino de color rojo guinda y matices violeta. Con aromas de fruta madura con tonos florales. Con cuerpo, especiado, complejo y largo postgusto.'
    },
    {
      name: 'HEREDAD X GARNACHA',
      price: 6,
      seller: 'Dia',
      image: 'https://res.cloudinary.com/dkwfauuct/image/upload/v1696491332/FreshshShop/heredad-x-garnachavino_rgtiey.jpg',
      description: 'De color picota y rubí, vino jóven. Con notas afrutadas e integradas sobre un fondo balsámico. Es equilibrado y jugoso, afrutado y atractivamente sedoso. Para acompañar con Carnes o Cocidos.'
    },
    {
      name: 'VIÑA REAL CRIANZA',
      price: 8,
      seller: 'Carrefour',
      image: 'https://res.cloudinary.com/dkwfauuct/image/upload/v1696491332/FreshshShop/vina-real-crianzavino_i1zvju.jpg',
      description: 'Vino crianza, 14 meses en barrica y 6 meses en botella. Su composición se basa en cuatro tipologías de uva: Tempranillo, Mazuelo, Graciano y Garnacha, de las cuales, estas tres ultimas sólo componen el 10%.'
    },
    {
      name: 'CUESTA DEL HERRERO',
      price: 9,
      seller: 'Mercadona',
      image: 'https://res.cloudinary.com/dkwfauuct/image/upload/v1696491332/FreshshShop/cuesta-del-herrerovino_huslaw.jpg',
      description: 'Vino compuesto de merlot, tempranillo, garnacha y cabernet sauvignon. Vino fresco y frutal. Estas expresiones se acaban de redondear durante 6 meses en barriles de roble francés de primer o segundo uso.'
    },
    {
      name: 'CELESTE ROBLE',
      price: 8,
      seller: 'Dia',
      image: 'https://res.cloudinary.com/dkwfauuct/image/upload/v1696491332/FreshshShop/celeste-roblevino_gtyh8d.jpg',
      description: 'Vino recomendado para maridarlo con Asados, Caza de pelo o Carnes Rojas.'
    },
    {
      name: 'RAMON BILBAO CRIANZA',
      price: 7,
      seller: 'Mercadona',
      image: 'https://res.cloudinary.com/dkwfauuct/image/upload/v1696491332/FreshshShop/ramon-bilbao-crianzavino_wdverr.jpg',
      description: 'Vino monovarietal, frutal, equilibrado y afinado. Recomendamos tomarlo con Quesos semicurados, Carnes rojas a la plancha o con Caza de pluma, de igual forma con Pescados azules o con Legumbres.'
    },
  ];

const selectSeller = document.querySelector('#filter_seller');
const searchInput = document.querySelector('#price_search');
const searchButton = document.querySelector('#search_button');
const cleanFiltersButton = document.querySelector('#clean_filters');

const productsList = document.querySelector('.eri-products');

let sellerValue = '';
let priceValue = 0;

//Funciones para renderizar el listado de productos en la página
const getProductTemplate = (name, price, seller, image, description) => {
  return (`<div class="eri-simple-product">
    <a href="#" role="link" class="eri-simple-product_card eri-layout-flex">    
      <h3>${name}</h3>
      <img src="${image}" alt="${name}" class="vino_tinto" title="${name}: ${description}">
      <span class="productCase">Vendedor: ${seller}</span>
      <span class="productPrice">P.V.P. ${price}.00€</span>
    </a>
  </div>`);
};

const setupProductsList = () => {
  for (let i = 0; i < products.length; i++) {
    const productElement = products[i];
    productsList.innerHTML += getProductTemplate(
      productElement.name,
      productElement.price,
      productElement.seller,
      productElement.image,
      productElement.description,
    );    
  };
};
setupProductsList();

//Funciones para eliminar los duplicados y renderizar el select de vendedores.
const sellerlListUpdate = removeDuplicates();

const getSellerTemplate = (sellerElement) => {
  return (`<option value="${sellerElement}" class="seller">${sellerElement}</option>`)
};

function removeDuplicates() {
  const sellersWithoutDuplicate = [];
  const sellersList = products.map(sellers => sellers.seller);
    for (i = 0; i < sellersList.length; i++) {
      let sellersListCopy = sellersList;
      if (sellersListCopy.indexOf(sellersList[i]) === i) {
        sellersWithoutDuplicate.push(sellersListCopy[i]);
      }
    }
  return sellersWithoutDuplicate;
}

 const setupSellerList = () => {
  for (let i = 0; i < sellerlListUpdate.length; i++) {
    const sellerElement = sellerlListUpdate[i];
    selectSeller.innerHTML += getSellerTemplate(sellerElement);    
  };
};
setupSellerList();

//Funciones para filtros (filtro de vendedores, filtro de precio menor que, limpiar filtros).
//Funciones para limpiar filtros
const cleanProductsList = () => {
  productsList.innerHTML = '';
};

const cleanFilters = () => {
  selectSeller.value = '';
  sellerValue = '';
  searchInput.value = 0;
  priceValue = 0;
};

const cleanAll = (event) => {
  cleanProductsList();
  setupProductsList();
  cleanFilters();
};

//Funciones para filtro de vendedores
const setupSellerSelected = () => {
  const getSellersSelected = products.filter(seller => seller.seller === sellerValue);
  if (sellerValue === '') {
    setupProductsList();
  } else if ( priceValue !== 0) {
  const getPricesSellersProducts = products.filter(price => price.price < priceValue && price.seller === sellerValue);  
    for (let i = 0; i < getPricesSellersProducts.length; i++) {
      const priceSellerElement = getPricesSellersProducts[i];
      productsList.innerHTML += getProductTemplate(
        priceSellerElement.name,
        priceSellerElement.price,
        priceSellerElement.seller,
        priceSellerElement.image,
        priceSellerElement.description,
      );    
    };  
  } else {
    for (let i = 0; i < getSellersSelected.length; i++) {
      const sellerElement = getSellersSelected[i];
      productsList.innerHTML += getProductTemplate(
        sellerElement.name,
        sellerElement.price,
        sellerElement.seller,
        sellerElement.image,
        sellerElement.description,
      );    
    };
  };
};

const handleSelect = (event) => {
  const inputValue = selectSeller.value;
    sellerValue = inputValue;
    cleanProductsList();
    setupSellerSelected();
};
  
//Funciones para filtro por precio menor que
const setupPriceInput = () => {
  const getPricesProducts = products.filter(price => price.price < priceValue);
  if (priceValue <= 0) {
    productsList.innerHTML = `<h3>No tenemos nada gratis!</h3>`;
  } else if (sellerValue !== '') {
    const getPricesSellersProducts = products.filter(price => price.price < priceValue && price.seller === sellerValue); 
    for (let i = 0; i < getPricesSellersProducts.length; i++) {
      const priceSellerElement = getPricesSellersProducts[i];
      productsList.innerHTML += getProductTemplate(
        priceSellerElement.name,
        priceSellerElement.price,
        priceSellerElement.seller,
        priceSellerElement.image,
        priceSellerElement.description,
      );    
    };
  } else {
    for (let i = 0; i < getPricesProducts.length; i++) {
      const priceElement = getPricesProducts[i];
      productsList.innerHTML += getProductTemplate(
        priceElement.name,
        priceElement.price,
        priceElement.seller,
        priceElement.image,
        priceElement.description,
      );    
    };
  };
};

const handleInput = (event) => {
  const inputValue = searchInput.value;
    priceValue = inputValue;
    cleanProductsList();
    setupPriceInput();
};


//Receptores de eventos
selectSeller.addEventListener('change', handleSelect);
searchButton.addEventListener('click', handleInput);
cleanFiltersButton.addEventListener('click', cleanAll);
