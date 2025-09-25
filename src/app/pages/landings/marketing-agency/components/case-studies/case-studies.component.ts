import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { initAOS } from 'src/app/utils/init-aos';
import { initBindSwiper } from '@helpers/swiper';
import { Navigation, Pagination } from 'swiper/modules';
import type { SwiperOptions, PaginationOptions, NavigationOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { counterData, CounterType } from '../../data';
import { currency } from 'src/app/states/constants';

@Component({
  selector: 'marketing-agency-case-studies',
  standalone: true,
  imports: [],
  templateUrl: './case-studies.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./case-studies.component.scss'],
})
export class CaseStudiesComponent implements AfterViewInit {
  counterData: CounterType[] = counterData;
  selectedCurrency = currency;

  // 🔑 Add the missing ViewChild refs
  @ViewChild('testimonialSwipers') testimonialSwipers!: ElementRef<SwiperContainer>;
  @ViewChild('prevBtn') prevBtn!: ElementRef<HTMLElement>;
  @ViewChild('nextBtn') nextBtn!: ElementRef<HTMLElement>;
  @ViewChild('fractionEl') fractionEl!: ElementRef<HTMLElement>;

  swiperConfig: SwiperOptions = {
    modules: [Pagination, Navigation],
    spaceBetween: 40,
    autoHeight: true,
    pagination: { type: 'fraction' } as PaginationOptions, // start as object
    navigation: {} as NavigationOptions,
    uniqueNavElements: false, // because we pass DOM elements directly
  };

  ngAfterViewInit(): void {
    initAOS();

    // Narrow union types before assigning .el / .prevEl / .nextEl
    if (this.swiperConfig.pagination && typeof this.swiperConfig.pagination !== 'boolean') {
      (this.swiperConfig.pagination as PaginationOptions).el = this.fractionEl.nativeElement;
    }

    // Ensure single init (avoid double handlers → “skip from 1 to 3”)
    const el = this.testimonialSwipers.nativeElement as any;
    if (el.swiper) el.swiper.destroy(true, true);

    initBindSwiper(el, this.swiperConfig);
  }

  currentIndex = 0;

  updateSlide() {
    // Logic to update the active slide and image
    // For example, set active class or use Swiper API
    const swiperInstance = this.testimonialSwipers?.nativeElement?.swiper;
    if (swiperInstance) {
      swiperInstance.slideTo(this.currentIndex);
    }
  }

  onPrev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlide();
    }
  }

  onNext() {
    if (this.currentIndex < this.counterData.length - 1) {
      this.currentIndex++;
      this.updateSlide();
    }
  }

}
