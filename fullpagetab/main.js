
function openTab(cityName, ele, color){
    let i, tabcontents, tablinks;
    tabcontents = document.getElementsByClassName('tabcontent');
    tablinks = document.getElementsByClassName('tablink')
    for(i=0; i<tabcontents.length; i++){
        tabcontents[i].style.display = 'none';
    };
    for(i=0; i<tablinks.length; i++){
        tablinks[i].style.backgroundColor = "";
    };
    // show the specific tab content
    document.getElementById(cityName).style.display = 'block';
    // add specific color to to the button that show the content
    ele.style.backgroundColor = color;
};
// get the element with id to make it default open and cliok on it. 
document.getElementById('defaultOpen').click();