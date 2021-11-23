const todocontainer = document.getElementById("todos");

const todocreator = () =>{
   var input = document.getElementById("job").value;
 document.addEventListener("click",(e) =>{
   

      if (e.target.classList == "diditButton"){
         e.target.parentElement.remove();
         var diditAlert = document.createElement("div");
         var alerter = document.querySelector(".alerter");
         alerter.appendChild(diditAlert);  
         diditAlert.classList.add("diditAlert"); 
         diditAlert.innerHTML = `Congratz you did the task.`;
         newdiv.appendChild(deleterbtn);
         var dingAudio = new Audio();
         dingAudio.src = "ding.mp3";
         dingAudio.play();
         dingAudio.volume = "0.1"
         console.log("adada");
      }
      else if (e.target.classList == "deleterButton"){
         e.target.parentElement.remove();
         var deleteAlert = document.createElement("div");
         var alerter = document.querySelector(".alerter");
         alerter.appendChild(deleteAlert);  
         deleteAlert.classList.add("deleteAlert");
         deleteAlert.innerHTML = `Deleted the task.`;
         var dingAudio = new Audio();
         dingAudio.src = "cross.mp3";
         dingAudio.play();
         dingAudio.volume = "0.1"
         console.log("adada");
      }

       
})
   
   if (input == null || input == "" || input == NaN){
      var inputgeneral = document.getElementById("job");
      inputgeneral.classList.add("input1");
      inputgeneral.classList.toggle("input");
   }else{
      var newdiv = document.createElement("div");  
      newdiv.classList.add("newdiv");
      newdiv.innerHTML=input;
      todocontainer.appendChild(newdiv); 

      var deleterbtn = document.createElement("button");    
      deleterbtn.classList.add("deleterButton"); 
      newdiv.appendChild(deleterbtn);
      var icon1 = document.createElement("i");
      icon1.classList.add("fa","fa-times-circle","fa-2x");
      deleterbtn.appendChild(icon1);
      

      document.getElementById("job").value = "";


      var diditButton = document.createElement("button");
      diditButton.classList.add("diditButton");
      newdiv.appendChild(diditButton);
      var icon = document.createElement("i");
      icon.classList.add("fa","fa-check-circle","fa-2x");
      diditButton.appendChild(icon);
 

   
}


}
