# Employee Directory
Employee Directory is web application, built with React, that displays employee photos, names, phone numbers and dates of birth.

## Purpose
The purpose of the Employee Directory Application is to demonstrate:

- how to build an application with React.js
- how to break up the application's user interface into components
- how to manage component state
- how to respond to user events

## User Story
As a user, I want to be able to view my entire employee directory at once, so that I have quick access to employee information.

## Business Context
An employee, manager, or business owner would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful for a user to be able to filter employees by name.

Given applicable employee data, when a user loads the web page, a table of employees renders to the screen.

The user is able to:
  - sort the table by at least one category
  - filter the users by at least one category

## How to View and Use this Project
Anyone with a computer and internet access can either use the application or view the project. 

Open a browser and go to the link below to view the employee directory:

https://shininglite.github.io/employee-directory/
  
View the source code for this quiz at:
https://github.com/shininglite/employee-directory/

## Basic Functional Description
Given a table of random users, when the user loads the page, a table of employees renders. 

A user is able to:

Sort the table
Filter the users by name

This application is deployed to GitHub pages. As a reference below, are instructions on how this was done.

-----------------------------
## How to Deploy a React App to GitHub Pages

For reference purposes, I am documenting how to deploy a React Appliction to GitHub Pages. Click the following link for the whole article:

https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

or read the significant parts of the article below.

Prerequisites:

You must have a GitHub Account

Install Git in your machine and Set up Git.

Make sure you have Node.js and Npm installed in your machine.

Install Node.js

Install Node Package Manager

Notice You’ll need to have Node 8.10.0 or later on your local machine.

Procedure :

1- First create a repository named my-app using create-react-app.

npm init react-app my-app

2- Install GitHub Pages package as a dev-dependency.

cd my-app
npm install gh-pages --save-dev

3- Add properties to package.json file.

The first property we need to add at the top level homepage second we will define this as a string and the value will be "http://{username}.github.io/{repo-name}" {username} is your GitHub username, and {repo-name} is the name of the GitHub repository you created it will look like this :

"homepage": "http://yuribenjamin.github.io/my-app"

Second in the existing scripts property we to need to add predeploy and deploy.


"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}

package.json example


4- Create a Github repository and initialize it and add it as a remote in your local git repository.

Now, create a remote GitHub repository with your app name and go back initialize this
git init

Add it as remote

git remote add origin git@github.com:Yuribenjamin/my-app.git

5- Now deploy it to GitHub Pages.

just run the following command :

npm run deploy

successful build

this command will create a branch named gh-pages this branch host your app, and homepage property you created in package.json file hold your link for a live preview, or you can open the branch setting scroll down to GitHub Pages section you will find this:

Your site is published

Visit deployed app

6- commit and push your commit to GitHub. Optionally

git add .
git commit -m "Your awesome message"
git push origin master

## Developed By

Thomas van Deusen