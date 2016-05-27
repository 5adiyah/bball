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
