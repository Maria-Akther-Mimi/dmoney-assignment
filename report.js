const newman = require('newman');

newman.run({
    //collection: require('./collection/dmoney.json'),https://api.postman.com/collections/27409407-63295a09-3732-4dab-88ab-19ac4666e6b7?access_key=PMAT-01H1SDREP314J14AWWQJ7AYPR1
    collection: 'https://api.postman.com/collections/27409407-63295a09-3732-4dab-88ab-19ac4666e6b7?access_key=PMAT-01H1SDREP314J14AWWQJ7AYPR1',
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
