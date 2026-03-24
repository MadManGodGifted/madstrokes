const { execSync } = require('child_process');
const fs = require('fs');

const logFile = 'git_push_log.txt';
const log = (msg) => {
    fs.appendFileSync(logFile, msg + '\n');
    console.log(msg);
};

try {
    log('Starting surgical fix push...');

    // Check if git exists
    if (!fs.existsSync('.git')) {
        log('Error: .git folder not found. Re-initializing...');
        execSync('git init', { stdio: 'inherit' });
    }

    log('Adding fix...');
    execSync('git add src/app/art-forms/[id]/page.tsx', { stdio: 'inherit' });

    log('Committing fix...');
    try {
        execSync('git commit -m "Fix syntax error in ArtDetail page (parenthesis)"', { stdio: 'inherit' });
    } catch (e) {
        log('Nothing to commit or commit failed.');
    }

    const remoteUrl = 'https://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@github.com/MadManGodGifted/madstrokes.git';

    try {
        execSync(`git remote set-url origin ${remoteUrl}`, { stdio: 'inherit' });
    } catch (e) {
        execSync(`git remote add origin ${remoteUrl}`, { stdio: 'inherit' });
    }
    log('Configured remote.');

    log('Pushing fix to main...');
    execSync('git push origin main', { stdio: 'inherit' });
    log('Push successful!');
} catch (error) {
    log('ERROR: ' + error.message);
    if (error.stdout) log('STDOUT: ' + error.stdout.toString());
    if (error.stderr) log('STDERR: ' + error.stderr.toString());
}
