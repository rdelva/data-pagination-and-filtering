/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/




/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

//A list parameter to represent student data that will be passed as an argument when the function is called.
//A page parameter to represent the page number that will be passed as an argument when the function is called.

const showPage = ( list, page ) => {
  
   // create two variables which will represent the index for the first and last student on the page

  // select the element with a class of `student-list` and assign it to a variable

  // set the innerHTML property of the variable you just created to an empty string

  // loop over the length of the `list` parameter
    // inside the loop create a conditional to display the proper students
      // inside the conditional:
        // create the elements needed to display the student information
        // insert the above elements

 const itemsPerPage =  9;
 const startIndex = (page * itemsPerPage) - itemsPerPage;
 const endIndex = page * itemsPerPage;

 const studentList = document.querySelector(".student-list");
  let html ="";
  studentList.innerHTML = html;

  for(let i = 0; i < list.length; i++){
    if(i >= startIndex && i < endIndex){
      
      html += `<li class="student-item cf">
                  <div class="student-details">
                    <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                    <h3>${list[i].name.first} ${list[i].name.last} </h3>
                    <span class="email">${list[i].email}</span>
                  </div>
                  <div class="joined-details">
                    <span class="date">Joined ${list[i].registered.date}</span>
                  </div>
                </li>`;   
      }// end of for loop*

  }


  studentList.insertAdjacentHTML('beforeend', html); 


};// end of showPage



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (list) => {

  const itemsPerPage = 9;
  let numOfPages =  Math.ceil(list.length/itemsPerPage);

  const linkList = document.querySelector(".link-list");
  linkList.innerHTML = "";
  
   
    let html = "";
    for(let i=0; i < numOfPages; i++){     
        html += `<li> 
                    <button type="button">${i+ 1}</button>
                </li> `;      
    }  

   linkList.insertAdjacentHTML('beforeend', html);

   const buttons = document.querySelectorAll("button");
   buttons[0].classList.add('active');

  // create an event listener on the `link-list` element
    // if the click target is a button:
      // add the active class to the clicked button
      // call the showPage function passing the `list` parameter and page to display as arguments


    //Rewrite the event listener. use event/bubble delegation

    linkList.addEventListener('click', (e)=>{
      if(e.target.tagName == 'BUTTON'){
        e.preventDefault();


        // remove the "active" class from the previous button
        for(let i = 0; i < buttons.length; i++) {                  
          if(buttons[i].classList.contains("active")){
              buttons[i].removeAttribute("class");
          }    
        }      
        e.target.classList.add("active");
        const page  = e.target.innerHTML;
     
        showPage(data, page);
      }// end of event delegation     
    }); // end of linkList Event Listener
  
}; //end of addPagination

const searchBar = () => {
  const header = document.querySelector('header');
  
  const h2 = header.querySelector('h2');
  const label = document.createElement('label');
  label.for = "search"; 
  label.classList.add = 'student-search';
  label.innerHTML = `
        <input id="search" placeholder="Search by name...">
        <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  `;
  header.appendChild(label);
  const searchBar = document.querySelector('#search');
  const searchButton = document.querySelector('[type="button"]');
  let eventClicked ='false';
  let eventKeyed ='false';


 searchButton.addEventListener('click', (e) =>{
    const name = search.value.toLowerCase();  
    filterList(name, data);
    eventClicked = true;
    
  });
  
  console.log(eventClicked);
  searchBar.addEventListener('keyup', (e) => {
    const name = search.value.toLocaleLowerCase();
    filterList(name, data);
    eventKeyed = true;
  });


}// end of searchBar()



const filterList  = (name, list) => {



  console.log(name);
  console.log(list.length);
  const itemFound = [];
  let word = '';
  let counter=0;
  for(let i = 0; i < list.length; i++){
    word = `${list[i].name.first} ${list[i].name.last}`.toLocaleLowerCase();
    //console.log(word);
    if(word.includes(name)){
      itemFound.push(list[i]);
    } else {
      counter++;
    }

    if (counter == list.length){
      const header = document.querySelector('header');
      const div =  document.createElement('div');
      div.textContent = "No results found"
      div.classList.add("no-class");
      header.appendChild(div);
    }
  }
 /* //Test to see if items found is pushed into the list
  for(let i =0; i < itemFound.length; i++){
    console.log(itemFound[i]);
  }*/

  //send found list to showPage

  showPage(itemFound, 1);
  addPagination(itemFound);

}// filterList


// Call functions
showPage(data, 1);
addPagination(data);
searchBar();


