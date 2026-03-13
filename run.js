const { execSync } = require('child_process');
const path = require('path');

const dir = path.resolve(__dirname, 'temp');
process.chdir(dir);

console.log('Working in:', dir);
console.log('Running npm install...\n');

try {
  execSync('npm install --no-audit --no-fund', {
    stdio: 'inherit',
    cwd: dir,
    env: {
      ...process.env,
      npm_config_fetch_retries: '5',
      npm_config_fetch_retry_mintimeout: '20000',
      npm_config_fetch_retry_maxtimeout: '120000',
    },
  });
  console.log('\nInstall complete. Starting dev server...\n');
  execSync('npm run dev', {
    stdio: 'inherit',
    cwd: dir,
  });
} catch (e) {
  process.exit(1);
}
