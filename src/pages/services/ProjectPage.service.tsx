import ItaronisProject from '../../assets/images/itaromis_project.png';

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
    description: `Itaronis Limited website is a for installation, maintainace, sales and supply of a solar renewable energy equipments.`,
    title: 'Itaronis Limited',
    viewLink: 'https://www.itaronisltd.com/',
    image: `${ItaronisProject}`,
    stack: ['Reactjs', 'Typescript', 'Jest', 'Figma'],
  },
];

// Project Details
export const ProjectDetails: {
  description: string;
  title: string;
  id: number;
  image: string;
  viewLink: string;
  tools: string[];
  problem: string;
  solution: string;
  challenges: string;
  presentFeatures: string[];
  futureFeatures: string[];
  collaborators: { id: number; start: string; link: string }[];
}[] = [
  {
    id: 1,
    description: `Itaronis Limited website is a for installation, maintainace, sales and supply of a solar renewable energy equipments.`,
    title: 'Itaronis Limited',
    viewLink: 'https://www.itaronisltd.com/',
    image: `${ItaronisProject}`,
    tools: ['Reactjs', 'Typescript', 'firebase', 'Figma'],
    problem:
      'Itaronis has no online presence and finds it difficult to react customers globally, with thier product and services.',
    solution:
      'Creation of a website for showcases the itaronis brand, services and products, with MVP features to capture early stage users, with keen obervation in optimizing website performance and detailed SEO, to increase global reach of user.',
    challenges:
      'Challenge i faced in building this product was with integration of firebase, and the underlining logic in switching between firebase storage and database to effciently store the website data, i had to take my time to ensure it is maintainable, the overall experience of overcoming this challenge is fullfilling.',
    presentFeatures: [
      'Language Translation in three languages.',
      'Admin Authenticaion.',
      'Admin privilege: Add and Delete gallery images and sales and supply products.',
      'Firebase realtime database.',
      'Firebase storage.',
      'Send Email through contact page.',
    ],
    futureFeatures: [
      'User Authentication.',
      'Integration of Payment method.',
      'User can checkout products.',
      'Tracking of delivery products.',
      'Cart and checkout functionalities.',
    ],
    collaborators: [{ id: 1, start: 'Figma design By', link: '' }],
  },
];
