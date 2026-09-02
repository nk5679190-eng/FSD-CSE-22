import ReactDOM from "react"
function Book(){
    return(
        <div className="book">
            <img src="" width="100" height="100" alt="book image"/>
            <h2>Title:ReactJS</h2>
            <h2>Price:468</h2>
            <button>ADDToCart</button>
        </div>
    )
}
function App(){
    return(
        <div className="app">
            <Book/>
        </div>
    )
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App/>)