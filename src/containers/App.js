import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { MemeItem, MyMemes } from '../components'

class App extends Component {
    constructor() {
        super()

        this.state = {
            memeLimit: 10,
            text0: '',
            text1: ''
        }
    }

    handleChangeText0 = event => this.setState({ text0: event.target.value })

    handleChangeText1 = event => this.setState({ text1: event.target.value })

    handleClick = () => this.setState({ memeLimit: this.state.memeLimit + 10 })
    
    render() {
        return (
            <div>
                <h2>Welcome to the Meme Generator!</h2>
                <MyMemes />
                <h4><i>Write Some Text</i></h4>
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Top</ControlLabel>
                        {' '}
                        <FormControl
                            type="text"
                            onChange={this.handleChangeText0} />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <ControlLabel>Bottom</ControlLabel>
                        {' '}
                        <FormControl
                            type="text"
                            onChange={this.handleChangeText1} />
                    </FormGroup>
                </Form>
                {
                    this.props.receiveMemes.slice(0, this.state.memeLimit).map((meme, index) => {
                        return (
                            <MemeItem
                                key={index}
                                meme={meme}
                                text0={this.state.text0}
                                text1={this.state.text1}/>
                        )
                    })
                }
                <div
                    className="meme-button"
                    onClick={this.handleClick}> 
                    Load 10 more memes...
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null)(App)
