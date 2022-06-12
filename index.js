const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const dateStr = core.getInput('date');
  let date;
  if (dateStr) {
    console.log(`Specific date: ${dateStr}!`);
    date = new Date(dateStr);
  } else {
    console.log(`No specific date`);
    date = new Date();
  }
  
  core.setOutput("date", date.toISOString());
  
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}