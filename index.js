const core = require('@actions/core');
const exec = require('@actions/exec');


// most @actions toolkit packages have async methods
async function run() {
  try { 
    const javaVersion = core.getInput('java_version');
    console.log(`Install java version ${javaVersion}`);
    // Set the src-path
    const src = __dirname;
    console.log(`src: ${src}`);
    console.log('Install tree');
    await exec.exec('sudo apt install tree');
    await exec.exec('ls -la '+src);
    console.log('chmod +x '+src+'/install_java.sh');
    await exec.exec('chmod +x '+src+'/install_java.sh');
    await exec.exec(src+'/install_java.sh '+javaVersion)
    console.log('Fini');
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
