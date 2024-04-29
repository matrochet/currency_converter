## Step 1: Install nodejs

```
# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# download and install Node.js
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.12.2`

# verifies the right NPM version is in the environment
npm -v # should print `10.5.0`
```

## Step 2: Install a HTTP server

```
npm install --global http-server
```

## Step 3: Start the server

```
npx http-server
```
