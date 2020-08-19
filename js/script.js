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

  for (let i = 0; i < endIndex; i++){
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
  } // end of for loop
  studentList.insertAdjacentHTML('beforeend', html); 


  
 
  
  
};// end of showPage



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (data) => {

  const itemsPerPage = 9;
  const pages = Math.ceil(data.length/itemsPerPage);

   const linkList= document.querySelector(".link-list");
  
   
    let html = "";
    for(let i=0; i < pages; i++){     
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



// Call functions
showPage(data, 1);
addPagination(data);
