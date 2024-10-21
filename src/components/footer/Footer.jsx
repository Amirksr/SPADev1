import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid="sm">
        <Row className="py-3">
          <Col>
            <h2>رسالت نکست وان کد</h2>
            <p>
              نکست وان کد با هدف تولید آموزش هایی ایجاد شده, که حس شیرین یادگیری
              لذت بخش برنامه نویسی وطراحی وب را تجربه کنید.
            </p>
          </Col>
          <Col style={{textAlign : "left"}}>
            <img src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" alt="zarinpal" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;

