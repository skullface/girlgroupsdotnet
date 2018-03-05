// define our variables
const links = document.querySelectorAll('.link');
const container = document.getElementById("content");

/*
 *
 *
// cycle through the items inside the pages array
const pages = ['about', 'loves', 'likes'];

pages.forEach(function (page) {
  console.log(`${page} 🎀`);
});


// run the loadPage function when each dom object that matches our link variable (has class `.link`) has a click event
links.forEach(link => link.addEventListener('click', loadPage));


// define the loadPage function
function loadPage() {
  container.innerHTML = `<object type='text/html' data='${page}.html' ></object>`;
  console.log('LOAD THE PAGE BITCH')
}
 *
 *
 */

// this is some fucked up looping shit that goes through our links var
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    container.innerHTML = `<object type='text/html' data='${this.id}.html' class='container'></object>`;
    console.log(`${this.id} page loaded bitch`)
  }, true);
}
