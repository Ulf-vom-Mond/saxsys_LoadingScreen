var IDs = [];
var randomImageID = 0;
var testFeed = new Instafeed({
	get: 'user',
	userId: '1384889485',
	filter: function(image) {
		IDs.push(image.id);
		return false;
	},
	after: function () {
		randomImageID = IDs[Math.floor(Math.random() * (IDs.length))];
		userFeed.run();
	},
	accessToken: '1384889485.1677ed0.8b6beaad74544bc799e81a67d5fc1946'
});
var userFeed = new Instafeed({
	get: 'user',
	userId: '1384889485',
	resolution: 'standard_resolution',
	filter: function(image) {
		if(image.id == randomImageID) {
			return true;
		}else{
			return false;
		}
	},
	accessToken: '1384889485.1677ed0.8b6beaad74544bc799e81a67d5fc1946'
});
testFeed.run();