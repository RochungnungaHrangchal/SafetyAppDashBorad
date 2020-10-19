function searchEmergencyContact()
{
	
var searchTxt = document.getElementById("phoneToView").value;
var dataSetEmergency= new Array();
var x=document.getElementById("emergencydiv");
// awm chuan show ang a nih loh chuan a ni mai

if(isNaN(searchTxt))
{
     document.getElementById("demo").innerHTML="Incorrect Phone Number Format ";
     x.style.display = "none";
     dataSetEmergency.length=0;

}

else if(searchTxt.length != 10)
{
	document.getElementById("demo").innerHTML="Invalid Phone Number";
	x.style.display = "none";
	dataSetEmergency.length=0;
	
}
else
{
	 document.getElementById("demo").innerHTML="";
	 x.style.display = "block";
	 var searchNumber="+91" + searchTxt;
	 
	 dataReference.collection("Users").doc(searchNumber).collection("EmergencyContact").doc("1").get().then((doci) => {
	    	
	   
	   if(doci.exists)
	   { dataSetEmergency.push([doci.get("nameone"),doci.get("onecontact"),doci.get("nametwo"),doci.get("twocontact")]);
	 
		$('#dataTableEmergency').show();
	 
		$('#dataTableEmergency').DataTable( {
		    destroy: true,
            data: dataSetEmergency,
            columns: [
			        { title: "First Contact Name" },
					{ title: "Phone" },
					{ title: "Second Contact Name" },
					{ title: "Phone" }
					
            ]
    } );
    
	   }	
	   else
	   {
		  document.getElementById("demo").innerHTML="No Records Found"; 
		  x.style.display = "none";
		  dataSetEmergency.length=0;
	   }
	
 }).catch(function(error) {
	  
   document.getElementById("demo").innerHTML=error;
   x.style.display = "none";
});
  
  // DataTable a dah luh
  
	
	
}


}
