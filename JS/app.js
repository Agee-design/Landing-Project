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
    const NavBarMenu = document.quereySelector(".navbar__menu");/* select the element that have id navbar__menu and put in NavBarMenu variabel*/
    const navBarList = document.getElementById("navbar__list"); /* return the element that has id navbar__list and put in navBarlist variabel*/
    const listItem = document.createElement('li'); /* creat list item in put in listitem variabel*/
    const a = document.creatElement("a"); /* creat tag element an assigned into a variael */
    li.appendChild(a);
    navBarList.appendChild(listItem); /* add the item in last navbar list */
    NavBarMenu.appendChild(navBarList); /* add the list and put in the last child */
    const sectionName = sections[i].appendChild(NavBarMenu);
    document.body.appendChild(sectionName);
    }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as activ