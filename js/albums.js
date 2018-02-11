var albums = [
	{
			"title": "Saturation",
			"artist": "Brockhampton",
			"image": "https://cdn-s3.allmusic.com/release-covers/250/0004/755/0004755927.jpg",
			"review": "saturationReview"
	}];

 $.getJSON("albums.json", function(data){
 	if (typeof data !== "json"){
 		data = JSON.parse(data);
 	}
	albums = data;
}, "html");


function buildHtml() {
	var div = document.getElementById("albumDiv");

	var html="";

	for(var i=0; i<albums.length; i++) {
		html +="<div class=\"col l4 m6 s12 gallery-item gallery-expand gallery-filter polygon\">";
        html+="    <div class=\"gallery-curve-wrapper\">";
        html+="      <a class=\"gallery-cover gray\">";
        html+="        <img class=\"responsive-img\" src=\""+ albums[i].image + "\" alt=\"placeholder\">";
        html+="      </a>";
        html+="      <div class=\"gallery-header\">";
        html+="        <span>" + albums[i].title + "</span>";
        html+="      </div>";
        html+="      <div class=\"gallery-body\">";
        html+="        <div class=\"title-wrapper\">";
        html+="          <h3>" + albums[i].title + "</h3>";
        html+="          <span class=\"price\">" + albums[i].artist + "</span>";
        html+="        </div>";
        html+="        <p class=\"description\">" + albums[i].review + "</p>";
        html+="        <p class=\"description\"></p>";
	}

	div.innerHTML = html;
}
buildHtml();