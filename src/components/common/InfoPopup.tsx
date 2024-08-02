import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import styled from 'styled-components';
import {heroTheme} from "../../styles/theme/theme";

interface InfoPopupProps {
    content: string;
}

const InfoIcon = styled(FaInfoCircle)`
  color: ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;
  margin-left: 0.5rem;
`;

const PopupContent = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${props => props.theme === heroTheme ? 'black' : 'white'};
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 200px;
`;

const InfoPopup: React.FC<InfoPopupProps> = ({ content }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <span>
      <InfoIcon
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
      />
            {showPopup && <PopupContent>{content}</PopupContent>}
    </span>
    );
};

export default InfoPopup;