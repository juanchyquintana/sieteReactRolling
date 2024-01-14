import { Container } from "react-bootstrap";
import EmpleadoLista from "./components/EmpleadoLista";

function App() {

  return (
    <>
      <div className="bg-danger">
        <h1 className="text-center text-white fw-bold py-3">Lista de Empleados</h1>
      </div>

      <Container>
        <EmpleadoLista />
      </Container>
    </>
  );
}

export default App;
