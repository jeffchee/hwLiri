require("dotenv").config();
var Spotify = require('node-spotify-api');
var moment = require("moment")
var request = require("request")
var keys = require("./keys");

var spotify = new Spotify(keys.spotify);

// console.log(spotify)

var Bandsintown = require("bandsintown");

// console.log(Bandsintown)

// var options = {
//     provider: "bandsintown",
//     apikey: "codingbootcamp"
// };

var choice = process.argv[2];

switch (choice) {

    case "concert":
        findConcert();
        break;
    case "music":
        findMusic();
        break;

}




var search = process.argv[3];
console.log("LOOK AT ME \n", search);

function findConcert() {
    var URL = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";
    request(URL, function (err, response, body) {
        var jsonData = JSON.parse(body);
        console.log(jsonData[0]);
        var venueName = jsonData[0].venue.name;
        console.log("Venue: " + venueName)
        var venueLocationA = jsonData[0].venue.country;
        console.log("Country: " + venueLocationA);
        var venueLocationB = jsonData[0].venue.city;
        console.log("City: " + venueLocationB);
        var venueDate = moment(jsonData[0].venue.datetime).format('L');
        console.log(venueDate)
    })
}

function findMusic() {

    spotify.search({ 
        type: 'track', 
        query: 'dancing in the moonlight' }, function(err, data) {
            console.log(data)
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
     
        // Do something with 'data'
    });
    // var URL = "https://api.spotify.com/v1/search?q=" + search


//     request(URL, function (err, response, body) {
//         var jsonData = JSON.parse(body);
// console.log(jsonData);


    }

    // * Artist(s)
     
    // * The song's name
    
    // * A preview link of the song from Spotify
    
    // * The album that the song is from

