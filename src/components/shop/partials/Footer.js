import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        Beautiflie © Copyright {moment().format("YYYY")}
        {/* sovial icon
         */}
        <div className="flex justify-center items-center mt-4">
          <a
            href="https://www.facebook.com/nvlshop"
            target="_blank"
            rel="noopener noreferrer"

          >

            <i class="fab fa-facebook-square m-2"></i>
          </a>
          <a
            href="https://www.instagram.com/nvlshop"
            target="_blank"
            rel="noopener noreferrer"
          ><i class="fab fa-instagram-square m-2"></i>

          </a>
        </div>


      </footer>
    </Fragment>
  );
};

export default Footer;
