var nameElement=document.getElementById('name');
var phoneElement=document.getElementById('tel');
var nicknameElement=document.getElementById('nickname');
var passElement=document.getElementById('pass');
var noSuccess=document.getElementById('nosuccess');
var success=document.getElementById('success');
var users=[];
var userString=localStorage.getItem('users');
if(userString==null){

}
else{
    users=JSON.parse(userString);
}
function CreateAccount(event){
    event.preventDefault();
    var userName=nameElement.value;
    var userPhone=phoneElement.value;
    var userNickname=nicknameElement.value;
    var pass=passElement.value;
    var userExists=false;
    for(let i=0;i<users.length;i++){
        const u=users[i];
        if(u.nickname===userNickname){
            userExists=true;
            break;
        }
    }
    if(userExists){
        noSuccess.style.display='block';
        setTimeout(() => {
            success.style.display='none';
        }, 5000)
    }
    else{
        var userId=0;
        for(let i=0;i<users.length;i++){
            const u=users[i];
            if(u.id>userId){
                userId=u.id;
            }
        }
        userId++;
        var user={};
        user.id=userId;
        user.name=userName;
        user.phone=userPhone;
        user.nickname=userNickname;
        user.password=pass;
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
        success.style.display='block';
        setTimeout(() =>{
            success.style.display='none';
        }, 5000)
        window.location.href='./LogIn.html';
    }
}