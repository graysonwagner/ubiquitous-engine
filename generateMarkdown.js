
function renderLicenseBadge(license) {
    switch (license) { 
      case 'MIT':
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        break;
      case 'GPLv2':
        licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
        break;
      case 'Apache':
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;
      case 'GPLv3':
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        break;
      default: 
        return '';
    }
    return licenseBadge;
  };
  
  function renderLicenseLink(license) {
    switch (license) {
      case 'MIT':
        link = "https://opensource.org/licenses/MIT";
        break;
      case 'GPLv2':
        link = "https://www.gnu.org/licenses/old-licenses/gpl-2.0";
        break;
      case 'Apache':
        link = "https://opensource.org/licenses/Apache-2.0";
        break;
      case 'GPLv3':
        link = "https://www.gnu.org/licenses/gpl-3.0";
        break;
      default:
        return '';
    }
    return link;
  }
  
  function renderLicenseSection(license) {
    if (!license) {
      return ''
    } else {
      return `### Licenses`
    }
  }
  
  function generateMarkdown(responses) {
    return `  # ${responses.title}
    ### Licenses
    * License Badge: ${renderLicenseBadge(responses.licenses)}
    * Link for license Badge: ${renderLicenseLink(responses.licenses)}
    ## TABLE OF CONTENTS
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Licenses](#licenses)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [Questions](#questions)
    ### Description
    ${responses.description}
    ### Installation
    ${responses.installation}
    ### Usage
    ${responses.usage}
    ### Licenses
    ${responses.licenses}
    ### Contribution
    ${responses.contribution}
    ### Tests
    ${responses.tests}
  `
  }
  
  module.exports = generateMarkdown;