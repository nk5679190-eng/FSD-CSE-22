function register(){
    setTimeout(() => {console.log("register here")}, 10000);
}
function login(){
    setTimeout(()=>{console.log("login")},5000);
}function getData(){
    
    setTimeout(()=>{console.log("fetching data")},6000);
}function displayData(){
    ;
    setTimeout(()=>{console.log("display data")},4000);
}

register();
login();
getData();
displayData();
console.log("Call Another Application");