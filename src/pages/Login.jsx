import React, { useEffect } from "react"
import Page from "../components/Page"
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function Login() {
    const onFrameButtonClick = useCallback(() => {
        // Please sync "Signup page" to the project
    }, []);

    return (
        <Page title="Login">
            
        </Page>
    )
}

export default Login