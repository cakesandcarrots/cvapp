import { useState } from 'react'
import Eduexp from './components/Eduexp'
import Geninfo from './components/Geninfo'
import Pracexp from './components/Pracexp'
import Display from './components/Display'
import './assets/styles.css'

function App() {
  //for General Information
  const [name, setName] = useState("");
  const [mailid, setMaiid] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  function handleGenDataChange(name, mailid, phoneNo) {
    setName(name)
    setMaiid(mailid)
    setPhoneNo(phoneNo)
  }

  //For Educational information
  const [collegeName, setCollegeName] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [gradDate, setGradDate] = useState("");

  function handleEduDataChange(collegeName, degreeName, gradDate) {
    setCollegeName(collegeName)
    setDegreeName(degreeName)
    setGradDate(gradDate)
  }

  //For Practical information
  const [companyName, setCompanyName] = useState("")
  const [position, setPosition] = useState("")
  const [jobDesc, setJobDesc] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  function handlePracDataChange(companyName, position, jobDesc, startDate, endDate) {
    setCompanyName(companyName)
    setPosition(position)
    setJobDesc(jobDesc)
    setStartDate(startDate)
    setEndDate(endDate)
  }
  return (
    <>
      <h1 className='heading'>CV Application</h1>
      <div className='cvwrapper'>
        <div className='details'>
          <Geninfo
            dataChange={handleGenDataChange}
          ></Geninfo>
          <Eduexp
            dataChange={handleEduDataChange}
          ></Eduexp>
          <Pracexp dataChange={handlePracDataChange}></Pracexp>
        </div>
        <div className='display'>
          <Display
            name={name}
            mailid={mailid}
            phoneNo={phoneNo}
            collegeName={collegeName}
            degreeName={degreeName}
            gradDate={gradDate}
            companyName={companyName}
            position={position}
            jobDesc={jobDesc}
            startDate={startDate}
            endDate={endDate}

          ></Display>
        </div>
      </div>
    </>
  )
}

export default App
