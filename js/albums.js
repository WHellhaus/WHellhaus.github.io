var saturationReviewElement = document.getElementById('saturationReview'),
    saturationReview = saturationReviewElement.innerHTML;
var isARealBoyReviewElement = document.getElementById('isARealBoyReview'),
    isARealBoyReview = isARealBoyReviewElement.innerHTML;

var albums = [
        {
                "title": "Saturation Trilogy",
                "artist": "Brockhampton",
                "image": "https://cdn-s3.allmusic.com/release-covers/250/0004/755/0004755927.jpg",
                "reviewDate": "2/11/2018",
                "review": saturationReview
        },
        {
                 "title":"...Is a Real Boy",
                 "artist":"Say Anything",
                 "image":"https://www.scenepointblank.com/assets/img/covers/med_Say_Anything_Is_a_Real_Boy.png",
                 "reviewDate": "2/28/2018",
                 "review": isARealBoyReview  
        }];



//Loops through all the albums and creates a card for each
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
                html+="          <span class=\"price right\">" + "Reviewed on " + albums[i].reviewDate + "</span>";               
                html+="        </div>";
                html+= albums[i].review;
                html+="<br/>"
                html+="<br/>"
                html+="</div>"
                html+="</div>"
                html+="</div>"
    }

    div.innerHTML = html;
}
buildHtml();