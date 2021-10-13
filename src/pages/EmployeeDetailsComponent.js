import React from 'react';
import APIHandler from '../utils/APIHandler';
import AuthHandler from '../utils/AuthHandler';

class EmployeeDetailsComponent extends React.Component{

    constructor(props){
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.formSubmitSalary = this.formSubmitSalary.bind(this);
    }

    state={
        errorRes:false,
        errorResSalary:false,

        errorMessage:"",
        errorMessageSalary:"",

        btnMessage:0,
        btnMessageSalary:0,

        sendData:false,
        sendDataSalary:false,

        employeeList: [],
        dataLoaded:false,
        address:"",
        nam:"",
        phone:"",
        joining_date:"",
        employeeSalaryList: []
    };

    async formSubmit(event){
        event.preventDefault();
        this.setState({btnMessage:1});
        var apiHandler = new APIHandler();
        var response = await apiHandler.editEmployeeData(
            event.target.name.value, 
            event.target.joining_date.value,
            event.target.phone.value,
            event.target.address.value,
            this.props.match.params.id
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
        this.fetchEmployeeDataByID();
    }

    async fetchEmployeeDataByID(){
        this.updateDataAgain();
    }

    async formSubmitSalary(event){
        event.preventDefault();
        this.setState({btnMessageSalary:1});
        var apiHandler = new APIHandler();
        var response = await apiHandler.AddEmployeeSalaryData(
            event.target.bank_account_no.value,
            event.target.salary_date.value, 
            event.target.salary_amount.value,
            this.props.match.params.id
        );
        console.log(response);
        this.setState({btnMessageSalary:0});
        this.setState({errorResSalary:response.data.error});
        this.setState({errorMessageSalary:response.data.message});
        this.setState({sendDataSalary:true});
        this.updateDataAgain();
    }

    async updateDataAgain(){
        var apihandler = new APIHandler();
        var EmployeeData = await apihandler.fetchEmployeeByID(this.props.match.params.id);
        var employeeSalary = await apihandler.fetchSalaryEmployee(this.props.match.params.id);
        this.setState({ name:EmployeeData.data.data.name });
        this.setState({ phone:EmployeeData.data.data.phone });
        this.setState({ joining_date:EmployeeData.data.data.joining_date });
        this.setState({ address:EmployeeData.data.data.address });
        this.setState({ employeeSalaryList:employeeSalary.data });
        // this.setState({ employeeList:EmployeeDataList.data.data });
        this.setState({ dataLoaded: true });

    }

    viewCompanyDetails = (company_id) =>{
        console.log(company_id);
        console.log(this.props);
        this.props.history.push("/companydetails/" + company_id);
    };

    render(){
        return (
            <section className="content">
        <div className="container-fluid">
            <div className="block-header">
                <h2>EDIT EMPLOYEE #{this.props.match.params.id}</h2>
            </div>

            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            <h2>
                                Edit Employee 
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
                                                    defaultValue={this.state.name}
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
                                                    defaultValue={this.state.joining_date}
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
                                                    defaultValue={this.state.phone}
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
                                                    placeholder="Enter Employee Address"
                                                    defaultValue={this.state.address}
                                                />
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
                                        ? "Edit Employee"
                                        :"Editing Employee Please Wait..."}
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

        {/* Start Empoyee Salary */}
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            <h2>
                                Add Employee Salary
                            </h2>
                        </div>
                        <div className="body">
                            <form onSubmit={this.formSubmitSalary}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <label htmlFor="email_address">Account No.</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="bank_account_no"
                                                    name="bank_account_no" 
                                                    className="form-control" 
                                                    placeholder="Enter Account No."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    
                                    <div className="col-lg-6">
                                        <label htmlFor="email_address">Salary Date</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="date"
                                                    id="salary_date"
                                                    name="salary_date" 
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <label htmlFor="email_address">Salary Amount</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="salary_amount"
                                                    name="salary_amount" 
                                                    className="form-control" 
                                                    placeholder="Enter Salary Amount"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary m-t-15 waves-effect btn-block"
                                    disabled={this.state.btnMessageSalary==0?false:true}
                                    >
                                    {this.state.btnMessageSalary==0
                                        ? "Add Employee Salary"
                                        :"Adding Employee Salary Please Wait..."}
                                </button>
                                <br/>

                                {this.state.errorResSalary == false && 
                                this.state.sendDataSalary == true?(
                                    <div className="alert alert-success">
                                        <strong>Success! </strong> {this.state.errorMessageSalary}.
                                    </div>
                                ) : (
                                        ""
                                )}

                                {this.state.errorResSalary == true && 
                                this.state.sendDataSalary == true?(
                                    <div className="alert alert-danger">
                                        <strong>Failed! </strong> {this.state.errorMessageSalary}.
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
                                Employee Salary
                            </h2>
                        </div>
                        <div className="body table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#ID</th>
                                        <th>ACCOUNT No.</th>
                                        <th>SALARY DATE</th>
                                        <th>SALARY AMOUNT</th>
                                        <th>ADDED ON</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.employeeSalaryList.map((salary) => (
                                        <tr key={salary.id}>
                                            <td>{salary.id}</td>
                                            <td>{salary.bank_account_no}</td>
                                            <td>{salary.salary_date}</td>
                                            <td>{salary.salary_amount}</td>
                                            <td>{new Date(salary.added_on).toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        {/* End employee Salary */}
 
        </div>
    </section>
        );
    }
}

export default EmployeeDetailsComponent;