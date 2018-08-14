export class Quote {
    public showDetails:boolean;
    constructor(public quote:string, public author:string,public user:string,public dateAdded:Date,){
        this.showDetails=false;
    }
}
