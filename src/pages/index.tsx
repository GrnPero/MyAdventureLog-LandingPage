import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/Header";

const IndexPage: React.FC<PageProps> = () => {
  return <Header />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
