var contect= document.getElementById("content");
var button = document.getElementById("B1");
var buttonA = document.getElementById("B2");
var contentA = document.getElementById("contentA")
var closeP = document.getElementById("search1");
 
button.onclick = function(){
	
	 if(content.className == "open"){
		 content.className = "";
		 button.innerHTML = "Search"
	 } else{
		 content.className = "open";
		 button.innerHTML = "Close";
	 }
};

buttonA.onclick = function(){
	
	 if(contentA.className == "open"){
		 contentA.className = "";
		 buttonA.innerHTML = "Contact Us"
	 } else{
		 contentA.className = "open";
		 buttonA.innerHTML = "Close";
	 }
};
closeP.onclick = alert("The information has been send.");



