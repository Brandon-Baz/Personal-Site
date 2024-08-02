import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthenticationContext';
import LoginForm from './LoginForm';
import MissionForm from './MissionForm';
import SkillForm from './SkillForm';
import ProjectForm from './ProjectForm';
import ServiceForm from './ServiceForm';
import SummaryForm from './SummaryForm';
import AnalyticsDisplay from './AnalyticsDisplay';
import {
    AdminContainer,
    AdminHeader,
    AdminNav,
    AdminNavButton
} from '../../styles/AdminStyles';

const AdminDashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const [activeSection, setActiveSection] = useState('missions');

    if (!user) {
        return <LoginForm />;
    }

    const renderSection = () => {
        switch(activeSection) {
            case 'missions':
                return <MissionForm />;
            case 'skills':
                return <SkillForm />;
            case 'projects':
                return <ProjectForm />;
            case 'services':
                return <ServiceForm />;
            case 'summaries':
                return <SummaryForm />;
            case 'analytics':
                return <AnalyticsDisplay />;
            default:
                return null;
        }
    };

    return (
        <AdminContainer>
            <AdminHeader>Admin Dashboard</AdminHeader>
            <AdminNav>
                <AdminNavButton onClick={() => setActiveSection('missions')}>Missions</AdminNavButton>
                <AdminNavButton onClick={() => setActiveSection('skills')}>Skills</AdminNavButton>
                <AdminNavButton onClick={() => setActiveSection('projects')}>Projects</AdminNavButton>
                <AdminNavButton onClick={() => setActiveSection('services')}>Services</AdminNavButton>
                <AdminNavButton onClick={() => setActiveSection('summaries')}>Summaries</AdminNavButton>
                <AdminNavButton onClick={() => setActiveSection('analytics')}>Analytics</AdminNavButton>
                <AdminNavButton onClick={logout}>Logout</AdminNavButton>
            </AdminNav>
            {renderSection()}
        </AdminContainer>
    );
};

export default AdminDashboard;