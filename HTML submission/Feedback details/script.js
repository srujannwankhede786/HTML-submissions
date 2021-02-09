var array = [];
function addFeedback(){
 
    document.getElementById("result").innerHTML = "<h2>"+"Feedback Details"+"</h2>"+"<br>"+"Successfully Added Feedback Details!";
    array.push(document.getElementById("feedback").value) ;

    document.getElementById("feedback").value = "";

}

function displayFeedback() {
    
    var x ="<h2>"+"Feedback Details"+"</h2>" ;
    var i ;
    for(i = 1; i<array.length+1 ; i++){
        x += "Feedback "+i+"<br>";
        x += array[i-1] + "<br>";
    }

    array = [];
    document.getElementById("result").innerHTML = x;
}

// var feeds = [];
// function addFeedback() {
//     var feedback = document.getElementById("feedback");
//     var res = document.getElementById("result");
//     feeds.push(feedback.value);
//     feedback.value = "";
//     res.innerHTML = "<h2>Feedback Details</h2><br>Successfully Added Feedback Details!";
// }

// function displayFeedback() {
//     var fh = "<h2>Feedback Details</h2>"
//     var fn = 1;
//     for (var i = 0; i < feeds.length; i++) {
//         fh += "Feedback " + fn.toString() + "<br>" + feeds[i] + "<br>";
//         fn++;
//     }
//     document.getElementById("result").innerHTML = fh;
//     feeds = [];
// }