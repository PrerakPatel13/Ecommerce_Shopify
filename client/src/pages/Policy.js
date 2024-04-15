import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4"> 
        <p><strong>Data Usage Policy:</strong> add privacy policy</p>
        <p><strong>Data Sharing Policy:</strong> add privacy policy</p>
        <p><strong>Data Storage and Security Policy:</strong> add privacy policy</p>
        <p><strong>Cookie Policy:</strong> add privacy policy</p>
        <p><strong>User Rights Policy:</strong> add privacy policy</p>
        <p><strong>Legal Compliance Policy:</strong> add privacy policy</p>
        <p><strong>Policy Updates Policy:</strong> add privacy policy</p>
        <p><strong>Contact Information Policy:</strong> add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
