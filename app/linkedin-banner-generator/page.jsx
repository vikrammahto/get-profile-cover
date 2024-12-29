import React from 'react';
import LinkedInBannerGenerator from '../components/LinkedInBannerGenerator';

const page = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <LinkedInBannerGenerator />
    </div>
  );
};

export default page;
