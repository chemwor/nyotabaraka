import { Component } from '@angular/core'
import { NavigationBarComponent } from '@components/navigation-bars'
import { AboutComponent } from './component/about/about.component'
import { MissionComponent } from './component/mission/mission.component'
import { StepsComponent } from './component/steps/steps.component'
import { TeamComponent } from './component/team/team.component'
import { TestimonialComponent } from './component/testimonial/testimonial.component'
import { LocationComponent } from './component/location/location.component'
import { ServiceComponent } from './component/service/service.component'
import { FooterComponent } from './component/footer/footer.component'
import { RouterModule } from '@angular/router'
import { AboutFounderComponent } from '../../landings/influencer/components/about/about-founder.component'
import { FeaturesComponent } from '../../landings/influencer/components/features/features.component'

@Component({
  selector: 'about-agency',
  standalone: true,
  imports: [
    NavigationBarComponent,
    AboutComponent,
    MissionComponent,
    StepsComponent,
    TeamComponent,
    TestimonialComponent,
    LocationComponent,
    ServiceComponent,
    FooterComponent,
    RouterModule,
    AboutFounderComponent,
    FeaturesComponent,
  ],
  templateUrl: './agency.component.html',
  styles: ``,
})
export class AgencyComponent {}
