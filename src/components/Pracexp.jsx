import { useState } from "react"

function Pracexp({ dataChange }) {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                dataChange(e.target.companyname.value, e.target.position.value, e.target.jobdesc.value, e.target.startdate.value, e.target.enddate.value)
            }}>
                <fieldset>
                    <legend>Add Practical Experience</legend>
                    <label htmlFor="companyname">Company: </label>
                    <input type="text" name="companyname" id="companyname" />
                    <br />
                    <label htmlFor="position">Position: </label>
                    <input type="text" name="position" id="position" />
                    <br />
                    <label htmlFor="jobdesc">Job Description: </label>
                    <input type="text " name="jobdesc" id="jobdesc" />
                    <br />
                    <label htmlFor="startdate">Job Joined: </label>
                    <input type="date" name="startdate" id="startdate" />
                    <br />
                    <label htmlFor="enddate">Job left: </label>
                    <br />
                    <input type="date" name="enddate" id="enddate" />
                    <br />
                    <button>Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Pracexp