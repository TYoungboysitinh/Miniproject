import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
        <>
            <tr>
                                    <td>2</td>
                                    <td>SV002</td>
                                    <td>Nguyễn Văn B</td>
                                    <td>21</td>
                                    <td>Nữ</td>
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
            </tr>
        </>
    )
  }
}
