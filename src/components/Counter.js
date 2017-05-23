import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCount_saga, addCount_thunk, addCount_promise } from '../actions/IndexPage'

class Counter extends Component {
  constructor(props){
    super(props)
    this.handleAdd=this.handleAdd.bind(this)
    this.upload=this.upload.bind(this)
  }
  handleAdd(){
    // this.props.addCount_saga()
    // this.props.addCount_thunk()
    this.props.addCount_promise()
  }
  upload(){

  }
  render(){
    return (
      <div>
        <button onClick={this.handleAdd}>add {this.props.count} </button>
        <input type="file" onChange={this.upload} />
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  const { counter } = state
  return {
    count:counter.count
  }
}

export default connect(mapStateToProps,{
  addCount_saga,
  addCount_thunk,
  addCount_promise,
})(Counter)