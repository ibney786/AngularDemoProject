import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceDataService } from '../service-data.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {
  fileName:any;
   

uploadeddata:any[]=[];
landownershipcertificate:any
locationlofland:any;
certificateoflocation:any;
mapofthelanddurlysigned:any;

  formdata:FormGroup
  constructor( private servicedata:ServiceDataService ,private http:HttpClient){

    this.formdata=new FormGroup({
      landownershipcertificate:new FormControl(),
      locationlofland:new FormControl(),
      certificateoflocation:new FormControl(),
      mapofthelanddurlysigned:new FormControl(),
      stateCode:new FormControl(),
      districtCode:new FormControl(),
      broadObjective:new FormControl(),
      visionMission:new FormControl(),
      organizationalStructure:new FormControl(),
      roleAndResponsibility:new FormControl(),
      boardOfGovernance:new FormControl(),
      pmuDetail:new FormControl(),
      existingLandAvailability:new FormControl(),
      latitude:new FormControl(),
      longitude:new FormControl(),
      declarationOfFreeLandByStateGovt:new FormControl(),
      isOrganogramUploaded:new FormControl(),
      menu:new FormControl(),
    })
}

save(){
debugger
  this.servicedata.postdata(this.payloaddata()).subscribe((data)=>{
    debugger
    alert("submited data"+data)
  })



}



 
payloaddata(){

  let payload={
    landownershipcertificate:this.formdata.get('landownershipcertificate')?.value,
    locationlofland:this.formdata.get('locationlofland')?.value,
    certificateoflocation:this.formdata.get('certificateoflocation')?.value,
    mapofthelanddurlysigned:this.formdata.get('mapofthelanddurlysigned')?.value,
    stateCode:this.formdata.get('stateCode')?.value,
    districtCode:this.formdata.get('districtCode')?.value,
    broadObjective:this.formdata.get('broadObjective')?.value,
    visionMission:this.formdata.get('visionMission')?.value,
    organizationalStructure:this.formdata.get('organizationalStructure')?.value,
    roleAndResponsibility:this.formdata.get('roleAndResponsibility')?.value,
    boardOfGovernance:this.formdata.get('boardOfGovernance')?.value,
    pmuDetail:this.formdata.get('pmuDetail')?.value,
    existingLandAvailability:this.formdata.get('existingLandAvailability')?.value,
    latitude:this.formdata.get('latitude')?.value,
    longitude:this.formdata.get('longitude')?.value,
    declarationOfFreeLandByStateGovt:this.formdata.get('declarationOfFreeLandByStateGovt')?.value,
    isOrganogramUploaded:this.formdata.get('isOrganogramUploaded')?.value,
    menu:this.formdata.get('menu')?.value

  }

  
const formdata=new FormData()
formdata.append("landownershipcertificate",this.landownershipcertificate);
formdata.append("locationlofland",this.locationlofland);
formdata.append("certificateoflocation",this.certificateoflocation);
formdata.append("mapofthelanddurlysigned",this.mapofthelanddurlysigned)
payload['landownershipcertificate']=formdata;
payload['locationlofland']=formdata;
payload['certificateoflocation']=formdata;
payload['mapofthelanddurlysigned']=formdata;

  debugger
  return payload
}

  ngOnInit(){
   
  }


  upload(event:any){
debugger
    const file=event.target.files[0];
    const Id=event.target.id;
    


if(file.type=='application/pdf' && file.size<500000){
      
  if(Id=='landdowner'){
  this.landownershipcertificate=file; 
  
  }

  if(Id=='location'){
      this.locationlofland=file          
    }
    
    if(Id=='certOflocation'){
      this.certificateoflocation=file
    }
    
    if(Id=='mapofland'){
      this.mapofthelanddurlysigned=file
    }
  }


else{
if(file.size>500000){
alert(' file size greater ')

}
else{

alert("file type wrrong");

}


}
    
  }

  
}





//   onFileSelected(event:any) {

//     const file:File = event.target.files[0];

//     if (file) {debugger

//         this.fileName = file.name;

//         const formData = new FormData();

//         formData.append("thumbnail", file);

//         const upload$ = this.http.post("", formData);

//         upload$.subscribe((res)=>{debugger
//           console.log(res)
//         });
//     }
// }



