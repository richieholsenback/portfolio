import { Button } from "bootstrap"
import { Education } from "./Education"
import { ProExp } from "./ProExp"
import { TechExp } from "./TechExp"
import "../scss/Resume.scss"

export const Resume = () => {
    return (
        <div className="resume-section">
            <div className="resume-section-header">
                <h1 className="resume-header">Resumé</h1>
                <button>Download as PDF</button>
            </div>
            <TechExp />
            <ProExp />
            <Education />
        </div>
    )
}