class ClassModel {
    constructor (plainClass){
        this.classid = plainClass.classid;
        this.cname = plainClass.cname;
        this.instructor = plainClass.instructor;
        this.description = plainClass.description;
        this.schedule = plainClass.schedule;
        this.price = plainClass.price;
        this.room = plainClass.room;
        this.participantName = plainClass.participantName;
        this.Collection = plainClass.Collection;
        this.signedUp = plainClass.signedUp;
        this.attendance = plainClass.attendance;
    }
}

export default ClassModel;

