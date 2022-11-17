# JavaScript Big Practice

## Overview:

- This document provides information about JavaScript Big Practice.
- This is an app that helps manage tasks by breaking down each task : [TodoMVC Web Application](https://todomvc.com/examples/vanilla-es6/#/).

## Targets:

- Apply knowledge of HTML5/CSS3/JavaScript (with ES6 syntax).
- Apply MVC concept.
- DOM manipulation, form validation.
- Understand and apply localStorage.
- Use DevTools for debugging issues.


## Information:

### Timeline:
  - Estimate time: 14 days.
### Technical:
  - [HTML5](https://en.wikipedia.org/wiki/HTML5): is a markup language used for structuring and presenting content on the World Wide Web
  - [CSS3](https://www.techopedia.com/definition/28243/cascading-style-sheets-level-3-css3): is the iteration of the CSS standard used in the styling and formatting of Web pages
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript): is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
  - [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage):  is a standard JavaScript API provided by web browsers. It enables websites to store persistent data on users' devices similar to cookies
  - [JSON server](https://www.digitalocean.com/community/tutorials/json-server):  is a Node Module that you can use to create demo rest json web service in less than a minute. All you need is a JSON file for sample data.
  - [Parcel](https://www.npmjs.com/package/parcel): Parcel is a zero configuration build tool for the web.
- Editor: Visual Studio Code.

### Development environment:

- Node: version 16.16.0
- npm: version 8.11.0
- Parcel: version 1.12.5

### Document:

- [JavaScript Big Practice requirements](https://docs.google.com/document/d/13EwoK3Z7N6oewtBez35zqiH7-w4GJ9HL4wDhA7nzt6c/edit)

### Main app features:

- User can create/edit/delete/mark a task.
- Users can view the list by category Active/Completed/All task.
- Users always see the total number of active tasks currently on the web.
- User can clear all tasks completed.
- Users could log in by mail/password and save their data.

## Getting started
- Clone repo
    - HTTPS: 
      ```
      $ git clone https://github.com/GraphicDThanh/minh-nguyen-internship.git
      ```
    - SSH: 
      ```
      $ git clone git@github.com:GraphicDThanh/minh-nguyen-internship.git
      ```
- Move to minh-nguyen-internship folder 
   ```
   $ cd ./minh-nguyen-internship/
   ```
- Switch to a branch. git checkout <branch name>
   ```
   $ git checkout <branch name>
   ```
- Move to big practice folder
   ```
   $ cd ./javascript/big-practice/
   ```
- Install npm 
   ```
   $ npm install
   ```
- Run database (JSON server)
   ```
   $ npm run start-db
   ```
- Run Project (run in new terminal)
   ```
   $ npm run start
   ```
- Open localhost:5000 to see the website in the browser you use
