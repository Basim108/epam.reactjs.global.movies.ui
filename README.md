[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/project/overview?id=Basim108_epam.reactjs.global.movies.ui)

### Definition

During the whole program you will be implementing a single page app (SPA), which will allow users to search, view, add and delete movies from the Movies DB database.
Each module contains a small subset of requirements for implementing the app. At the end, once you finish all modules, you will get a fully working SPA.

### Process

Therefore, it's recommended to create a single git repository that you will use during the program.
You can use whatever platform to publish your code: GitHub, GitLab, Bitbucket or any other. Discuss with your mentor, which one is preferable.
Repository can be private, just ensure that your mentor has access to it.

During the program you will emulate project activities: create a new branch for every module, implement home task in the branch and then open a pull request (merge request) to the main branch.
Your mentor will review your pull requests, leave necessary comments and eventually approve your pull requests. Once approved by mentor, a pull request can be merged.
It's not recommended to start a new module before merging a pull request from the previous one. Otherwise you may encounter some git conflicts.

### Design Prototype

There's a [Figma project with designs](https://www.figma.com/file/fKGjrOqR6nJe6LYJopGCZ8/CDP-Home-Task-%E2%80%93-React-v1). Anonymous users can view sample pages.
It explains how the app should behave at the end of the program.

At the top navbar there is a "Play" button that gets you into the clickable prototype.
You can go through that prototype to see the concept in action.

If you log in under any account (you can create your personal one for free), you will get access to inspect mode.

If it's not clear what part of functionality should be implemented in every module discuss this with your mentor.

It's not required to implement pixel-perfect design. You can implement it schematically.
The program is not focused on teaching you HTML and CSS skills.

### Backend API

At some point you will have to start integrating with the backend HTTP API.
The backend is already implemented for you. To access it, follow these steps:

1. Clone the source repository: https://github.com/VarvaraZadnepriak/MoviesAPI.ReactJS
2. Run "npm install" to install all dependencies
3. Run "npm start" to start the backend API server

The server will start at http://localhost:4000/.
You can find the Swagger documentation at http://localhost:4000/api-docs.
