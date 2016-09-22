<p align="center">
  <a href="http://gulpjs.com">
    <img height="50" src="http://cdn.warer.com/media/JAVAScript-collector.png">
    <img height="70" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
    <img height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2000px-Npm-logo.svg.png">
    <img height="50" src="http://bower.io/img/bower-logo.svg">
  </a>
  <h3 align="center">GITHUB API PROJECT</h3>
  <p align="center">JS | NPM | GULP | BOWER </p>
</p>

####Project Description:
- *By Sadio Ali*
- *A website where a user can search github for a user*



## Setting Up Project

Clone this repository:

```
$ git clone https://github.com/5adiyah/githubAPI.git
$ cd githubAPI
```

**You will need to have the following installed on your computer**
  - Node
  - Npm (if you install node, you should have npm)

**Within the directory, run:**

```
  $ npm install
  $ bower install
  $ gulp
```

####Some known bugs aka features:
- If the user you are trying to find has no email, their email will not display above the email user form
- If the user you are trying to find has not set up a name or location that will also not display on the user page



###CREATE FILE STRUCTURE
______________________________

```
|- app/
      |- css/
        |- styles.css
      |- fonts/
      |- images/
      |- index.html
      |- js/
        |- app.js
        |- browser-interface.js
      |- scss/
        |- style.scss
  |- dist/  //Technically this will be created by your gulp tasks
  |- temp/  //Technically this will be created by your gulp tasks
  |- gulpfile.js
  |- node_modules/
  |- package.json

```

### Installing with NPM
______________________________

- **NPM**
  ` $ npm init`

- **GULP**
  ```
  $ npm install gulp --save-dev
  $ npm install gulp -g
  ```

- **BROWSERIFY**
  ```
  $ npm install browserify --save-dev
  $ npm install browserify -g
  ```

- **BOWER**
  ` $ npm install bower -g`

### Installing with BOWER
______________________________

  - **Bower**
    ` $ bower init `

  - **JQUERY**

    ```
    $ bower install jquery --save
    $ npm install bower-files --save -dev
    ```

  - **BOOTSTRAP**

    ` $ bower install bootstrap --save `

### Gulp Modules
______________________________

  - **BROWSERIFY**
    `$ npm install vinyl-source-stream --save-dev`

  - **UGLIFY**
    `$ npm install gulp-uglify --save-dev`

  - **DELETE**
    `$ npm install del --save-dev`

  - **CONCAT**
    `$ npm install gulp-concat --save-dev`

  - **JsHint**
    ```
    $ npm install jshint --save-dev
    $ npm install gulp-jshint --save-dev
    ```
  - **BROWSERSYNC**
    `$ npm install browser-sync --save-dev`

### Gulp Gh-Pages Deployment
______________________________

`$ npm install --save-dev gulp-gh-pages `

*Add following to your gulpfile, you can get rid of all the comments*

` var deploy = require("gulp-gh-pages");`

```
var options = {
    remoteUrl: "https://github.com/5adiyah/UpdatedTemplate.git", //link to your repo
    branch: "gh-pages"};  //set this to gh-pages otherwise it will over write your master branch
gulp.task('deploy', function () {
    gulp.src(["dist/**/*.*", "index.html", "images/", "gulpfile.js", "package.json", "bower.json"]) //in here add any files or folders you want to deploy
        .pipe(deploy(options));
});
```

#### Legal

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
