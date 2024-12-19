import React from "react";
import LinkedInBannerGenerator from "../components/linkedin/LinkedInBannerGenerator";

const page = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <LinkedInBannerGenerator />
    </div>
  );
};

export default page;
