//Importar Componentes
import '../../Styles/Product.css';

function Product({ img, link }) {

  return (

    <div className="p">
      <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
      </div>
      <a href={link} target='_blank' rel="noreferrer">
        <img
          className='p-image'
          src={img}
          alt=''
        />
      </a>
    </div>
  );

}

export default Product;