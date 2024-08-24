export class Employee {
    id:number=0;
    name:string='';
    gender:string='';
    email?:string='';
    phoneNumber?:number;
    dateofbirth:Date=new Date('22/03/2020');
    department:string='';
    isActive:boolean=true;
    photoPath?:string='';
   
}
