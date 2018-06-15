import React from 'react'
import lineBreak from './lineBreak'

export default function({ content }){
    content = lineBreak(content) + '<br>'
    return (
        <span             
            style={{backgroundColor:'#ececec',color:'#ececec'}} 
            dangerouslySetInnerHTML={{__html: content}}>
        </span>
    )
}
