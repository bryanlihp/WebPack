import React from "react";
import config from "./GreeterConfig.json";
import styles from "./Greeter.css"

export default class Greater extends React.Component{
    render (){
        return (
            <div className={styles.root}>{config.greetText}</div>
        );
    }
}