import multilookup from "../images/pa3.png";
import proxy from "../images/proxy.png";
import optimizedHealth from "../images/optimized.png";
import meal from "../images/meal.png";
import dfs from "../images/dfs.jpeg";

const project_data = [
  {
    id: 1,
    image: multilookup,
    title: "Multi-threaded DNS Resolver",
    description:
      "Programmed a multi-threaded DNS lookup resolver in C. This project is part of the Operating Systems course at CU Boulder. Utilizes semaphores and mutexes to provide synchroinzation between Requester and Resolver threads.",
    github: "https://github.com/ViggyC/Multilookup",
    demo: "",
  },
  {
    id: 2,
    image: proxy,
    title: "HTTP Web Proxy",
    description:
      "Programmed an HTTP Web Proxy in C. Handles simultaneous client connections and implements keep-alive sockets This proxy will serve data such as a webpage from a remote origin host and serve the data to a client such as Firefox browser or netcat. Utilizes caching of web pages during specified timeout period. Part of the Network Systems course at CU Boulder",
    github: "https://github.com/ViggyC/Network-Systems/tree/main/PA3",
    demo: "",
  },
  {
    id: 3,
    image: optimizedHealth,
    title: "Optimized Health",
    description:
      "This smart health application is an all in one stop for users to log their fitness, nutrition, and sleep data. Built with NodeJS and SQL, as well as the Spoonacular nutrition and New York Times articles API.",
    github: "https://github.com/ViggyC/optimizedHealth",
    demo: "",
  },
  {
    id: 4,
    image: meal,
    title: "Meal Generator",
    description:
      "This application is made with NodeJs and PostgreSQL. Users can search for meals using keywords and the API returns a json object that contains all of the meal info. Users can then review the meal item and the review is stored in the database.",
    github: "https://github.com/ViggyC/csci3308-finalproject",
    demo: "https://mealreview.fly.dev",
  },
  {
    id: 5,
    image: dfs,
    title: "Distributed File Server",
    description:
      "Multi-threaded distributed file server programmed in C. Handles client requests for GET, PUT, and LIST which will partition the file into chunks and construct or deconstruct the files distribiuted across multiple servers",
    github: "https://github.com/ViggyC/Network-Systems/tree/main/PA4",
    demo: "",
  },
];

export default project_data;
