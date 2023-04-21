import Department from "./Department";
import Municipality from "./Municipality";

class DataElection {
  public id_votes: number;
  public department: Department;
  public municipality: Municipality;
  public description_option: string;
  public table_number: number;
  public code_role: number;
  public description_role: string;
  public code_district: number;
  public description_district: string;
  public code_politicparty: number;
  public description_politicparty: string;
  public code_candidate: number;
  public candidate_name: string;
  public votos: number;
  public votos_muicipio:number;
  public max_votes: number;


  constructor(
    id: number,
    descrOption: string,
    idDepa: Department,
    idMun: Municipality,
    tableNu: number,
    codeRol: number,
    descRol: string,
    codDistr: number,
    descDistr: string,
    codePolipar: number,
    descPolipa: string,
    codeCan:number,
    nameCandi: string,
    numberVotes: number,
    nuberVotesMunicipio:number,
    max_votes: number

    
  ) {
    this.id_votes = id;
    this.description_option = descrOption;
    this.department = idDepa;
    this.municipality = idMun;
    this.description_politicparty = descPolipa;
    this.table_number = tableNu;
    this.code_role = codeRol;
    this.description_role = descRol;
    this.description_district = descDistr;
    this.code_politicparty = codePolipar;
    this.code_candidate = codeCan
    this.candidate_name = nameCandi;
    this.votos = numberVotes;
    this.votos_muicipio=nuberVotesMunicipio;
    this.max_votes = max_votes;
    this.code_district = codDistr;
  }
}

export default DataElection;