import React from "react";
import config from "./GreeterConfig.json";

export default class Greater extends React.Component{
    render (){
        return (
            <div>{config.greetText}</div>
        );
    }
}