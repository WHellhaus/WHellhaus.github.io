function buildHtml() {
	var div = document.getElementById("albumDiv");

	var html="";

	for(var i=0; i<albums.length; i++) {
        	html +="<div class=\"col l3 m6 s12 gallery-item gallery-expand gallery-filter polygon\">";
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
                html+= albums[i].review;
                html+="</div>"
                html+="</div>"
                html+="</div>"
	}

	div.innerHTML = html;
}
buildHtml();