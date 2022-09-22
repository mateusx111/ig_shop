import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home";

import camisa1 from '../assets/camisa/1.png';
import camisa2 from '../assets/camisa/2.png';
import camisa3 from '../assets/camisa/3.png';
import camisa4 from '../assets/camisa/4.png';


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camisa1} width={520} height={480} alt=""/>

        <footer>
          <strong> Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      
      <Product>
        <Image src={camisa2} width={520} height={480} alt=""/>

        <footer>
          <strong> Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
