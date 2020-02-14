const core = require('@actions/core');
const exec = require('@actions/exec');


// most @actions toolkit packages have async methods
async function run() {
  try { 
    const javaVersion = core.getInput('java_version');
    console.log(`Install java version ${javaVersion}`);
    // Set the src-path
    const src = __dirname + "/src";
    core.debug(`src: ${src}`);

    await exec.exec(`${src}/install_java.sh`, [javaVersion]);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
