function Pracexp() {
    return (
        <div>
            <form action="get">


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
                    <input type="date" name="enddate" id="enddate" />
                </fieldset>


            </form>
        </div>
    )
}

export default Pracexp