import React, {Component, useEffect, useState} from 'react'
import {Card} from "./Components/Card"
import "./App.css"
import axios from 'axios';



// class App extends Component (
//     state = {
//         users: [],
//     };

//     componentDidMount(){
//         axios
//             .get((response) => this.setState({users: response.data}));
//             .
        
//     }
//     render(){
//         return(
//             {
//                 this.state.users.map((item)=>{
//                     return(
//                         <Card
//                             name={item.name}
//                             username={item.username}
//                             email={item.email}
//                             phone={item.phone} 
//                         />
//                     )
//                 })
//             }
//         )
//     }
// )


//function
const App = () =>{
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
    }, [])
    console.log(users)
    return(
        <>
            {
                users.map((item) =>{
                    return(
                        <Card
                            name={item.name}
                            username={item.username}
                            email={item.email}
                            phone={item.phone} 
                        />
                    )
                })
            }
        </>
    )
}

export default App