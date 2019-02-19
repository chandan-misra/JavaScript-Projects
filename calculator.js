var resultStr = "";
window.onload=init;

function init(){
	console.log("Inside init function");
	document.getElementsByTagName("table")[0].addEventListener("click", getTarget);
	
}

function getTarget(){	
	var id = event.target.id;
	resultText = document.getElementById("resultText");
	if(id!="resultText" && id!="equalToBtn"){
		console.log(id);		
		resultStr = resultText.value + id;
		resultText.value = resultStr;
	}
	else if(id=="equalToBtn"){
		console.log("Equal to button pressed!!!");
		console.log(resultStr);
		var result = eval(resultStr);
		console.log(result);
		resultText.value = result;
	}
}