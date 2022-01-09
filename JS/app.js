 

document.addEventListener('DOMContentLoaded', ActiveSection, false);

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/* Start to creat Dynamic NavBarMenu */
const sections = Array.from(document.getElementsByTagName("section"));
for(let section of sections){
    /* return the element that has id navbar__list and put in navBarlist variabel*/
    const navBarList = document.getElementById("navbar__list"); 
    /* creat list item in put in listitem variabel*/
    const listItem = document.createElement('li');
    // give the list item the class menu__link to get some styles from the starter code
    listItem.setAttribute("class", "menu__link")
    /* creat tag element an assigned into a variael */
    const a = document.createElement("a"); 
    // add the text inside your list item anchor from the section data nav
    a.textContent=section.dataset.nav;
    listItem.appendChild(a);
    navBarList.appendChild(listItem); /* add the item in last navbar list */
}




// Make the active section's tab active in the navigation bar 
function ActiveSection (){
    window.addEventListener('scroll', function() {
		const element = document.getElementsByClassName('landing__container');		
		for (let i = 0; i < element.length; i++) {
			const position = element[i].getBoundingClientRect();
			const posit = position.top;
				if (posit <= window.innerHeight/2){
					const activeClass = document.getElementsByClassName("your-active-class");
					activeClass[0].className = activeClass[0].className.replace (" your-active-class", "");
					element[i].className += " your-active-class";
			
					const current = document.getElementsByClassName("your-active-class");  
						if (current.length > 0) {
							current[0].className = current[0].className.replace(" your-active-class", "");
						}
			
					const links = document.getElementById("navbar__list").querySelectorAll('li');
					links[i].className += " your-active-class";
				};
		};
	}); 
} 

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport
function ActiveNavBar (){
	
// Get the nav element
	const linksContainer = document.getElementById("navbar__list");
	// Get all list with inside the nav
	const links = linksContainer.querySelectorAll('li');
	// Loop through the linked list and add the active navBar to the current/clicked button
	for (let i = 0; i < links.length; i++) {
  		 links[i].addEventListener("click", function() {
			const current = document.getElementsByClassName("your-active-class");  
    		if (current.length > 0) {
      			current[0].className = current[0].className.replace(" your-active-class", "");
    		}
			// Add the active navBar to the current/clicked button
    	current[0].className  += "your-active-class";
 		});
	};
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as activ