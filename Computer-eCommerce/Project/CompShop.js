document.getElementById('clsacc').style.display='none';
success=localStorage.getItem('success2');
success2=JSON.parse(success);
if(success2==true){
    var loggedIn=localStorage.getItem('Logged-username');
    document.getElementById('h5').innerHTML=loggedIn;
    document.getElementById('clsacc').style.display='block';
    document.getElementById('log').style.display='none';
    document.getElementById('crtacc').style.display='none';
}
else{
    document.getElementById('acc').style.display='none';
    document.getElementById('h5').style.display='none';
};
document.getElementById('clsacc').addEventListener('click',function(){
    localStorage.removeItem('success2')
    localStorage.setItem('success2',false)
});
function SearchCatagories(){
    const input=document.querySelector('#search');
    input.addEventListener('keyup',function(){
        var data=this.value.toUpperCase();
        var li=document.querySelectorAll('.nav li');
        for(let i=0;i<li.length;i++){
            if(li[i].innerHTML.toUpperCase().indexOf(data)>-1){
                li[i].style.display='';
            }
            else{
                li[i].style.display='none';
            };
        };
    });
};
function SearchComputers1(){
    const input = document.querySelector('.search');
    input.addEventListener('keyup', function() {
        var data = this.value.toUpperCase();
        var li = document.querySelectorAll('.s');
        for (let i = 0; i < li.length; i++) {
            if (li[i].innerHTML.toUpperCase().indexOf(data) > -1) {
                li[i].parentElement.parentElement.style.display='';
            }
            else {
                li[i].parentElement.parentElement.style.display='none';
            };
        };
    });
};
function SearchComputers2(){
    const input = document.querySelector('.search');
    input.addEventListener('keyup', function() {
        var data = this.value.toUpperCase();
        var li = document.querySelectorAll('.se');
        for (let i = 0; i < li.length; i++) {
            if (li[i].innerHTML.toUpperCase().indexOf(data) > -1) {
                li[i].parentElement.parentElement.style.display='';
            }
            else {
                li[i].parentElement.parentElement.style.display='none';
            }
        }
    });
};
function SearchComputers3(){
    const input = document.querySelector('.search');
    input.addEventListener('keyup', function() {
        var data = this.value.toUpperCase();
        var li = document.querySelectorAll('.sea');
        for (let i = 0; i < li.length; i++) {
            if (li[i].innerHTML.toUpperCase().indexOf(data) > -1) {
                li[i].parentElement.parentElement.style.display='';
            }
            else {
                li[i].parentElement.parentElement.style.display='none';
            };
        };
    });
};
function SearchComputers4(){
    const input = document.querySelector('.search');
    input.addEventListener('keyup', function() {
        var data = this.value.toUpperCase();
        var li = document.querySelectorAll('.sear');
        for (let i = 0; i < li.length; i++) {
            if (li[i].innerHTML.toUpperCase().indexOf(data) > -1) {
                li[i].parentElement.parentElement.style.display='';
            }
            else {
                li[i].parentElement.parentElement.style.display='none';
            };
        };
    });
};
SearchCatagories();
SearchComputers1();
SearchComputers2();
SearchComputers3();
SearchComputers4();
function  AddComp(){
    var comp = localStorage.getItem('comp');
    if(comp){
        var comp_new = JSON.parse(comp);
        var tel=JSON.parse(users);
        for (let i = 0; i < comp_new.length; i++){
            var a = comp_new[i].modal_catag;
            if (a == 'Acer'){
                $('#acer_info').append(`<div class="col-3"><center><img src="`+comp_new[i].modal_pht+`"></center><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Name:</h6><h6 class="d-inline-block sear">`+comp_new[i].modal_name+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Description:</h6><h6 class="d-inline-block">`+comp_new[i].modal_descrip+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Price:</h6><h6 class="d-inline-block">`+comp_new[i].modal_price+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">New:</h6><h6 class="d-inline-block">`+comp_new[i].modal_new+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Phone Number:</h6><h6 class="d-inline-block">+010-311-1509</h6></div><center><button class="btn btn-outline-dark w-100" data-bs-toggle="modal" data-bs-target="#`+comp_new[i].modal_name+`">More Information<button></center><div class="modal modal-xl" id="`+comp_new[i].modal_name+`"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h3 class="float-start"><h3></div><div class="modal-body"><center><img src="`+comp_new[i].modal_pht+`"></center><h1 class="text-center text-primary mb-5">`+comp_new[i].modal_name+`</h1><div class="row"><div class="col-5"><table class="table"><tr><td>Name:</td><td>`+comp_new[i].modal_name+`</td></tr><tr><td>Description:</td><td>`+comp_new[i].modal_descrip+`</td></tr><tr><td>Price:</td><td>`+comp_new[i].modal_price+`</td></tr><tr><td>Phone Number:</td><td>010-311-1509</td></tr><tr><td>New:</td><td>`+comp_new[i].modal_new+`</td></tr><tr><td>RAM:</td><td>`+comp_new[i].modal_ram+`</td></tr></table></div><div class="col-2"></div><div class="col-5"><table class="table"><tr><td>CPU:</td><td>`+comp_new[i].modal_cpu+`</td></tr><tr><td>ROM:</td><td>`+comp_new[i].modal_rom+`</td></tr><tr><td>ROM Type:</td><td>`+comp_new[i].modal_romtyp+`</td></tr><tr><td>Operating system</td><td>`+comp_new[i].modal_os+`</td></tr><tr><td>Video Card</td><td>`+comp_new[i].modal_vidcard+`</td></tr></table></div></div></div><div class="modal-footer"><div class="row container"><div class="col-1"><button class="btn btn-outline-dark" data-bs-dismiss="modal">Back</button></div><div class="col-10"></div><div class="col-1"><a href="Buy.html" class="btn btn-outline-dark">Buy</a></div></div></div></div></div></div></div>`);
            }
            if (a == 'Asus'){
                $('#asus_info').append(`<div class="col-3"><center><img src="`+comp_new[i].modal_pht+`"></center><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Name:</h6><h6 class="d-inline-block sear">`+comp_new[i].modal_name+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Description:</h6><h6 class="d-inline-block">`+comp_new[i].modal_descrip+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Price:</h6><h6 class="d-inline-block">`+comp_new[i].modal_price+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">New:</h6><h6 class="d-inline-block">`+comp_new[i].modal_new+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Phone Number:</h6><h6 class="d-inline-block">+010-311-1509</h6></div><center><button class="btn btn-outline-dark w-100" data-bs-toggle="modal" data-bs-target="#`+comp_new[i].modal_name+`">More Information<button></center><div class="modal modal-xl" id="`+comp_new[i].modal_name+`"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h3 class="float-start"><h3></div><div class="modal-body"><center><img src="`+comp_new[i].modal_pht+`"></center><h1 class="text-center text-primary mb-5">`+comp_new[i].modal_name+`</h1><div class="row"><div class="col-5"><table class="table"><tr><td>Name:</td><td>`+comp_new[i].modal_name+`</td></tr><tr><td>Description:</td><td>`+comp_new[i].modal_descrip+`</td></tr><tr><td>Price:</td><td>`+comp_new[i].modal_price+`</td></tr><tr><td>Phone Number:</td><td>010-311-1509</td></tr><tr><td>New:</td><td>`+comp_new[i].modal_new+`</td></tr><tr><td>RAM:</td><td>`+comp_new[i].modal_ram+`</td></tr></table></div><div class="col-2"></div><div class="col-5"><table class="table"><tr><td>CPU:</td><td>`+comp_new[i].modal_cpu+`</td></tr><tr><td>ROM:</td><td>`+comp_new[i].modal_rom+`</td></tr><tr><td>ROM Type:</td><td>`+comp_new[i].modal_romtyp+`</td></tr><tr><td>Operating system</td><td>`+comp_new[i].modal_os+`</td></tr><tr><td>Video Card</td><td>`+comp_new[i].modal_vidcard+`</td></tr></table></div></div></div><div class="modal-footer"><div class="row container"><div class="col-1"><button class="btn btn-outline-dark" data-bs-dismiss="modal">Back</button></div><div class="col-10"></div><div class="col-1"><a href="Buy.html" class="btn btn-outline-dark">Buy</a></div></div></div></div></div></div></div>`);
            }
            if (a == 'MacBook'){
                $('#macBook_info').append(`<div class="col-3"><center><img src="`+comp_new[i].modal_pht+`"></center><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Name:</h6><h6 class="d-inline-block sear">`+comp_new[i].modal_name+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Description:</h6><h6 class="d-inline-block">`+comp_new[i].modal_descrip+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Price:</h6><h6 class="d-inline-block">`+comp_new[i].modal_price+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">New:</h6><h6 class="d-inline-block">`+comp_new[i].modal_new+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Phone Number:</h6><h6 class="d-inline-block">+010-311-1509</h6></div><center><button class="btn btn-outline-dark w-100" data-bs-toggle="modal" data-bs-target="#`+comp_new[i].modal_name+`">More Information<button></center><div class="modal modal-xl" id="`+comp_new[i].modal_name+`"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h3 class="float-start"><h3></div><div class="modal-body"><center><img src="`+comp_new[i].modal_pht+`"></center><h1 class="text-center text-primary mb-5">`+comp_new[i].modal_name+`</h1><div class="row"><div class="col-5"><table class="table"><tr><td>Name:</td><td>`+comp_new[i].modal_name+`</td></tr><tr><td>Description:</td><td>`+comp_new[i].modal_descrip+`</td></tr><tr><td>Price:</td><td>`+comp_new[i].modal_price+`</td></tr><tr><td>Phone Number:</td><td>010-311-1509</td></tr><tr><td>New:</td><td>`+comp_new[i].modal_new+`</td></tr><tr><td>RAM:</td><td>`+comp_new[i].modal_ram+`</td></tr></table></div><div class="col-2"></div><div class="col-5"><table class="table"><tr><td>CPU:</td><td>`+comp_new[i].modal_cpu+`</td></tr><tr><td>ROM:</td><td>`+comp_new[i].modal_rom+`</td></tr><tr><td>ROM Type:</td><td>`+comp_new[i].modal_romtyp+`</td></tr><tr><td>Operating system</td><td>`+comp_new[i].modal_os+`</td></tr><tr><td>Video Card</td><td>`+comp_new[i].modal_vidcard+`</td></tr></table></div></div></div><div class="modal-footer"><div class="row container"><div class="col-1"><button class="btn btn-outline-dark" data-bs-dismiss="modal">Back</button></div><div class="col-10"></div><div class="col-1"><a href="Buy.html" class="btn btn-outline-dark">Buy</a></div></div></div></div></div></div></div>`);
            }
            if (a == 'Lenovo'){
                $('#lenovo_info').append(`<div class="col-3"><center><img src="`+comp_new[i].modal_pht+`"></center><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Name:</h6><h6 class="d-inline-block sear">`+comp_new[i].modal_name+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Description:</h6><h6 class="d-inline-block">`+comp_new[i].modal_descrip+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Price:</h6><h6 class="d-inline-block">`+comp_new[i].modal_price+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">New:</h6><h6 class="d-inline-block">`+comp_new[i].modal_new+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Phone Number:</h6><h6 class="d-inline-block">+010-311-1509</h6></div><center><button class="btn btn-outline-dark w-100" data-bs-toggle="modal" data-bs-target="#`+comp_new[i].modal_name+`">More Information<button></center><div class="modal modal-xl" id="`+comp_new[i].modal_name+`"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h3 class="float-start"><h3></div><div class="modal-body"><center><img src="`+comp_new[i].modal_pht+`"></center><h1 class="text-center text-primary mb-5">`+comp_new[i].modal_name+`</h1><div class="row"><div class="col-5"><table class="table"><tr><td>Name:</td><td>`+comp_new[i].modal_name+`</td></tr><tr><td>Description:</td><td>`+comp_new[i].modal_descrip+`</td></tr><tr><td>Price:</td><td>`+comp_new[i].modal_price+`</td></tr><tr><td>Phone Number:</td><td>010-311-1509</td></tr><tr><td>New:</td><td>`+comp_new[i].modal_new+`</td></tr><tr><td>RAM:</td><td>`+comp_new[i].modal_ram+`</td></tr></table></div><div class="col-2"></div><div class="col-5"><table class="table"><tr><td>CPU:</td><td>`+comp_new[i].modal_cpu+`</td></tr><tr><td>ROM:</td><td>`+comp_new[i].modal_rom+`</td></tr><tr><td>ROM Type:</td><td>`+comp_new[i].modal_romtyp+`</td></tr><tr><td>Operating system</td><td>`+comp_new[i].modal_os+`</td></tr><tr><td>Video Card</td><td>`+comp_new[i].modal_vidcard+`</td></tr></table></div></div></div><div class="modal-footer"><div class="row container"><div class="col-1"><button class="btn btn-outline-dark" data-bs-dismiss="modal">Back</button></div><div class="col-10"></div><div class="col-1"><a href="Buy.html" class="btn btn-outline-dark">Buy</a></div></div></div></div></div></div></div>`);
            }
            if (a == 'Dell'){
                $('#dell_info').append(`<div class="col-3"><center><img src="`+comp_new[i].modal_pht+`"></center><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Name:</h6><h6 class="d-inline-block sear">`+comp_new[i].modal_name+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Description:</h6><h6 class="d-inline-block">`+comp_new[i].modal_descrip+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Price:</h6><h6 class="d-inline-block">`+comp_new[i].modal_price+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">New:</h6><h6 class="d-inline-block">`+comp_new[i].modal_new+`</h6></div><div class="box w-75 mx-auto"><h6 class="d-inline-block bg-dark text-light">Phone Number:</h6><h6 class="d-inline-block">+010-311-1509</h6></div><center><button class="btn btn-outline-dark w-100" data-bs-toggle="modal" data-bs-target="#`+comp_new[i].modal_name+`">More Information<button></center><div class="modal modal-xl" id="`+comp_new[i].modal_name+`"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h3 class="float-start"><h3></div><div class="modal-body"><center><img src="`+comp_new[i].modal_pht+`"></center><h1 class="text-center text-primary mb-5">`+comp_new[i].modal_name+`</h1><div class="row"><div class="col-5"><table class="table"><tr><td>Name:</td><td>`+comp_new[i].modal_name+`</td></tr><tr><td>Description:</td><td>`+comp_new[i].modal_descrip+`</td></tr><tr><td>Price:</td><td>`+comp_new[i].modal_price+`</td></tr><tr><td>Phone Number:</td><td>010-311-1509</td></tr><tr><td>New:</td><td>`+comp_new[i].modal_new+`</td></tr><tr><td>RAM:</td><td>`+comp_new[i].modal_ram+`</td></tr></table></div><div class="col-2"></div><div class="col-5"><table class="table"><tr><td>CPU:</td><td>`+comp_new[i].modal_cpu+`</td></tr><tr><td>ROM:</td><td>`+comp_new[i].modal_rom+`</td></tr><tr><td>ROM Type:</td><td>`+comp_new[i].modal_romtyp+`</td></tr><tr><td>Operating system</td><td>`+comp_new[i].modal_os+`</td></tr><tr><td>Video Card</td><td>`+comp_new[i].modal_vidcard+`</td></tr></table></div></div></div><div class="modal-footer"><div class="row container"><div class="col-1"><button class="btn btn-outline-dark" data-bs-dismiss="modal">Back</button></div><div class="col-10"></div><div class="col-1"><a href="Buy.html" class="btn btn-outline-dark">Buy</a></div></div></div></div></div></div></div>`);
            }
        }
    }
}
AddComp();