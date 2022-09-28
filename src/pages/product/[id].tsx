import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio quis tempora dolorem possimus, minima, quo saepe libero maxime placeat esse facere? Fuga sunt voluptatum provident at aliquam iusto ipsam.</p>

        <button>
          Comprar agora
        </button>

      </ProductDetails>
    </ProductContainer>
  )
}