
function Eduexp({ dataChange }) {


    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                dataChange(e.target.collegename.value, e.target.degreename.value, e.target.graddate.value)
            }}>
                <fieldset>
                    <legend>Add Educational Experience</legend>
                    <label htmlFor="collegename" >College: </label>
                    <input type="text" id="collegename" />
                    <br />
                    <label htmlFor="degreename">Degree: </label>
                    <input type="text" id="degreename" />
                    <br />
                    <label htmlFor="graddate">Graduation Date: </label>
                    <input type="date" id="graddate" />
                    <br />
                    <button>Submit</button>
                </fieldset>
            </form >
        </>




    )
}

export default Eduexp