//Importar Componentes
import React from 'react';
import Product from '../Products/Product';
import { products } from '../../Data';
import '../../Styles/ProductList.css';

function ProductList() {

  return (

    <div className="pl">
      <div className='pl-text'>
        <h1 className='pl-title'>Create & Inspire. Its lama</h1>
        <p className='pl-desc'>
          There are many variations of passages of Lorem Ipsum available, but the majority,
          or randomised words which don't look even slightly believable.
          you need to be sure there isn't anything
        </p>
      </div>

      <div className='pl-list'>
        {products.map(item => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
          />
        ))}
      </div>
    </div>

  );

}

export default ProductList