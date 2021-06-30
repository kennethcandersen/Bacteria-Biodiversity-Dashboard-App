# Plotly Data Visualization: The Belly Button Biodiversity App

<a href="https://github.com/kennethcandersen/belly-button-biodiversity-app/blob/main/app-screenshot.png" target="_blank"><img width="900" alt="Final App Screenshot" src="https://github.com/kennethcandersen/belly-button-biodiversity-app/blob/main/app-screenshot.png"></a>

**EXECUTIVE SUMMARY**

This app provides a dynamic visualization of belly button bacteria samples. 

See it live [here](https://kennethcandersen.github.io/belly-button-biodiversity-app/index.html): https://kennethcandersen.github.io/belly-button-biodiversity-app/index.html


**REPOSITORY NAVIGATION**

* [*Index file with HTML code*](https://github.com/kennethcandersen/belly-button-biodiversity-app/blob/main/index.html) sets up the app's structure online. 
* [*JS file with Javascript code*](https://github.com/kennethcandersen/belly-button-biodiversity-app/blob/main/static/js/appv2.js) retrieves JSON data, processes it, creates data visualization plots using Plotly, and inserts the plots into the HTML code (see Steps section below for more detail). 
* [*Jupyter Notebook (optional)*](https://github.com/kennethcandersen/belly-button-biodiversity-app/blob/main/Data_Exploration.ipynb) simply to help me become familiar with the data and understand how it was structured before manipulating it with JS. 

**OBJECTIVE**

Create an app that allows users to dynamically explore bacteria sample data. 


**STEPS, TOOLS & LANGUAGES USED**

1. Create the structure in HTML. Some starter code was provided, with some minor tweaks to help with listeners and formatting.
2. Create and test the JS file that does the following:
  - Accesses data from a JSON file. 
  - Creates a dropdown menu with samples automatically inserted as selection options. 
  - Creates event handlers to trigger functions when the dropdown menu is used.
  - Filters the JSON data for the selected test subject to visualize. 
  - Creates 3 plots and one metadata field for the dashboard.
  - Inserts the plots and metadata field into the HTML to visualize in a browser. 
  - Allows the user to select a new test subject and reset the whole dashboard. 


=======


