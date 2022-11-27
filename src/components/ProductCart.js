
const currencyBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ProductCart({name, price, img}){
  return(
    <>
      <div className="descricoesproduto">
        <p className="descriçãoroupa">{name}</p>
        <p className="preco">{currencyBRL.format(price)}</p>
      </div>
      <div className="roupa">
        <img src={img} alt="roupa"></img>
      </div>
    </>
  )

}