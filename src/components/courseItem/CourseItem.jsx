import Card from "react-bootstrap/Card";
import "./CourseItem.css";
import { Link } from "react-router-dom";
import { TiArrowLeftThick } from "react-icons/ti";

function CourseItem({ id, title, text, img }) {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link to={`course/${id}`} className="buy-btn">
          <span>
            <span className="read-more">توضیحات بیشتر ...
            <TiArrowLeftThick size="23px" />
            </span>
          </span>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default CourseItem;
