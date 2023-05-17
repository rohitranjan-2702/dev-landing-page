# TO CONTRIBUTE

## A) Prerequisites

> 1. You must have the latest version of git installed and Node.js installed on your local machine (PC).
>    If not, then download and install git and Node.js from
>    https://gitscm.com/downloads
>    https://nodejs.org/en
> 2. To check if the git has been properly installed type git -v and node --version in your Command Prompt/terminal.
> 3. Basic git idea of git and git commands.

## B) How to Contribute to the Project

#### There are three processes involved in contributing to the Project

1. Setting Up the Project on your Local PC
2. Making changes to the Project
3. Creating a Pull Request for your changes

### 1) Setting Up the Project on your Local PC

Main Project - (will have Main URL from Code Button on https://github.com/rohitranjan-2702/dev-landing-page )
Forked Project - (will have Forked URL from Code Button on your GitHub Account)

For setting up the Project on your Local PC, the following steps should be followed

#### 1.1) Fork the Project Repo on your GitHub Account

- Go to https://github.com/rohitranjan-2702/dev-landing-page and click on the fork button in the top right corner

- It will take you Create a new fork page

- Add the Own Repository Name <Forked Repo Name> and Description, then click on copy the master branch only then proceed to Create Fork

- It will take you to your GitHub Account where you have forked the project

#### 1.2) Cloning the Project on your Local Machine (PC)

You have already forked (made a copy) the Main Project on Your GitHub Account, now it's time to make a copy on Your PC

- Open your PC, Create a New Folder on Your PC name it by your Convention

- Go to the forked repo on your GitHub Account

> Here example https://github.com/Shash-cre-dev/Open-Source-dev-landing-page

- click the green Code button, Under Local > Clone > HTTPS > link
  copy the link (This is Forked Link)

- Open the Folder with Git Bash Here

- Enter <code>**git clone --depth 1** (then paste the Forked link with right click)

- Change the directory of git via <code>**cd** (Forked Repo Name)

- Now do <code>**git remote add upstream** (URL of the Main Project)

> Main Project URL can be found on https://github.com/rohitranjan-2702/dev-landing-page

- click the green Code button

- Under Local > Clone > HTTPS > link

- copy the link (This is Main Link)

- Enter <code> **git remote add upstream** https://github.com/rohitranjan-2702/dev-landing-page.git

- Next Enter <code>**git pull upstream master**

#### 1.3) Running the Project on your Local Machine

- Go to the Folder where you have cloned the forked Repo, and open it with your favourite Code Editor - VS Code, atom

- To run the React Project, one must install the required Node Modules /dependencies
  To do that open **Terminal** in your Code Editor (Here VS Code)

- Enter <code>**npm install**</code> (Node.js must be installed on Your PC for this command to Run)
  It will download the required Node Modules in a few seconds.

- Then to run the Project Enter <code>**npm run dev**

- Click on the generated Local Link to run the Project

## 2) Making Changes to the Project

**NOTE :** For every group of changes, A contributor must create a new branch in order to contribute and help the Maintainers overview your work, and per pull request one issue or bug can be resolved

#### 2.1) Creating a New Branch
