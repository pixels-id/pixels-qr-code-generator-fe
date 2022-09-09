import type { NextPage } from "next";
import Layout from "../components/Layout";
import { VacancyForm } from "../components/Main/VacancyForm";

const QRVacancy: NextPage = () => {
  return (
    <Layout>
      <VacancyForm />
    </Layout>
  );
};

export default QRVacancy;
