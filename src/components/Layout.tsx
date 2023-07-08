import React, { ReactNode } from "react";
import { Link } from "gatsby";

interface ILayout {
  pageTitle: string;
  children: ReactNode;
}

const Layout = ({ pageTitle, children }: ILayout) => {
  return (
    <div>
      <nav>
        <ul className="flex flex-row gap-12">
          <li>
            <Link
              className="text-pink-700 font-medium hover:text-pink-600 text-2xl"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-pink-700 font-medium hover:text-pink-600 text-2xl"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-5xl text-slate-100 mt-4">{pageTitle}</h1>
        {children}
        <footer className="text-slate-100">
          This blog is build with Gatsby and TailwindCSS
        </footer>
      </main>
    </div>
  );
};

export default Layout;
