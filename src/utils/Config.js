class Config{
    BASE_URL = "https://medical-store-backend.herokuapp.com/"
    static loginUrl= this.BASE_URL + "api/gettoken/";

    static refreshApiUrl= this.BASE_URL + "api/resfresh_token/";

    static companyApiUrl= this.BASE_URL + "api/company/";
    
    static homeApiUrl= this.BASE_URL + "api/home_api/";

    static customerRequestApiUrl= this.BASE_URL + "api/customer_request/";

    static medicineByNameApiUrl= this.BASE_URL + "api/medicinebyname/";

    static companyBankApiUrl= this.BASE_URL + "api/companybank/";
    
    static generateBillApiUrl= this.BASE_URL + "api/generate_bill_api/";

    static companyAccountApiUrl= this.BASE_URL + "api/companyaccount/";

    static companyOnly= this.BASE_URL + "api/companyonly/";

    static employeeApiUrl= this.BASE_URL + "api/employee/";

    static medicineApiUrl= this.BASE_URL + "api/medicine/";

    static employeeSalaryApiUrl= this.BASE_URL + "api/employee_all_salary/";

    static employeeSalaryByIDApiUrl= this.BASE_URL + "api/employee_salaryby_id/";

    static homeUrl= "/home";

    static logoutPageUrl= "/logout";

    static sidebarItem=[
        { index:"0", title:"Home", url:"/home", icons:"home"},

        { index:"1", title:"Company", url:"/company", icons:"assessment"},

        { index:"2", title:"Add Medicine", url:"/addMedicine", icons:"add_to_queue"},

        { index:"3", title:"Manage Medicine", url:"/manageMedicine", icons:"assignment"},

        { index:"4", title:"Manage Company Account", url:"/manageCompanyAccount", icons:"account_balance_wallet"},

        { index:"5", title:"Manage Employee", url:"/EmployeeManage", icons:"person"},

        { index:"6", title:"Generate Bill", url:"/generateBill", icons:"poll"},

        { index:"7", title:"Customer Request", url:"/customerRequest", icons:"poll"},
    ]
}

export default Config;