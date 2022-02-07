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
const StyledVue = styled(FaVuejs)`
  color: lightgreen;
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
const StyledRedux = styled(SiRedux)`
  color: violet;
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
    text: 'Vue.JS',
    component: <StyledVue />
  },
  {
    id: 6,
    text: 'Next.JS',
    component: <StyledNextjs />
  },
  {
    id: 7,
    text: 'SASS / SCSS',
    component: <StyledSass />
  },
  {
    id: 8,
    text: 'Styled-Components',
    component: <StyledSC />
  },
  {
    id: 9,
    text: 'Redux',
    component: <StyledRedux />
  },
];

export default STACK;