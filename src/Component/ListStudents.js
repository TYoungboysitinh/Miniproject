import React, { Component } from 'react'

export default class ListStudents extends Component {
    constructor(props){
        super(props);
    }
    // //Hàm xử lý sự kiện xem 
    // handleView = (student) =>{
    //     this.props.onHandleView(true,"Close", student);
    // }

    // //Hàm xử lý sự kiện sửa 
    // handleEdit = (student) =>{
    //     this.props.onHandleEdit(true,"Update", student);
    // }

    handleEditOrView = (student, actionName) => {
        this.props.onHandleEditOrView(true, actionName, student);
    }

    //Hàm xử lý sự kiện cho chức năng xem
    onHandleEditOrView=(toggle, actionName, student)=>{
        this.props.onHandleEditOrView(toggle, actionName, student);
    }

    handleDelete=(studentId)=>{
        if(window.confirm('Bạn có chắc chắn muốn xóa sinh viên này không ? ')){
            this.props.onDeleteStudent(studentId);
        }
    }
  render() {
    let renderStudents = this.props.ListStudents;
    let elementStudent = renderStudents.map((renderStudent,index)=>{
        return (
            <tr key={index} onHandleEditOrView={this.HandleEditOrView}> 
                <td>{index+1}</td>
                <td>{renderStudent.studentId}</td>
                <td>{renderStudent.studentName}</td>
                <td>{renderStudent.age}</td>
                <td>{renderStudent.sex?'Nam':'Nữ'}</td>
                <td>{renderStudent.birthDate}</td>
                <td>{renderStudent.address}</td>
                <td>
                    <div className="template-demo">
                        <button type="button" className="btn btn-danger btn-icon-text" 
                            // onClick={()=>this.handleView(renderStudent)}
                            onClick={()=>this.handleEditOrView(renderStudent,"Close")}
                        >
                            Xem
                        </button>
                        <button type="button" className="btn btn-warning btn-icon-text"
                            // onClick={()=>this.handleEdit(renderStudent)}
                            onClick={()=>this.handleEditOrView(renderStudent,"Update")}
                        >
                            Sửa
                        </button>
                        <button type="button" className="btn btn-success btn-icon-text"
                            onClick={()=>this.handleDelete(renderStudent.studentId)}
                        >
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>)
    }) 
    // console.log(elementStudent);
    return (
        <>
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã sinh viên</th>
                        <th>Tên sinh viên</th>
                        <th>Tuổi</th>
                        <th>Giới tính</th>
                        <th>Năm sinh</th>
                        <th>Địa chỉ</th>

                    </tr>
                </thead>
                <tbody>
                    {elementStudent}
                </tbody>
            </table>
        </div>
        </>
    )
  }
}
