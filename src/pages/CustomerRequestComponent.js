import React from 'react';
import APIHandler from '../utils/APIHandler';
import AuthHandler from '../utils/AuthHandler';

class CustomerRequestComponent extends React.Component{

    constructor(props){
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.completecustomerRequestDetails = this.completecustomerRequestDetails.bind(this);
        this.formRef = React.createRef()
    }

    state={
        errorRes:false,
        errorMessage:"",
        btnMessage:0,
        sendData:false,
        customerRequestDataList: [],
        dataLoaded:false,
    };

    async formSubmit(event){
        event.preventDefault();
        this.setState({btnMessage:1});
        var apiHandler = new APIHandler();
        var response = await apiHandler.saveCustomerRequestData(
            event.target.name.value, 
            event.target.phone.value,
            event.target.medecine_details.value
        );
        console.log(response);
        this.setState({btnMessage:0});
        this.setState({errorRes:response.data.error});
        this.setState({errorMessage:response.data.message});
        this.setState({sendData:true});
        this.fetchCustomerRequestData();
        this.formRef.current.reset();
    }

    // This Method Work when Our Page Is Ready
    componentDidMount(){
        this.fetchCustomerRequestData();
    }

    async fetchCustomerRequestData(){
        var apihandler = new APIHandler();
        var customerRequestData = await apihandler.fetchAllCustomerRequest();
        console.log(customerRequestData);
        this.setState({ customerRequestDataList: customerRequestData.data.data });
        this.setState({ dataLoaded:true });
    }

    async completecustomerRequestDetails(customer_id, name, phone, medecine_details){
        console.log(customer_id);
        var apihandler = new APIHandler();
        var customerRequestData = await apihandler.updateCustomerRequest(
            customer_id,
            name,
            phone,
            medecine_details
        );
        this.fetchCustomerRequestData();
    };

    render(){
        return (
            <section className="content">
        <div className="container-fluid">
            <div className="block-header">
                <h2>MANAGE CUSTOMER MEDICINE REQUEST</h2>
            </div>

            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            <h2>
                                Add Customer Request
                            </h2>
                        </div>
                        <div className="body">
                            <form onSubmit={this.formSubmit} ref={this.formRef}>
                            
                                <label htmlFor="email_address">Name</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input 
                                            type="text" 
                                            id="name"
                                            name="name" 
                                            className="form-control" 
                                            placeholder="Enter Customer Name"/>
                                    </div>
                                </div>

                                <label htmlFor="email_address">Phone</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input 
                                            type="text" 
                                            id="phone"
                                            name="phone" 
                                            className="form-control" 
                                            placeholder="Enter Phone No"/>
                                    </div>
                                </div>

                                <label htmlFor="email_address">Medicine Details</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input 
                                            type="text" 
                                            id="medecine_details"
                                            name="medecine_details" 
                                            className="form-control" 
                                            placeholder="Enter Medicine Details"/>
                                    </div>
                                </div>

                                <br/>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary m-t-15 waves-effect btn-block"
                                    disabled={this.state.btnMessage==0?false:true}
                                    >
                                    {this.state.btnMessage==0
                                        ? "Add Customer request"
                                        :"Adding Customer request Please Wait..."}
                                </button>
                                <br/>

                                {this.state.errorRes == false && 
                                this.state.sendData == true?(
                                    <div className="alert alert-success">
                                        <strong>Success!</strong> {this.state.errorMessage}.
                                    </div>
                                ) : (
                                        ""
                                )}

                                {this.state.errorRes == true && 
                                this.state.sendData == true?(
                                    <div className="alert alert-danger">
                                        <strong>Failed!</strong> {this.state.errorMessage}.
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
                                All Customer Medicine Request
                            </h2>
                        </div>
                        <div className="body table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#ID</th>
                                        <th>NAME</th>
                                        <th>PHONE</th>
                                        <th>MEDICINE DETAILS</th>
                                        <th>STATUS</th>
                                        <th>ADDED ON</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.customerRequestDataList.map((customerRequest) => (
                                        <tr key={customerRequest.id}>
                                            <td>{customerRequest.id}</td>
                                            <td>{customerRequest.customer_name}</td>
                                            <td>{customerRequest.phone}</td>
                                            <td>{customerRequest.medecine_details}</td>
                                            <td>
                                                {customerRequest.status == 0
                                                    ? "Pending"
                                                    : "Completeted"}
                                            </td>
                                            <td>{new Date(customerRequest.added_on).toLocaleString()}</td>
                                            <td> 
                                                {customerRequest.status==0? (
                                                <button 
                                                    className="btn btn-block btn-danger" 
                                                    onClick={()=>
                                                        this.completecustomerRequestDetails(
                                                            customerRequest.id,
                                                            customerRequest.customer_name,
                                                            customerRequest.phone,
                                                            customerRequest.medecine_details,
                                                            )}
                                                >
                                                    COMPLETED?
                                                </button>
                                                ) : (
                                                    <button 
                                                    className="btn btn-block btn-success">
                                                        COMPLETED
                                                    </button>
                                                )}
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

export default CustomerRequestComponent;