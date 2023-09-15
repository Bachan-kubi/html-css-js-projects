function openCity(e, cityName){
    let i;
    let tabContent = document.getElementsByClassName('tabcontent');
    let tablinks = document.getElementsByClassName('tablinks');

    for(i=0; i<tabContent.length; i++){
        tabContent[i].style.display = 'none';
    };

    for(i=0; i<tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(' active')
    };
    
    document.getElementById(cityName).style.display = 'block';
    e.currentTarget.cityName = " active";
};