import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "normalize.css";
import "./index.css";

const Layout = ({ children }) => (
  <div>
    <Helmet title="philip harrison @feelepxyz" />
    <div
      style={{
        maxWidth: "500px",
        padding: "1rem 1.5rem"
      }}
    >
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.Node
};

export default Layout;
