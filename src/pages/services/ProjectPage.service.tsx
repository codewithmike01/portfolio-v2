import ItaronisProject from '../../assets/images/itaromis_project.png';
import ShopifyAdmin from '../../assets/images/ShopifyAdmin.png';
import LecticMotherSite from '../../assets/images/lectie-mother-site.png';

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
    description: `The official website for Lectie encompasses comprehensive information regarding a diverse range of Lectie products. This platform provides detailed descriptions of the products, elucidates the benefits of their utilization, and offers guidance on accessing the respective offerings.`,
    title: `Lectie's primary website`,
    viewLink: 'https://www.lectie.com/',
    image: `${LecticMotherSite}`,
    stack: ['Reactjs', 'Styled components', 'Redux Toolkit', 'Context Api'],
  },

  {
    id: 2,
    description: `As the curator of this website, my aim is to spotlight the company's brand, products, and services on a global stage. With exclusive admin privileges, I orchestrate CRUD operations to dynamically populate the gallery and product page,
     ensuring a dynamic and compelling showcase.`,
    title: 'Itaronis Limited',
    viewLink: 'https://itaroni-test-app.vercel.app/',
    image: `${ItaronisProject}`,
    stack: ['Reactjs', 'Typescript', 'Jest', 'Figma'],
  },
  {
    id: 3,
    description: `In recreating the Shopify admin website,
    I've put a spotlight on user accessibility. My focus is on ensuring usability for everyone, encompassing keyboard and screen users for an engaging and inclusive web experience.`,
    title: 'Clone of Shopify Admin',
    viewLink: 'https://kanu-crushing-it-hackerton.vercel.app/',
    image: `${ShopifyAdmin}`,
    stack: ['Html', 'Css', 'Javascript'],
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
  collaborators: { id: number; start: string; link: string; name: string }[];
}[] = [
  {
    id: 1,
    description: `Lectie is a brand dedicated to incorporating socialization into its products, as it firmly believes that social interaction is a fundamental essence of human experience, fostering communication, networking, and fellowship.`,
    title: `Lectie's primary website`,
    viewLink: 'https://www.lectie.com/',
    image: `${LecticMotherSite}`,
    tools: ['Reactjs', 'Styled components', 'Redux Toolkit', 'Context Api'],
    problem: `Highlighting products crafted by Lectie that promote socialization and providing an overview of the brand's core identity.`,
    solution: `In presenting the Lectie brand, a prominently visible, user-centric, and engaging website has been developed to raise awareness of the brand and its products. The meticulous attention to detail ensures the site's maintainability and responsiveness.`,
    challenges: `Achieving the desired aesthetics and user experience for the website posed a moderate challenge, requiring careful navigation to strike the right balance without overshadowing key information and ensuring a meaningful user interface.`,
    presentFeatures: [
      'Multilingual translation services are available, covering languages such as French, Portuguese, Spanish, and English.',
      'Ensuring responsiveness across a variety of screen sizes.',
    ],
    futureFeatures: ['Enhanced user accessibility, interface and experience.'],
    collaborators: [
      {
        id: 1,
        start: 'Figma design By',
        link: 'https://twitter.com/MavisBeee',
        name: 'Mavis Nwaokorie',
      },
    ],
  },

  {
    id: 2,
    description: `Itaronis Limited website is a for installation, maintainace, sales and supply of a solar renewable energy equipments.`,
    title: 'Itaronis Limited',
    viewLink: 'https://www.itaronisltd.com/',
    image: `${ItaronisProject}`,
    tools: ['Reactjs', 'Typescript', 'firebase', 'Figma'],
    problem:
      'Itaronis has no online presence and finds it difficult to reach customers globally, with their product and services.',
    solution:
      'Creation of a website to showcase the itaronis brand, services, and products, with MVP features to capture early-stage users, with keen observations in optimizing website performance and detailed SEO, to increase the global reach of user.',
    challenges:
      'The challenge I faced in building this product was with the integration of firebase, and the underlining logic in switching between firebase storage and database to efficiently store the website data, I had to take my time to ensure it is maintainable, the overall experience of overcoming this challenge is fulfilling.',
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
    collaborators: [
      {
        id: 1,
        start: 'Figma design By',
        link: 'https://www.linkedin.com/in/ijeoma-ikegbunam/',
        name: 'Ijeoma Ikegbunam.',
      },
    ],
  },

  {
    id: 3,
    description: `Explore  Shopify Admin website—a dynamic hub for effortless business management. Our intuitive interface and powerful features empower you to oversee your store with precision. Streamline product management, order processing, and customer interactions seamlessly. Step into the future of e-commerce administration with our user-friendly platform, where efficiency meets innovation.`,
    title: '',
    viewLink: 'https://kanu-crushing-it-hackerton.vercel.app/',
    image: `${ShopifyAdmin}`,
    tools: ['Html', 'Css', 'Javascript', 'Figma'],
    problem:
      'Exploring the accessibility features of the Shopify admin website to gain hands-on experience with accessibility.',
    solution:
      'Enabling users to follow the setup steps while configuring their website.',
    challenges:
      'Addressing keyboard accessibility posed a slight challenge, aiming to ensure that most HTML elements are focusable.',
    presentFeatures: [
      'Clicking on the Shopify icon in the top bar redirects the merchant to the Shopify landing page at shopify.com.',
      'When focusing on the search box, merchants can freely type without triggering further actions or results; typing is the only permitted action.',
      'Admin privilege: Add and Delete gallery images and sales and supply products.',
      'Clicking on the notification bell reveals an empty notifications dropdown; clicking again closes the dropdown.',
      'Selecting the store name or profile image displays a menu as per Figma design; clicking again closes the menu. Choosing any menu item redirects to admin.shopify.com.',
      'Clicking the "Select plan" link directs the merchant to the Shopify pricing page at shopify.com/pricing.',
      'Clicking the dismiss button on the trial callout immediately removes it from the page.',
      `Clicking the "Arrow Up" icon on the Setup guide card's top right closes and reopens the card upon subsequent clicks.`,
      'Clicking on any of the 5 onboarding steps expands the panel and shows its content, closing any previously opened steps. Clicking an opened step has no effect.',
      'Clicking the empty circle checkbox on the left side of an onboarding step title marks it as completed, expanding the next incomplete step. Clicking again marks it as incomplete, updating the onboarding progress bar accordingly.',
    ],
    futureFeatures: [
      'Enhanced user accessibility results in improved performance.',
    ],
    collaborators: [
      {
        id: 1,
        start: 'Figma design By',
        link: 'https://twitter.com/bahdcoder/',
        name: 'Frantz Kati',
      },
    ],
  },
];
