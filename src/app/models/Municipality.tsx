
import Department from "./Department";

class Municipality {
  public id_municipality: number;
  public id_department: Department;
  public codeMunicipalityDane: number;
  public name_municipality: string;
  public nameMunicipality2: string;
  public department:string;

  constructor(
    id: number,
    idDep: Department,
    codeMuni: number,
    nameMun: string,
    nameMun2: string,
    dep: string
  ) {
    this.id_municipality = id;
    this.id_department = idDep;
    this.codeMunicipalityDane = codeMuni;
    this.name_municipality = nameMun;
    this.nameMunicipality2 = nameMun2;
    this.department= dep;
  }
}
export default Municipality;