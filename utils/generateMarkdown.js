// function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center"> ${data.title}</h1>

  ![badge](https://img.shields.io/badge/license-${data.license}-blue)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#install)
  - [Usage](#usage)
  - [Contribution](#contributors)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Test
  ${data.test}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)

  ## Questions
  Github: https://github.com/${data.github}

  Email: ${data.email}
  
  `;
}

module.exports = generateMarkdown;
