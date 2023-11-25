import { Component } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  

  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  handleOptionClick(option: string) {
    console.log(`Option clicked: ${option}`);
  }

    calendarOpen: boolean = false;
  
    toggleCalendar() {
      this.calendarOpen = !this.calendarOpen;
    }
  
}


