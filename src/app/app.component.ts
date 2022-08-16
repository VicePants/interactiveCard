import { Component, OnInit } from '@angular/core';
import { DataRequestService } from './data-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'interactiveCard';
  currentPerson: any;
  propertyToShow = '';

  constructor(private dataRequestService: DataRequestService) {

  }
  ngOnInit() {
    this.dataRequestService.getData().subscribe(result =>{
      this.currentPerson = {
        'Name': `${result.name.first} ${result.name.last}`,
        'Email': result.email,
        'Adress': `${result.location.street.name} ${result.location.street.number} ${result.location.city} ${result.location.country}`,
        'Phone Number': result.phone,
        'Birth Date': result.dob.date.split(`T`)[0]
      }
    } );
  }

  showProperty(property: string) {
    this.propertyToShow = property;
  }
  
}
