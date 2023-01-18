// Certificate

import MicroverseFullStack from '../../assets/images/fullstack_microverse.png';
import MicroverseJavascript from '../../assets/images/javascript_microverse.png';
import AlxFullstack from '../../assets/images/fullstack_alx.png';
import Oracle from '../../assets/images/oracle.jpg';

export const ResumeEducation: {
  id: number;
  eduName: string;
  year: string;
  course: string;
  grade?: string;
}[] = [
  {
    id: 1,
    eduName: 'MICROVERSE San Francisco (REMOTE).',
    year: 'Nov 2021 - Sep 2022',
    course: 'FULL STACK WEB DEVELOPER',
  },
  {
    id: 2,
    eduName: 'ALX (REMOTE).',
    year: 'Aug 2022 - Oct 2022',
    course: 'FULL STACK WEB DEVELOPER',
  },
  {
    id: 3,
    eduName: 'AUCHI POLYTECHNIC, EDO STATE, NIGERIA.',
    year: 'Nov 2019 - Jun 2021',
    course: 'COMPUTER SCIENCE (HIGHER NATIONAL DIPLOMA)',
    grade: 'DISTINCTION (3.70/4.0)',
  },
  {
    id: 4,
    eduName: 'IDAH POLYTECHNIC, KOGI STATE, NIGERIA.',
    year: 'Sep 2015 - Jun 2017',
    course: 'COMPUTER SCIENCE (NATIONAL DIPLOMA)',
    grade: 'DISTINCTION (3.60/4.0)',
  },
];

export const ResumeExperience: {
  id: number;
  companyName: string;
  year: string;
  position: string;
}[] = [
  {
    id: 1,
    companyName: 'LECTIE',
    year: 'Aug 2022 - Present',
    position: 'FRONTEND WEB DEVELOPER',
  },
  {
    id: 2,
    companyName: 'HNG (REMOTE INTERSHIP)',
    year: 'Sep 2022 - Nov 2022',
    position: 'FRONTEND WEB DEVELOPER',
  },
  {
    id: 3,
    companyName: 'MICROVERSE (REMOTE)',
    year: 'May 2022 - Dec 2022',
    position: 'CODE REVIEWER',
  },
];
export const Certificate: {
  id: number;
  image: string;
}[] = [
  {
    id: 1,
    image: `${MicroverseFullStack}`,
  },
  {
    id: 2,
    image: `${MicroverseJavascript}`,
  },
  {
    id: 3,
    image: `${AlxFullstack}`,
  },
  {
    id: 4,
    image: `${Oracle}`,
  },
];
