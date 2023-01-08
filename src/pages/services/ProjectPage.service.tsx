import TestOne from '../../assets/images/test_project1.png';
import TestTwo from '../../assets/images/test_project2.png';

// Project Card Data
export const ProjectData: {
  description: string;
  title: string;
  id: number;
  image: string;
  viewLink: string;
  stack: string[];
}[] = [
  {
    id: 1,
    description: `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.`,
    title: 'Martin Fowler',
    viewLink: '',
    image: `${TestOne}`,
    stack: ['Reactjs', 'Typescript', 'Jest', 'Figma'],
  },
  {
    id: 2,
    description: `Make it work, make it right, make it fast.`,
    title: 'Kent Beck',
    viewLink: '',
    image: `${TestTwo}`,
    stack: ['Reactjs', 'Typescript', 'Jest', 'Figma'],
  },
  {
    id: 3,
    description: `Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.`,
    title: 'Antoine de Saint-Exupery',
    viewLink: '',
    image: `${TestOne}`,
    stack: ['Reactjs', 'Typescript', 'Jest', 'Figma'],
  },
  {
    id: 4,
    description: `Experience is the name everyone gives to their mistakes.`,
    title: 'Oscar Wilde',
    viewLink: '',
    image: `${TestTwo}`,
    stack: ['Reactjs', 'Typescript', 'Jest', 'Figma'],
  },
  {
    id: 5,
    description: `Before software can be reusable it first has to be usable.`,
    title: 'Ralph Johnson',
    viewLink: '',
    image: `${TestOne}`,
    stack: ['Reactjs', 'Typescript', 'Jest', 'Figma'],
  },
];
