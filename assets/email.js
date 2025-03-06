var shown = false;
function showhideEmailSchool(){
    if (shown){
        document.getElementById('email-s').innerHTML = "Show my school email";
        shown = false;
    }else{
        var myemail = "<a href='mailto:jonesj71" + "@" + "udayton.edu'>jonesj71" + "@" + "udayton.edu</a>";
        document.getElementById('email-s').innerHTML= myemail;
        shown = true;
    }
}

var pshown = false;
function showhideEmailPersonal(){
    if (pshown){
        document.getElementById('email-p').innerHTML = "Show my personal email";
        pshown = false;
    }else{
        var myemail = "<a href='mailto:justinjones1512" + "@" + "gmail.com'>justinjones1512" + "@" + "gmail.com</a>";
        document.getElementById('email-p').innerHTML= myemail;
        pshown = true;
    }
}