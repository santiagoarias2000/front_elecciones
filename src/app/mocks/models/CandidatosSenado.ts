class CandidatosSenado {
    public description_politicparty: string;
    public candidate_name: string;
    public votos: string;
    public name_department: string;
    public max_votes: string;

  
    constructor( desc: string, can: string, vote: string, department:string, votesD:string) {
      this.description_politicparty = desc;
      this.candidate_name= can;
      this.votos = vote;
      this.name_department = department;
      this.max_votes = votesD;

    }
  }
  export default CandidatosSenado;
  