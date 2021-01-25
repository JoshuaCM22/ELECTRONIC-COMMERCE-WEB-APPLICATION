import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: `Shophub`,
  description: "We sell the best products for affordable price",
  keywords: "clothes, electronics, affordable price for clothes and electronics",
};

export default Meta;
