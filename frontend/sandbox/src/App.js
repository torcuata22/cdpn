import Navbar from './Shared/Navbar/Navbar'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function App() {
  return (
    <>
    <Navbar />
    <div className = "container-fluid mt-5">
    <div className = "row">
      <div className = "col col-md-3">
          <div className = "card">
          <div className="card-header">
      <DropdownButton id="dropdown-basic-button" title="My Files">
        <Dropdown.Item href="#/action-1">New Folder</Dropdown.Item>
        <Dropdown.Item href="#/action-2">New File</Dropdown.Item>
      </DropdownButton>

     </div>
            <div className = "card-body">
              <p>Folders and files</p>
            </div>
          </div>
      </div>
      <div className = "col col-md-9">
      <div className = "card">
            <div className = "card-body">
              <p>Code editor goes here</p>
            </div>
          </div>
      </div>
    </div>
    <div className='row mt-3'>
      <div className='col-md-12'>
        <div className='card'>
          <div className='card-body'>
            <h5 className = "card-title"> Console </h5>
          </div>

        </div>

      </div>
    </div>
    </div>
    </>
  );
}

