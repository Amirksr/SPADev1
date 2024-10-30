import { useParams } from "react-router-dom";
import "./Course.css";
import MyNavbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import { MdOutlineAttachMoney } from "react-icons/md";

function Course() {
  const courseId = useParams().courseId;
  const [courseData, setCourseData] = useState({});
  useEffect(() => {
    axios
      .get(`https://json-server-master-six.vercel.app/courses/${courseId}`)
      .then((response) => setCourseData(response.data));
  }, []);
  return (
    <div>
      <MyNavbar />
      <Container>
        <Row className="row-cols-1 row-cols-md-2" style={{ marginTop: "70px" }}>
          <Col>
            <div className="courseCardContainer">
              <div className="cardHeader">
                <img src={courseData.img} alt="#" />
              </div>
              <div className="cardBody">
                <p>
                  <FaChalkboardTeacher size="20px" /> مدرس :{" "}
                  <b>{courseData.writter}</b>
                </p>
                <p>
                  <RxLapTimer size="20px" /> مدت زمان دوره :{" "}
                  <b>{courseData.courseTime} ساعت</b>
                </p>
                <p>
                  <MdOutlineAttachMoney size="20px" /> قیمت دوره :{" "}
                  <b>{courseData.price} تومان</b>
                </p>
                <div className="cardFooter d-flex justify-content-start">
                  <Button variant="outline-primary">خرید</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="my-5">
            <p style={{ textAlign: "justify" }}>{courseData.text}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Course;
