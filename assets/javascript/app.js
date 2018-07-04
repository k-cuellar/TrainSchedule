
//initialize Firebase
var config = {
    apiKey: "AIzaSyCsEOSz-2hEjIE1O4b_quHWEf2S7t0lqlI",
    authDomain: "train-schedule-89ecf.firebaseapp.com",
    databaseURL: "https://train-schedule-89ecf.firebaseio.com",
    projectId: "train-schedule-89ecf",
    storageBucket: "train-schedule-89ecf.appspot.com",
    messagingSenderId: "754830123111"
  };
  firebase.initializeApp(config);

var database = firebase.database();


//Button for adding trains
$("#addTrainBtn").on("click", function(){

    event.preventDefault();

	// Grabs user input
	var trainName = $("#trainNameInput").val().trim();
	var trainDest = $("#destInput").val().trim();
	var trainStart = moment($("#startInput").val().trim(), "DD/MM/YY").format("X");
	var trainFreq = $("#freqInput").val().trim();

	// Creates local object for holding train data
	var newTrain = {
		name:  trainName,
		dest: trainDest,
		start: trainStart,
		freq: trainFreq
	}

	// Uploads train data to the database
	database.ref().push(newTrain);

	// Logs everything to console
	console.log(newTrain.name);
	console.log(newTrain.dest);
	console.log(newTrain.start);
	console.log(newTrain.freq);

	// Clears all of the text-boxes
	$("#trainNameInput").val("");
	$("#destInput").val("");
	$("#startInput").val("");
	$("#freqInput").val("");

});


// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.

	// Console log train Info

	// format train start
	
	// Calculate the time when Next train Arrives

	// Calculate the time remaining until Next train Arrives

	// Add each train's data into the table

});