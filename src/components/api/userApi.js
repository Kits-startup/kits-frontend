import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8800/api/companyuser",
});
export const makeCompanyUser = (info) =>
  api.post("/", {
    username: info.companyName,
    userNumber: 6,
    email: info.email,
    type: "company",
    phone: "010",
    isActive: true,
    isApproved: true,
    lastLogin: "1",
    memo: "",
    password: info.password,
    address: info.address,
    establishmentDate: info.companyYear,
    registerationNumber: info.companyNumber,
    revenue: info.companyMoney,
    investment: 1,
    employeescount: info.companyPeople,
    managerName: info.companyPerson,
    managerContact: info.comapnyPhone,
    logo: "",
    detailImage: "",
  });
