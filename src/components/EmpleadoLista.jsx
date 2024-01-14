import { Empleados } from "../utilities/Empleados";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoLista = () => {

  return (
    <>
        <EmpleadoRow 
            empleados={Empleados}
        />
    </>
  );
};

export default EmpleadoLista;
