import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5 } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiPython } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const data = [
  {
    id: 1,
    icon: <IoLogoJavascript />,
    title: "JavaScript",
    desc: (
      <p>
        <b>Modern ES6+ :</b> arrow functions, destructuring assignment, spread
        operator, template literals, default parameters, classes
      </p>
    ),
  },
  {
    id: 2,
    icon: <SiPython />,
    title: "Python",
    desc: (
      <p>
        <b>Web development :</b> to develop the back end of a website or
        application using frameworks Django and Flask
      </p>
    ),
  },
  {
    id: 3,
    icon: <RiReactjsLine />,
    title: "React Js",
    desc: (
      <p>
        <b>NEXT.js, React Redux, React Router :</b> for building interactive
        user interfaces and web applications
      </p>
    ),
  },

  {
    id: 4,
    icon: <SiDjango />,
    title: "Django",
    desc: (
      <p>
        <b>Python framework :</b> sending data to and from servers, processing
        data and communicating with databases, URL routing, and ensuring
        security
      </p>
    ),
  },
  {
    id: 5,
    icon: <TbBrandNextjs />,
    title: "NEXT.JS",
    desc: (
      <p>
        <b>React framework :</b> key NextJS features like pre-rendering, SSR,
        data fetching, file-based routing
      </p>
    ),
  },
  {
    id: 6,
    icon: <SiHtml5 />,
    title: "Html",
    desc: (
      <p>
        <b>Markup Language :</b> formatting system for displaying material
        retrieved over the Internet
      </p>
    ),
  },
  {
    id: 7,
    icon: <SiFlask />,
    title: "Flask",
    desc: (
      <p>
        <b>Python framework :</b> sending data to and from servers, processing
        data and communicating with databases, URL routing, and ensuring
        security
      </p>
    ),
  },
  {
    id: 8,
    icon: <SiCss3 />,
    title: "CSS",
    desc: (
      <p>
        <b>Cascading Style Sheets :</b> for laying out and structuring web pages
        (HTML or XML).
      </p>
    ),
  },
  {
    id: 9,
    icon: <SiPostgresql />,
    title: "PostgreSQL",
    desc: (
      <p>
        <b>DBMS :</b> for accessing, modifying and extracting information from
        relational databases
      </p>
    ),
  },

  {
    id: 11,
    icon: <SiBootstrap />,
    title: "Bootstrap",
    desc: (
      <p>
        <b>CSS Framework :</b> for developing responsive and mobile-first
        websites
      </p>
    ),
  },
  {
    id: 12,
    icon: <SiSqlite />,
    title: "SQLite",
    desc: (
      <p>
        <b>Serverless DBMS :</b> for accessing, modifying and extracting
        information from relational databases
      </p>
    ),
  },
];

export default data;
