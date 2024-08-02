// src/pages/Admin.tsx
// import React, { useState } from 'react';
// import { Tabs, Tab, Box } from '@mui/material';
// import { useData } from '../contexts/DataContext';
// import { MissionForm } from '../components/admin';
// import { Mission, Power, Tool } from '../types/data';
//
// const Admin: React.FC = () => {
//     const [activeTab, setActiveTab] = useState(0);
//     const {
//         missions, updateMissions,
//         // nemeses, updateNemeses,
//         powers, updatePowers,
//         tools, updateTools
//     } = useData();
//
//     const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
//         setActiveTab(newValue);
//     };
//
//     const handleMissionSubmit = (mission: Mission) => {
//         const updatedMissions = [...missions, mission];
//         updateMissions(updatedMissions);
//     };
// }

    // const handleNemesisSubmit = (nemesis: Nemesis) => {
    //     const updatedNemeses = [...nemeses, {
    //         ...nemesis,
    //         weaknesses: nemesis.weaknesses.map(weakness => weakness)
    //     }];
    //     updateNemeses(updatedNemeses);
    // };

//     const handlePowerSubmit = (power: Power) => {
//         const updatedPowers = [...powers, power];
//         updatePowers(updatedPowers);
//     };
//
//     const handleToolSubmit = (tool: Omit<Tool, 'icon'>) => {
//         const updatedTools = [...tools, { ...tool, icon: <div></div> }];
//         updateTools(updatedTools);
//     };
//
//     return (
//         <Box sx={{ width: '100%' }}>
//             <Tabs value={activeTab} onChange={handleTabChange} centered>
//                 <Tab label="Missions" />
//                 <Tab label="Nemeses" />
//                 <Tab label="Powers" />
//                 <Tab label="Tools" />
//             </Tabs>
//             <Box sx={{ p: 3 }}>
//                 {activeTab === 0 && <MissionForm onSubmit={handleMissionSubmit} />}
//             </Box>
//         </Box>
//     );
// };

// export default Admin;
export {}