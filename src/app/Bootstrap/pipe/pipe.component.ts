import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../../Pipes/search.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule,SearchPipe],
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  
  nameString='';

  employees=[
    {
      firstName: 'Rohit',
      lastName: 'Sharma',
      gender:'male',
      dept: 'Finance',
      salary: 5000,
      doj: new Date('2012-04-22')
    }, 
    {
      firstName: 'Aditi',
      lastName: 'Mishra',
      gender:'female',
      dept: 'Sales',
      salary: 6000,
      doj: new Date('2016-09-16')
    }, 
    {
      firstName: 'Dipti',
      lastName: 'Singh',
      gender:'female',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2021-09-03')
    }
  ]

}
