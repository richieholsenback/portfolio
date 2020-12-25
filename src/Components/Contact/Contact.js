import { Button } from "react-bootstrap"
import { NavBar } from "../NavBar/NavBar"
import "../scss/_contact.scss"

export const ContactSection = () => {
    return (
        <div className="contact-page">
            <NavBar />
            <div className="contact-container">
                <p className="contact-text">
                    I’m excited to make excellent, user focused websites with you and your team.
                    Let’s get in touch!
                </p>
                <div className="button-section">
                    <Button className="button-left" href="https://github.com/richieholsenback" target="_blank">Check out my LinkedIn</Button>{' '}
                    <Button className="button-right" >Send me an Email</Button>{' '}
                </div>
            </div>
        </div>
    )
}