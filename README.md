# GitHubAPI

#### _This is an application that will allow a user to search GitHub for specific users and return all of their repos with descriptions to the user. It will use Javascript, Node, Bower and Sass.  October 14, 2016._

#### By _**Rebecca Allen**_

## Setup/Installation requirements

* In order to utilize this project you will need a terminal application such as Terminal or Bash, a text editor application such as Atom, and a web browser such as Chrome or Firefox. You will also need to have Node.js(information available at https://nodejs.org/en/download/), Bower and Sass(information available at http://sass-lang.com/install) installed on your computer.
* If you have Node.js installed you may need to globally install Gulp in order to build out and serve the application. This can be done by typing "npm install -g bower gulp" in the terminal.
* Start by opening the terminal application and typing the command "git clone https://github.com/RAAllen/GitHubAPI.git" after navigating with the "cd" command to the location you would like the project to be cloned into.
* You will then need to get an API key from GitHub. This is a free service you simply need to create an account and generate a key at this address: "https://github.com/settings/tokens".
* Create an additional file named ".env". Copy the following text into your .env file "exports.apiKey = "[THIS IS WHERE YOUR API KEY WILL GO]";" replacing the text in the square brackets with the API key you generated from GitHub.
* Then use the terminal application to navigate to the project directory using the "cd" command.
* After navigating to in to the project directory type the following commands:
    1. _"npm install"._
    2. _"bower install"._
    3. _"gulp build"._
    4. _"gulp serve"._
* This should install all dependencies required by the application, then start a web server and open it in your browser.

## Program Specifications

* The program will allow users to search for specific GitHub users and return a list of their repositories and their descriptions.
* Example Input: "Paul Programmer".
* Example Output: Paul Programmer's repositories:
    * php_word_finder: An application that searches an inputted sentence for an inputted word.
    * sql_salon: Uses MySQL and PHP to create an application for a salon owner to keep track of stylists and clients.

## Support and Contact Details

_Please contact RebeccaZarsky@gmail.com for technical questions or assistance running the program._

## Technologies Used

_This program utilizes HTML, CSS, Javascript, Sass, Bower, Node and Bootstrap._

## License

_This program is licensed under the MIT license._

Copyright (c) 2016 **_Rebecca Allen_**
