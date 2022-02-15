import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaReact, FaSass } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiStyledcomponents } from 'react-icons/si';

// 컬러 수정 예정
const StyledHtml = styled(FaHtml5)`
  color: orange;
`;
const StyledCss = styled(FaCss3Alt)`
  color: lightblue;
`;
const StyledJs = styled(SiJavascript)`
  color: gold;
`;
const StyledReact = styled(FaReact)`
  color: cyan;
`;
const StyledNextjs = styled(SiNextdotjs)`
  color: #707070;
`;
const StyledSass = styled(FaSass)`
  color: hotpink;
`;
const StyledSC = styled(SiStyledcomponents)`
  color: orangered;
`;

const STACK = [
  {
    id: 1,
    text: 'HTML5',
    component: <StyledHtml />,
    value: 80,
  },
  {
    id: 2,
    text: 'CSS3',
    component: <StyledCss />,
    value: 80,
  },
  {
    id: 3,
    text: 'JS (ES6+)',
    component: <StyledJs />,
    value: 70,
  },
  {
    id: 4,
    text: 'React.JS',
    component: <StyledReact />,
    value: 65,
  },
  {
    id: 5,
    text: 'Next.JS',
    component: <StyledNextjs />,
    value: 60,
  },
  {
    id: 6,
    text: 'SASS / SCSS',
    component: <StyledSass />,
    value: 60,
  },
  {
    id: 7,
    text: 'Styled-Components',
    component: <StyledSC />,
    value: 50
  },
];

export { STACK };