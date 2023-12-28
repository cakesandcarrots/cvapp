import { useState } from "react"
function Display({ name, mailid, phoneNo, collegeName, degreeName, gradDate, companyName, position, jobDesc, startDate, endDate }) {
    return (
        <>
            <div className="geninfo">
                <div>General Information</div>
                <div>{name}</div>
                <div>{mailid}</div>
                <div>{phoneNo}</div>
            </div>
            <div className="eduinfo">
                <div>Educational Information</div>
                <div>{collegeName}</div>
                <div>{degreeName}</div>
                <div>{gradDate}</div>
            </div>
            <div className="pracinfo">
                <div>Practical Information</div>
                <div>{companyName}</div>
                <div>{position}</div>
                <div>{jobDesc}</div>
                <div>{startDate}</div>
                <div>{endDate}</div>

            </div>



        </>
    )
}

export default Display