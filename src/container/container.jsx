import s from './containere.module.css'
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {
    setChose,
    setCors,
    setDisable, setFlag,
    setFlag2, setLaunch,
    setPosition,
    setRepeat,
    setStart, setStatus,

} from "../redux/game-reducer";

import Block from "./Block";

const Container=(props)=> {
const dispatch=useDispatch()
    const createStart=(info)=>dispatch(setStart(info))
    const createChoose=(info)=>dispatch(setChose(info))
    const createPosition=(info)=>dispatch(setPosition(info))
    const chose=useSelector(state => state.chose)
    const launch=useSelector(state => state.launch)
    const status=useSelector(state => state.status)
    const disabled=useSelector(state => state.disabled)
    const flag=useSelector(state => state.flag)
    const start=useSelector(state => state.start)
    const flag2=useSelector(state => state.flag2)
    const arrCor=useSelector(state => state.arrCorr)
    const position=useSelector(state => state.position)
    const repeat=useSelector(state => state.repeat)
    const [logo,setLogo]=useState("")
    const [click,setClick]=useState(true)

    const [answer,setAnswer]=useState(0)









    useEffect(()=>{
        if (flag2){
            dispatch(setDisable())
            for (let i in arrCor){
                (function f(i) {

                        setTimeout(()=>{ createPosition(arrCor[i]);if(Number(i)===8){
                            dispatch(setDisable())
                            if (arrCor[i]===chose){
                                dispatch(setStatus("Winner"))
                            }
                            else {
                                dispatch(setStatus("Loser"))
                            }

                        } },i*1000)

                    }
                )(i)
            }
        }

    },[start])

    function createName(position,logo){
        const namesArr={up:-10,down:10,right:1,left:-1}
        let names=["up","down","right","left"]
        function getRandom(names){
            let name=names[Math.floor((Math.random()*names.length))]
            return([namesArr[name],name]

            )

        }
        let j=position
        let logo1=logo
        let copy=Object.assign([],arrCor)

        if (flag2) {
            for (let i = 1; i < 10; i++) {


                if (j / 10 > 3 && j % 10 === 3) {
                    names = ["up", "left"]
                    let randArr = getRandom(names)
                    j = j + randArr[0]
                    logo1 = randArr[1]
                } else if (j / 10 - 1 < 1 && j % 10 === 3) {
                    names = ["down", "left"]
                    let randArr = getRandom(names)
                    j = j + randArr[0]
                    logo1 = randArr[1]
                } else if (j / 10 - 1 < 1 && j % 10 === 1) {
                    names = ["down", "right"]
                    j = j + getRandom(names)[0]
                    logo1 = getRandom(names)[1]
                } else if (j / 10 > 3 && j % 10 === 1) {
                    names = ["up", "right"]
                    let randArr = getRandom(names)
                    j = j + randArr[0]
                    logo1 = randArr[1]
                } else if (j / 10 > 3) {
                    names = ["up", "right", "left"]
                    let randArr = getRandom(names)
                    j = j + randArr[0]
                    logo1 = randArr[1]
                } else if ((j / 10 - 1) < 1) {
                    names = ["down", "right", "left"]
                    let randArr = getRandom(names)
                    j = j + randArr[0]
                    logo1 = randArr[1]
                } else if (j % 10 === 1) {
                    names = ["up", "right", "down"]
                    let randArr = getRandom(names)
                    j = j + randArr[0]
                    logo1 = randArr[1]
                } else if (j % 10 === 3) {
                    names = ["up", "left", "down"]
                    let randArr = getRandom(names)
                    j = j + randArr[0]
                    logo1 = randArr[1]
                } else {
                    names = ["up", "left", "down", "up"]
                    let randArr = getRandom(names)
                    j = j + randArr[0]
                    logo1 = randArr[1]

                }


                (function f(i, j, logo) {

                        setTimeout(() => {

                            copy.push(j)
                            dispatch(setCors( copy));
                            setAnswer(j);
                            console.log(j, logo);
                            {
                                setLogo(i + "." + logo)
                            }
                        }, i * 1000)

                    }
                )(i, j, logo1)

            }

        }
    }
    useEffect(()=>{
        createName(position,logo)
      }     ,  [flag2,flag] )








    let numberHeigh = 100










    function catche(e) {
    console.log(e.key)
        if (e.key === "ArrowUp") {
            numberHeigh++

            setblockWidth({width: `${numberHeigh}px`})
            setblockHeigh({height: `${numberHeigh}px`})
        }
        if (e.key === "ArrowDown") {
            if( numberHeigh>60){
                numberHeigh--
            }


            setblockWidth({width: `${numberHeigh}px`})
            setblockHeigh({height: `${numberHeigh}px`})
        }

    }
    let a=true
    function clicka(e) {
        if (e.key === "t") {
            a=!a

           setClick(a)
        }
    }

    useEffect(() => {


            if(launch){
                createPosition(Math.floor((Math.random() * 3 + 1)) * 10 + Math.floor((Math.random() * 3 + 1)))
                dispatch(setFlag2(true))
                dispatch(setFlag())






            }

    }, [repeat,launch])
    useEffect(() => {

            document.addEventListener("keydown", catche)
            document.addEventListener("keyup", clicka)




            return () => {
                document.removeEventListener("keydown", catche)
                document.removeEventListener("keyup", clicka)

            }


    }, [])


    const [blockHeight, setblockHeigh] = useState({height: `${numberHeigh}px`})
    const [blockWidth, setblockWidth] = useState({width: `${numberHeigh}px`})
    const CreateBlock = (props) => {
        let arr = []
        for (let i = 1; i < 4; i++) {


            arr.push(

                    <Block key={props.id + i} blockWidth={blockWidth} position={position} start={start} id={props.id + i} setChose={createChoose} arrCorr={arrCor} setStart={createStart}/>



            ) }
        return arr
    }


    const Wrap = (props) => {
        return (
            <div key={new Date()} style={blockHeight} className={s.flex}>

                {<CreateBlock id={props.id}/>}


            </div>
        )


    }


    const createScheme = () => {
        let arr = []
        for (let i = 1; i < 4; i++) {

            arr.push(
                <Wrap key={i} id={i * 10}/>
            )

        }
        return arr

    }


    return (
        <div>


            <h2>{status}</h2>
            {createScheme()}
            <button disabled={disabled} onClick={()=>{dispatch(setRepeat(!repeat));dispatch(setCors([]));}}>Repeat</button>
            <button disabled={disabled} onClick={()=>{dispatch(setLaunch(true))}}>Start</button>
            <h1>{logo}</h1>




        </div>


    )

}
export default Container