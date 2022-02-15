import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({value}) => {
  return (
    <ProgressContainer>
      <progress value={value} max='100' />
      <span>{value}%</span>
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  margin: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  progress {
    height: 30px;
    -webkit-appearance: none;
    ::-webkit-progress-bar {
      border-radius: 100px;
      background: #ccc;
    }
    ::-webkit-progress-value {
      background: #aaf;
      border-radius: 100px;
    }
  }
  span {
    position: absolute;
  }
`;

export default ProgressBar;