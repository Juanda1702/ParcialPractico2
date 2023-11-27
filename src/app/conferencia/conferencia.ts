export class Conferencia {
  id:number;
  name:string;
  startDate:Date;
  endDate:Date;

  public constructor(id:number, name:string, startDate:Date, endDate:Date){
    this.id=id;
    this.name=name;
    this.startDate=startDate;
    this.endDate=endDate;
  }

}
