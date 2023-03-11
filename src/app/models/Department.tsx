class Department {
  public idDepartment: number;
  public name_department: string;
  public nameDepartment2: string;
  public votos: number;

  constructor(id: number, nameD: string, nameD2: string, vot: number) {
    this.idDepartment = id;
    this.name_department = nameD;
    this.nameDepartment2 = nameD2;
    this.votos = vot;
  }
}
export default Department;
