import viteLogo from '/vite.svg';
import TabButton from '../TabButton/TabButton';
import './item.css';

function ItemProduct(props){

  const defaultImage = 'https://cdn-icons-png.flaticon.com/512/11542/11542598.png';

  const imgSrc = props.img || defaultImage;


  function handleSelect(action, id){
    console.log("Item selected:", action, id);
  }
  
  return(
    <section id="object-item">
        <div className='img-container'>
          <img src={imgSrc} alt={props.title}/>
        </div>

        <div className='title-container'>
          <h3>{props.title}</h3>
        </div>

        <div className='description-container'>
          <p>{props.description}</p>
        </div>

        <menu className='menu-buttons'>
          <TabButton onSelect={() => handleSelect('add-to-cart', props.id)}>Add to the cart</TabButton>
          <TabButton onSelect={() => handleSelect('see-more', props.id)}>See more</TabButton>
        </menu>
      </section>
  );
}
export default ItemProduct;