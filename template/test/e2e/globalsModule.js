var HtmlReporter = require('nightwatch-html-reporter');

module.exports = {
    reporter(results, done) {
        let modulKeys = Object.keys(results.modules)[0];
        const reporter = new HtmlReporter({
            openBrowser: true,
            reportsDirectory: __dirname + '/reports/',
            reportFilename: results.modules[modulKeys].reportPrefix + 'report.html'
        });
        reporter.fn(results, done);
    }
};