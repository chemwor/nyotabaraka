import { AfterViewInit, Component } from '@angular/core'
import { initAOS } from '../../../../../utils/init-aos'
@Component({
  selector: 'farewell',
  standalone: true,
  imports: [],
  templateUrl: './farewell.component.html',
  styles: ``,
})
export class FarewellComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    initAOS()
  }
}
