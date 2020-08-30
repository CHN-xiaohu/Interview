import React, { Component } from 'react';
import { Card } from 'antd';
import { Input, Button } from 'antd';
import { Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './App.css';

class App extends Component {
  state = { "mess": 0, "value": '', "plainOptions": [] }
  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  }
  inputChange(e) {
    this.setState({
      mess: e.target.value
    })
  }
  addData() {
    if (this.state.mess.replace(/(^\s*)|(\s*$)/g, '').replace(/[\r\n]/g, '') === '') {
      alert('内容不能为空！')
      return;
    }
    this.setState({
      plainOptions: [...this.state.plainOptions, this.state.mess]
    });
  }
  render() {
    return (
      <div className="App">
        <Card title={this.state.value.replace(/(^\s*)|(\s*$)/g, '').replace(/[\r\n]/g, '') === ''?"No options yet":"Selected option is "+this.state.value} style={{ width: 300 }}>
          <Radio.Group options={this.state.plainOptions} onChange={this.onChange} value={this.state.value} />
          <Input onChange={(e) => this.inputChange(e)} style={{margin:'10px 0'}}/>
          <Button disabled={this.state.plainOptions.indexOf(this.state.mess) === -1 ? false : true} onClick={() => this.addData()} style={{ float: 'left', margin: '10px 0' }} icon={<PlusOutlined />}>Add</Button>
        </Card>
      </div>
    );
  }
}

export default App;
