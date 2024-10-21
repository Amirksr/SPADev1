import Card from "react-bootstrap/Card";
import { IoMdTime } from "react-icons/io";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./ArticleItem.css";

function ArticleItem(props) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title className="py-2">{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <Link to={`/article/${props.id}`}>
            <span>
              <span className="read-more"> ادامه ی مقاله
              <TiArrowLeftThick size="23px" />
              </span>
            </span>
          </Link>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center py-3">
          <span> نویسنده : {props.writter}</span>
          <span>
            <IoMdTime /> {props.readingTime} دقیقه
          </span>
        </Card.Footer>
      </Card>
    </div>
  );
}
export default ArticleItem;
