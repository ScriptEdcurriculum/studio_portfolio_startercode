//Unit 1 Portfolio with Firebase
// Use Firebase to store the images links and info for your projects. 
// Use Jquery to dynamically display the information from firebse. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
$(document).ready(function() {

    var projects = snapshot.val();
    for (var i in projects) {
        var div = $('<div>');
        var title = $('<h1>');
        title.text(projects[i].title);
        div.append(title);
        $("#project-sec").append(div);
    }


});
