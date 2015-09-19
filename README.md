# frontend-starter
Frontend Starter - Gulp, Bower

######Clone this repository in your project folder.
````
git clone https://github.com/aquasmit/frontend-starter.git
````

####Open terminal in project folder & install locally Gulp & Bower. And install packages: Angular, jQuery, Bootstrap
````
npm install
````
This will install Gulp & Bower locally (dont bother if you already have Gulp & Bower installed globally). And then all other frontend dependecies like Angular, jQuery, Bootstrap, etc. will be installed. This is installed through Bower. You dont have to fire `bower install`; the command `npm install` takes care of this; it is specified under 'scripts' in package.json file.
````
"scripts": {
    "postinstall" : "node_modules/.bin/bower install" 
  }
````
Above lines in package.json install all frontend packages that are mentioned in bower.json. Notice that I have used `node_modules/.bin/bower install` instead of `bower install` because 'bower install' may not work if developer does not have bower installed globally.


######Run Gulp when it is installed globally
`gulp`

######Run Gulp when it is installed locally
````
node_modules/.bin/gulp
````

**Gulp is already pre-configured to run livereload. You can comment that task in gulpfile.js**
