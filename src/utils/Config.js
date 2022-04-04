class Config{

    // Start Heroku base URL

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

    // End Heroku base URL

    // Start Local Base URL

    // static loginUrl= "http://127.0.0.1:8000/api/gettoken/";

    // static refreshApiUrl= "http://127.0.0.1:8000/api/resfresh_token/";

    // static companyApiUrl= "http://127.0.0.1:8000/api/company/";
    
    // static homeApiUrl= "http://127.0.0.1:8000/api/home_api/";

    // static customerRequestApiUrl= "http://127.0.0.1:8000/api/customer_request/";

    // static medicineByNameApiUrl= "http://127.0.0.1:8000/api/medicinebyname/";

    // static companyBankApiUrl= "http://127.0.0.1:8000/api/companybank/";
    
    // static generateBillApiUrl= "http://127.0.0.1:8000/api/generate_bill_api/";

    // static companyAccountApiUrl= "http://127.0.0.1:8000/api/companyaccount/";

    // static companyOnly= "http://127.0.0.1:8000/api/companyonly/";

    // static employeeApiUrl= "http://127.0.0.1:8000/api/employee/";

    // static medicineApiUrl= "http://127.0.0.1:8000/api/medicine/";

    // static employeeSalaryApiUrl= "http://127.0.0.1:8000/api/employee_all_salary/";

    // static employeeSalaryByIDApiUrl= "http://127.0.0.1:8000/api/employee_salaryby_id/";

    // End Local Base URL

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