import React from "react";
import useAuth from "../hooks/use-auth";
import latinToCyrillicText from "../utils/latin-to-cyrilic";
import Layout from "../components/Layout/Layout";

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Layout>
      <div className="mt-5 text-center">
        <h2>
          Добредојдовте {latinToCyrillicText(user?.firstName ?? "")}{" "}
          {latinToCyrillicText(user?.lastName ?? "")} во вашиот дневник.
        </h2>
        <h4>Училиште: {latinToCyrillicText(user?.school ?? "")} </h4>
      </div>
    </Layout>
  );
};

export default Home;
