//Loops through all the albums and creates a card for each
function buildHtml() {
	var div = document.getElementById("albumDiv");

	var html="";

	for(var i=0; i<albums.length; i++) {
        	html+="<div class=\"col l3 m6 s12 gallery-item gallery-expand gallery-filter polygon\">";
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
                html+="          <span class=\"price right\">" + "Reviewed on " + albums[i].reviewDate + "</span>";
                html+="        </div>";
                html+="</br>"
                html+= albums[i].review;
                html+= "<div>"
                html+= "<a href=\"" + albums[i].apple + "\" target=\"_blank\" class=\"inline-block\">";
                html+= "<img src=\"http://www.madduckband.com/imgs/badges/itunes_logo.png\" style=\"width:142px;height:53px;\">";
                html+= "</a>";
                html+= "<a href=\"" + albums[i].spotify + "\" target=\"_blank\" class=\"inline-block\">";
                html+= "<img src=\"https://imperialnorth.se/wp-content/uploads/2017/03/badge-spotify-3.png\" style=\"width:142px;height:53px;\">";
                html+= "</a>";
                html+= "</div>"
                html+= "</div>";
                html+= "</div>";
                html+= "</div>";
	}

	div.innerHTML = html;
}
buildHtml();