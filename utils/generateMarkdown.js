// function to generate markdown for README
const currentDate = new Date().getFullYear();
// function renderLicenseBadge(license) {
//   if (license !== "None") {
//     return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
//   }
//   return "";
// }
function generateMarkdown(data) {
  let license;
  switch (data.license) {
    case "MIT":
      license = `Copyright [${currentDate}] [${data.nameOne}]
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

      break;
    case "Apache":
      license = `Copyright [${currentDate}] [${data.nameOne}]
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
  https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
      break;
    default:
      license = `Copyright [${currentDate}] [${data.nameOne}]
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
      break;
  }
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#License)
* [Contributing](#Contributing)
* [Test](#test)
* [Question](#Question)

## Installation
${data.installation}

## Usage
 ${data.usage}

## License
${license}
![badge](https://img.shields.io/badge/${encodeURI(
    data.license
  )}-License-<color>)

## Contributing
 ${data.contribute}

## Test
${data.test}

## Question
${data.questions}

Github user name: ${data.github}
https://github.com/${data.github}`;
}

module.exports = generateMarkdown;

// function renderLicenseBadge(license) {
//   if (license !== "None") {
//     return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
//   }
//   return "";
// }
// function renderLicenseLink(license) {
//   if (license !== "None") {
//     return `\n* [License](#license)\n`;
//   }
//   return "";
// }
// function renderLicenseSection(license) {
//   if (license !== "None") {
//     return `## License
// This project is licensed under the ${license} license.`;
//   }
//   return "";
// }
// function generateMarkdown(data) {
//   return `# ${data.title}
// ${renderLicenseBadge(data.license)}
// ## Description
// ${data.description}
// ## Table of Contents
// * [Installation](#installation)
// * [Usage](#usage)
// ${renderLicenseLink(data.license)}
// * [Contributing](#contributing)
// * [Tests](#tests)
// * [Questions](#questions)
// ## Installation
// To install necessary dependencies, run the following command:
// \`\`\`
// ${data.installation}
// \`\`\`
// ## Usage
// ${data.usage}
// ${renderLicenseSection(data.license)}
// ## Contributing
// ${data.contributing}
// ## Tests
// To run tests, run the following command:
// \`\`\`
// ${data.test}
// \`\`\`
// ## Questions
// If you have any questions about the repo, open an issue or contact me directly at ${
//     data.email
//   }. You can find more of my work at [${data.github}](https://github.com/${
//     data.github
//   }/).
// `;
// }
// module.exports = generateMarkdown;
