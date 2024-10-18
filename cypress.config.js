const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        saveCredentials({ email, password }) {
          const filePath = path.join(__dirname, 'cypress', 'fixtures', 'emails.json');

          // Initialize an empty array if the file does not exist or is invalid
          let credentialsList = [];

          // Check if the file exists
          if (fs.existsSync(filePath)) {
            try {
              const fileContent = fs.readFileSync(filePath, 'utf-8');
              credentialsList = fileContent ? JSON.parse(fileContent) : [];
            } catch (error) {
              // Handle the case where the JSON file is invalid
              console.error('Error parsing JSON:', error);
              credentialsList = [];
            }
          }

          // Add the new email and password to the list
          credentialsList.push({ email, password });

          // Write the updated list back to the file
          fs.writeFileSync(filePath, JSON.stringify(credentialsList, null, 2));

          return null;
        }
      });

      return config;
    }
  }
});
