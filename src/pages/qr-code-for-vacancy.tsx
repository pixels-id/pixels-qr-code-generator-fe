import type { NextPage } from "next";
import Layout from "../Layout/Layout";
import { VacancyForm } from "../Layout/Main/VacancyForm";

const QRVacancy: NextPage = () => {
  return (
    <Layout>
      <VacancyForm />
    </Layout>
  );
};

export default QRVacancy;
