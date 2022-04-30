var inquirer = require("inquirer");
const fs = require("fs");

class Person {
  name;
  ID;
  email;
  role;
  customAttribute;
  constructor(res) {
    this.name = res.name;
    this.ID = res.ID;
    this.email = res.email;
  }
}

class Manager extends Person {
  role = '<i class="fa-solid fa-mug-hot"></i> Manager';
  constructor(res) {
    super(res);
    this.customAttribute = `Office number: ${res.customAttribute}`;
  }
}

class Engineer extends Person {
  role = '<i class="fa-solid fa-glasses"></i> Engineer';
  constructor(res) {
    super(res);
    this.customAttribute = `GitHub: ${res.customAttribute}`;
  }
}

class Intern extends Person {
  role = '<i class="fa-solid fa-user-graduate"></i> Intern';
  constructor(res) {
    super(res);
    this.customAttribute = `School: ${res.customAttribute}`;
  }
}

//async function to have user answer all prompts before
(async function () {
  const managerInfo = await inquirer.prompt([
    { name: "name", message: "Enter manager name" },
    { name: "ID", message: "Enter manager ID" },
    { name: "email", message: "Enter manager email" },
    { name: "customAttribute", message: "Enter manager office number" },
  ]);

  const persons = [];

  persons.push(new Manager(managerInfo));

  let roleInfo = await inquirer.prompt([
    {
      name: "role",
      message: "Choose team member role",
      type: "list",
      choices: ["engineer", "intern", "exit"],
    },
  ]);

  while (roleInfo.role != "exit") {
    let schoolOrUsernameMessage = "Enter school name";
    if (roleInfo.role == "engineer") {
      schoolOrUsernameMessage = "Enter GitHub username";
    }

    const teammateInfo = await inquirer.prompt([
      { name: "name", message: "Enter team member name" },
      { name: "ID", message: "Enter team member ID" },
      { name: "email", message: "Enter team member email" },
      { name: "customAttribute", message: schoolOrUsernameMessage },
    ]);

    persons.push(
      roleInfo.role == "engineer"
        ? new Engineer(teammateInfo)
        : new Intern(teammateInfo)
    );

    roleInfo = await inquirer.prompt([
      {
        name: "role",
        message: "Choose team member role",
        type: "list",
        choices: ["engineer", "intern", "exit"],
      },
    ]);
  }

  const cards = persons
    .map(
      (person) => `
        <div class="card is-inline-block m-2" style="width:220px">
            <div class="card-header hero is-info p-2">
                <h2 class="is-size-3">${person.name}</h2>
                <div class="is-size-4">
                    ${person.role}
                </div>
            </div>
            <div class="px-2 py-3 has-background-white-ter">
                <div class="has-background-white px-3 py-1 mb-1">
                    ID: ${person.ID}
                </div>
                <div class="has-background-white px-3 py-1 mb-1">
                    Email: <a href="mailto:${person.email}">${person.email}</a>
                </div>
                <div class="has-background-white px-3 py-1">
                     ${person.customAttribute}
                </div>
            </div>
        </div>
    `
    )
    .join("\n");

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

// inquirer
//     .prompt([
//         { name: "managerName", message: "Enter manager name"},
//     ])
//     .then(answer => { })
//     .catch(e => console.error(e))
