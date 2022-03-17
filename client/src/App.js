import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React,{ useState,useEffect } from 'react'
import {UserContext} from './UserContext.js'
import chat from './Components/chat/chat.js'
import Home from './Components/home/Home'
import Navbar from './Components/layout/navbar'
import Login from './Components/auth/Login'
import Signup from './Components/auth/Signup'
function App() {
    
    const [user, setUser] = useState(null)
    useEffect(() => {
        const verifyUser = async () => {
            try {
            const res = await fetch('http://localhost:5000/verifyuser',{
                credentials : 'include',
                headers : {'Content-Type':'application/json'}
            })
            const data = await res.json()
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }
    verifyUser()

    }, [])
    
    return (
        <Router>
            <div className='App'>
                <Navbar/>
                <UserContext.Provider value={{user,setUser}}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/chat/:room_id/:room_name' component={chat} />
                        <Route  path='/signup' component={Signup} />
                        <Route  path='/login' component={Login} />
                    </Switch>
                </UserContext.Provider>
            </div>
        </Router>

    )
}

export default App