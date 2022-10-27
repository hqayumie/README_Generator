
// TODO: Create a function that returns a license badge based on which license is passed in // If there is no license, return an empty string
// function renderLicenseBadge(license) {

// renderLicensebadge => (license === 'none') ? '' : `(https://img.shields.io/badge/license-${data.license}MIT-green)`;
function renderLicenseBadge(license) {
  return `(https://img.shields.io/badge/license-${data.license}MIT-green)`
}
// TODO: Create a func (tion that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

renderLicenseLink => (license === 'none') ? '' : '- [License](#license)';

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

renderLicenseSection => (license === 'none') ? '' : ` ## License This project is licensed under the ${license} license.`;
// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  return `# ${data.title}
 
  ## Description 
  ${data.description}
  
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## License 
  This project is license under ${data.license}

  ## Installation
  ${data.dependencies}

  ## Tests
  ${data.test}

  ## Usage
  ${data.usage}

## Contributing 

  How to contribute to this Repo
  ${data.contribution}
 
  
  
  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
