import React, { Component } from 'react'
import Title from './Components/Title'
import Form from './Components/Form'
import ListStudents from './Components/ListStudents'
import Control from './Components/Control'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            students:[
                { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25 Vũ Ngọc Phan" },
                { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "14 Ngô Quyền" },
                { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "15 Lý Tự Trọng" },
                { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "16 Lý Tự Trọng" },
            ],
            searchQuery:'',
            searchResult:[],
            isToggle: false,  //Sử dụng chức năng ẩn hiện form
            actionName:'', //Giá trị hiển thị trên nút submit của form
            student:{}
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

    //Hàm xử lý sự kiện: Add , view
    handleAddOrEditView = (toggle, actionName, student)=>{
        this.setState({
            isToggle: toggle,
            actionName:actionName,
            student:student 
        })
    }

    // Sự kiện xử lý xử lý dữ liệu khi Submit Form
    handleSubmit = (toggle, student) =>{
        console.log(toggle);
        console.log(this.state.actionName);
        console.log(student);
        this.setState({
            isToggle:toggle,
        })
        if(this.state.actionName === "Save"){
            let {students} = this.state;
            students.push(student);
            this.setState({
                students:students
            })
        }else if(this.state.actionName === "Update" ){
            let {students} = this.state;
            for (let i = 0; i < students.length; i++) {
                if(students[i].studentId === student.studentId){
                    students[i]=student;
                    break;
                }
            }
            this.setState({
                students:students
            })
        }
    }

    // Hàm xử lý sự kiện xóa
    handleDeleteStudent = (studentId) => {
        const updateStudents = this.state.students.filter((student)=>student.studentId !== studentId);
        this.setState({
            students:updateStudents,
        });
    }

  render() {
    let {students} = this.state;
    //Render form theo giá trị của isToggle
    let elementForm = this.state.isToggle===true? <Form renderActionName={this.state.actionName} renderStudent={this.state.student} onSubmit={this.handleSubmit} /> : "";
    const{searchQuery,searchResult}=this.state;
    let data=this.state.students;
    if(this.state.searchQuery !==""){
        data=data.filter(x=>x.studentName.toLowerCase().includes(this.state.searchQuery) || x.studentId.toLowerCase().includes(this.state.searchQuery) );
    }
    return (
      <div className="container-fluid">
        <Title />
        <div className="App">
        <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
                <div className="card-header">
                    <Control onSearch={this.handleSearch} onAddorEditView={this.handleAddOrEditView} />
                </div>
                <div className="card-body">
                    <ListStudents ListStudents={data} onHandleEditOrView={this.handleAddOrEditView} renderStudent={students} onDeleteStudent={this.handleDeleteStudent} />
                </div>
            </div>
        </div>

        <div className="col-5 grid-margin">
            {elementForm}
        </div>
    </div>
    </div>
      </div>
    )
  }
}
