import React, { Component } from 'react'
import Title from './Component/Title'
import Form from './Component/Form'
import ListStudents from './Component/ListStudents'
import Control from './Component/Control'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            students:[
                { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
                { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
                { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
                { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
            ],
            searchQuery:'',
            searchResult:[]
        }
    }

    handleSearch=(data)=>{
        this.setState({
            searchQuery:data,
        })
    }

    handleInputChange = (event) => {
        this.setState({
            searchQuery:event.target.value
        });
    }

  render() {
    const{searchQuery,searchResult}=this.state;
    let data=this.state.students;
    if(this.state.searchQuery !==""){
        data=data.filter(x=>x.studentName.includes(this.state.searchQuery));
    }
    // console.log(data);
    return (
      <div className="container-fluid">
        <Title />
        <div className="App">
        <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
                <div className="card-header">
                    <Control onSearch={this.handleSearch} />
                </div>
                <div className="card-body">
                    <ListStudents ListStudents={data} />
                </div>
            </div>
        </div>

        <div className="col-5 grid-margin">
            <Form />
        </div>
    </div>
    </div>
      </div>
    )
  }
}

