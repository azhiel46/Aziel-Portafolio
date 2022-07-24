//Importar Componentes
import React from 'react';
import Product from '../Products/Product';
import { products } from '../../Data';
import '../../Styles/ProductList.css';

function ProductList() {

  return (

    <div className="pl">
      <div className='pl-text'>
        <h1 className='pl-title'>Create & Practice.</h1>
        <p className='pl-desc'>
          These are some of my personal projects, with this i practiced what i know and try to use some new technologies
          and improve my skills.
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