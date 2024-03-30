// Skill Import
import reactSkill from '../../assets/images/reactSkill.svg';
import jsSkill from '../../assets/images/jsSkill.svg';
import reduxSkill from '../../assets/images/reduxSkill.svg';
import jestSkill from '../../assets/images/jestSkill.svg';
import html5Skill from '../../assets/images/html5Skill.svg';
import css3Skill from '../../assets/images/css3Skill.svg';
import gitSkill from '../../assets/images/gitSkill.svg';
import githubSkill from '../../assets/images/githubSkill.svg';
import typescriptSkill from '../../assets/images/typescript.svg';
import nodeJsSkil from '../../assets/images/nodejs.svg';

// Hobby Import
import { FiMusic } from 'react-icons/fi';
import { MdGamepad } from 'react-icons/md';
import { IoFastFood } from 'react-icons/io5';

// Testimony Import
//-- Images

import NuriLucka from '../../assets/images/nuri_lucka.png';
import BenjaminSemah from '../../assets/images/BenjaminSemah.jpeg';
import IkegbunamIjeoma from '../../assets/images/Ikegbunam_Ijeoma.jpg';
import SamuelMomoh from '../../assets/images/SamuelMomoh.jpeg';
import { FaBehanceSquare, FaGithubSquare } from 'react-icons/fa'; //Behance icon

// Hobbie Data
export const hobbies: {
  id: number;
  hobby: string;
  content: string;
  icon: React.ReactElement;
}[] = [
  {
    id: 1,
    hobby: 'Music',
    content: 'I Love listening to slow music instrumental like deep codify.',
    icon: <FiMusic />,
  },
  {
    id: 2,
    hobby: 'Cooking',
    content: 'I love cooking, and trying out new recipes and spices.',
    icon: <IoFastFood />,
  },
  {
    id: 3,
    hobby: 'Games',
    content: 'I love playing indoor games like monopoly and drafts',
    icon: <MdGamepad />,
  },
];

// Skills Data
export const skills: {
  id: number;
  skill: string;
  image: string;
}[] = [
  {
    id: 1,
    skill: 'React',
    image: `${reactSkill}`,
  },
  {
    id: 2,
    skill: 'NodeJs',
    image: `${nodeJsSkil}`,
  },
  {
    id: 3,
    skill: 'javascript',
    image: `${jsSkill}`,
  },
  {
    id: 4,
    skill: 'Typescript',
    image: `${typescriptSkill}`,
  },

  {
    id: 5,
    skill: 'Redux',
    image: `${reduxSkill}`,
  },
  {
    id: 6,
    skill: 'Jest',
    image: `${jestSkill}`,
  },

  {
    id: 7,
    skill: 'HTML',
    image: `${html5Skill}`,
  },

  {
    id: 8,
    skill: 'css3',
    image: `${css3Skill}`,
  },

  {
    id: 9,
    skill: 'Git',
    image: `${gitSkill}`,
  },
  {
    id: 10,
    skill: 'github',
    image: `${githubSkill}`,
  },
];

// Testimony Data

export const testimonyData: {
  id: number;
  name: string;
  image: string;
  icon: React.ReactElement;
  testify: string;
  link: string;
  profession: string;
}[] = [
  {
    id: 1,
    name: 'Nuri Lacka',
    image: `${NuriLucka}`,
    profession: 'Developer',
    icon: <FaGithubSquare />,
    testify:
      'I have worked with Mike on different projects, his technical skills & leadership skills were always impressive.',
    link: 'https://github.com/Nuri1977',
  },

  {
    id: 2,
    name: 'Benjamin Semah',
    image: `${BenjaminSemah}`,
    profession: 'Developer',
    icon: <FaGithubSquare />,
    testify:
      'Mike is commited to excel at whatever he does, especially web development.',
    link: 'https://github.com/BenjaminSemah',
  },
  {
    id: 3,
    name: 'Ikegbunam Ijeoma',
    image: `${IkegbunamIjeoma}`,
    profession: 'Designer',
    icon: <FaBehanceSquare />,
    testify:
      'I had the opportunity working with mike on a group project of 7 members, I notice he has a proven knowledge of web development and works well with a team.',
    link: 'https://www.behance.net/ikegbunamijeoma/projects',
  },

  {
    id: 4,
    name: 'Samuel Momoh',
    image: `${SamuelMomoh}`,
    profession: 'Developer',
    icon: <FaGithubSquare />,
    testify:
      'Mike and I worked together on the Lectie projects, i am lucky to have him as my coworker, he consistently gave 100% effort to the team, and played a significant role in ensuring that we complete tasks on time.',
    link: 'https://github.com/Samuel-Momoh',
  },
];
