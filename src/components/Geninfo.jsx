import { useState } from "react"
import Display from "./Display"
function Geninfo() {

    const [name, setName] = useState("")
    const [mailid, setMaiid] = useState("")
    const [phoneNo, setPhoneNo] = useState("")

    function handlesubmit(e) {

        e.preventDefault()
        console.log(name)
        console.log(mailid)
        console.log(phoneNo)

    }
    return (
        < div >
            <form onSubmit={handlesubmit}>
                <fieldset>
                    <legend>Add General Infomation</legend>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                    <br />
                    <label htmlFor="email">Email ID:</label>
                    <input type="email" name="email" id="email" onChange={(e) => setMaiid(e.target.value)} />
                    <br />
                    <label htmlFor="phoneno">Phone No: </label>
                    <input type="tel" name="phoneno" id="phoneno" onChange={(e) => setPhoneNo(e.target.value)} />
                    <br />
                    <button type="submit">Submit</button>

                </fieldset>

            </form>
        </div >

    )
}

export default Geninfo