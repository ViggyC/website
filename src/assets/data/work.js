const work_data = [
  {
    id: 1,
    company: "Charles Schwab",
    title: "Associate - Software Development & Engineering",
    link: "",
    from: "Sept 2023",
    to: "Present",
    project:
      "Fund of Funds NPI Hashing Framework (Python, Snowflake, Linux, GCP)",
    description: [
      "• Assumed ownership of the hashing python code base swiftly, becoming the central point of contact",
      "• Streamlined on-prem infrastructure setup by crafting effective bash scripts, including tasks like mounting NAS filesystems and setting permissions in lower environments ",
      "      • Successfully migrated the hashing framework database warehouse from BigQuery to Snowflake, leading to the smooth decommissioning of BigQuery and a seamless transition to Snowflake ",
      "      • Enhanced the reliability and quality of data by optimizing Python code used in the hashing process and Snowflake queries ",
      "      • Achieved an impressive >70% coverage on unit tests, ensuring robustness throughout the framework ",
      "      • Uplifted the hashing framework to both QA and UAT environments, enabling thorough testing and validation ",
      "      • Configured Control-M jobs for seamless integration of the end-to-end pipeline ETL process, encompassing on-prem to GCP and Snowflake, as well as facilitating smooth Bamboo code deployments ",
      "      • Contributed extensively to the overall hashing pipeline by harmonizing infrastructure and code needs, resulting in a streamlined and efficient production workflow.",
    ],
  },
  {
    id: 2,
    company: "University of Colorado Boulder",
    title: "Course Assistant - Artifical Intelligence",
    link: "",
    from: "Jan 2023",
    to: "May 2023",
    description: [
      " • Supported students in learning AI concepts with Python programming",
      " • Held office hours several times per week to help students with coding problem sets",
      " • Topics covered include path finding, Bayesian Networks, reinforcement learning, Hidden Markov Models, and game theory",
      " • Assisted professor with exam and quiz problems",
    ],
  },
  {
    id: 3,
    company: "Charles Schwab",
    title: "Software Engineer Intern",
    link: "",
    from: "June 2022",
    to: "Aug 2022",
    description: [
      " • Developed a cutting-edge governance application using Angular 9, C# .NET Core 3, and SQLServer, empowering Schwab's local governance coordinators and board members to efficiently manage architecture requests submitted by engineering and developer teams through Jira.",
      " • Leveraged the Jira REST API to seamlessly retrieve ticket information, enabling coordinators to submit subtasks and comments to an issue effortlessly.",
      " • Designed and developed a user-friendly and intuitive UI with multiple views, simplifying the process of searching for an issue, scheduling a review, and storing the review time in the database.",
      " • Implemented features to assign reviewers to the review process and seamlessly record their votes in the database, enhancing the efficiency and accuracy of the governance application.",
      " • Implemented a highly efficient 3rd Normal Form Data Model to streamline the management of personal information, review schedules, selected voters/reviewers, voting results, and stipulations. Utilized associative tables and foreign key relationships to reduce redundancy.",
      " • Implemented an intuitive email notification system, facilitating seamless communication between architects and coordinators in various contexts, using SMTP.",
      " • Employed route guards and Single Sign-On (SSO) authentication to ensure secure access for different WAME security groups. ",
      " • Revolutionized the governance process by automating previously manual procedures involving in-person delegation, resulting in a more efficient and streamlined workflow.",
    ],
  },

  {
    id: 4,
    company: "University of Colorado Boulder",
    title: "Course Assistant - Software Development",
    link: "",
    from: "Aug 2021",
    to: "Dec 2021",
    description: [
      " • Supported students in learning the tools and methods used in front-end and back-end software development",
      " • Assisted students in implementing html, CSS, bootstrap, NodeJS, ExpressJS, APIs, Docker, PostgreSQL, and Heroku to develop web applications",
      " • Held office hours several times per week and answered online student questions on Piazza.",
    ],
  },
  {
    id: 5,
    company: "National Science Foundation",
    title: "Undergraduate Researcher",
    link: "https://engineering.usu.edu/eed/reu/previous-years/2021",
    from: "May 2021",
    to: "July 2021",
    description: [
      " • Conducted research in mobile learning with hands on experimentation and its applications to engineering education and fluid mechanics.",
      " • Part of an ONR funded project called 'Mobile Instructional Particle Image Velocimetry (mI-PIV): Using Mobile Devices to Improve Interest and Conceptual Learning in Fluid Mechanics through Hands-on Flow Visualization and Experimentation'.",
      " • Worked with a team of researchers to develop a curriculum for mI-PIV and conducted qualitative research in order to determine the feasibility of an education app for teaching fluid concepts.",
    ],
  },
];

export default work_data;
