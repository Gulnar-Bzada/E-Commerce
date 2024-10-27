var nicknameElement=document.getElementById('nickname');
var passElement=document.getElementById('pass');
var success=document.getElementById('success');
var noSuccess=document.getElementById('nosuccess');
var users=[];
var userString=localStorage.getItem('users');
if(userString==null){

}
else{
    users=JSON.parse(userString);
}
function Login(event){
    event.preventDefault();
    var nickname=nicknameElement.value;
    var pass=passElement.value;
    var userLoggedIn=false;
    for(let i=0;i<users.length;i++){
        const u=users[i];
        if((u.nickname==nickname)&&(u.password==pass)){
            userLoggedIn=true;
            localStorage.setItem('Logged-id',u.id);
            localStorage.setItem('Logged-username',u.nickname);
            break;
        }
    }
    if(userLoggedIn){
        localStorage.setItem('success2',true);
        success.style.display='block';
        noSuccess.style.display='none';
        setTimeout(()=>{
            window.location.href='./Project.html'
        },2000);
    }
    else{
        localStorage.removeItem('Logged-id');
        localStorage.removeItem('Logged-username');
        success.style.display='none';
        noSuccess.style.display='block';
    }
}