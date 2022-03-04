const report = require('multiple-cucumber-html-reporter');
let start = new Date()
let end = new Date()
report.generate({
  jsonDir: 'cypress/cucumber-json',
  reportPath: './report/',
  metadata:{
    browser: {
      name: 'chrome',
      version: '60'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10 Pro'
    }
  },
  customData: {
    title: 'Run info',
    data: [
      {label: 'Project', value: 'Custom project'},
      {label: 'Release', value: '1.2.3'},
      {label: 'Cycle', value: 'B11221.34321'},
      {label: 'Execution Start Time', value: start.getTime()},
      {label: 'Execution End Time', value: end.getTime()}
    ]
  }
});