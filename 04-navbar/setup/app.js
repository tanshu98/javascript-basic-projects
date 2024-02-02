// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// SO on clicking on nav-toggle..we wanna open our links..and again on click..we wanna  close the links

// So we will target show-links..
// If show-links is not in the toggle class..we will add it..else remove it..

const links = document.querySelector('.links');
console.log(links);
const toggleButton = document.querySelector('.nav-toggle');
console.log(toggleButton);


// Toggle button logic

toggleButton.addEventListener('click', function() {
    // Now we wanna check..if links contains a particular class or not..
    console.log(links.classList);
    // So to check for the class..we have contains method..
    // console.log(links.classList.contains('randomClass')); // false
    // console.log(links.classList.contains('links')); // true


    // if(links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // } else{
    //     links.classList.add('show-links')
    // }

    // There's a shortcut for this one..
    // We can use toggle method..
    links.classList.toggle('show-links');
})