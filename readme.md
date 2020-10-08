# How to install Supersonic BOOM theme

### Step 1: Create a new site locally
```
hugo new site yoursitename
```
### Step 2: Add Boom Theme
```
cd yoursitename
git init
git submodule add https://github.com/SuperSonicSites/Boom.git themes/boom
```
### Step 3:Install necessary packages
```
npm install
```
### Step 4: Basic setup
-> Delete `config.toml`  
-> Go to siteBase folder  
-> Move `config.yaml` to `root`  
-> Move `/content/en` and `/content/fr` to `root`  
-> add `theme: boom` to config.yaml  

### Step 4: Publish your change to the project repo
```
git add .
git commit -m "Init"
git push -u origin master
```
## How to update your theme
```
git submodule update --remote --rebase
```

### Features in progress
- Deploy using Stackbit
- Content Studio integration
