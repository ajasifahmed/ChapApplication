var  myName=prompt("enter your name");
function send()
{
    var message=document.getElementById('message-id').value;
        // get message 
        // save in database
        firebase.database().ref("messages").push().set({
            "sender": myName,
            "message": message
        });
 
        // prevent form from submitting
        document.getElementById('message-id').value='';
    return false;
}
//listning for incoming message
var ol=document.getElementById('ol');
firebase.database().ref('messages').on('child_added',function(data){
var li=document.createElement('li');
var li_text=document.createTextNode(data.val().sender+":"+data.val().message);
li.appendChild(li_text);
ol.appendChild(li);
//Add button
if(data.val().sender===myName)
{
var button=document.createElement('button');
var button_text=document.createTextNode('Delete');
button.appendChild(button_text);
li.appendChild(button);

button.setAttribute('id',data.key)
button.setAttribute("onclick","del(this)")
button.setAttribute("class","btn")
}
})
function del(e)
{
    firebase.database().ref('messages').child(e.id).remove()
    e.parentNode.remove();
}
function deleteAll()
{
    firebase.database().ref('messages').remove();
    ol.innerText="";
}


