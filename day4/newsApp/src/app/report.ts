export class Report {

    constructor(
        public id:number,
        public user:string,
        public link:string,
        public title:string,
        public commentsN:number,
        public pointsN:number,
        public date:Date
    ){}
}
