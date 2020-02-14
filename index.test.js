const cp = require('child_process');
const path = require('path');

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
    process.env['INPUT_JAVA_VERSION'] = 11;
    const ip = path.join(__dirname, 'index.js');
    console.log(cp.exec(`node ${ip}`).toString()); // execSync fails
})
