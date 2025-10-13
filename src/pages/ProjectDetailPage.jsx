import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getProjectBySlug } from '../constants/projects';

// Import all detail components
import StovaDetails from '../components/StovaDetails/StovaDetails';
import SiwaGardenDetails from '../components/SiwaGardenDetails/SiwaGardenDetails';
import BreadfastDetails from '../components/BreadfastDetails/BreadfastDetails';
import GatesAdminRequestDetails from '../components/GatesAdminRequestDetails/GatesAdminRequestDetails';
import EDestinationDetails from '../components/EDestinationDetails/EDestinationDetails';
import Health360Details from '../components/Health360Details/Health360Details';
import ByetDetails from '../components/ByetDetails/ByetDetails';
import Employee360Details from '../components/Employee360Details/Employee360Details';
import CrewDetails from '../components/CrewDetails/CrewDetails';

const ProjectDetailPage = () => {
    const { slug } = useParams();
    const project = getProjectBySlug(slug);

    // If project not found or doesn't have details, redirect to home
    if (!project || !project.hasDetails) {
        return <Navigate to="/" replace />;
    }

    // Map slugs to their respective components
    const componentMap = {
        'stova': StovaDetails,
        'siwa-garden': SiwaGardenDetails,
        'breadfast': BreadfastDetails,
        'gates-admin-request': GatesAdminRequestDetails,
        'e-destination': EDestinationDetails,
        'health-360': Health360Details,
        'byet': ByetDetails,
        'employee-360': Employee360Details,
        'crew-website': CrewDetails
    };

    const Component = componentMap[slug];

    if (!Component) {
        return <Navigate to="/" replace />;
    }

    return <Component />;
};

export default ProjectDetailPage;
