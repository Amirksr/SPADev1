import MyNavbar from "../../components/navbar/Navbar";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import progImage from "../../assets/images/programming.svg";
import CourseItem from "../../components/courseItem/CourseItem";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";

function Home() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("https://json-server-master-six.vercel.app/courses")
      .then((response) => setCourses(response.data));
  }, []);
  return (
    <div>
      <MyNavbar />
      <Container fluid="md">
        <Row className="align-items-center my-5">
          <Col lg={6}>
            <h1>برنامه نویسی با نکست وان کد</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </Col>
          <Col lg={6} className="py-4">
            <img src={progImage} className="img-fluid" alt="programming" />
          </Col>
        </Row>
        <h2 className="py-4">دوره های آموزشی</h2>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4">
          {courses.map((course) => (
            <Col key={course.id} className="py-2" md={6} lg={4} xl={3}>
              <CourseItem {...course} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default Home;
