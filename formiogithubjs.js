$("body > nav > div > div.navbar-header").dblclick(function(){
  document.getElementsByClassName("container")[1].style.display='block';
});

if(window.location.href=='http://localhost:3001/#/'){
  document.getElementsByClassName("container")[1].style.display='none';
  $("body").append('<a href="#/form/619f37f4f89b30ff9633ed67/" target="_blank"><h5>Admin</h5></a>');
}
