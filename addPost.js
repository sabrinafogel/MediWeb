function addPo(){
  var unam = document.getElementById("una").value;
  var tit = document.getElementById("title").value;
  var tag = document.getElementById("tag").value;
  var mes = document.getElementById("newMess").value;
  var postStr = tit + "/" + mes;
  console.log(postStr);
  console.log(unam);
  localStorage.setItem("newPoUser", unam);
  localStorage.setItem("newPoTit", tit);
  localStorage.setItem("newPoTag", tag);
  localStorage.setItem("newPoMess", mes);
  console.log("")
  console.log(localStorage.getItem("newPoUser"));
  console.log(localStorage.getItem("newPoTit"));
  console.log(localStorage.getItem("newPoTag"));
  console.log(localStorage.getItem("newPoMess"));
  alert("Post Successful!");
  window.location = "discussions.html";

}