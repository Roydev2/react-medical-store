import { reactLocalStorage } from "reactjs-localstorage";
import AuthHandler from "./AuthHandler";
const { default: Axios } = require("axios");
const { default: Config } = require("./Config");

class APIHandler {
    async checkLogin(){
        if (AuthHandler.ckeckTokenExpiry()){
            try{
                var response = await Axios.post(Config.refreshApiUrl, {
                    refresh:AuthHandler.getRefreshToken(),
                });

                reactLocalStorage.set("token",response.data.access);
            }
            catch(error){
                console.log(error);

                // Not Using Valid Token for Refresh then Logout the User
                AuthHandler.logoutUser();
                window.location = "/";
            }
        }

    }

    async saveCompanyData(
        name,
        license_no,
        address,
        contact_no,
        email,
        description
    ){
        await this.checkLogin();
        // Wait Until Token Get Updated

        var response = await Axios.post(Config.companyApiUrl,
            {
                name:name, 
                license_no:license_no,
                address:address,
                contact_no:contact_no,
                email:email,
                description:description
            },
            {
               headers:{
                   Authorization: "Bearer " + AuthHandler.getLoginToken()
               } 
            });

            return response;
    }

    async fetchAllCompany(){
        await this.checkLogin();

        var response = await Axios.get(Config.companyApiUrl, {
            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()
            },
        });

        return response;
    }

    async fetchHomePage(){
        await this.checkLogin();

        var response = await Axios.get(Config.homeApiUrl, {
            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()
            },
        });

        return response;
    }

    async fetchAllCompanyAccount(){
        await this.checkLogin();

        var response = await Axios.get(Config.companyAccountApiUrl, {
            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()
            },
        });

        return response;
    }

    async fetchCompanyDetails(id){
        await this.checkLogin();

        var response = await Axios.get(Config.companyApiUrl + "" + id + "/", {
            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()
            },
        });

        return response;
    }

    async fetchMedicineByName(name){
        if(name!=""){
            await this.checkLogin();

            var response = await Axios.get(Config.medicineByNameApiUrl + "" + name, {
                headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()
                },
            });

            return response;
        }else{
            return {data:[]}
        }
    }

    async editCompanyData(
        name,
        license_no,
        address,
        contact_no,
        email,
        description,
        id
    ){
        await this.checkLogin();
        // Wait Until Token Get Updated

        var response = await Axios.put(Config.companyApiUrl + "" + id + "/",
            {
                name:name, 
                license_no:license_no,
                address:address,
                contact_no:contact_no,
                email:email,
                description:description
            },
            {
               headers:{
                   Authorization: "Bearer " + AuthHandler.getLoginToken()
               } 
            });

            return response;
    }

    async saveCompanyBankData(
        bank_account_no,
        company_id
    ){
        await this.checkLogin();
        // Wait Until Token Get Updated

        var response = await Axios.post(Config.companyBankApiUrl,
            {
                bank_account_no:bank_account_no, 
                company_id:company_id,
            },
            {
               headers:{
                   Authorization: "Bearer " + AuthHandler.getLoginToken()
               } 
            });

            return response;
    }

    async fetchCompanyBankDetails(id){
        await this.checkLogin();

        var response = await Axios.get(Config.companyBankApiUrl + "" + id + "/", {
            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()
            },
        });

        return response;
    }

    async generateBill(name, address, phone, medicineDetails){
        await this.checkLogin();

        var response = await Axios.post(Config.generateBillApiUrl, 
            {
                name:name, 
                address:address, 
                contact:phone, 
                medicine_details:medicineDetails,
            },

            {
            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()
            },
        });

        return response;
    }

    async editCompanyBankData(
        bank_account_no,
        company_id,
        id
    ){
        await this.checkLogin();
        // Wait Until Token Get Updated

        var response = await Axios.put(Config.companyBankApiUrl + "" + id + "/",
            {
                bank_account_no:bank_account_no, 
                company_id:company_id,
            },
            {
               headers:{
                   Authorization: "Bearer " + AuthHandler.getLoginToken()
               } 
            });

            return response;
    }

    async fetchCompanyOnly(){
        await this.checkLogin();

        var response = await Axios.get(Config.companyOnly, {
            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()
            },
        });

        return response;
    }

    async saveMedicineData(
        name,
        medical_typ,
        buy_price,
        sell_price,
        batch_no,
        shelf_no,
        expire_date,
        mfg_date,
        company_id,
        description1,
        in_stock_total,
        qty_in_strip,
        medicinedetails
    ){

        await this.checkLogin();
        // Wait Until Token Get Updated

        var response = await Axios.post(Config.medicineApiUrl,
            {
                name: name, 
                medical_typ: medical_typ, 
                buy_price: buy_price, 
                sell_price: sell_price, 
                batch_no: batch_no, 
                shelf_no: shelf_no, 
                expire_date: expire_date, 
                mfg_date: mfg_date, 
                company_id: company_id,
                description: description1,
                in_stock_total: in_stock_total,
                qty_in_strip: qty_in_strip,
                medicine_details: medicinedetails,
            },
            {
               headers:{
                   Authorization: "Bearer " + AuthHandler.getLoginToken()
               } 
            });

            return response;
    }

    async fetchAllMedicine(){
        await this.checkLogin();

        var response = await Axios.get(Config.medicineApiUrl, {
            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()
            },
        });

        return response;
    }

    async editMedicineData(
        name,
        medical_typ,
        buy_price,
        sell_price,
        batch_no,
        shelf_no,
        expire_date,
        mfg_date,
        company_id,
        description1,
        in_stock_total,
        qty_in_strip,
        medicinedetails,
        id
    ){

        await this.checkLogin();
        // Wait Until Token Get Updated

        var response = await Axios.put(Config.medicineApiUrl+""+id+"/",
            {
                name: name, 
                medical_typ: medical_typ, 
                buy_price: buy_price, 
                sell_price: sell_price, 
                batch_no: batch_no, 
                shelf_no: shelf_no, 
                expire_date: expire_date, 
                mfg_date: mfg_date, 
                company_id: company_id,
                description: description1,
                in_stock_total: in_stock_total,
                qty_in_strip: qty_in_strip,
                medicine_details: medicinedetails
            },
            {
               headers:{
                   Authorization: "Bearer " + AuthHandler.getLoginToken()
               } 
            });

            return response;
    }

    async saveCompanyTransactionData(
        company_id,
        transaction_type,
        transaction_amt,
        transaction_date,
        payment_mode
    ){
        await this.checkLogin();
        // Wait Until Token Get Updated

        var response = await Axios.post(Config.companyAccountApiUrl,
            {
                company_id:company_id, 
                transaction_type:transaction_type,
                transaction_amt:transaction_amt,
                transaction_date:transaction_date,
                payment_mode:payment_mode
            },
            {
               headers:{
                   Authorization: "Bearer " + AuthHandler.getLoginToken()
               } 
            });

            return response;
    }

    async fetchEmployee(){
        await this.checkLogin();

        var response = await Axios.get(Config.employeeApiUrl, {
            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()
            },
        });

        return response;
    }

    async saveEmployeeData(
        name,
        joining_date,
        phone,
        address
    ){
        await this.checkLogin();
        // Wait Until Token Get Updated

        var response = await Axios.post(Config.employeeApiUrl,
            {
                name:name, 
                joining_date:joining_date,
                phone:phone,
                address:address
            },
            {
               headers:{
                   Authorization: "Bearer " + AuthHandler.getLoginToken()
               } 
            });

            return response;
    }

    async fetchEmployeeByID(id){
        await this.checkLogin();

        var response = await Axios.get(Config.employeeApiUrl +"" + id +"/", {
            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()
            },
        });

        return response;
    }

    async editEmployeeData(
        name,
        joining_date,
        phone,
        address,
        id
    ){
        await this.checkLogin();
        // Wait Until Token Get Updated

        var response = await Axios.put(Config.employeeApiUrl + "" + id +"/",
            {
                name:name, 
                joining_date:joining_date,
                phone:phone,
                address:address
            },
            {
               headers:{
                   Authorization: "Bearer " + AuthHandler.getLoginToken()
               } 
            });

            return response;
    }
    
    async fetchSalaryEmployee(id){
        await this.checkLogin();

        var response = await Axios.get(Config.employeeSalaryByIDApiUrl +"" + id, {
            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()
            },
        });

        return response;
    }

    async AddEmployeeSalaryData(
        bank_account_no,
        salary_date,
        salary_amount,
        employee_id
    ){
        await this.checkLogin();
        // Wait Until Token Get Updated

        var response = await Axios.post(Config.employeeSalaryApiUrl,
            {
                bank_account_no:bank_account_no,
                salary_date:salary_date, 
                salary_amount:salary_amount,
                employee_id:employee_id
            },
            {
               headers:{
                   Authorization: "Bearer " + AuthHandler.getLoginToken()
               } 
            });

            return response;
    }

    async fetchAllCustomerRequest(){
        await this.checkLogin();

        var response = await Axios.get(Config.customerRequestApiUrl, {
            headers:{Authorization: "Bearer " + AuthHandler.getLoginToken()
            },
        });

        return response;
    }

    async saveCustomerRequestData(
        name,
        phone,
        medicine_details,
    ){
        await this.checkLogin();
        // Wait Until Token Get Updated

        var response = await Axios.post(Config.customerRequestApiUrl,
            {
                customer_name:name, 
                phone:phone,
                medecine_details:medicine_details
            },
            {
               headers:{
                   Authorization: "Bearer " + AuthHandler.getLoginToken()
               } 
            });

            return response;
    }

    async updateCustomerRequest(
        customer_id,
        name,
        phone,
        medicine_details
    ){
        await this.checkLogin();
        // Wait Until Token Get Updated

        var response = await Axios.put(Config.customerRequestApiUrl+""+customer_id+"/",
            {
                customer_name: name,
                phone : phone,
                medecine_details: medicine_details,
                status: 1
            },
            {
               headers:{
                   Authorization: "Bearer " + AuthHandler.getLoginToken()
               } 
            });

            return response;
    }

}

export default APIHandler; 