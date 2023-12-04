// Certificate

import MicroverseFullStack from '../../assets/images/fullstack_microverse.png';
import MicroverseJavascript from '../../assets/images/javascript_microverse.png';
import AlxFullstack from '../../assets/images/fullstack_alx.png';
import Oracle from '../../assets/images/oracle.jpg';
import React from '../../assets/images/React_Redux.png';

// Education
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
    grade: 'FIRST CLASS (3.70/4.0)',
  },
  {
    id: 4,
    eduName: 'IDAH POLYTECHNIC, KOGI STATE, NIGERIA.',
    year: 'Sep 2015 - Jun 2017',
    course: 'COMPUTER SCIENCE (NATIONAL DIPLOMA)',
    grade: 'FIRST CLASS (3.60/4.0)',
  },
];

// resume Data
export const ResumeExperience: {
  id: number;
  companyName: string;
  year: string;
  position: string;
}[] = [
  {
    id: 1,
    companyName: 'LECTIE (REMOTE)',
    year: 'Aug 2022 - Present',
    position: 'FRONTEND WEB DEVELOPER',
  },
  {
    id: 2,
    companyName: 'MLH FELLOW (Armada OPEN SOURCE, REMOTE INTERNSHIP)',
    year: 'May 2023 - Aug 2023',
    position: 'FRONTEND WEB DEVELOPER',
  },

  {
    id: 3,
    companyName: 'HNG (REMOTE INTERNSHIP)',
    year: 'Sep 2022 - Nov 2022',
    position: 'FRONTEND WEB DEVELOPER',
  },
  {
    id: 4,
    companyName: 'MICROVERSE (REMOTE)',
    year: 'May 2022 - Dec 2022',
    position: 'CODE REVIEWER',
  },
];

// Certificate Data
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
    image: `${React}`,
  },
  {
    id: 4,
    image: `${AlxFullstack}`,
  },
  {
    id: 5,
    image: `${Oracle}`,
  },
];
