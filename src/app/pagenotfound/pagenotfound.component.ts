import { Component } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent  {

  constructor(){}


  ngOnInit(): void {
  const name="Page not fount please enter the correct URL!"
   
  }

  //if(file.type=='application/pdf' && file.size<500000){
  
    //   const formdata=new FormData();
    //   formdata.append("file",file);
    
    //   const $source=this.http.post("http://localhost:3000/posts",formdata)
    
    // $source.subscribe((res)=>{
    //   debugger
    //   this.landownershipcertificate.push(res);
    //   alert(res);
    // })
    // }



  // const Id=event.target.id;

//   if(Id=='landdowner'){
  
//     const formdata=new FormData();
//     formdata.append("landdowner_pdf_file",file);
//     this.landownershipcertificate.push(formdata)
    
//   }

//   if(Id=='location'){
  
//   const formdata=new FormData();
//   formdata.append("location_pdf_file",file);
//   this.locationlofland.push(formdata)
  
// }

// if(Id=='certOflocation'){
    
//   const formdata=new FormData();
//   formdata.append("certOflocation_pdf_file",file);
//   this.certificateoflocation.push(formdata)
// }

// if(Id=='mapofland'){
    
//   const formData=new FormData();
//   formData.append("mapofland_pdf_file",file);
//   // this.mapofthelanddurlysigned.push(formdata)
// }
}



// if(file.type=='application/pdf' && file.size<500000){
      
//   if(Id=='landdowner'){
//   this.landownershipcertificate=file; 
  
//   }

//   if(Id=='location'){
//       this.locationlofland=file          
//     }
    
//     if(Id=='certOflocation'){
//       this.certificateoflocation=file
//     }
    
//     if(Id=='mapofland'){
//       this.mapofthelanddurlysigned=file
//     }
//   }


// else{
// if(file.size>500000){
// alert(' file size greater ')

// }
// else{

// alert("file type wrrong");

// }


// }




// const formdata=new FormData()
// formdata.append("landownershipcertificate",this.landownershipcertificate);
// formdata.append("locationlofland",this.locationlofland);
// formdata.append("certificateoflocation",this.certificateoflocation);
// formdata.append("mapofthelanddurlysigned",this.mapofthelanddurlysigned)
// payload['landownershipcertificate']=formdata;
// payload['locationlofland']=formdata;
// payload['certificateoflocation']=formdata;
// payload['mapofthelanddurlysigned']=formdata;



// url="https://demo.he.nic.in/pmusha/institute/ndmc-save-land?menu=STATE_PROFILE"
// url="https://demo.he.nic.in/pmusha/institute/ndmc-save-land?isOrganogramUploaded=false&menu=STATE_PROFILE"