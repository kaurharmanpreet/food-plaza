/*our aos data*/
  AOS.init({
	duration: 2500
  });

 /*for open nav*/
function openNav(){
	document.getElementById('mySidenav').style.width="100%";
	document.getElementById('mySidemenu').style.display="block";
	document.getElementById('button').style.display="block";
}

 /*for close nav*/
function closeNav(){
	document.getElementById('mySidenav').style.width=0;
	document.getElementById('mySidemenu').style.display="none";
	document.getElementById('button').style.display="none";
}


