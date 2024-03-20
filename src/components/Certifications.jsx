import React from "react";
import SecondaryTitle from "../Reusable/Title";
import CertificatesApi from "../Certificates.Api";

const Certifications = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <SecondaryTitle
          title="CERTIFICATIONS"
          description="Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology"
        />

        <div className="certifications">
          <div class="container text-center">
            <div class="row gap-5 d-flex justify-content-center">
              {CertificatesApi.map((project, index) => {
                return (
                  <div class="col-sm-12 col-md-6 col-lg-3 mt-5">
                    <img src={project.img} className="img-fluid" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
