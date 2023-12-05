    const menuBar = document.getElementById('menuBars');
    const navBar = document.getElementById('navbar');
    const startBtn=document.querySelector('.start-button');
    const formOverly=document.getElementById('formOverly');
    const submitBtn=document.getElementById("submit")
    const allTasksBtn=document.getElementById("allTasks");
    const completeTaskBtn=document.getElementById('completeTasks');
    const unCompleteTaskBtn=document.getElementById("unCompleteTasks");
    const titleInput=document.getElementById('titleInput');
    const contentDiv = document.getElementById("content")
console.log(menuBar)
      
    
      document.addEventListener("DOMContentLoaded", () => {

        
        menuBar.addEventListener("click", () => {
          navBar.classList.toggle("hidden");
          
        });
      
        startBtn.addEventListener("click", () => {
          formOverly.classList.toggle("hidden");
        });
      
        // Retrieve the saved value when the DOM is loaded
        const savedTitle = localStorage.getItem('List');
        if (savedTitle) {
          createListItem(savedTitle);
        }
      
        submitBtn.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent the default form submission behavior
          const enteredTitle = titleInput.value;
          console.log(enteredTitle)
          if (enteredTitle) {
            createListItem(enteredTitle);
            formOverly.classList.toggle('hidden')
            localStorage.setItem('List', enteredTitle);
            titleInput.value = ''; // Clear the input field after saving
          }
        });
      
        function createListItem(title) {
          const listItem = document.createElement('div');
          listItem.classList.add('list-item');
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.name = 'listItem';
          const divTitle = document.createElement('div');
          divTitle.classList.add('title');
          divTitle.textContent = title;

          checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
              divTitle.classList.add('strikethrough');
            } else {
              divTitle.classList.remove('strikethrough');
            }
          });
          listItem.appendChild(checkbox);
          listItem.appendChild(divTitle);
          contentDiv.appendChild(listItem);
          
        }
      });
      