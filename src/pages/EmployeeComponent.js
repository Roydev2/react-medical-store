import React from 'react';
import APIHandler from '../utils/APIHandler';
import AuthHandler from '../utils/AuthHandler';

class EmployeeComponent extends React.Component{

    constructor(props){
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }

    state={
        errorRes:false,
        errorMessage:"",
        btnMessage:0,
        sendData:false,
        employeeList: [],
        dataLoaded:false,
    };

    async formSubmit(event){
        event.preventDefault();
        this.setState({btnMessage:1});
        var apiHandler = new APIHandler();
        var response = await apiHandler.saveEmployeeData(
            event.target.name.value, 
            event.target.joining_date.value,
            event.target.phone.value,
            event.target.address.value,
        );
        console.log(response);
        this.setState({btnMessage:0});
        this.setState({errorRes:response.data.error});
        this.setState({errorMessage:response.data.message});
        this.setState({sendData:true});
        this.updateDataAgain();
    }

    // This Method Work when Our Page Is Ready
    componentDidMount(){
        this.fetchEmployeeData();
    }

    async fetchEmployeeData(){
        this.updateDataAgain();
    }

    async updateDataAgain(){
        var apihandler = new APIHandler();
        var EmployeeDataList = await apihandler.fetchEmployee();
        this.setState({ employeeList:EmployeeDataList.data.data })
        this.setState({ dataLoaded: true })

    }

    viewCompanyDetails = (company_id) =>{
        console.log(company_id);
        console.log(this.props);
        this.props.history.push("/companydetails/" + company_id);
    };

    ShowEmployeeDetails = (eid) => {
        this.props.history.push("/employeedetails/" + eid);
        
    }

    render(){
        return (
            <section className="content">
        <div className="container-fluid">
            <div className="block-header">
                <h2>MANAGE EMPLOYEE</h2>
            </div>

            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            <h2>
                                Add Employee
                            </h2>
                        </div>
                        <div className="body">
                            <form onSubmit={this.formSubmit}>
                                <div className="row">
                                    
                                    <div className="col-lg-6">
                                        <label htmlFor="email_address">Name</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text"
                                                    id="name"
                                                    name="name" 
                                                    className="form-control"
                                                    placeholder="Enter Employee Name"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <label htmlFor="email_address">Joining Date</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="Date" 
                                                    id="joining_date"
                                                    name="joining_date" 
                                                    className="form-control" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label htmlFor="email_address">Phone No.</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="phone"
                                                    name="phone" 
                                                    className="form-control"
                                                    placeholder="Enter Phone No." 
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <label htmlFor="email_address">Address</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="address"
                                                    name="address" 
                                                    className="form-control" 
                                                    placeholder="Enter Employee Address"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br/>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary m-t-15 waves-effect btn-block"
                                    disabled={this.state.btnMessage==0?false:true}
                                    >
                                    {this.state.btnMessage==0
                                        ? "Add Employee"
                                        :"Adding Employee Please Wait..."}
                                </button>
                                <br/>

                                {this.state.errorRes == false && 
                                this.state.sendData == true?(
                                    <div className="alert alert-success">
                                        <strong>Success! </strong> {this.state.errorMessage}.
                                    </div>
                                ) : (
                                        ""
                                )}

                                {this.state.errorRes == true && 
                                this.state.sendData == true?(
                                    <div className="alert alert-danger">
                                        <strong>Failed! </strong> {this.state.errorMessage}.
                                    </div>
                                ) : (
                                    ""
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            {this.state.dataLoaded == false ?(
                            <div className="text-center">
                                <div className="preloader">
                                    <div className="spinner-layer pl-teal">
                                        <div className="circle-clipper left">
                                            <div className="circle"></div>
                                        </div>
                                        <div className="circle-clipper right">
                                            <div className="circle"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ) : ""}
                            <h2>
                                All Employee Data
                            </h2>
                        </div>
                        <div className="body table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#ID</th>
                                        <th>NAME</th>
                                        <th>JOINING DATE</th>
                                        <th>PHONE</th>
                                        <th>ADDRESS</th>
                                        <th>ADDED ON</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.employeeList.map((employee) => (
                                        <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.joining_date}</td>
                                            <td>{employee.phone}</td>
                                            <td>{employee.address}</td>
                                            <td>{new Date(employee.added_on).toLocaleString()}</td>
                                            <td>
                                                <button 
                                                    className="btn bg-light-green waves-effect"
                                                    onClick={()=>this.ShowEmployeeDetails(employee.id)}
                                                >
                                                        View
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
}

export default EmployeeComponent;