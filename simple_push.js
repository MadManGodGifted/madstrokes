const { execSync } = require('child_process');
const fs = require('fs');

const logFile = 'deployment_log.txt';
const log = (msg) => {
    fs.appendFileSync(logFile, `[${new Date().toISOString()}] ${msg}\n`);
    console.log(msg);
};

try {
    log('Staging changes...');
    execSync('git add .', { stdio: 'inherit' });
    
    log('Committing changes...');
    const commitMsg = "Fix image system with Unsplash API and fallback handling";
    execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit' });
    
    log('Pushing to main...');
    const remoteUrl = 'https://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@github.com/MadManGodGifted/madstrokes.git';
    execSync(`git push ${remoteUrl} main`, { stdio: 'inherit' });
    
    log('Push Successful!');
} catch (error) {
    log('Error: ' + error.message);
    process.exit(1);
}
