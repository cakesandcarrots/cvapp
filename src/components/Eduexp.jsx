import { useState } from "react"

function Eduexp() {
    const [collegeName, setCollegeName] = useState("");
    const [degreeName, setDegreeName] = useState("")
    const [gradDate, setGradDate] = useState("")

    return (
        <>
            <form action="get" >
                <fieldset>
                    <legend>Add Educational Experience</legend>
                    <label htmlFor="collegename" >College: </label>
                    <input type="text" id="collegename" onChange={(e) => setCollegeName(e.target.value)} />
                    <br />
                    <label htmlFor="degreename">Degree: </label>
                    <input type="text" id="degreename" onChange={(e) => setDegreeName(e.target.value)} />
                    <br />
                    <label htmlFor="graddate">Graduation Date: </label>
                    <input type="date" id="graddate" onChange={(e) => setGradDate(e.target.value)} />
                    <br />
                    <button>Submit</button>
                </fieldset>
            </form>
        </>




    )
}

export default Eduexp