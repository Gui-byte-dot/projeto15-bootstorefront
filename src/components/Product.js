export default function Product({ name, description, price, img }) {
  return (
    <div className="containershop">
      <div className="img-item">
        <img src={img} alt="imagem for item"></img>
      </div>
      <p className="description-item">{description}</p>
      <p className="preco">{price}</p>
    </div>
  )
}