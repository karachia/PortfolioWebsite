var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

function hideNavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

// function changeIcon(x) {
//     x.classList.toggle("change");
// }
$(".hover").mouseleave(
    function() {
        $(this).removeClass("hover");
    }
);


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//open the education tab in resume by default
document.getElementById("education").style.display = "block";


function on(id) {    
    // document.getElementById(id).style.display = "inline-block";
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('visible');
}

function off(id, contentArea) {
    document.getElementById(id).style.display = "none"; 
}

function closeButton(id) {
    document.getElementById(id).classList.remove('visible');
    document.getElementById(id).classList.add('hidden');
    // document.getElementById(id).style.display = "none";
}


    



