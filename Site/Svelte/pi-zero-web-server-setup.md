# Raspberry Pi Zero Web Server Setup Guide

## Project Overview

Setting up a Raspberry Pi Zero (original, non-WiFi) as a modern web server hosting a SvelteKit static site with lighttpd, automated deployment, and Cloudflare Tunnels.

## Hardware Setup

- **Device**: Raspberry Pi Zero (original, ARM6, 32-bit only)
- **Connectivity**: USB to LAN adapter (since no built-in WiFi)
- **OS**: Raspberry Pi OS Lite (Legacy, 32-bit)

## Initial Pi Setup

### 1. Install Raspberry Pi OS Lite (32-bit)

Download from: <https://www.raspberrypi.com/software/operating-systems/>

- Use Raspberry Pi Imager to write to SD card
- Enable SSH in the imager settings
- Set username/password

### 2. Connect and Find Your Pi

```bash
# From your computer, find the Pi's IP address
# Windows: 
arp -a
# Or check your router's DHCP client list
```

## Web Server Installation (lighttpd)

### 1. Install lighttpd

```bash
# SSH into your Pi
ssh pi@YOUR_PI_IP

# Update system
sudo apt update && sudo apt upgrade -y

# Install lighttpd (lighter than nginx for Pi Zero)
sudo apt install lighttpd -y
```

### 2. Configure lighttpd

The default config is at `/etc/lighttpd/lighttpd.conf`

Basic working configuration:

```bash
# Test if it's running
sudo systemctl status lighttpd

# Default web directory
/var/www/html/

# Fix 403 Forbidden (if needed)
echo "<h1>It works!</h1>" | sudo tee /var/www/html/index.html
sudo chown www-data:www-data /var/www/html/index.html
sudo chmod 755 /var/www/html
```

### 3. Enable Compression (Optional but Recommended)

```bash
# Enable compression module
sudo lighty-enable-mod compress

# Or manually add to config:
echo 'server.modules += ("mod_compress")
compress.cache-dir = "/var/cache/lighttpd/compress/"
compress.filetype = ("text/plain", "text/html", "text/css", "text/javascript", "application/javascript", "application/json")' | sudo tee /etc/lighttpd/conf-available/10-compress.conf

sudo lighty-enable-mod compress
sudo systemctl restart lighttpd
```

## SvelteKit Project Setup

### 1. Configure SvelteKit for Static Adapter

```bash
# In your SvelteKit project
npm install -D @sveltejs/adapter-static
```

Update `svelte.config.js`:

```javascript
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: true
    })
  }
};
```

## Deployment Setup

### 1. SSH Key Setup (One-time)

```bash
# On your Windows development machine
ssh-keygen -t ed25519  # Press enter for defaults
ssh-copy-id pi@YOUR_PI_IP  # Enter password one last time

# Test it
ssh pi@YOUR_PI_IP "echo 'SSH keys working!'"
```

### 2. Sudo Configuration for Deployment

On the Pi, allow passwordless sudo for deployment commands:

```bash
sudo visudo

# Add this line:
pi ALL=(ALL) NOPASSWD: /bin/cp -r /home/pi/site-temp/* /var/www/html/, /bin/chown -R www-data\:www-data /var/www/html/
```

### 3. Create Node.js Deploy Script

Create `scripts/deploy.mjs` in your SvelteKit project:

```javascript
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
```

### 4. Update package.json

```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "node scripts/deploy.mjs",
    "health": "ssh pi@YOUR_PI_IP 'uptime && free -h && df -h /'",
    "logs": "ssh pi@YOUR_PI_IP 'tail -f /var/log/lighttpd/access.log'"
  }
}
```

### 5. Deploy Your Site

```bash
npm run deploy
```

## Cloudflare Tunnels Setup (For Public Access)

### 1. Install cloudflared on Pi

```bash
# SSH into your Pi
ssh pi@YOUR_PI_IP

# Download and install cloudflared for ARM
curl -L --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm.deb
sudo dpkg -i cloudflared.deb
```

### 2. Authenticate with Cloudflare

```bash
# This will open a browser to login
sudo cloudflared tunnel login
```

### 3. Create a Tunnel

```bash
# Create the tunnel
sudo cloudflared tunnel create my-pi-site

# Note the tunnel ID that gets created!
```

### 4. Create Configuration File

```bash
sudo nano /etc/cloudflared/config.yml
```

Add this content:

```yaml
tunnel: YOUR-TUNNEL-ID
credentials-file: /root/.cloudflared/YOUR-TUNNEL-ID.json

ingress:
  - hostname: yourdomain.com
    service: http://localhost:80
  - hostname: www.yourdomain.com
    service: http://localhost:80
  - service: http_status:404
```

### 5. Route DNS

```bash
# Route your domain to the tunnel
sudo cloudflared tunnel route dns my-pi-site yourdomain.com
sudo cloudflared tunnel route dns my-pi-site www.yourdomain.com
```

### 6. Run as a Service

```bash
# Install as a system service
sudo cloudflared service install
sudo systemctl start cloudflared
sudo systemctl enable cloudflared

# Check status
sudo systemctl status cloudflared
```

## Performance Expectations

### Pi Zero Limits

- **RAM**: 512MB (OS ~100MB, cloudflared ~25MB, lighttpd ~2MB)
- **CPU**: Single core ARM6 1GHz
- **Network**: USB 2.0 limited to ~20-30 Mbps real-world

### With Cloudflare Tunnels

- Cloudflare caches static assets at edge locations
- Pi only handles cache misses
- Can easily handle thousands of visitors
- No SSL overhead on Pi (Cloudflare handles TLS)
- Built-in DDoS protection

## Useful Commands

### Monitoring

```bash
# Check server status
sudo systemctl status lighttpd

# Watch access logs
tail -f /var/log/lighttpd/access.log

# Check memory usage
free -h

# Check disk space
df -h

# Monitor processes
htop  # Install with: sudo apt install htop
```

### Troubleshooting

```bash
# Restart web server
sudo systemctl restart lighttpd

# Check for errors
sudo journalctl -u lighttpd -n 50

# Test web server locally on Pi
curl http://localhost

# Fix permissions
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/
```

### Backup and Restore

```bash
# Backup current site
ssh pi@YOUR_PI_IP "sudo tar -czf ~/backup-$(date +%Y%m%d).tar.gz /var/www/html/"

# Restore from backup
ssh pi@YOUR_PI_IP "sudo tar -xzf ~/backup-20241213.tar.gz -C /"
```

## Tips and Notes

1. **Why lighttpd over nginx**: On Pi Zero's limited RAM (512MB), lighttpd uses ~2MB vs nginx's 5-8MB. Both perform similarly for static files.

2. **Deployment Strategy**: We use a temp directory (`~/site-temp/`) to stage files before copying to `/var/www/html/` to ensure atomic deployments.

3. **Security**: Cloudflare Tunnels means no port forwarding needed on your router, and your Pi's IP is never exposed.

4. **Cost**: Cloudflare Tunnels is free for this use case. Total hosting cost is just electricity (~$3-5/year for a Pi Zero).

5. **Alternatives Considered**:
   - **Caddy**: Modern, automatic HTTPS, but slightly heavier
   - **Nginx**: Industry standard, but overkill for simple static hosting on Pi Zero
   - **Apache**: Too heavy for Pi Zero

## Project Structure

your-sveltekit-project/
├── src/
├── static/
├── scripts/
│   └── deploy.mjs       # Deployment script
├── build/              # Generated static files
├── package.json
└── svelte.config.js    # Static adapter config

pi-zero:/
└── var/www/html/       # Live website files
└── home/pi/site-temp/  # Staging directory

## Next Steps

- [ ] Set up Cloudflare Tunnels when site is ready
- [ ] Configure custom domain
- [ ] Set up monitoring/alerting
- [ ] Consider backup automation
- [ ] Add cache headers for better performance

---

*Created: December 2024*  
*Hardware: Raspberry Pi Zero + USB LAN Adapter*  
*Stack: SvelteKit (static) + lighttpd + Cloudflare Tunnels*
