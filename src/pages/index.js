import React from "react";
import Layout from "../components/layout";

import { CONTACT_EMAIL } from "../constants";

const Divider = () => (
  <div
    style={{
      height: "2px",
      background: "rgb(80, 80, 80)",
      margin: "1rem 0"
    }}
  />
);

const Index = () => (
  <Layout>
    <h1>
      <span role="img" aria-label="hi" style={{ display: "inline" }}>
        👋
      </span>{" "}
      i{"'"}m philip harrison, a software engineer living in london
    </h1>
    <h1>
      building <a href="https://dependabot.com/">dependabot</a>{" "}
      <span
        style={{ display: "inline", verticalAlign: "middle" }}
        aria-label=""
        role="img"
      >
        🤖
      </span>
      <br />
      previously at <a href="https://gocardless.com/about/">gocardless</a>
    </h1>
    <Divider />
    <p>
      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
    </p>
    <p>
      <a href="https://www.linkedin.com/in/feelepxyz/">linkedin</a>
    </p>
    <p>
      <a href="https://github.com/feelepxyz">github</a>
    </p>
    <p>
      <a href="https://keybase.io/feelepxyz">keybase</a>
    </p>
  </Layout>
);

export default Index;
