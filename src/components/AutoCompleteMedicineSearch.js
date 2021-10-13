import React from "react";
import APIHandler from "../utils/APIHandler";
import './App.css';
import MedicineManageComponent from "../pages/MedecineManageComponent";

class AutoCompleteMedicineSearch extends React.Component {
    state = {
        onFocus: false,
        datalist: [],
        medicine_name: "",
        price : "",
        qty : "",
        company_name :  "",
        expire_date : "",
        medical_typ : "",
};

    

    constructor(props) {
        super(props);
        this.loadDataMedicine = this.loadDataMedicine.bind(this);
        this.inputData = React.createRef();
    }

    onFocusChange = () => {
        this.setState({ onFocus: true });
    };
    onBlurChange = () => {
        this.setState({ onFocus: false });
    };

    async loadDataMedicine(event) {
        var apiHandler = new APIHandler();
        var dataresponse = await apiHandler.fetchMedicineByName(event.target.value);
        this.setState({ datalist: dataresponse.data });
    }

    async LoadInitialData() {
        var apihandler = new APIHandler();
        var medicinedata = await apihandler.fetchAllMedicine();
      }

    onShowItem = (item) => {
        console.log(item);

        this.state.medicine_name = item.name;
        this.state.price = item.sell_price;
        if(item.in_stock_total == 0){
            this.state.qty = "Out Stock"
        }else{
            this.state.qty = item.in_stock_total;
        }
        this.state.company_name = item.company.name;
        this.state.expire_date = item.expire_date;
        this.state.medical_typ = item.medical_typ;

        this.inputData.current.value = item.name;
        this.onBlurChange();
        document.getElementById("popup-1")
        .classList.toggle("active");
    };

    togglePopup = () => {
        document.getElementById("popup-1").classList.toggle("active");
    }

  render() {
    return (
        <React.Fragment>
            <div className="popup" id="popup-1">
                <div className="content">
                    <div 
                        className="close-btn" 
                        onClick={this.togglePopup}>
                        ×
                    </div>
                    
                    <div className="row">
                        <h1>{this.state.medicine_name}</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 text-left">
                            <h4>Price : {this.state.price}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 text-left">
                            <h4>Quantity : {this.state.qty}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 text-left">
                            <h4>Type : {this.state.medical_typ}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 text-left">
                            <h4>Expire Date : {this.state.expire_date}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 text-left">
                            <h4>Company : {this.state.company_name}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <input
                style ={{
                    borderRadius: "20px",
                    border: "0",
                    outline: "0",
                    alignSelf: "center",
                    height: "40px",
                    width: "30vw",
                    padding: "0 50px",
                    marginRight: "10px",
                    marginTop: "15px"
                }}
                type="text"
                id="medicine_name"
                name="medicine_name"
                className="form-control"
                placeholder="Search Medicine..."
                onFocus={this.onFocusChange}
                autoComplete="off"
                onChange={this.loadDataMedicine}
                ref={this.inputData}
            />
            {this.state.onFocus == true ? (
            <div>
                <ul
                style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    border: "1px solid lightgrey",
                    boxShadow: "1px 1px 1px lightgrey",
                    position: "absolute",
                    width: "100%",
                    zIndex: 1,
                    background: "white",
                }}
                >
                {this.state.datalist.map((item, index) => (
                    <li
                    key={index}
                    style={{ padding: 5, borderBottom: "1px solid lightgrey" }}
                    onClick={() => this.onShowItem(item)}
                    //   onClick={this.togglePopup}
                    >
                    {item.name}
                    </li>
                ))}
                </ul>
            </div>
            ) : (
            ""
            )}
        </React.Fragment>
    );
  }
}

export default AutoCompleteMedicineSearch;