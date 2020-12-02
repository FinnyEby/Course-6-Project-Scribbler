/*function to add a comment*/
function addComment(commenttextarea) {
    if(commenttextarea.value.length > 0) {
        document.getElementById("comment-section").style.visibility = "visible";
        var comment = commenttextarea.value;
        document.getElementById('comment-section').innerHTML = '<p class="comment">'+comment+'</p>'+document.getElementById('comment-section').innerHTML;
        document.getElementById('commenttextarea').value = "";
    }
}
/*function to implement like feature*/
var likeCounter = 0;
function liked() {
    document.getElementById('likebutton').innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked';
    likeCounter++;
    if(likeCounter === 1) {
        document.getElementById('likecounter').innerHTML = '<p>'+likeCounter+' person likes this!</p>';
    } else {
        document.getElementById('likecounter').innerHTML = '<p>'+likeCounter+' people liked this!</p>';        
    }
}
/*function to enable edit mode*/
/*0 - view mode / 1 - edit mode*/
var mode = 0;
/* variables to check if the title and content are editted */
/* when values are set to 1 the updated tag is not added*/
var titleUpdated = 0;
var contentUpdated = 0;
/*variables to check if content was updated*/
var title;
var content;
function enableEditableMode() {
    if(mode == 0) {
        title = document.getElementById("contentTitle").innerHTML;
        content = document.getElementById("content").innerHTML;
        mode = 1;
        document.getElementById("contentTitle").style.border = '5px solid pink';
        document.getElementById("content").style.border = '5px solid pink';
        document.getElementById("contentTitle").contentEditable = true;
        document.getElementById("content").contentEditable = true;
        document.getElementById('editButton').innerHTML = 'Save <i class="fa fa-floppy-o" aria-hidden="true"></i>';
    } else {
        mode = 0;
        document.getElementById("contentTitle").style.border = 'none';
        document.getElementById("content").style.border = 'none';
        document.getElementById("contentTitle").contentEditable = false;
        document.getElementById("content").contentEditable = false;
        document.getElementById('editButton').innerHTML = 'Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
        titleAfterEdit = document.getElementById("contentTitle").innerHTML;
        contentAfterEdit = document.getElementById("content").innerHTML;
        if(title != titleAfterEdit && titleUpdated == 0) {
            document.getElementById("contentTitle").innerHTML = 'UPDATED: '+titleAfterEdit;
            titleUpdated = 1;
        }
        if(content != contentAfterEdit && contentUpdated == 0) {
            document.getElementById("content").innerHTML = '<p>UPDATED:</p>'+contentAfterEdit;
            contentUpdated = 1;
        }
    }
}