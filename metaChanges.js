dataReference.collection("Counters").doc("1")
                .onSnapshot({
                   includeMetadataChanges: true
                }, function(doc) {
                    document.getElementById("reportsnos").innerHTML=doc.get("IncomingHelpCounts");
		    document.getElementById("users").innerHTML=doci.get("LoginCounts");
		    document.getElementById("psnos").innerHTML=doci.get("PoliceStationCounts");
                })..catch(function(error) {
	  
					document.getElementById("demo").innerHTML=error;
 
 });
