# Plotly Data Visualization:the Belly Button Biodiversity App

<a href="https://github.com/kennethcandersen/javascript-challenge/blob/main/index_screenshot.png" target="_blank"><img width="900" alt="Final App Screenshot" src="https://github.com/kennethcandersen/javascript-challenge/blob/main/index_screenshot.png"></a>

**EXECUTIVE SUMMARY**

This app provide dynamic, filtered searches of a UFO sightings database using HTML, CSS and Javascript. 

See it live [here](https://kennethcandersen.github.io/javascript-challenge/UFO-level-2/): https://kennethcandersen.github.io/javascript-challenge/UFO-level-2/


**REPOSITORY NAVIGATION**

There are 2 versions: "Level 1" filters based on data only, while "Level 2" filters based on 5 criteria. Information on Level 2 is available here: 
* [*Index file with HTML code*](https://github.com/kennethcandersen/javascript-challenge/blob/main/UFO-level-2/index.html) sets up the app's structure online. 
* [*JS file with Javascript code*](https://github.com/kennethcandersen/javascript-challenge/blob/main/UFO-level-2/static/js/app.js) retrieves data, processes it, and inserts it into the HTML code (see Steps section below for more detail). 
* [*Stylesheet with CSS code*](https://github.com/kennethcandersen/javascript-challenge/commit/cb4d4ef464f24286c4c3ea6e73317deac3e9eb9f). The app uses relies mostly on Bootstrap CSS, with some customized elements in this file. 

**OBJECTIVE**

Create an app that allows users to dynamically filter UFO sighting data by data, city, state, country and shape. 


**STEPS, TOOLS & LANGUAGES USED**

1. Create the structure in HTML. Some starter code was provided, but the filter function was written for this project.
2. Integrates Bootstrap CSS code into the HTML.
3. Create and test the JS file that does the following:
  - Imports data from a JSON file. 
  - Converts the data into a table that is automatically inserted into the HTML code of the index.html file when it loads into a browser.
  - Finds unique values for each column the dataset and automatically creates arrays which become the pulldown menu items for the filter buttons. 
  - Creates event handlers to trigger functions when the filter buttons are used.
  - Creates a reset button for the filter.
  - Executes the filter with multiple criteria and automatically updates the HTML code with the filtered data. 


=======


