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
  
  const itemsPerPage =  9;
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage;
  console.log(endIndex);
  
  const studentList = document.querySelector(".student-list");
  let html ="";
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
   
  }
  
  studentList.insertAdjacentHTML('beforeend', html); 
  //addPagination(startIndex, endIndex);

};// end of showPage



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

 /*const addPagination = (start, end) => {
   const linkList= document.querySelector(".link-list");

    let html = "";
    for(let i=0; i < end; i++){
      
        html += `<li> 
                    <button type="button" class="active">${i+ 1}</button>
                </li> `;
      
    }

   linkList.insertAdjacentHTML('beforeend', html);

   const buttons = document.querySelectorAll("button");

   //Loop to add the code to all the buttons 

   for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener( 'click', (e) => {
      e.preventDefault();
      showPage(data, i);

     }); 

   }




}; //end of addPagination


*/
// Call functions
showPage(data, 1);
//addPagination();
