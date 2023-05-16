class User{
    public idUser: string;
    public fullName: string;
    public emailUser: string;
    public stateUser: number;
    public passwordUser: string;
    public dateUser: Date;
    


    constructor(idUser: string, full: string, email: string, state: number, password: string,date: Date, ){
        this.idUser = idUser;
        this.fullName = full;
        this.emailUser = email;
        this.stateUser = state; 
        this.passwordUser = password;
        this.dateUser = date;
       
    }

}

export default User;