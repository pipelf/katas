function TestRunner() {};

TestRunner.prototype.runTest = (testname, test) => {
    try {
        console.log('running test ' + testname);
        test();
        console.log('Test Passed');
    }
    catch (error) {
        console.error("Test Failed");
        console.log(error);
    }
}

module.exports = TestRunner;
