import React, { useEffect } from "react"

// Resuable container for the different pages
function Container(props) {
    return (
        <div className="">
            {props.children}
        </div>
    )
}

export default Container