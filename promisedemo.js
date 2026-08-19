function register(){
    setTimeout(() => {console.log("register here") }, 10000);
}
function login(cb){
    setTimeout(()=>{console.log("login")
        cb();
    },5000);
}function getData(){
    
    setTimeout(()=>{console.log("fetching data");
    },6000);
}function displayData(){
    setTimeout(()=>{console.log("display data")
    },4000);
}
// Callback Hell Problem


register();
login();
getData();
displayData();
async function test(){
    try{
        await register();
        await login();
        await getData();
        displayData();
    }
    catch(err){
        console.log("Error",err);
    }
}
test();
console.log("Call Another Application");