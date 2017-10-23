# Workout Tracker - Front end repo

This is the repo for the front end I built for a Workout Tracker that I developed for the WDI full stack application project. Links are included below to both the front end as well as the repo for the back end API. For information regarding the API, please visit that repo.
- [Workout Tracker](https://mjs6745.github.io/MJS6745-fullstack-frontend/)
- [Back End API Repo](https://github.com/MJS6745/MJS6745-API)
- [Back End API Prod URL](https://cryptic-reef-91253.herokuapp.com/)

## Overview

This application allows for users to create a profile and track their workouts over time. The app allows users to capture data including the date, duration, intensity/difficulty, and additional descriptive information about each workout. In addition, users can edit and delete workouts that they have created for themselves.

The application also allows for a high level analysis to be performed about the user's workouts. The analysis will group workouts by their time of day and display information about the average duration and intensity of those workouts. As users look to optimize their workouts over time, this analysis can be used to gain insight into when the user may have their best workouts.

## Technologies Used

The front end of the application made use of the following technologies:
- HTML
- CSS
- Boostrap
- JavaScript
- jQuery
- Handlebars
- AJAX

## Unsolved Problems

While there aren't any major problems present in the application that require attention I would still like to continue to build upon the applications functionality.

For future iterations of the front end application I would like to refine the data captured as well as provide additional ability to analyze data in different ways. The analytical abilities are a good start and provide the user some basic information about their workouts but by gathering more data I would be able to provide more analysis to the user.

In addition, future iterations could include the ability for a user to generate their own random workouts based on inputs they provide about how much time they have, their desired workout intensity, as well as providing info about what equipment they have available.

## Planning and Development Process

This section will focus on the planning process used specifically for the front end. For information on the planning process for my API, please visit that repo (link in first section above).

The planning for the front end of the application started with the creation of user stories and a wireframes (see link below). These were essential as they provided the starting point from which I could plan out my code and start construction. The front end layout used a 2 column layout with the left column being a main message area and the right column containing all buttons the user needs to interact with the application.

From there, I experimented with simple bootstrap 2 column layouts that worked best for my design. After iterating upon the design and refining the layout, I created a front end that worked for my requirements. I then created a basic modal template that I could use across the different pieces of functionality.

Without getting into detail on every single piece of functionality built, my approach to construction was to stay as focused in each iteration as possible. So, for example, I would build out the button for a user to sign up, test/commit that button, build the functionality for the AJAX calls on sign up, test/commit that functionality, etc. This allowed me to stay focused and keep my commits small. I would also work closely with my API for each piece of functionality to ensure that the API was functioning as expected for the given area being constructed. More information is included in the next section about my problem solving strategy when issues did come up during development.

Once I had a "baseline" version of the application, I completed a full round of testing on the application in my test environment in which I hit every piece of the application. This final round of testing was important to me as I wanted to make sure all areas of the application functioned as expected after all code was present. For the bugs discovered, I applied a fix and then completed the testing again.

Once all tests had passed and I had a properly working version of the application, I deployed everything to production and completed another round of testing there to ensure all functionality was present and behaving as expected on the production server.

- [User Stories](https://git.generalassemb.ly/MJS6745/full-stack-project-practice/blob/response/practice.md#write-between-3-5-user-stories)
- [Wireframes](https://git.generalassemb.ly/MJS6745/full-stack-project-practice/blob/response/attachments/FullStack_Wireframe.jpg)


## Problem-Solving Strategy

My problem-solving strategy for the front end was driven by an approach that kept my area of focus as limited as possible as I worked. In other words, I would try to keep the focus as narrow as possible for what I was working on. Then, when issues arose, I could pinpoint the root cause of the issue much easier than if I had increased the scope of my current piece of work.

This approach served me very well as it minimized the stress and difficulty of addressing any issues that arose. It also allowed me to more thoroughly test each piece of functionality as I did not feel like the scope of the current area of work was too large for me to dedicate proper testing time towards.
