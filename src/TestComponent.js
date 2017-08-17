import React, {Component} from 'react'
import TestComponent2 from './TestComponent2'
import smallImg from './assets/images/test1.jpg'

export default class TestComp extends Component {
    render() {
        return (
            <div>
                TestPage
                <img style={{maxWidth: 200}} src={smallImg}></img>
                <TestComponent2 />
            </div>
        )
    }
}
