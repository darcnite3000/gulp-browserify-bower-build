GULP-BOWER-BROWSERIFY BUILD
===========================

This is a build for projects that use browserify and bower in conjunction
there is a fair bit of easy configuration in the structure but it assumes the
main entry point is app.js

this is based on https://github.com/greypants/gulp-starter
(watch/browserify/sass/images/markup)
but more focused on getting the browserify stuff working with bower

this uses ruby-sass(with compass so you need a ruby/bundler env)
and allows for coffeescript requires(through coffeeify)
it uses debowerify to allow for bower projects to be required and to allow for
the importing of bower css it uses gulp-cssjoin to inline css @imports

```sh
npm install
bundle install
```