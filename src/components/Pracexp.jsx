import { useState } from "react"

function Pracexp() {
    const [companyName, setCompanyName] = useState("")
    const [position, setPosition] = useState("")
    const [jobDesc, setJobDesc] = useState("")
    const [startDate, setStartDate] = useState("")
    const [enddate, setEndDate] = useState("")
    return (
        <div>
            <form action="get">
                <fieldset>
                    <legend>Add Practical Experience</legend>
                    <label htmlFor="companyname">Company: </label>
                    <input type="text" name="companyname" id="companyname" onChange={(e) => setCompanyName(e.target.value)} />
                    <br />
                    <label htmlFor="position">Position: </label>
                    <input type="text" name="position" id="position" onChange={(e) => setPosition(e.target.event)} />
                    <br />
                    <label htmlFor="jobdesc">Job Description: </label>
                    <input type="text " name="jobdesc" id="jobdesc" onChange={(e) => setJobDesc(e.target.event)} />
                    <br />
                    <label htmlFor="startdate">Job Joined: </label>
                    <input type="date" name="startdate" id="startdate" onChange={(e) => setStartDate(e.target.value)} />
                    <br />
                    <label htmlFor="enddate">Job left: </label>
                    <br />
                    <input type="date" name="enddate" id="enddate" onChange={(e) => setEndDate(e.target.value)} />
                    <br />
                    <button>Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Pracexp