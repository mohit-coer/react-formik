import React, { Component } from "react";
import { Helmet } from "react-helmet";
const SEO = (props) => {
  const { siteTitle, siteDescription } = props;
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
    </Helmet>
  );
};

export default SEO;
