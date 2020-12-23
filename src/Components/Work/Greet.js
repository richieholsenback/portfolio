
import React from "react"
import { Button, Image } from "react-bootstrap";
import photo from '../../images/IMG_0151.jpeg'
import "../scss/Greet.scss"


export const GreetingSection = () => {
    return (
        <div className="work-page">
            <div className="main-container">
                <Image src={photo} width="25%" height="auto" />
                <div className="greet-info">
                    <h1>Richie Holsenback</h1>
                    <p>
                        I’m a UI/UX designer and a front end developer. I am excited about the idea of working with
                        agile teams to create beautiful, responsive applications that are user focused and user tested.
                </p>
                    <Button size="xl" primary>See My Work</Button>
                </div>
            </div>
            <div className="projects">
                <h3>Recent Work</h3>
            </div>
        </div>
    )
}