import React from 'react';
import { Helmet } from 'react-helmet';

interface HelmetHeadInterface {
  title: string;
  description: string;
  keywords?: string;
}

const HelmetHead: React.FC<HelmetHeadInterface> = ({
  description,
  title,
  keywords,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default HelmetHead;
