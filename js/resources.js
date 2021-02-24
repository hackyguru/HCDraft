// Note : Since a similar architecture of projects.js was used in resources, we have the resource class here. Please don't mind unless you aren't lazy to refractor

var resources = {};

$(document).ready(function() {
    $.ajax(
        {
            url: "/data/resources.json",
            success: function(result) {

                // Remove resources that aren't active
                for (var i=0;i<result.length;i++) {
                    if (!result[i].active) {
                        result.splice(i,1);
                    }
                }
                for (var i=0;i<result.length;i++) {
                    if (i%2==0) {
                        $("#projCol1").append(getHTMLString(result[i]));
                    } else {
                        $("#projCol2").append(getHTMLString(result[i]));
                    }
                }
            }
        }
    );
})

function getHTMLString(project) {
    var returnString = `<div class="project-grid">
                            <h3 class="subtopic">${project.title}</h3>
                            <div class="content">
                                <div class="text-content">
                                    <p class="project-info">
                                        ${project.desc}
                                        <div class="developers">
                                        <br>
                                        <a href="${project.url}>"<div class="smallbtn">Know more
                                        </div></p></div></div></div></a>
                                        `

    return returnString;
}