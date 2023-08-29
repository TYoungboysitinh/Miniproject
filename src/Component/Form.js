import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            studentId: "", 
            studentName: "", 
            age: 0, 
            sex: true, 
            birthDate: "", 
            birthPlace: "", 
            address: "" 
        }
    }
  render() {
    let {renderActionName, renderStudent} = this.props;
    console.log("Form", renderStudent); 
    return (
        <div className="card"> 
        <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample">
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                    <div className="col-sm-9">
                        <input type="text" class="form-control" value={this.state.studentId} name="studentId" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                    <div className="col-sm-9">
                        <input type="text" class="form-control" value={this.state.studentName} name="studentName"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Tuổi</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" value={this.state.age} name="age" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Giới tính</label>
                    <div className="col-sm-9">
                        <select className="form-control" value={this.state.sex} name="sex">
                            <option value={true}> Nam </option>
                            <option value={false}> Nữ </option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label className="col-sm-3 col-form-label">Ngày sinh</label>
                    <div className="col-sm-9">
                        <input className="form-control" placeholder="dd/mm/yyyy" value={this.state.birthDate} name="birthDate" />
                    </div>
                </div>
                <div class="form-group row">
                    <label className="col-sm-3 col-form-label">Nơi sinh</label>
                    <div className="col-sm-9">
                        <select className="form-control" value={this.state.birthPlace} name="birthPlace">
                            <option value={'HN'}>Hà Nội</option>
                            <option value={'HCM'}>TP. Hồ Chí Minh</option>
                            <option value={'ĐN'}>Đà Nẵng</option>
                            <option value={'QN'}>Quảng Ninh</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Địa chỉ</label>
                    <div className="col-sm-9">
                        <textarea className="form-control" value={this.state.address} name="address"></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary me-2">{renderActionName }</button>
            </form>
        </div>
    </div>
    )
  }
}
