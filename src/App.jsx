
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Articles from "./pages/articles/Articles";
import Course from "./pages/course/Course";
import EditArticle from "./pages/editArticle/EditArticle";
import AddArticle from "./pages/addArticle/AddArticle";
import Article from "./pages/article/Article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/course/:courseId" element={<Course />} />
        <Route path="/edit-article/:articleId" element={<EditArticle />} />
        <Route path="/add-article" element={<AddArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
