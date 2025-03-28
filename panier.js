const product = [
    {
      id: 0,
      image: 'SRC/aubergine-removebg-preview.png',
      title: 'Aubergine violet',
      price: 120,
    },
    {
      id: 1,
      image: 'SRC/piment.avif',
      title: 'Piment',
      price: 600,
    },
    {
      id: 2,
      image: 'SRC/12_façons_de_nettoyer_sa_maison_avec_des_pommes_de_terre-removebg-preview.png',
      title: 'Pomme de terre',
      price: 2300,
    },
    {
      id: 3,
      image: 'SRC/tomate-removebg-preview.png',
      title: 'Tomate',
      price: 1000,
    },

    {
      id: 4,
      image: 'SRC/poivron2.avif',
      title: 'Poivron',
      price: 500,
    },

    {
      id: 5,
      image: 'SRC/manioc.avif',
      title: 'Manioc',
      price: 600,
    },

    {
      id: 6,
      image: 'SRC/Onions_Are_A_Great_Natural_Remedy_For_Common_Illnesses__Here_Are_12_Surprising_Ways_To_Use_Them-removebg-preview.png',
      title: 'Oignon violet',
      price: 600,
    },

    {
      id: 7,
      image: 'SRC/f0367ad97606005bf1a57d10633ff575-removebg-preview.png',
      title: 'Oignon blanc',
      price: 600,
    },
  ];
  const categories = [...new Set(product.map((item) => { return item }))]
  let i = 0;
  document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
          <p>${title}</p>
         <div class = "info"> 
          <h2> ${price}fr</h2>` +
          "<button onclick='addtocart(" + (i++) + ")'>Ajouter</button>" +
          `</div>
        </div>
      </div>`
    )
  }).join('')
  
  var cart = [];
  
  function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
  }
  function delElement(a) {
    cart.splice(a, 1);
    displaycart();
  }
  
  function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
      document.getElementById('cartItem').innerHTML = "Ta carte est vide";
      document.getElementById("total").innerHTML = " " + 0 + "";
    }
    else {
      document.getElementById("cartItem").innerHTML = cart.map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "" + total + "fr";
        return (
          `<div class='cart-item'>
            <div class='row-img'>
              <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'>${price}fr</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
        );
      }).join('');
    }
}

const carte = document.querySelector('sidebar');
carte.style.tarnsform = 'scale(0)';