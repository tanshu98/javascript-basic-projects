// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// Select Items

const img = document.querySelector('#person-img');
console.log(img);
const author = document.querySelector('#author')
const job = document.querySelector('#job')
const info = document.querySelector('#info')
console.log(job, info);

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
console.log(prevBtn, nextBtn, randomBtn);

// Now what we want is..on the page load..we wanna load the 1st item

// Set starting item

let currentItem = 0

// So for this..there's an event..which will actually fire when the webpage loads..
// Also..since..we wanna fire this event on webpage load..we will add event listner to the window object!!

window.addEventListener('DOMContentLoaded', function() {
  console.log('Event fires when the dom loads!!');
  // Now we want to display the first review item..on dom load..
  // There are mutliple ways to do that..

  // The thing is we have already created html..i.e hard coded everything..then why this..

  // Well this makes our website much more dynamic..

  // So here we have stored the data in array of objects..and when the window loads..we are displaying the content based on the current item..

  // Function call here
  showPerson(currentItem)
  console.log('This function has run');
  
  
})

// Now its better to wrap everything in a function..since we wanna use this same logic in couple of places..

const showPerson = function(person) {
  let item = reviews[person];
  img.src = item.img // pls note - img is an object..Also..img.src is used to change the src of the image using js!
  author.innerHTML = item.name;
  job.innerHTML = item.job;
  info.innerHTML = item.text;
  console.log('Inside this function');
}

// Show next person

nextBtn.addEventListener('click', function() {
  currentItem++;
  // By incrementing the currentItem..we will able to show different person..everytime we click on the button..
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
})

// Show Previous Person - 

prevBtn.addEventListener('click', function() {
  currentItem --;
  if(currentItem < 0) {
    currentItem = reviews.length -1;
  }
  showPerson(currentItem)
})

// Show Random Person

randomBtn.addEventListener('click', function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem)
})