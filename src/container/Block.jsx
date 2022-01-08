import s from "./containere.module.css";
import Bug from "./Bug";
import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux";

const Block=(props)=>{
    const position=useSelector(state => state.position)

    return(

        <div style={props.blockWidth} onClick={()=>{props.setChose(props.id);if(props.arrCorr.length>8){props.setStart(!props.start)};if(props.id ===props.arrCorr[props.arrCorr.length-1]){

        }}}  id={props.id}  className={s.block}>
            {props.id === position ? <Bug /> : <div></div>}
        </div>
    )
}

export default Block