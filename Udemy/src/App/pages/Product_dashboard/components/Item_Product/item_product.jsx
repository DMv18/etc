import '@dashboard_products/styles/item.css';
import TabButton from '@components/TabButton/TabButton.jsx';
import Img from '@components/Img/Img.jsx';

function ItemProduct({ item, onSelect }) {

  function handleSelect(action) {
    console.log("Item selected:", action, item);
    if (onSelect) {
      onSelect(action, item); 
    }
  }

  return (
    <section id="object-item">
      <div className='img-container'>
        <Img img={item.img} alt={item.title} />
      </div>

      <div className='title-container'>
        <h3>{item.title}</h3>
      </div>

      <div className='description-container'>
        <p>{item.description}</p>
      </div>

      <menu className='menu-buttons'>
        <TabButton onSelect={() => handleSelect('add-to-cart')}>Add to the cart</TabButton>
        <TabButton onSelect={() => handleSelect('see-more')}>See more</TabButton>
      </menu>
    </section>
  );
}

export default ItemProduct;
