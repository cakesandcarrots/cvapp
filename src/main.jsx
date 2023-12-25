import React from 'react'
import ReactDOM from 'react-dom/client'
import Eduexp from './components/Eduexp'
import Geninfo from './components/Geninfo'
import Pracexp from './components/Pracexp'
import './index.css'
import './assets/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='cvwrapper'>
      <div className='details'>
        <Geninfo></Geninfo>
        <Eduexp></Eduexp>
        <Pracexp></Pracexp>
      </div>

      <div className='display'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt rhoncus lorem non bibendum. Duis ut nisi et massa commodo tempus. Pellentesque fermentum mi vitae magna laoreet vestibulum vel ac risus. Fusce tempus ornare velit non ultricies. Mauris rutrum nec dui ut dapibus. Donec purus sapien, egestas in orci eget, fringilla sodales eros. Duis fringilla mi sit amet erat tristique egestas. Nullam ut aliquet eros, accumsan blandit massa. Morbi elementum purus non commodo accumsan. Donec tincidunt commodo nulla eu volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;




        </p>


      </div>



    </div>

  </React.StrictMode>,
)
