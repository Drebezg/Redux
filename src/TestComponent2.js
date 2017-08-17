import React, {Component} from 'react'
import './assets/styles/style.scss'
import bigImg from './assets/images/test2.png'

export default class TestComp2 extends Component {
    constructor() {
        super()
        this.state = { counter: 0 }
    }
    render() {
        return <div style={{color: 'red'}} onClick={() => this.setState({ counter: ~~(Math.random() * 10) })}>
                    User counter: {this.state.counter}
                    <img style={{maxWidth: 200}} src={bigImg}></img>
        </div>
    }
}
