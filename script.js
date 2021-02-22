// Once you link both React and ReactDOM libraries 
// you will have access to two global variables `React` and `ReactDOM`
//console.log(React)
//console.log(ReactDOM)

//let element = React.createElement(div, null, createElement(h1, null ,"Hello all"))

function Header(){
    return <div><h1>"Hello all"</h1></div>
}
function Footer(){
    return <h5>"How are you?"</h5>
}

class MainSection extends React.Component{
    render(){
        return <h3>My main section here</h3>
    }
}

let element =(
         <div>
           <Header/> 
           <MainSection/>
           <Footer/>
           <Header/>
         </div>
      )

ReactDOM.render(element, document.querySelector('#myApp'))

//or
//ReactDOM.render(<Header/>, document.querySelector('#myApp'))