$(document).ready(function() {

// html "pages"
var homeHtml =  "<div class='homeTitle row text-center'>" +
                    "<h2>Kennan Smith - Full-Stack Web Developer, Lover of Creativity</h2>" +
                "</div>" +
                "<div class='homePic row text-center'>" +
                    "<img src='assets/images/suited_headshot.jpg' alt='Headshot of Kennan Smith' />" +
                "</div>" +
                "<div class='homeSummary row text-center'>" +
                    "<h4>A Passion for Simple, yet Unique Creations</h4>" +
                    "<p>I love simple beauty and I am also aware that oversimplifying leads to a boring product that has no way of distinguishing itself from the crowd. This is why I go into every Web Development project with the goals of a seamless user experience, a simple presentation, and a creative flair that provides the project with its own personality.</p>" +
                "</div>" +
                "<div class='row'>" +
                    "<button id='portfolioButton'>My Projects</button>" +
                "</div>";

var portfolioHtml = "" +



                    "";

var contactMeHtml = "" +



                    "";

// jquery that displays the correct html "page"

// initially display the home "page"
function displayHome() {
    $("#main").html(homeHtml);
};

displayHome();




}); //end of docready