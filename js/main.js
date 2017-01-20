// Array for main navigation;
// False == closed; True == open;
// Create array and set all to false on page load;
var nav = [false, false, false, false, false, false];

// Function for providing onClick access to megamenu buttons;
function menuClick(theID) {
	// Get # of button that has been clicked;
	var num = theID.substring(7,8)-1;
	// Create query string for setting classes;
	var queryID = "#"+theID+" > div";
	// Close all menus first except the clicked button, then open or close clicked;
	for (i = 0; i < nav.length; i++) { 
		if (i != num) {
			nav[i] = false;
			var closeID = "#NavLink"+(i+1)+" > div";
			$(document.querySelector(closeID)).addClass('nav-hide');
			$(document.querySelector(closeID)).removeClass('nav-show');
		}
	}
	// If open, close it;
	if (nav[num]) { 
		$(document.querySelector(queryID)).addClass('nav-hide');
		$(document.querySelector(queryID)).removeClass('nav-show');
		nav[num]=false;
	}
	// If closed, open it;
	else { 
		$(document.querySelector(queryID)).addClass('nav-show');
		$(document.querySelector(queryID)).removeClass('nav-hide');
		nav[num]=true;
	}
}

//Closes megamenu when user clicks anywhere except the menu;
$(document).on('click', function(event) {
	// If not a within #main, close the menus;
	if (!$(event.target).closest('#main').length) {
		for (i = 0; i < nav.length; i++) { 
			nav[i] = false;
			var closeID = "#NavLink"+(i+1)+" > div";
			$(document.querySelector(closeID)).addClass('nav-hide');
			$(document.querySelector(closeID)).removeClass('nav-show');
  		}
	}
});