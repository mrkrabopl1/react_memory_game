import {combineReducers, createStore} from "redux";

const SWITCH=" SWITCH"
const POSITION="POSITION"
const TOGGLE="TOGGLE"
const TOGGLE2="TOGGLE2"
const CORS="CORS"
const CHOOSE="CHOOSE"
const START="START"
const REPEAT="REPEAT"
const DISABLE="DISABLE"
const STATUS="STATUS"
const LAUNCH="LAUNCH"

let initialState= {

     chose:0,
     position:0,
     flag:true,
    flag2:false,
    arrCorr:[],
    repeat:true,
    choose:0,
    start:true,
    disabled:false,
    status:"",
    launch:false




}
const gameeReducer=(state=initialState ,action)=>{

    switch (action.type) {
        case SWITCH:

            return {...state,chose: action.text}
        case CHOOSE:
            return {...state,chose: action.choose}
        case REPEAT:
            console.log(action.position,"ytyyyyy")
            return {...state,repeat: action.repeat}
        case STATUS:

            return {...state,status: action.status}
        case DISABLE:

            return {...state,disabled:!state.disabled}
        case POSITION:

            return {...state,position: action.position}
        case TOGGLE:

            return {...state,flag:!state.flag}
        case TOGGLE2:

            return {...state,flag2: action.flag2}
        case LAUNCH:

            return {...state,launch: action.launch}
        case START:

            return {...state,start: !state.start}
        case CORS:
            console.log(action.cors,"cors")
            return {...state,arrCorr: [...action.cors]}


        default:
            return {...state};
    }
}
export default gameeReducer
export const setTexta=(text)=>({type:SWITCH, text} )
export const setFlag=()=>({type:TOGGLE} )
export const setFlag2=(flag2)=>({type:TOGGLE2, flag2} )
export const setCors=(cors)=>({type:CORS, cors} )
export const setPosition=(position)=>({type:POSITION, position} )
export const setChose=(choose)=>({type:CHOOSE, choose} )
export const setStart=()=>({type:START} )
export const setRepeat=(repeat)=>({type:REPEAT,repeat} )
export const setDisable=()=>({type:DISABLE} )
export const setStatus=(status)=>({type:STATUS,status} )
export const setLaunch=(launch)=>({type:LAUNCH,launch} )

