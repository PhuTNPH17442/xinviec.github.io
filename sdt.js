function check (){
    var sdt = document.getElementById('sdt').value;
    var sdt_regex = /((09|08|07|03|05)+([0-9]{8})\b)/g;
    if(sdt !==""){
        if(sdt_regex.test(sdt)== false){
            alert('Số điện thoại của bạn không đúng định dạng ');
        }else{
            alert('Số điện thoại hợp lệ')
        }
    }else{
        alert('Số điện thoại không được để trống ')
    }
    
   
}