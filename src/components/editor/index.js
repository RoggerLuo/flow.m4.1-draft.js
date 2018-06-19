import React from 'react'
import { connect, Model } from 'dva'
import model from './model'
import LazyComponent from './LazyComponent'
import './style.css'

import(/* webpackChunkName: "Editor" */ './Container').then(_Editor => {
    const Editor = _Editor.default
    Model.change('editor','component',Editor)
}).catch(error => 'An error occurred while loading the editor')

Model.create(model)

export default LazyComponent
