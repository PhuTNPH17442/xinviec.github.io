function check (){
    var sdt = document.getElementById('sdt').value;
    if(sdt ==""){
        alert("Sdt khong duoc rong ");
        return;
    }
    if(isNaN(sdt)){
        alert("sdt phai la so ");
        return;
    }
   
}