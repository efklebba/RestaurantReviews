# Restaurant Reviews Project

The restaurant reviews project is a web page served up by a local server. It lists a number of restaurants and their reviews. It also shows each restaurant's location on a map.

## Installation

### Requirements

* Any OS that has a browser that supports CSS3, HTML5 and JavaScript (ie Google Chrome, Mozilla Firefox, Silk, etc)
* CSS3
* HTLM5
* python
* MapBox access token

### Steps

The project can be downloaded from github [here](https://github.com/efklebba/RestaurantReviews).

You will need a MapBox access token to display the maps correctly. Go to (https://www.mapbox.com) to create your own token. Once you have created a token, open the file js/envhelper.js and replace the string "\<Your MAPBOX Token here\>" with the access token created on mapbox.com.
 
To start the local server, open a command prompt window and change the directory to the directory containing the index.html file. For python 2.x, type in "python -m SimpleHTTPServer 8100". For python 3.x, type in "python -m http.server 8100". The 8100 specifies what port number to use. If you change it to something else, you must also change the file js/dbhelper.js and set the port variable to the new port number.

Once the local server is running, you can open any browser and type in "localhost:8100" to see the main page.

## Accessibility

This site was designed to be accessible. All of the images have an alt tag defined stating the cuisine type and the name of the restaurant. The View Details links also have a title tag implemented which a screen reader can access so that the user knows what restaurant details they are about to view. The combo boxes and the View Details links also include focus and hover attributes as visual clues.

Aria roles were not defined for any elements since the native semantics were sufficient.

The accessibility was tested on Linux Mint with the screen reader on. All elements provided enough information to navigate through the pages.

## Service Worker

A service worker was implemented for this project. It only appears to work in Google Chrome. However, while using Google Chrome, the service worker will cache any page that the user visits. This comes in handy when the internet connection is slow or is lost entirely. Even the maps for each page will be cached locally if the user visits a page containing a map. For any page that was not visited, the map will not display.

## Development

The project was developed using HTML5, CSS3, JavaScript

## Authors

1. [Eric Klebba](klebba1@slb.com)
2. [David Harris](forbiddenvoid@gmail.com)

## References

1. [CSS-Tricks](https://css-tricks.com/)
2. [w3schools](https://www.w3schools.com)
3. [Google service workers](https://developers.google.com/web/fundamentals/primers/service-workers/)

