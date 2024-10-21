import { Button, Col, Container, Row } from "react-bootstrap";
import ArticleItem from "../../components/articleItem/ArticleItem";
import MyNavbar from "../../components/navbar/Navbar";
import "./Articles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { MdOutlinePostAdd } from "react-icons/md";

function Articles() {
    const [articlesData, setArticlesData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/articles").then((response) => setArticlesData(response.data));
    }, []);
    return (
        <div>
            <MyNavbar />
            <Container fluid="sm">
                <div className="d-flex justify-content-between mb-4 pt-3">
                    <h1>لیست مقالات</h1>
                    <NavLink to="/add-article">
                        <Button variant="outline-primary">
                            <MdOutlinePostAdd size="25px" /> اضافه کردن مقاله جدید{" "}
                        </Button>
                    </NavLink>
                </div>
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4">
                    {articlesData.map((article) => (
                        <Col key={article.id}>
                            <ArticleItem {...article} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
export default Articles;
