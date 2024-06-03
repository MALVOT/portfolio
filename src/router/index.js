
import { createRouter,createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import NotFound from '../views/NotFound.vue';
import TheToto from '../views/TheToto.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
    },
    {
      path:'/:catchAll(.*)',
      name:'notfound',
      component: NotFound,

    },
    {
      path:'/toto',
      name:'toto',
      component: TheToto,

    },
  ],
});
//<script>  
 // function addComment(commentText, commentFirstName, commentLastName) { 
  //const commentDiv = document.createElement("div"); 
 // commentDiv.classList.add("flex", "space-x-4", "text-sm", "text-gray-500"); 
 // const contentDiv = document.createElement("div"); 
 // contentDiv.classList.add("flex-1", "py-10", "border-t", "border-gray-200"); 
 // const nameH3 = document.createElement("h3"); 
 // nameH3.classList.add("font-medium", "text-gray-900"); 
 // nameH3.textContent = `${commentFirstName} ${commentLastName}`; 
 // const commentP = document.createElement("p"); 
 // commentP.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500"); 
 // commentP.textContent = commentText; 
 // contentDiv.appendChild(nameH3); 
 // contentDiv.appendChild(commentP); 
 // commentDiv.appendChild(contentDiv); 
 // var commentList = document.getElementById("comment-list"); 
  //commentList.appendChild(commentDiv); } 
 // document.getElementById('myform').addEventListener('submit', function(e){ e.preventDefault(); 
 // let firstname = document.getElementById('first-name').value; 
 // let lastname = document.getElementById('last-name').value; 
 // let comment = document.getElementById('message').value; 
 // let errormessage = document.getElementById('error-message'); 
 // if (firstname.trim() === "" || lastname.trim() === "" || comment.trim() === "") { 
  //  errormessage.style.display = 'block'; 
  //  errormessage.innerHTML = '<div class="rounded-md bg-red-50 p-4">' + '<div class="flex">' + '<div class="flex-shrink-0">'+ '</div>' + '<div clas"ml-3">' + '<h3 class="text-sm font-medium text-red-800">Tous les champs doivent être remplis</h3>' + '</div>'; 
 // } else { errormessage.style.display = 'none'; 
 // addComment(comment, firstname, lastname); 
 // document.getElementById('first-name').value = ''; 
 // document.getElementById('last-name').value = ''; 
 // document.getElementById('message').value = ''; 
 // } }); 
  //</script>

export default router;
