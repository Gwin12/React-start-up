import React, { useEffect } from "react"
import Container from "../utils/Container"


function Page(props) {
    // Setting title and scrolling to the top of the page once after this component has been rendered
    useEffect(() => {
        document.title = `${props.title} | Thrillzone`
        window.scrollTo(0, 0)
    }, [props.title])

    return (
        <Container wide={props.wide}>
            {props.children}
        </Container>
    )
}

export default Page