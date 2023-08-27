// import React from 'react'

// const SearchInput = ({ onSearch }) => {
//     return (
//         <div>
//             <div className="card-header">
//                 <div className="row">
//                     <div className="col-3 ">
//                         <button type="button" className="btn btn-primary btn-icon-text">
//                             Thêm mới sinh viên
//                         </button>
//                     </div>
//                     <div className="col-6 ">
//                         <form className="search-form" action="#">
//                             <i className="icon-search"></i>
//                             <input type="search" className="form-control" placeholder="Search Here" title="Search here" value={value} onChange={onChange} />
//                             <button className="btn btn-primary btn-icon-text" onClick={onSearch}>Tìm kiếm</button>
//                         </form>
//                     </div>
//                     <div className="col-3 d-flex align-items-center">
//                         <select className="form-control">
//                             <option value="">Sắp xếp</option>
//                             <option value="">ABC def</option>
//                             <option value="">ABC def</option>
//                             <option value="">ABC def</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default SearchInput;


import React, { Component } from 'react'

export default class Control extends Component {
    constructor(props){
        super(props);
        this.state={
            searchKey:'',
        }
    } 
    handleSearch =()=>{
        this.props.onSearch(this.state.searchKey);
    }
    render() {
        return (
            
            <div className="card-header">
                <div className="row">
                    <div className="col-3 ">
                        <button type="button" className="btn btn-primary btn-icon-text">
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6 ">
                        <form className="search-form" action="#">
                            <i className="icon-search"></i>
                            <input type="search" className="form-control" placeholder="Search Here" title="Search here" 
                                onChange={(ev)=>this.setState({searchKey:ev.target.value})}
                            />
                            <button className="btn btn-primary btn-icon-text" onClick={this.handleSearch}>Tìm kiếm</button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select className="form-control">
                            <option value="">Sắp xếp</option>
                            <option value="">ABC def</option>
                            <option value="">ABC def</option>
                            <option value="">ABC def</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
