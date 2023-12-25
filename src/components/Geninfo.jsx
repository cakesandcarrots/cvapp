import { useState } from "react"
function Geninfo() {
    const [name, setName] = useState("")
    const [mailid, setMaiid] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    return (
        < div >
            <form action="get">
                <fieldset>
                    <legend>Add General Infomation</legend>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.event)} />
                    <br />
                    <label htmlFor="email">Email ID:</label>
                    <input type="email" name="email" id="email" onChange={(e) => setMaiid(e.target.event)} />
                    <br />
                    <label htmlFor="phoneno">Phone No: </label>
                    <input type="tel" name="phoneno" id="phoneno" onChange={(e) => setPhoneNo(e.target.event)} />
                    <br />
                    <button>Submit</button>

                </fieldset>

            </form>
        </div >

    )
}

export default Geninfo