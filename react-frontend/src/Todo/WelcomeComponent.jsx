import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService"
import { useAuth } from "./security/AuthContext"

function WelcomeComponent() {

    const { username } = useParams()

    const authContext = useAuth()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi() {
        console.log('called')

        retrieveHelloWorldPathVariable('todoUser', authContext.token)
            .then( (response) => successfullResponse(response) )
            .catch( (response) => errorResponse(response) )
            .finally( () => console.log('cleanup') )
            
    }

    function successfullResponse(response) {
        console.log(response)
        // setMessage(response.data)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }    

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to='/todos '>Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello World</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent