import { Card, Col, Row } from "react-bootstrap";
import perfilHombre from "../img/perfilHombre.png";

const ItemEmpleado = ({ empleado }) => {
  const { fullName, title, department } = empleado;
  return (
    <>
      <section>
        <Row xs={1} md={2} className="d-flex justify-content-center mb-3">
          <Col>
            <Card>
              <Card.Img variant="top" src={perfilHombre}  />
              <Card.Body>
                <Card.Title>{fullName}</Card.Title>
                <div className="d-flex align-items-baseline gap-2">
                  <Card.Text>
                    <p className="fw-bold">{title}</p>
                  </Card.Text>
                  <Card.Text>
                    <p className="bg-primary px-1 text-center fw-bold text-white text-uppercase">
                      {department}
                    </p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ItemEmpleado;
