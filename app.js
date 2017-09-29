window.$ = window.jQuery = require('./resources/jquery-3.2.1.min.js');
const remote = require('electron').remote;

function minimize(){
	var window = remote.getCurrentWindow();
	$("#login_grid").hide();
	$("#record_grid").show();
    window.minimize();
    initRecorder();
  }


function initRecorder(){
	navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError);

}

function onMediaSuccess(stream) {
    var mediaRecorder = new MediaStreamRecorder(stream);
    mediaRecorder.mimeType = 'audio/wav'; // check this line for audio/wav
    mediaRecorder.ondataavailable = function (blob) {
        // POST/PUT "Blob" using FormData/XHR2
        //var blobURL = URL.createObjectURL(blob);
        //document.write('<a href="' + blobURL + '">' + blobURL + '</a>');
		mediaRecorder.save();
    };
    mediaRecorder.start(2*3000);
}

function onMediaError(e) {
    console.error('media error', e);
}

var mediaConstraints = {
    audio: true
};

function handleLogin(){
	$("#login_username_error").text("");
	$("#login_password_error").text("");
	var username = $("#login_username").val();
	var password = $("#login_password").val();
	var valid = true;

	if(username.trim() ===""){
		valid = false;
		$("#login_username_error").text("*Username is required");
	}
	if(password.trim() ===""){
		valid=false;
		$("#login_password_error").text("*Password is required");
	}

	if(valid){
		var loginDetails = {"username":username, "password":password};
		doLogin(loginDetails);
	}
}


function doLogin(loginDetails){
  	$.ajax({
    	type: 'GET',
    	url: 'https://jsonplaceholder.typicode.com/users/1',
    	dataType: 'json',
    	data: loginDetails,
    	success: function (x) {
			$("#connecting_grid").hide();
			$("#record_grid").show();
			minimize();
			return false;
   		},
    	beforeSend:function(){
			$("#login_grid").hide();
			$("#connecting_grid").show();
    	},
		error: function(err){
			alert(JSON.stringify(err));
			console.log(JSON.stringify(err))
			 return false;
		}
  });
  window.location="#";
}
