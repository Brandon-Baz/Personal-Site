import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";
import CaseStudies from "./pages/CaseStudies";
import Learning from "./pages/Learning";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { ThemeProvider } from "./context/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/career" element={<Career />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </ThemeProvider>
  );
};

export default App;
