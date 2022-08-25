// https://stackoverflow.com/questions/11563060
var birthDate = new Date(2006, 7, 4, 0, 0, 0, 0);
var currentDate = new Date();
var age = currentDate.getFullYear() - birthDate.getFullYear();
var month = currentDate.getMonth() - birthDate.getMonth();
var day = currentDate.getDate() - birthDate.getDate();
if ( month < 0 || month == 0 && day < 0 ) {
    age--;
}

document.getElementById('bday').innerHTML=age;
document.getElementById('pstart').innerHTML=age-8;
