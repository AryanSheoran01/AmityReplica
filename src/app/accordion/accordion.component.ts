import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  openAccordion: string | null = null;

  toggleAccordion(accordionId: string): void {
    this.openAccordion = this.openAccordion === accordionId ? null : accordionId;
  }

  isAccordionOpen(accordionId: string): boolean {
    return this.openAccordion === accordionId;
  }
}
  


