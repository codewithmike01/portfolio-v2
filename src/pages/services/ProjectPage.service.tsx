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
