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
                    <button className="button-left">Check out my LinkedIn</button>
                    <button className="button-right">Send me an Email</button>
                </div>
            </div>
        </div>
    )
}