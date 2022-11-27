import { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import home from "./assets/home-grad.svg"

const MySwal = withReactContent(Swal)

export default function Alert({ goToCart, setModal }){
  useEffect(()=>{
    MySwal.fire({
      text: "Deseja adicionar esse produto ao carrinho ?",
      imageUrl: home,
      imageWidth: 68,
      imageHeight: 65.5,
      showCancelButton: true,
      cancelButtonColor:'#F3821E',
      cancelButtonText: 'FECHAR',
      confirmButtonColor: '#F45C1E',
      confirmButtonText: 'CONFIRMAR',
      allowOutsideClick: false,
    }).then(response => {
      if(response.isConfirmed) {
        goToCart();
      }else {
        setModal(false);
      }
    })
  }, [])
  return(<></>)
}

