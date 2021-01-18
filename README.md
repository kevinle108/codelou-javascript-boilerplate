# codelou-javascript-boilerplate
Boilerplate for CodeLouisville Javascript Track

## Getting Started
This repository is optimized for development using the VS-Code IDE. This editor can be downloaded for free from https://code.visualstudio.com/.

### Cloning the Repository
Ensure you have git installed <https://git-scm.com/>, and that you do not receive any errors when executing `git --version` in a command line or terminal window.

From your command line or terminal window, execute the following commands in a directory you want the repository to be downloaded to.

`git clone https://github.com/Daeluse/codelou-javascript-boilerplate.git`

### Installing NodeJS
If you do not already have NodeJS installed on your machine, you can download it from <https://nodejs.org/en/> (14.15.4 LTS).

Once downloaded and installed, verify you can run `node --version` and `npm --version` without error.

Now you will be able to install the dependencies needed to run test your work. In your terminal, execute the following command from within the root folder of the repository you just downloaded. To make sure you're in the right place, you can use `ls` or `dir` from your terminal to view folder contents, you should see a package.json file listed out.

`npm ci`

## Running the Application
This version uses WebPack and supports TypeScript. To run the application in dev mode, use the `npm run start` command in your terminal from the root folder.