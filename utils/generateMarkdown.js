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

  return `
# ${title}

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
${license}

## Questions
For any questions, please contact me using the information below:

GitHub: https://github.com/${github}

Email: ${email}
  `;
}

module.exports = generateMarkdown;

