# 🍏 Online Apple Store
## 🌟 Introduction
Hello there! Welcome to my project repository, where I’m building practical applications to enhance my web development skills. This project is a collaborative effort aimed at improving our abilities in creating efficient, responsive, and user-friendly web applications. Through this project, I focus on mastering modern frontend technologies and best practices, with an emphasis on clean architecture and scalable design. Our goal is to deliver a maintainable and robust solution while continually improving our coding techniques and workflows.
## 📖 Table of Contents
- [Introduction](#Introduction)
- [Project Description](#Project-Description)
- [Architecture](#Architecture)
- [Features](#Features)
- [Technology](#Technology)
- [Project Setup and Launch Instructions](#Project-Setup-and-Launch-Instructions)
- [Usage Instructions](#Usage-Instructions)
## 📦 Project Description
This project was created to simplify product management and communication with users through integration with the Telegram API. It includes a frontend built with Angular for dynamic content and interactivity, and Node.js on the backend for request handling and data management.
### 🛠️ Architecture:
* 🎨 **Client-side**: Angular is used for dynamic content and interactivity.
* 💅**Styling**: Bootstrap is used to create a responsive interface.
* 🚀**Server-side**: Node.js handles requests, manages data, and integrates with the Telegram API.
* 🍃**Database**: Stores information about products, users, and discussions.
### ✨ Features:
* 💬**Product Discussions**: Users can leave comments and participate in discussions about products.
* 🤖**Telegram Bot**: Automates receipt submissions and responds to user inquiries.
* 🔐**CAPTCHA**: Ensures that users are real people, protecting the system from bots and spam.
### 🖥️ Interface:
* 🏠**Homepage**: A welcome screen featuring popular products and news.
* 📄**Product Page**: Displays product information, user comments, and allows users to leave feedback.
* 📊**Admin Panel**: An intuitive interface for managing comments and viewing statistics.
### ✅ Problems Solved by the Project:
* 📦**Product Management**: The admin panel allows efficient management of discussions and comments.
* ⚡**Fast Communication**: The Telegram bot provides automated communication with users.
* ⚡**Security**: CAPTCHA is used to protect against spam and bots.
## Technology
- ⚡ **TypeScript**: Strongly typed programming language for JavaScript.
- 🌐 **Angular**: A platform for building web applications with dynamic content.
- 🍃 **MongoDB**: NoSQL database for storing and managing data.
- 🚀 **Node.js**: JavaScript runtime for building server-side applications.
- ⚙️ **Express**: Web framework for Node.js for building APIs and handling requests.
- 🤖 **Telegram API**: Used for integrating with Telegram to automate processes.
- 🎨 **HTML & CSS**: The building blocks for structuring and styling web pages.
- 💅 **Bootstrap**: CSS framework for creating responsive, mobile-first websites.
- 🛠️ **Git**: Version control system for tracking changes and collaborating with the team.

# 🎉 Project Setup and Launch Instructions

This guide will help you set up and run the project on your local machine.

## 📋 Prerequisites

Before setting up the project, make sure you have the following installed on your machine:

1. **Node.js**: 
   - You need Node.js to run the server and manage packages.
   - [Download Node.js](https://nodejs.org/) and follow the installation instructions for your operating system.

2. **npm** (Node Package Manager):
   - npm is included with Node.js and is used to install project dependencies.

3. **Angular**:
   - Ensure you have Angular installed globally.
   - Install Angular CLI by running:
     ```bash
     npm install -g @angular/cli
     ```

4. **MongoDB** (if applicable):
   - You can download MongoDB from [MongoDB's official site](https://www.mongodb.com/try/download/community).

5. **Other Dependencies**:
   - Check the `package.json` files in the relevant folders for any additional required packages.

### 📝 Note:
- Verify the versions of Node.js and Angular CLI to ensure compatibility with your project.

## 🚀 Step 1: Install Dependencies
1. Navigate to the Front Folder:

```bash
cd front
npm install
```
2. Navigate to the Back Folder:
```bash
cd ..
cd back
npm install
```
3. Navigate to the mongo Folder:
```bash
cd ..
cd mongo
npm install
```
4. Navigate to the telegram-bot Folder:
```bash
cd ..
cd telegram-bot
npm install
``` 
## 🔄 Step 2: Start the Server
1. Navigate to the front folder:
```bash
cd ..
cd front
```
2. Start the server:
```
npm start
```
## 🎯 Done!
Your project is now running on a local server. You can access it in your browser at http://localhost:3000 or another specified address.

## 🛠️ Usage Instructions
1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
2. Explore the homepage to view popular products.
3. Click on a product to view details and leave comments.
4. Use the Telegram bot to automate receipt submissions by following the provided commands.
5. Admin users can access the admin panel to manage discussions and view statistics.

