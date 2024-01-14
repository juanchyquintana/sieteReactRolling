import { ListGroup } from "react-bootstrap";
import ItemEmpleado from "./ItemEmpleado";

const EmpleadoRow = ({empleados}) => {

  return (
    <>
        <ListGroup>
            {empleados.map((empleado, posicionEmpleado) => (
                <ItemEmpleado 
                    key={posicionEmpleado}
                    empleado={empleado}
                />
            ))}
        </ListGroup>
    </>
  )
}

export default EmpleadoRow