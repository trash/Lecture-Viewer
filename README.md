Lecture-Viewer
==============
The project now uses yeoman.io and Angular.js.

To get started with the project you'll need to install yeoman.io which you can find out how to do [here](http://yeoman.io/gettingstarted.html).

Alternatively you can do as follows to setup (after cloning):
* Globally install yo/grunt/bower: `npm install -g yo grunt-cli bower`
* Install node_modules: `npm install`
* Install packages: `bower install`
* *  Note: This should be run through a shell that has the git command.
* Install Ruby: `sudo apt-get install ruby` for Ubuntu and http://rubyinstaller.org/ for Windows.
* Install Compass: `gem update --system && gem install compass`
* Run grunt test server: `grunt server`
* *  Note: If `bower install` is giving git errors 127 or 128, try `bower install -f` to dump the cache before install.


### To Run Normally
Run app.js with node:
`node app` 

### File Structure
* app/
  * app.js - simple node server to serve the app (once index.html is served, Angular effectively takes over)
  * index.html - This is the core html file where Angular is called, all the .js files are referenced, and where html views are injected into `<div ng-view>` (this is done by Angular)
  * components/ - bower component directory
  * scripts/
      * app.js - Angular app file. This declares the links between controllers and views, declares angular modules being used, as well as routing within the app
      * controllers/ - This includes the controller scripts for each view
          * main.js - this controller is attached to the lecture viewing view
          * select-lecture.js - this controller manages the select lecture view
          * splash.js - this controller is attached to the login/splash page
          * Nav.js - this controller (which currently doesn't do anything) is attached the the navbar in index.html
      * filters/ - This directory includes angular filters
          * classes.js - filters down a list of classes by a list of a current user's list of class (attached to their account)
          * noteTime.js - filters a time to be a nice 12h34m56s format for notes
          * noteDirection.js - this is a hacky filter used to change an arrow direction when notes are shown/hidden on the lecture viewing page
      * services/ - This directory holds lecture.js, the service for the app, i.e. the model (where all the data is manipulated)
  * styles/ - CSS files (surprise!)
  * views/ - This includes the html views that are injected in the main index.html
      * main.html - view for the lecture viewing page
      * select-lecture.html - view for selecting lectures
      * splash.html - view 
* test/ - directory for testacular testing suite
