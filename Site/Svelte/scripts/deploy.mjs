import { execSync } from 'child_process';

const PI_IP = '192.168.8.102';  
const PI_USER = 'admin';

console.log('🔨 Building site...');
execSync('npm run build', { stdio: 'inherit' });

console.log('📤 Uploading to Pi...');
// Clear old files and upload new ones
execSync(`ssh ${PI_USER}@${PI_IP} "mkdir -p ~/site-temp && rm -rf ~/site-temp/*"`, { stdio: 'inherit' });
execSync(`scp -r build/* ${PI_USER}@${PI_IP}:~/site-temp/`, { stdio: 'inherit' });

console.log('🚀 Deploying...');
execSync(`ssh ${PI_USER}@${PI_IP} "sudo mkdir -p /var/www/html && sudo cp -r ~/site-temp/* /var/www/html/ && sudo chown -R www-data:www-data /var/www/html/"`, { stdio: 'inherit' });

console.log('✅ Deployed!');