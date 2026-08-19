function register(cb){
    setTimeout(() => {console.log("register here") 
        cb();
    }, 10000);
}
function login(cb){
    setTimeout(()=>{console.log("login")
        cb();
    },5000);
}function getData(cb){
    
    setTimeout(()=>{console.log("fetching data")
        cb();
    },6000);
}function displayData(cb){
    ;
    setTimeout(()=>{console.log("display data")
        cb();
    },4000);
}
// Callback Hell Problem
register(
    ()=>{
        login(
            ()=>{
                getData(
                    ()=>{
                        displayData();
                    }
                );
            }
        );
    }
);

register();
login();
getData();
displayData();
console.log("Call Another Application");