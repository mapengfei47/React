import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.inputChange = this.inputChange.bind(this)

        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }


    render() {
        return (
            <div>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{width:'250px',margin:'10px'}}
                        onChange={this.inputChange}
                        value={this.state.inputValue}
                    ></Input>
                    <Button type="primary">添加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={ this.state.list }
                        renderItem={item =>(<List.Item>{item}</List.Item>)}
                        ></List>
                </div>

            </div>
        );
    }

    inputChange(e){
        const action = {
            type:'change_input_value',
            value:e.target.value
        }
        store.dispatch(action)
    }

     storeChange(){
         this.setState(store.getState())
     }
}

export default TodoList;