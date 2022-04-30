var inquirer = require("inquirer");
const fs = require('fs');

//async function to have user answer all prompts before 
(async function() {
    const managerInfo = await inquirer.prompt([
        
           { name: "managerName", message: "Enter manager name" },
           { name: "managerID", message: "Enter manager ID" },
           { name: "managerEmail", message: "Enter manager email" },
           { name: "officeLocation", message: "Enter manager office number" },
        
    ])
    let roleInfo = await inquirer.prompt([
        {
            name: "role",
            message: "Choose team member role",
            type: "list",
            choices: [
                "engineer", "intern", "exit",
            ]
        }
    ])
    const teammates = []
    while (roleInfo.role != "exit") {
        let schoolOrUsernameMessage = "Enter school name"
        if (roleInfo.role == "engineer") {
            schoolOrUsernameMessage = "Enter GitHub username"
        } 

        const teammateInfo = await inquirer.prompt ([

                {name: "teamName", message: "Enter team member name"},
                {name: "ID", message: "Enter team member ID"},
                {name: "email", message: "Enter team member email"},
                {name: "schoolOrUsername", message: schoolOrUsernameMessage}
                
        ])

        teammateInfo.role = roleInfo.role

        teammates.push(teammateInfo)

        roleInfo = await inquirer.prompt([
            {
                name: "role",
                message: "Choose team member role",
                type: "list",
                choices: [
                    "engineer", "intern", "exit",
                ]
            }
        ])
    }
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
                <div class="card is-inline-block m-2" style="width:220px">
                    <div class="card-header hero is-info p-2">
                        <h2 class="is-size-3">${managerInfo.managerName}</h2>
                        <div class="is-size-4">
                            <i class="fa-solid fa-mug-hot"></i>
                            Manager
                        </div>
                    </div>
                    <div class="px-2 py-3 has-background-white-ter">
                        <div class="has-background-white px-3 py-1 mb-1">
                            ID: ${managerInfo.managerID}
                        </div>
                        <div class="has-background-white px-3 py-1 mb-1">
                            Email: <a href="mailto:${managerInfo.managerEmail}">${managerInfo.managerEmail}</a>
                        </div>
                        <div class="has-background-white px-3 py-1">
                            Office number: ${managerInfo.officeLocation}
                        </div>
                    </div>
                </div>
            </section>

            <body>

            </body>
        </html>
    `
    fs.writeFileSync('index.HTML', HTML)
})()

// inquirer
//     .prompt([
//         { name: "managerName", message: "Enter manager name"},
//     ])
//     .then(answer => { })
//     .catch(e => console.error(e))