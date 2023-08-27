import React, { Component } from 'react'
// import Student from './Student'

export default class ListStudents extends Component {
    constructor(props){
        super(props);
    }
  render() {
    // console.log(this.props.ListStudents);
    let renderStudents = this.props.ListStudents;
    console.log(renderStudents);
    let elementStudent = renderStudents.map((student,index)=>{
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.age}</td>
                <td>{student.sex?'Nam':'Nữ'}</td>
                <td>{student.birthDate}</td>
                <td>{student.address}</td>
                <td>
                    <div class="template-demo">
                        <button type="button" className="btn btn-danger btn-icon-text">
                            Xem
                        </button>
                        <button type="button" className="btn btn-warning btn-icon-text">
                            Sửa
                        </button>
                        <button type="button" className="btn btn-success btn-icon-text">
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
