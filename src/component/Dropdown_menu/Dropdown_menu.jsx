// import React from 'react'
import style from './Dropdown_menu.module.css'
// import Dropdown from 'react-bootstrap/Dropdown';
// function Dropdown_menu() {
//     return (
//         <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 Dropdown Button
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>
//     )
// }

// export default Dropdown_menu



function Dropdown_menu() {
    return (
        <div className={style.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
    )
}

export default Dropdown_menu