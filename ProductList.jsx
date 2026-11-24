import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plantsArray = [
    {
      category: 'Plantas Purificadoras de Aire',
      plants: [
        {
          name: 'Lengua de Suegra',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produce oxígeno por la noche, mejorando la calidad del aire.',
          cost: '$15',
        },
        {
          name: 'Cinta (Planta Araña)',
          image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filtra el formaldehído y el xileno del ambiente.',
          cost: '$12',
        },
        {
          name: 'Lirio de la Paz',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Elimina esporas de moho y purifica el aire.',
          cost: '$18',
        },
        {
          name: 'Helecho de Boston',
          image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Aporta humedad natural y elimina toxinas.',
          cost: '$20',
        },
        {
          name: 'Árbol del Caucho',
          image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Fácil de cuidar y excelente para limpiar el aire.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Gel calmante para la piel y purificadora natural.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Plantas Aromáticas',
      plants: [
        {
          name: 'Lavanda',
          image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop',
          description: 'Aroma relajante ideal para reducir el estrés.',
          cost: '$20',
        },
        {
          name: 'Jazmín',
          image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop',
          description: 'Fragancia dulce que promueve la relajación.',
          cost: '$18',
        },
        {
          name: 'Romero',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Aroma vigorizante, ideal también para cocinar.',
          cost: '$15',
        },
        {
          name: 'Menta',
          image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          description: 'Aroma refrescante, perfecta para infusiones.',
          cost: '$12',
        },
        {
          name: 'Toronjil (Melisa)',
          image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description: 'Aroma cítrico que calma los nervios y favorece el sueño.',
          cost: '$14',
        },
        {
          name: 'Jacinto',
          image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
          description: 'Planta de floración hermosa con fragancia intensa.',
          cost: '$22',
        },
      ],
    },
    {
      category: 'Plantas de Bajo Mantenimiento',
      plants: [
        {
          name: 'Planta ZZ',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop',
          description: 'Prospera con poca luz y requiere muy poco riego.',
          cost: '$25',
        },
        {
          name: 'Pothos',
          image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
          description: 'Tolera el descuido y se adapta a múltiples condiciones.',
          cost: '$10',
        },
        {
          name: 'Aspidistra (Planta de Hierro)',
          image: 'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg',
          description: 'Extremadamente resistente a la falta de luz y agua.',
          cost: '$20',
        },
        {
          name: 'Suculentas Mixtas',
          image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
          description: 'Resistentes a la sequía con formas y colores únicos.',
          cost: '$18',
        },
        {
          name: 'Aglaonema',
          image: 'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg',
          description: 'Requiere cuidados mínimos y añade color a interiores.',
          cost: '$22',
        },
        {
          name: 'Cactus',
          image: 'https://cdn.pixabay.com/photo/2016/07/06/20/47/prickly-pear-1501307_1280.jpg',
          description: 'Ideal para espacios soleados con riego ocasional.',
          cost: '$16',
        },
      ],
    },
  ];

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const isInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Barra de navegación */}
      <div className="navbar">
        <div className="tag">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>
            <div>
              <h3>Paradise Nursery</h3>
              <i>Donde lo verde se encuentra con la serenidad</i>
            </div>
          </a>
        </div>
        <div className="navbar-links">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>
            Inicio
          </a>
          <a href="#plantas" onClick={handlePlantsClick}>
            Plantas
          </a>
          <a href="#carrito" onClick={handleCartClick} className="cart-link">
            🛒 Carrito ({calculateTotalQuantity()})
          </a>
        </div>
      </div>

      {/* Vista condicional: Catálogo o Carrito */}
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{category.category}</h2>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => {
                  const added = isInCart(plant.name);
                  return (
                    <div className="product-card" key={plantIndex}>
                      <img className="product-image" src={plant.image} alt={plant.name} />
                      <div className="product-title">{plant.name}</div>
                      <div className="product-description">{plant.description}</div>
                      <div className="product-cost">{plant.cost}</div>
                      <button
                        className={`product-button ${added ? 'added-to-cart' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={added}
                      >
                        {added ? 'Agregado al carrito' : 'Agregar al carrito'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
