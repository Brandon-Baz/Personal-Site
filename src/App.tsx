import React, {Suspense, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoadingSpinner from './components/common/LoadingSpinner';
import Footer from './components/layout/Footer';
import {useData} from "./contexts/DataContext";
import {initializeBoox} from "./utils/nlpUtils";
import DataInitializer from "./DataInitializer";
import {AuthProvider} from "./contexts/AuthenticationContext";
import {Header} from "./components/layout";
import { TempoDevtools } from "tempo-devtools"
import ErrorBoundary from './contexts/ErrorBoundary';
TempoDevtools.init();

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Resume = React.lazy(() => import('./pages/Resume'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));

const ResumeWithErrorBoundary = React.memo(function ResumeWithErrorBoundary() {
    return (
        <ErrorBoundary fallback={<div>Error loading Resume. Please try again later.</div>}>
            <Suspense fallback={<LoadingSpinner />}>
                <Resume/>
            </Suspense>
        </ErrorBoundary>
    );
});

const App: React.FC = () => {
    const { skills, experiences, projects, culturalValues, softSkills } = useData();

    useEffect(() => {
        initializeBoox(skills, experiences, projects, culturalValues, softSkills);
    }, [skills, experiences, projects, culturalValues, softSkills]);

    return (
        <AuthProvider>
            <Router>
                <Header />
                <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/resume" element={<ResumeWithErrorBoundary />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
            <DataInitializer />
        </AuthProvider>
    );
};

export default App;
