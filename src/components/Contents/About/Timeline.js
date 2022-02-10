import React from 'react';
import styled from 'styled-components';

const Timeline = () => {
  return (
    <TimelineBox>
      <h1>About</h1>
      <TimelineItem>
        <Time>2011.2 ~ 2014.2</Time>
        <TimelineContent>
          <h2>군 입대</h2>
          <p>해군 하사 만기전역</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <Time>2014.3 ~ 2018.2</Time>
        <TimelineContent>
          <h2>호서대학교 입학</h2>
          <p>시각디자인학과 14학번</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <Time>2020.7 ~ 2021.1</Time>
        <TimelineContent>
          <h2>UI / UX 웹퍼블리셔 과정 수료</h2>
          <p>그린컴퓨터아카데미 안산캠퍼스</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <Time>2021.1 ~ 2021.9</Time>
        <TimelineContent>
          <h2>웹 / 앱 프론트엔드 개발 담당</h2>
          <p>(주)AI4Blockchain</p>
        </TimelineContent>
      </TimelineItem>
    </TimelineBox>
  );
};

const TimelineBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  h1 {
    text-align: center;
    margin-bottom: 32px;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  h2 {
    font-size: 1.125rem;
    border-bottom: 1px solid #ccc;
    padding: 8px 0;
  }
  p {
    padding: 8px 0;
  }
  @media all and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Time = styled.p`
  font-family: 'Gowun Batang', serif;
  font-size: 14px;
`;

const TimelineContent = styled.div`
  width: 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-left: 20px;
  border-radius: 16px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  @media all and (max-width: 800px) {
    width: 300px;
  }
`;

export default Timeline;