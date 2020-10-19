 dataReference.collection("Counters").doc("1").get().then((doci) => {
	
	document.getElementById("users").innerHTML=doci.get("LoginCounts");
	document.getElementById("reportsnos").innerHTML=doci.get("IncomingHelpCounts")
	document.getElementById("psnos").innerHTML=doci.get("PoliceStationCounts");
	
	
 }).catch(function(error) {
	  
 document.getElementById("demo").innerHTML=error;
 
 });