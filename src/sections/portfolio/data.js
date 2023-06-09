import foodorder from "../../assets/food-order.jpg";
import homerentals from "../../assets/home-rentals.jpg";
import email from "../../assets/email.jpg";
import expense from "../../assets/expense.jpg";
import ecommerce from "../../assets/e-commerce.jpg";
import meetups from "../../assets/meetups.png";
import events from "../../assets/events.jpg";
import blog from "../../assets/blog.jpg";

const data = [
  {
    id: 1,
    category: "Django",
    image: homerentals,
    title: "Home Rentals (django)",
    desc: (
      <>
        Here the user can login, logout and register an account. They can list a
        new home, rent, save or send a tour request to the listing owner. Filter
        listings using different options. Toggle between listings using the map.
        This project uses <span>django key features and SQLite db</span>.
      </>
    ),
    demo: "https://home-rentals-7803.onrender.com",
    github: "https://github.com/ArmanBarseghyan83/home-rentals.git",
  },
  {
    id: 2,
    category: "Django",
    image: email,
    title: "Email (django)",
    desc: (
      <>
        Here the user can login, logout and register an account. They can send,
        receive, archive or reply to an email. This project uses{" "}
        <span>django key features and SQLite db</span>.
      </>
    ),
    demo: "https://email-ia40.onrender.com",
    github: "https://github.com/ArmanBarseghyan83/email.git",
  },

  {
    id: 3,
    category: "Flask",
    image: ecommerce,
    title: "E-commerce (flask)",
    desc: (
      <>
        Here the user can login, logout and register an account. They can
        create, add to cart, delete if authenticated or buy a listing. This
        project uses <span>flask key features and SQLite db</span>.
      </>
    ),
    demo: "https://flask-app-3cw8.onrender.com",
    github: "https://github.com/ArmanBarseghyan83/flask_app.git",
  },
  {
    id: 4,
    category: "React",
    image: foodorder,
    title: "Food Order (react)",
    desc: (
      <>
        Here the user can order meals, which is saved in the database. The user
        can increase, decrease or cancel the order, which will be saved in the
        database. This project uses{" "}
        <span>
          context api, useReducer, useState, useRef, useEffect, Firebase db
        </span>
        .
      </>
    ),
    demo: "https://armanbarseghyan83.github.io/food-order/",
    github: "https://github.com/ArmanBarseghyan83/food-order.git",
  },
  {
    id: 5,
    category: "React",
    image: expense,
    title: "Expense Tracker (react)",
    desc: (
      <>
        Here the user can save and track their monthly expenses, which will be
        displayed in the form of a chart. This project uses{" "}
        <span>
          react-redux, @reduxjs/toolkit, useState, useEffect, Firebase db
        </span>
        .
      </>
    ),
    demo: "https://armanbarseghyan83.github.io/expense-traker/",
    github: "https://github.com/ArmanBarseghyan83/expense-traker.git",
  },
  {
    id: 6,
    category: "React",
    image: events,
    title: "Events (react)",
    desc: (
      <>
        In this project the user can create, update, delete an event, or sign up
        for an event. This project uses{" "}
        <span>
          react-router, useRouteLoaderData, useLoaderData, useNavigation,
          useNavigate, useSubmit, Outlet, Firebase db
        </span>
        .
      </>
    ),
    demo: " https://armanbarseghyan83.github.io/events/",
    github: "https://github.com/ArmanBarseghyan83/events.git",
  },
  {
    id: 7,
    category: "NEXT.js",
    image: meetups,
    title: "Meetups (next.js)",
    desc: (
      <>
        Here the user can create, update or save a meetup which will be saved in
        the mongodb. This project uses{" "}
        <span>next.js key features and Mongodb</span>.
      </>
    ),
    demo: "https://meetups-phi-one.vercel.app/",
    github: "https://github.com/ArmanBarseghyan83/meetups.git",
  },
  {
    id: 8,
    category: "NEXT.js",
    image: blog,
    title: "Blog (next.js)",
    desc: (
      <>
        This is a blog website, where the user can read blogs and send a message
        to the owner. Blogs are saved in the markdown files. This project uses{" "}
        <span>next.js key features, Markdown and Mongodb</span>.
      </>
    ),
    demo: "https://blog-beta-eosin.vercel.app/",
    github: "https://github.com/ArmanBarseghyan83/blog.git",
  },
];

export default data;
