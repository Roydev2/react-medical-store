class Config{
    // BASE_URL = "https://medical-store-backend.herokuapp.com/"
    static loginUrl= "https://medical-store-backend.herokuapp.com/api/gettoken/";

    static refreshApiUrl= "https://medical-store-backend.herokuapp.com/api/resfresh_token/";

    static companyApiUrl= "https://medical-store-backend.herokuapp.com/api/company/";
    
    static homeApiUrl= "https://medical-store-backend.herokuapp.com/api/home_api/";

    static customerRequestApiUrl= "https://medical-store-backend.herokuapp.com/api/customer_request/";

    static medicineByNameApiUrl= "https://medical-store-backend.herokuapp.com/api/medicinebyname/";

    static companyBankApiUrl= "https://medical-store-backend.herokuapp.com/api/companybank/";
    
    static generateBillApiUrl= "https://medical-store-backend.herokuapp.com/api/generate_bill_api/";

    static companyAccountApiUrl= "https://medical-store-backend.herokuapp.com/api/companyaccount/";

    static companyOnly= "https://medical-store-backend.herokuapp.com/api/companyonly/";

    static employeeApiUrl= "https://medical-store-backend.herokuapp.com/api/employee/";

    static medicineApiUrl= "https://medical-store-backend.herokuapp.com/api/medicine/";

    static employeeSalaryApiUrl= "https://medical-store-backend.herokuapp.com/api/employee_all_salary/";

    static employeeSalaryByIDApiUrl= "https://medical-store-backend.herokuapp.com/api/employee_salaryby_id/";

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