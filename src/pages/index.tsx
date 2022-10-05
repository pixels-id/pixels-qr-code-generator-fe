import { Url } from "Layout/Main/Url/Url";
import type { NextPage } from "next";
import Layout from "../Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Url />
    </Layout>
  );
};

export default Home;
