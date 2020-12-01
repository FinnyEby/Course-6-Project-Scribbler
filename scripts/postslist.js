/*Functions to delete a card*/
/*Function to get the Id of card to be deleted*/
var finalIdToDelete;
function delId(temp){
    finalIdToDelete = temp.id;
}
/*Function to confirm the deletion of a card*/
function delCard(){
    var obj = document.getElementById(finalIdToDelete);
    obj.remove();
}

/*Function to navigate to the post page*/
function goToPostPage() {
    location.href='post.html';
}