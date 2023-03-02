
import Department from "./Department";

class Municipality {
  public idMunicipality: number;
  public idDepartment: Department;
  public codeMunicipalityDane: number;
  public name_municipality: string;
  public nameMunicipality2: string;

  constructor(
    id: number,
    idDep: Department,
    codeMuni: number,
    nameMun: string,
    nameMun2: string
  ) {
    this.idMunicipality = id;
    this.idDepartment = idDep;
    this.codeMunicipalityDane = codeMuni;
    this.name_municipality = nameMun;
    this.nameMunicipality2 = nameMun2;
  }
}
export default Municipality;