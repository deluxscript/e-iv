import React from "react";
import classes from "./idcreator.module.css";
import Template1 from "../../templates/template 1/template1.component";
import Builder from "./builder.component";

const IdCreator = (props) => (
    <div className={classes.h100}>
        <div className={classes.idcreator}>
            <div className={classes.builder}>
                <Builder handler = {props.act}/>
            </div>
            <div className={classes.preview}>
                <h2>Preview</h2>
                <Template1
                    brideFamilyName = {props.bFn}
                    groomFamilyName = {props.gFn}
                    brideName = {props.bN}
                    groomName = {props.gN}
                    date = {props.date}
                    time = {props.time}
                    location = {props.loc}
                    description = {props.desc}
                />
            </div>
        </div>
    </div>
);

export default IdCreator;