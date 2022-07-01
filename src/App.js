import { useState } from "react";

import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Nav from "./components/Navigation";
import twitcherImage from "./assets/images/twitcher.png";
import weatherDashboardImage from "./assets/images/weather-dashboard.png";

function App() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      default:
        return <Project projects={projects} />;
      // default:
      //   return <Contact />;
    }
  };

  // An image of the deployed application (either a GIF or a screenshot)
  // The title of the project
  // A link to the deployed application
  // A link to the corresponding GitHub repository

  const projects = [
    {
      id: 1,
      title: "Twitcher",
      image: twitcherImage,
      description:
        "A members-only blog for bird lovers in the Triangle, NC, area.",
      deployed: "https://triangle-twitchers.herokuapp.com/",
      github: "https://github.com/beatricekallen/twitcher",
    },
    {
      id: 2,
      title: "Beers and Cheers",
      image: "./assets/images/twitcher.png",
      description:
        "Need an app to help you plan the perfect night out? Gotcha covered.",
      deployed: "https://beatricekallen.github.io/beers-and-cheers/",
      github: "https://github.com/beatricekallen/beers-and-cheers",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: weatherDashboardImage,
      description:
        "Find out the current weather and the 5-day forecast in any city.",
      deployed: "https://beatricekallen.github.io/weather-dashboard/",
      github: "https://github.com/beatricekallen/weather-dashboard",
    },
    // {
    //   id: 4,
    //   title: ,
    //   image: ,
    // description: "",
    //   deployed:
    //   github:
    // },
    // {
    //   id: 5,
    //   title: ,
    //   image: ,
    // description: "",
    //   deployed:
    //   github:
    // },
    // {
    //   id: 6,
    //   title: ,
    //   image: ,
    // description: "",
    //   deployed:
    //   github:
    // }
  ];

  return (
    <div>
      <Header></Header>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      <main>
        <div>{renderPage()}</div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
