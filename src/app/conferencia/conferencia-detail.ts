import { Conferencia } from "./conferencia";

export class ConferenciaDetail extends Conferencia{

  constructor(id:number, name:string, startDate:Date, endDate:Date
    ){
      super(id, name, startDate, endDate)
    }
}
