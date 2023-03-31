import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Container } from 'react-bootstrap';
import Cabecalho from "../componentes/Cabecalho";
import Rodape from "../componentes/Rodape";

export default function Home() {
  return (
      <>
      <Cabecalho/>

      <div className="bg-secondary text-white py-3 text-center mb-3">
         <h1>Página 2</h1>
      </div>

      <Container>
        <h1>Página 2</h1>
        <Rodape/>
      </Container>
      </>
  )
}