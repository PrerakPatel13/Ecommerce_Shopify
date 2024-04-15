import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At Shopify, we're passionate about providing high-quality products and exceptional customer service to our valued customers. With years of experience in the eCommerce industry, we strive to offer a seamless online shopping experience, curated product selections, and competitive prices. Our dedication to customer satisfaction drives everything we do, from sourcing the finest products to ensuring timely delivery and responsive support.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
