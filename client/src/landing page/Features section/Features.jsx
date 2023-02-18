import React from "react";
import "./Features.css";
import featureImg1 from "../../files/Illustration - Asset 7.svg";
import featureImg2 from "../../files/Website Design.svg";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const Features = () => {
  return (
    <div className="features-container">
      <h1>Upgrade yourself with modern technology and get benifits</h1>
      <div className="feature-1">
        <div className="feature-left">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            debitis provident modi dolore ullam animi nobis necessitatibus quia,
            et amet voluptatum ratione, itaque quo totam deleniti corporis iure.
            Quia accusamus similique quae, est, itaque blanditiis alias at,
            voluptas nisi tempore nulla doloribus asperiores! Facere ex, quos
            perspiciatis pariatur consequatur deserunt.
          </p>
          <button className="know-more">
            <div className="redirect">
              <BsBoxArrowInUpRight />
            </div>
            Know more
          </button>
        </div>
        <div className="feature-right">
          <img src={featureImg1} alt="" />
        </div>
      </div>
      <div className="feature-2">
        <div className="feature-left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            voluptate sed dolores a exercitationem perspiciatis consectetur
            pariatur facilis dolorum nemo accusamus autem veritatis inventore,
            id deleniti, quae repudiandae repellat ducimus sunt? Soluta incidunt
            cumque inventore iure perspiciatis perferendis pariatur minus
            doloremque, cum itaque tempore dolorem obcaecati nihil voluptatem
            odio ex?
          </p>

          <button className="know-more">
            <div className="redirect">
              <BsBoxArrowInUpRight />
            </div>
            Know more
          </button>
        </div>
        <div className="feature-right">
          <img src={featureImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
