var links=document.getElementsByClassName('sub-links');
var contents=document.getElementsByClassName('sub-contents');

function opentab(tabs){
    for(link of links){
        link.classList.remove('active-link');
    }
    for(content of contents){
        content.classList.remove('active-sub');
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabs).classList.add('active-sub');



}