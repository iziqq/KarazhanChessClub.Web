## Getting Started

### Prerequisites

- Node v15.12.0

### Installation

1. cd ./eventmanager
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file, see .env.example
4. Run scripts:
   1. Build application in development mode and starts development server
   ```sh
   npm run serve
   ```
   2. Build application in testing mode
   ```sh
   npm run test
   ```
   3. Build application in production mode
   ```sh
   npm run prod
   ```

### Deployment

After the build is complete all files should be in "/wwwroot" directory, copy all files to the target server.

(Optional) Make sure that server can produce compressed files.
For apache .htaccess:

    RewriteEngine on
    RewriteCond %{HTTP:Accept-Encoding} gzip
    RewriteCond %{REQUEST_FILENAME}.gz -f
    RewriteRule ^(.*)$ $1.gz [L]
