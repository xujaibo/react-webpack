/**
 * @author: 徐家波
 * @create: 2020/8/19 13:40
 * @version: 1.0
 * @email: xujp@oceansoft.com
 */

import App from '@/App'
import React from 'react'
import ReactDom from 'react-dom'

function Component() {
    return <h1>Hello World</h1>
}

// state && props
class Es6Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Xujiabo",
            age: 18,
            color: "#999",
            childColor: '#1111cc'
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            age: this.state.age + 1
        })
    }

    handleChange(e) {
        this.setState({
            age: e.target.value
        })
    }

    onColorChange(color) {
        this.setState({
            color: color
        })

    }

    onChildColorChange(color) {
        this.setState({
            childColor: color
        })
    }

    render(props) {
        // setTimeout(() => {
        //     this.setState({
        //         name: 'Gaozhengyan'
        //     })
        // }, 1000)
        return (
            <div>
                <h1>I am {this.state.name}，I am{this.state.age}years old!</h1>
                {/*<button onClick={this.handleClick}>加一岁</button>*/}
                <button onClick={(e) => {
                    this.handleClick(e)
                }}>加一岁
                </button>
                <input type="text" onChange={(val) => {
                    this.handleChange(val)
                }}/>
                {/*<Child color={this.state.color} onColorChange={(e) => {this.onColorChange(e)}}/>*/}
                <Child onChildColorChanges={(e) => {this.onChildColorChange(e)}}/>
                <Child1 child1color={this.state.childColor}/>
            </div>
        )
    }
}

// 父子组件通信
class Child extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick(e) {
        this.props.onColorChange('red')
    }

    handleChild() {
        this.props.onChildColorChanges('green')

    }

    render() {
        return (
            <div>
                <h1>我是子组件</h1>
                <h3 style={{backgroundColor: this.props.color}}>父组件里面的值：{this.props.color}</h3>
                <button onClick={(e) => {
                    this.handleClick(e)
                }}>改变父组件
                </button>
                <button onClick={(e) => {
                    this.handleChild(e)
                }}>改变child1组件
                </button>
            </div>
        )
    }
}

class Child1 extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick(e) {
        this.props.onColorChange('red')
    }

    render() {
        return (
            <div>
                <h1>我是子组件1</h1>
                <h3 style={{backgroundColor: this.props.child1color}}>父组件里面的值：{this.props.child1color}</h3>
            </div>
        )
    }
}

class CommonUtils extends React.Component {
    render() {
        return (
            <div className="">
                {/*容器式组件*/}
                <Title title="HaHa">
                    <span>xixi</span>
                    <span>gege</span>
                </Title>
                {/*单纯组件*/}
                <Es6Component/>
            </div>
        )
    }

}

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.children}</h3>
            </div>
        )
    }
}


ReactDom.render(
    <div>
        <Component/>
        <App name="React"/>
        <hr/>
        <CommonUtils/>
    </div>,
    document.getElementById('app')
)
