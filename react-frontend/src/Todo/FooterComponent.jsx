import { useContext } from "react"
import { AuthContext } from "./security/AuthContext"

function FooterComponent() {

    const NewAuthContext = useContext(AuthContext)

    console.log(`Footer component - ${NewAuthContext.number}`)

    return (
        <footer className='footer'>
            <div className="container">
                Your Footer
            </div>
        </footer>
    )
}

export default FooterComponent