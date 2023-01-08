
function addmessage(){
  var mess = document.getElementById("mess_in").value;

  localStorage.setItem("post_mess", mess);

  if (localStorage.getItem("post_mess") != null){
    document.write(localStorage.getItem("post_mess"));
    windows.location.reload(true);
    
  }
  

  alert("Message Sent!");
}
