import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMeme } from '../actions/newMeme_actions'

class MemeItem extends Component {
    constructor() {
        super()

        this.state = {
            hovered: false
        }
    }

    handleOnMouseEnter = () => this.setState({ hovered: true })

    handleOnMouseLease = () => this.setState({ hovered: false })

    handleClick = () => this.postMeme()

    postMeme() {
        const { text0, text1 } = this.props
        const memeObj = {
            template_id: this.props.meme.id,
            text0,
            text1
        }
        this.props.createMeme(memeObj)
    }

    render() {
        return (
            <div
                className="meme-item"
                onMouseEnter={this.handleOnMouseEnter}
                onMouseLeave={this.handleOnMouseLease}
                onClick={this.handleClick}>
                <img
                    src={this.props.meme.url}
                    alt={this.props.meme.name}
                    className={ this.state.hovered ? "meme-image darken-image" : "meme-image" } />
                <p
                    className={ this.state.hovered ? "meme-text" : "no-text" }>{this.props.meme.name}</p>
            </div>
        )
    }
}

export default connect(null, { createMeme })(MemeItem)
