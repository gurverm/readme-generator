// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
}

// TODO: Create a function to generate markdown for README

const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  contributions,
  tests,
  license,
  GitHub,
  email,
}) => {
  return `
  # ${title}

  ## Description
  ${description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributions](#contributions)
  *[Tests](#tests)
  *[License](#license)
  *[Questions](#questions)


  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contributions
  ${contributions}

  ## Tests
  ${tests}

  ## License
  This project is licensed under ${license}
  ![License](https://img.shields.io/badge/license-${license}-blue.svg)

  ## Questions
  If you have any additional questions regarding this project please contact me at ${email}.
  You can view more of my work at https://github.com/${GitHub}

  `;
};

module.exports = generateMarkdown;
