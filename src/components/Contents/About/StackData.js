import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaVuejs } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiStyledcomponents, SiRedux } from 'react-icons/si';

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
    component: <StyledHtml />
  },
  {
    id: 2,
    text: 'CSS3',
    component: <StyledCss />
  },
  {
    id: 3,
    text: 'JS (ES6+)',
    component: <StyledJs />
  },
  {
    id: 4,
    text: 'React.JS',
    component: <StyledReact />
  },
  {
    id: 5,
    text: 'Next.JS',
    component: <StyledNextjs />
  },
  {
    id: 6,
    text: 'SASS / SCSS',
    component: <StyledSass />
  },
  {
    id: 7,
    text: 'Styled-Components',
    component: <StyledSC />
  },
];

export default STACK;