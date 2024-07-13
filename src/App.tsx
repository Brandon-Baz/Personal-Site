import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Header from './layout/Header';
  import Footer from './layout/Footer';
  import Home from './pages/Home';
  import About from './pages/About';
  import Projects from './pages/Projects';
  import CaseStudies from './pages/CaseStudies';
  import Blog from './pages/Blog';
  import BlogPostPage from './pages/BlogPostPage';
  import Learning from './pages/Learning';
  import Contact from './pages/Contact';
  import './styles/global.css';
  
  const App: React.FC = () => {
    return (
      <Router>
        <div className="app game-theme">
          <Header />
          <main className="main-content">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    );
  };

  export default App;