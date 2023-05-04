// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  if (license === "mit") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "GNU GPL v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license === "BSD-2 Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  if (license === "mit") {
    return "https://opensource.org/licenses/MIT";
  }
  if (license === "apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  }
  if (license === "GNU GPL v3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  }
  if (license === "BSD-2 Clause") {
    return "https://opensource.org/licenses/BSD-2-Clause";
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `## License
This project is licensed under ${license} 
${renderLicenseLink(license)}`
}

// function to generate markdown for README

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
  return `# ${title}

## Description
${description}
${renderLicenseBadge(license)} 

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributions](#contributions)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributions
${contributions}

## Tests
${tests}

${renderLicenseSection(license)}

## Questions
If you have any additional questions regarding this project please contact me at ${email}.
You can view more of my work at https://github.com/${GitHub}`;
};

module.exports = generateMarkdown;
