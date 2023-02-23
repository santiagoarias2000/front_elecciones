
import Department from "./Department";

class Municipality {
  public idMunicipality: number;
  public idDepartment: Department;
  public codeMunicipalityDane: number;
  public nameMunicipality: string;
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
    this.nameMunicipality = nameMun;
    this.nameMunicipality2 = nameMun2;
  }
}
export default Municipality;