

class UserModel {
    constructor (plainUser){
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.role = plainUser.role;
        this.password = plainUser.password;
    }
}

export default UserModel;