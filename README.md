# Team Profile Generator
## Description
An application that can be run in the command line to generate an HTML file with all of your team's profiles! 
### User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
### Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
* [Description](#description)
* [Badges](#badges)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [How to Contribute](#how-to-contribute)
* [Tests](#tests)
* [Questions](#questions)
## Installation
Clone repository. This application uses node and npm (inquirer package).
## Usage
Follow the prompts in the command line and an HTML will appear

![team-profile-generator](https://user-images.githubusercontent.com/98536530/166125082-8a22b28f-0151-41b9-9842-5c2ea70fa572.gif)

Link for full video of how to use application: https://drive.google.com/file/d/1Y2FqS6IeiVapPSFNRF9rLZYPrxQLRqpe/view?usp=sharing
### Sample HTML

![Screen Shot 2022-05-07 at 1 33 13 PM](https://user-images.githubusercontent.com/98536530/167270897-1a438c71-b670-4634-b6b4-e10efe26dc9a.png)
[Sample HTML](https://github.com/hiayami/team-profile-generator/blob/main/index.HTML)

## License
Read more about MIT License here: [MIT License](https://opensource.org/licenses/MIT)
## How to Contribute
Refer to installation to contribute
## Tests
Run the application with Jest
## Questions
[hiayami](https://github.com/hiayami)

[ahigashidev@gmail.com](mailto:ahigashidev@gmail.com)
