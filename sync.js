function register(){
    waitfordelay(10000);
    console.log("register here")
}
function login(){
    waitfordelay(5000);
    console.log("login")
}function getData(){
    waitfordelay(4000);
    console.log("fetching data")
}function displayData(){
    waitfordelay(6000);
    console.log("display data")
}
function waitfordelay(delay){
    const mt=Date.now()+delay;
    while(Date.now()<mt){

    }
}


register();
login();
getData();
displayData();
console.log("Call Another Application");