import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {


  title = 'Amity-Replica';
}
