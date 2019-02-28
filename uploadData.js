var client;

function startDataUpload() 
{
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var module = document.getElementById("module").value;
	var postString = "name="+name+"&surname="+surname+"&module="+module;
	alert (postString);
	processData(postString);
}

function processData(postString)
{
	client = new XMLHttpRequest();
	client.open('POST','http://developer.cege.ucl.ac.uk:30312/reflectData',true);
	client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	client.onreadystatechange = dataUploaded;
	client.send(postString);
}

function dataUploaded()
{
	if (client.readyState == 4){
		document.getElementById("dataUploadResult").innerHTML = client.responseText;
	}
}
