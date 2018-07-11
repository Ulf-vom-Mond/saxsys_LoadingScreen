var token = "1384889485.1677ed0.8b6beaad74544bc799e81a67d5fc1946";
var user_id = "1384889485";
var IDs = [];
var randomImageID = 0;
var imageSize = '1000';
var testFeed = new Instafeed({
	get: 'user',
	userId: user_id,
	filter: function(image) {
		IDs.push(image.id);
		return false;
	},
	after: function () {
		randomImageID = IDs[Math.floor(Math.random() * (IDs.length))];
		userFeed.run();
	},
	accessToken: token
});
var userFeed = new Instafeed({
	get: 'user',
	userId: user_id,
	resolution: 'standard_resolution',
	template: '<img id="picture" src="{{image}}" filter: blur(5px)></img>',
	filter: function(image) {
		if(image.id == randomImageID) {
			return true;			
		}else{
			return false;
		}
	},
	after: function () {		
		document.getElementById("picture").height = window.innerHeight * 0.96;
	},
	accessToken: token
});
testFeed.run();