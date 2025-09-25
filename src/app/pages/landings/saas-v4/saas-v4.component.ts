import { Component } from '@angular/core'
import { NavigationBar6Component } from '@components/navigation-bars'
import { HeroComponent } from './components/hero/hero.component'
import { CategoriesComponent } from './components/categories/categories.component'
import { UseCaseComponent } from './components/use-case/use-case.component'
import { MapComponent } from './components/map/map.component'
import { VideoComponent } from './components/video/video.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { PricingComponent } from './components/pricing/pricing.component'
import { FeturesComponent } from '../yoga-studio/components/fetures/fetures.component'
import { CaseStudiesComponent } from '../marketing-agency/components/case-studies/case-studies.component'
import { FaqComponent } from '../mobile-showcase/components/faq/faq.component'
import { FooterComponent } from '../../about/agency/component/footer/footer.component'

@Component({
  selector: 'landings-saas-v4',
  standalone: true,
  imports: [
    NavigationBar6Component,
    HeroComponent,
    CategoriesComponent,
    UseCaseComponent,
    MapComponent,
    VideoComponent,
    TestimonialsComponent,
    PricingComponent,
    FeturesComponent,
    CaseStudiesComponent,
    FaqComponent,
    FooterComponent,
    FooterComponent,
    FooterComponent,
  ],
  templateUrl: './saas-v4.component.html',
  styles: ``,
})
export class SaasV4Component {}
