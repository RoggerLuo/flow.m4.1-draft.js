import React from 'react'
import './style.css'
import { connect } from 'dva'
function History({ onClick, data }) {
    return (
        <div className="tag-container">
            {data.map((word,ind)=>{
                return (
                    <div onClick={(e)=>onClick(e,word.word)} style={{padding:"5px 10px", color:"#888888"}} key={ind}>
                        {word.word}
                    </div>
                )
            })}
        </div>
    )
}
function map(state){
    return { data: state.history.data }
}
export default connect(map)(History)
