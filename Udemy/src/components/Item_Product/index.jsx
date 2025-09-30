import viteLogo from '/vite.svg';
import './item.css';

function ItemProduct(props){
  return(
    <section id="object-item">
        <div>
          <img src={viteLogo} alt={props.title}/>
        </div>
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>

        <div>
            <button>Buy Now</button>
            <button>Buy Now</button>
        </div>
      </section>
  );
}
export default ItemProduct;