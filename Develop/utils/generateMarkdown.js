function generateMarkdown(data) {
  if (data.licenses === "MIT License") {
    data.licenses = "[!License: MIT(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }

  return `# ${data.title}
  
  # Table of Contents
  1) [Description](#Description)
  2) [Usage](#Usage)
  3) [Installation](#Installation)
  4) [Contributions](#Contributions)
  5) [Licenses](#Licenses)
  6) [Tests](#Tests)
  7) [Questions](#Questions)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Contributions
  ${data.contributions}

  ## Licenses
  ${data.licenses}

  ## Tests
  ${data.tests}

  ## Questions

  ### GitHub Profile
  ${data.username}(http://github.com/${data.username})

  ### Email
  ${data.email}

`;
}

module.exports = generateMarkdown;
