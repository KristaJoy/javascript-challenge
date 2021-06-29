# javascript-challenge
The challenge: use JavaScript to create a filterable, by date, UFO sightings table. Provided was a web page template, css file, the UFO data, and a blank app.js file to write the code in.

## UFO-level-1

**Website Image**
![Website Image](https://github.com/KristaJoy/javascript-challenge/blob/main/images/sightings.png)

So diving in, the first step was to create the table of sightings on the web page. I used d3 to select the tbody tag and append rows and cells for each of the key/value pairs in the data dictionary.

Next, was to select the filter button as well as the form in order to create event handlers for a user to click and submit a date they would like to filter the data by. I selected the input id off the form, and used the date value they entered to filter the table data and create a new variable with only the data requested. I then re-ran the same code as before, using the d3 to select the tbody tag and append the new data to the rows and cells. 

**Search Form**
![Search Form](https://github.com/KristaJoy/javascript-challenge/blob/main/images/filtersearch.png)

One challenge I ran into was realizing the info was appending to the end of the table I had already created. What I needed to do was select and remove the previous table before rewriting the new filtered data to the web page. Then everything worked great!

Lastly, I worked with the CSS code to update the design of the web page, overriding many of the Bootstrap css defaults. I updated colors, found a new image, formated the look and positioning of the Filter Table button, and implemented a new font for the h1 title and the table header. 

## UFO-level-2





