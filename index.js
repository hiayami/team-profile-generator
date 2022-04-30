//var to get npm package
var inquirer = require("inquirer");
const fs = require("fs");
//calls classes from files in lib folder
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');

//async function to have user answer all prompts before creating HTML file
(async function () {
  const managerInfo = await inquirer.prompt([
    { name: "name", message: "Enter manager name" },
    { name: "ID", message: "Enter manager ID" },
    { name: "email", message: "Enter manager email" },
    { name: "customAttribute", message: "Enter manager office number" },
  ]);

  //keep employees in an array
  const employees = [];

  //add Manager to array
  employees.push(new Manager(managerInfo));

//prompt user to choose role, to create employee type
  let roleInfo = await inquirer.prompt([
    {
      name: "role",
      message: "Choose team member role",
      type: "list",
      choices: ["engineer", "intern", "exit"],
    },
  ]);

//continue to loop until user chooses "exit"
  while (roleInfo.role != "exit") {
    let schoolOrUsernameMessage = "Enter school name";
    if (roleInfo.role == "engineer") {
      schoolOrUsernameMessage = "Enter GitHub username";
    }

//prompt user for info about employee
    const teammateInfo = await inquirer.prompt([
      { name: "name", message: "Enter team member name" },
      { name: "ID", message: "Enter team member ID" },
      { name: "email", message: "Enter team member email" },
      { name: "customAttribute", message: schoolOrUsernameMessage },
    ]);

//add answers to employee array
    employees.push(
      roleInfo.role == "engineer"
        ? new Engineer(teammateInfo)
        : new Intern(teammateInfo)
    );

//ask next role to create
    roleInfo = await inquirer.prompt([
      {
        name: "role",
        message: "Choose team member role",
        type: "list",
        choices: ["engineer", "intern", "exit"],
      },
    ]);
  }

//map employees array into HTML employee cards and join it into a single string
  const cards = employees
    .map(
      (employee) => `
        <div class="card is-inline-block m-2" style="width:220px">
            <div class="card-header hero is-info p-2">
                <h2 class="is-size-3">${employee.name}</h2>
                <div class="is-size-4">
                    ${employee.role}
                </div>
            </div>
            <div class="px-2 py-3 has-background-white-ter">
                <div class="has-background-white px-3 py-1 mb-1">
                    ID: ${employee.ID}
                </div>
                <div class="has-background-white px-3 py-1 mb-1">
                    Email: <a href="mailto:${employee.email}">${employee.email}</a>
                </div>
                <div class="has-background-white px-3 py-1">
                     ${employee.customAttribute}
                </div>
            </div>
        </div>
    `
    )
    .join("\n");

//creates HTML for page, injects employee cards into it
  const HTML = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My Team</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
                />
            </head>

            <section class="hero is-danger">
                 <div class="hero-body">
                     <p class="title has-text-centered" >
                        My Team
                     </p>
                 </div>
            </section>

            <section
                class="is-flex is-flex-wrap-wrap is-justify-content-center"
                style="max-width:713px;margin:40px auto 0;"
            >
              ${cards}
            </section>

            <body>

            </body>
        </html>
    `;
  fs.writeFileSync("index.HTML", HTML);
})();
