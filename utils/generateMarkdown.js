// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# ${data.description}
# ${data.contents}`;
}

//   return;
//   {
//     data.title;
//   }
//   {
//     data.description;
//   }
// }

module.exports = generateMarkdown;
