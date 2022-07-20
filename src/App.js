import { useState } from "react";

import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import twitcherImage from "./assets/images/twitcher.png";
import weatherDashboardImage from "./assets/images/weather-dashboard.png";
import beersAndCheersImage from "./assets/images/beers-and-cheers.png";
import techBlogImage from "./assets/images/tech-blog.png";
import workdaySchedulerImage from "./assets/images/scheduler.png";
import roamImage from "./assets/images/roam-img.png";

function App() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Project projects={projects} />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  const projects = [
    {
      id: 5,
      title: "Roam",
      image: roamImage,
      description:
        "An application that allows users to plan trips with friends, including splitting expenses and offsetting carbon emissions. Built with JavaScript, HTML, CSS, Material UI, MongoDB, Mongoose, Express, React, Node.js, GraphQL, Apollo, and Stripe.",
      deployed: "https://pacific-depths-60618.herokuapp.com/",
      github: "https://github.com/beatricekallen/roam",
    },
    {
      id: 1,
      title: "Twitcher",
      image: twitcherImage,
      description:
        "A members-only blog for bird lovers in the Triangle, NC, area. Built with JavaScript, HTML, Materialize CSS, Node.js, Express, Sequelize, Nodemailer, Handlebars, and bcrypt.",
      deployed: "https://triangle-twitchers.herokuapp.com/",
      github: "https://github.com/beatricekallen/twitcher",
    },
    {
      id: 2,
      title: "Beers and Cheers",
      image: beersAndCheersImage,
      description:
        "Need an app to help you plan the perfect night out? Gotcha covered. Search for breweries and events in your area. Built with JavaScript, HTML, Bulma CSS, GitHub, Unsplash, Open Brewery API, and Ticketmaster API.",
      deployed: "https://beatricekallen.github.io/beers-and-cheers/",
      github: "https://github.com/beatricekallen/beers-and-cheers",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: weatherDashboardImage,
      description:
        "Find out the current weather and the 5-day forecast in any city. Built with JavaScript, Bootstrap, HTML, and Open Weather API.",
      deployed: "https://beatricekallen.github.io/weather-dashboard/",
      github: "https://github.com/beatricekallen/weather-dashboard",
    },
    {
      id: 4,
      title: "Tech Blog",
      image: techBlogImage,
      description:
        "An application that allows users to view and post blogs. The app also includes comment, edit, and delete functionalities. Built with Node.js, Express, and Sequelize. Follows the MVC paradigm.",
      deployed: "https://tech-blog-bka.herokuapp.com/",
      github: "https://github.com/beatricekallen/tech-blog",
    },
    {
      id: 6,
      title: "Work Day Scheduler",
      image: workdaySchedulerImage,
      description:
        "This daily planner allows users to schedule their days by saving events for each hour in a typical workday. Saved events are available to users even after closing or refreshing the browser. Built with JavaScript, HTML, and CSS.",
      deployed: "https://beatricekallen.github.io/work-day-scheduler/",
      github: "https://github.com/beatricekallen/work-day-scheduler",
    },
  ];

  return (
    <div>
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Header>

      <main>
        <div>{renderPage()}</div>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
