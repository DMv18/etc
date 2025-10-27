import Img from '@components/Img/Img.jsx';

export default function ItemProduct({ item, onSelect }) {
    return (
        <article className="item-product" onClick={() => onSelect && onSelect('select', item)}>
            <div className="img-container">
                <Img img={item.img} alt={item.title} />
            </div>

            <div className="item-body">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-desc">{item.description}</p>
            </div>

            <div className="actions">
                <button type="button" className="btn btn-add">Add to the cart</button>
                <button type="button" className="btn btn-see">See more</button>
            </div>
        </article>
    );
}
