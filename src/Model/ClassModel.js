class ClassModel {
    constructor (plainClass){
        this.classid = plainClass.id;
        this.cname = plainClass.cname;
        this.instructor = plainClass.instructor;
        this.description = plainClass.description;
        this.schedule = plainClass.schedule;
        this.price = plainClass.price;
        this.room = plainClass.room;
    }
}

export default ClassModel;

