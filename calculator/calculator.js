var resultStr = "";
window.onload=init;

function init(){
	console.log("Inside init function");
	document.getElementsByTagName("table")[0].addEventListener("click", getTarget);
	
}

function getTarget(event){
	console.log("inside getTarget");
	var id = event.target.id;
	var resultText = document.getElementById("resultText");
	console.log(id);
	if(id!="resultText" && id!="equalToBtn"){
		//console.log(id);		
		resultStr = resultText.value + id;
		resultText.value = resultStr;
	}
	else if(id=="equalToBtn"){
		console.log("Equal to button pressed!!!");
		//console.log(resultStr);
		var parsedStr = parse(resultStr);
		var result = eval(parsedStr);
		console.log(result);
		resultText.value = result;
	}
}

function parse(inputStr){
	inputStr = inputStr.replace('\u00D7','*');
	inputStr = inputStr.replace('\u00F7','/');
	console.log(inputStr);
	return inputStr;
}