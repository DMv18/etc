export default function Img({ img, alt }) {
     return (
        <>
            {img ? (
                <img className="container-img" src={img} alt={alt} />
            ) : (
                <img className="container-img" src="https://cdn-icons-png.flaticon.com/512/11542/11542598.png" alt="Default Image" />
            )}
        </>
     );
}
