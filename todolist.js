function addtodo(){
     var todolist = document.getElementById("todolist");

     var todoinput = document.getElementById("todoinput").value;

     
     if(todoinput == ""){

        document.getElementById("error").innerText = "Please fill input box !"
        
        todo.innerHTML="";

     }else{
        document.getElementById("error").innerText = ""

        var todo = document.createElement("li");

        todo.innerHTML=(todoinput);
   
        todolist.append(todo);

        document.getElementById("todoinput").value = "";
     }


}




