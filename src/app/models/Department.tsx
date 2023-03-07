class Department{
    public idDepartment: number;
    public name_department:string;
    public name_department2:string;

    constructor(id:number, nameD:string, nameD2:string){
        this.idDepartment = id;
        this.name_department = nameD;
        this.name_department2 = nameD2;
    }
}
export default Department;