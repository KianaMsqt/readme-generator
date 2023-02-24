// function to generate markdown for README
module.exports = generateMarkdown;

function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    license,
    github,
    email,
  } = data;

  // Generate license badge based on selected license
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3': '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'None': '',
  };

  const licenseBadge = licenseBadges[license];
  const licenseNotice = (license !== 'None') ? `This project is licensed under the ${license} license.` : '';
  

  return `
# ${title}

${licenseBadge}

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
To install dependencies run following command:
\`\`\`
${installation}
\`\`\`

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
${licenseNotice}

## Questions
For any questions, please contact me using the information below:

GitHub: https://github.com/${github}

Email: ${email}
  `;
}

module.exports = generateMarkdown;

