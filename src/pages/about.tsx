import React from "react";
import { type HeadFC, Link, type PageProps } from "gatsby";
import Layout from "../components/Layout";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-purple-950 min-h-screen p-12">
      <Layout pageTitle="About me">
        <div className="min-h-[650px]">
        <p className="font-light text-slate-400 my-6 max-w-lg">
          In 2012, I decided to pursue my dream of studying computer
          engineering. Unfortunately, the career wasn't available in the city
          where I lived at the time. Thanks to the support of my parents and a
          stroke of luck, I ended up studying this wonderful career in the city
          of Córdoba, a little far from home. However, the universe did not
          conspire in my favor. Due to the strong economic crisis that affected
          the country in those years, my possibilities were affected and I had
          to leave the career and return to my hometown. I had to postpone that
          dream a little longer. But internally, I never lost hope of returning
          to the world of technology. In 2020, when the pandemic hit globally, I
          had the opportunity to reconnect with programming. Nowadays, my focus
          is on creating technological products and participating in projects
          that make me proud of not having given up on my dream. When I'm away
          from the computer, I'm probably playing board games with my girlfriend
          and some friends, or teaching physics and mathematics to some group of
          teenagers.
        </p>
        </div>
      </Layout>
    </main>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>About page!</title>
    <meta name="description" content="Your description" />
  </>
);

export default AboutPage;
