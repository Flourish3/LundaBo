function navMouseOver(element){
    element.style.color = "green";
    return true;
}

function navMouseOut(element){
    element.style.color = "black";
    return true;
}

function newUserClick(element){
    document.location.href = '/newUser';
}