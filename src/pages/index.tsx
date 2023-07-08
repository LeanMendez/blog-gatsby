import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-purple-950 min-h-screen p-12">
      <Layout pageTitle="Leandro Mendez">
      <div className="min-h-[650px]">
      <h2 className="text-3xl text-slate-100 my-6">Blog personal</h2>
      <p className="font-light text-lg text-slate-400 my-6">
        This site will contain my personal articles about the chronicles of life
        and death as I delve into the tech world.
      </p>
      </div>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Blog built with Gatsby!</title>;
