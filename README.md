
# Introduction
SAPUI5 Projet from 0 using the walkthrough example
We created all folders and files without any toolkit or template

```
put some code here!
```

# Component-preload (Error in console)
Essentially the component preload concatenates all the files used by the component, 
that is all the controllers, views, formatters etc into a single file and minifies the js, 
json and xml code. 
The idea being that 1 minified file for all you components is loaded a lot quicker 
than many un-minified files. Its very effective at reducing the loading of applications.
To avoid the local test error on the chrome console, we create a file to detect the existence of the file
but when we "build" the project to deploy it (ui5 build), we can apreciate the file on the dist folder.