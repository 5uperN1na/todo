import React from 'react'

//functional component
function Header() {
    return (
       <header style={headerStyle}>
           <h1>To Do List</h1>
       </header>
    )
}
const headerStyle = {
    background: "black",
    color: "white",
    textAlign: "center",
    padding: "10px"

}

export default Header;