/*Functions to delete a card*/
var finalIdToDelete;
function delId(temp){
    finalIdToDelete = temp.id;
}
function delCard(){
    var obj = document.getElementById(finalIdToDelete);
    obj.remove();
}