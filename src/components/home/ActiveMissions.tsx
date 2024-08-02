import { motion } from 'framer-motion';
import {
    MissionContainer,
    MissionItem,
    MissionName,
    ProgressBarContainer,
    ProgressBar,
    MissionDescription
} from '../../styles/ActiveMissionsStyle';
import {Mission} from "../../types/data";

interface ActiveMissionsProps {
    missions: Array<Mission>
}

const ActiveMissions = (props: ActiveMissionsProps) => {


    return (
        <MissionContainer>
            {props.missions.map((mission, index) => (
                <MissionItem
                    key={mission.name}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <MissionName>{mission.name}</MissionName>
                    <ProgressBarContainer>
                        <ProgressBar
                            as={motion.div}
                            initial={{ width: 0 }}
                            animate={{ width: `${mission.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            progress={mission.progress}
                        />
                    </ProgressBarContainer>
                    <MissionDescription>{mission.description}</MissionDescription>
                </MissionItem>
            ))}
        </MissionContainer>
    );
};

export default ActiveMissions;