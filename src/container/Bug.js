import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import { setFlag2} from "../redux/game-reducer";
import s from './bug.module.css'
const Bug = (props) => {
    const dispatch=useDispatch()

    dispatch(setFlag2(true))






    return (
        <div className={s.bug}></div>
    )
}

export default Bug