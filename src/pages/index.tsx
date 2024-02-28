import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/Header/Header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Heading 1</h1>
      <p>Test</p>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
