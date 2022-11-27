import { useNavigate } from 'react-router-dom';

const currencyBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export default function Product({ id, name, price, description, img }) {
  const navigate = useNavigate();

  function viewProduct(id) {
    navigate("/product",{
      state: {
        id,
        name,
        price,
        description,
        img,
      }
    })
  }

  return (
    <div className="containershop" onClick={() => viewProduct(id)}>
      <div className="img-item">
        <img src={img} alt="imagem for item"/>
      </div>
      <p className="name-item">{name}</p>
      <p className="preco">{currencyBRL.format(price)}</p>
    </div>
  )
}