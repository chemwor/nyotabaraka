export type MenuItemType = {
  key: string
  label: string
  image?: string
  isMega?: boolean
  isNew?: boolean
  url?: string
  parentKey?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  children?: MenuItemType[]
}

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: 'saas-4',
    label: 'Home',
    isNew: false,
    url: '/landings/saas-4',
  },
  {
    key: 'about-agency',
    label: 'About Us',
    url: '/about/agency',
  },
  {
    key: 'saas-4',
    label: 'Our Journeys',
    url: '/portfolio/single-1',
  },

  {
    key: 'landings',
    label: 'Landings',
    isMega: true,
    children: [
      {
        key: 'template-intro-page',
        label: 'Template Intro Page',
        url: '/',
        parentKey: 'landings',
        image: 'assets/img/megamenu/landings.jpg',
      },
      {
        key: 'mobile-showcase',
        label: 'Mobile App Showcase',
        url: '/landings/mobile-showcase',
        parentKey: 'landings',
        image: 'assets/img/megamenu/mobile-app.jpg',
      },
      {
        key: 'product-landing',
        label: 'Product Landing',
        url: '/landings/product',
        parentKey: 'landings',
        image: 'assets/img/megamenu/product-landing.jpg',
      },
      {
        key: 'saas-1',
        label: 'SaaS v.1',
        url: '/landings/saas-1',
        parentKey: 'landings',
        image: 'assets/img/megamenu/saas-1.jpg',
      },
      {
        key: 'saas-2',
        label: 'SaaS v.2',
        url: '/landings/saas-2',
        parentKey: 'landings',
        image: 'assets/img/megamenu/saas-2.jpg',
      },
      {
        key: 'saas-3',
        label: 'SaaS v.3',
        url: '/landings/saas-3',
        parentKey: 'landings',
        image: 'assets/img/megamenu/saas-3.jpg',
      },
      {
        key: 'saas-4',
        label: 'SaaS v.4',
        isNew: true,
        url: '/landings/saas-4',
        parentKey: 'landings',
        image: 'assets/img/megamenu/saas-4.jpg',
      },
      {
        key: 'shop-1',
        label: 'Shop Homepage v.1',
        url: '/landings/shop-1',
        parentKey: 'landings',
        image: 'assets/img/megamenu/shop-homepage-1.jpg',
      },
      {
        key: 'shop-2',
        label: 'Shop Homepage v.2',
        isNew: true,
        url: '/landings/shop-2',
        parentKey: 'landings',
        image: 'assets/img/megamenu/shop-homepage-2.jpg',
      },
      {
        key: 'marketing-agency',
        label: 'Marketing Agency',
        url: '/landings/marketing-agency',
        parentKey: 'landings',
        image: 'assets/img/megamenu/marketing-agency.jpg',
      },
      {
        key: 'creative-agency',
        label: 'Creative Agency',
        url: '/landings/creative-agency',
        parentKey: 'landings',
        image: 'assets/img/megamenu/creative-agency.jpg',
      },
      {
        key: 'conference',
        label: 'Conference (Event)',
        url: '/landings/conference',
        parentKey: 'landings',
        image: 'assets/img/megamenu/conference.jpg',
      },
      {
        key: 'web-studio',
        label: 'Web Studio',
        url: '/landings/web-studio',
        parentKey: 'landings',
        image: 'assets/img/megamenu/web-studio.jpg',
      },
      {
        key: 'corporate',
        label: 'Corporate',
        url: '/landings/corporate',
        parentKey: 'landings',
        image: 'assets/img/megamenu/corporate.jpg',
      },
      {
        key: 'insurance',
        label: 'Insurance Company',
        isNew: true,
        url: '/landings/insurance',
        parentKey: 'landings',
        image: 'assets/img/megamenu/insurance.jpg',
      },
      {
        key: 'business-consulting',
        label: 'Business Consulting',
        url: '/landings/business-consulting',
        parentKey: 'landings',
        image: 'assets/img/megamenu/business-consulting.jpg',
      },
      {
        key: 'coworking-space',
        label: 'Coworking Space',
        url: '/landings/coworking-space',
        parentKey: 'landings',
        image: 'assets/img/megamenu/coworking.jpg',
      },
      {
        key: 'yoga-studio',
        label: 'Yoga Studio',
        url: '/landings/yoga-studio',
        parentKey: 'landings',
        image: 'assets/img/megamenu/yoga-studio.jpg',
      },
      {
        key: 'influencer',
        label: 'Influencer',
        url: '/landings/influencer',
        parentKey: 'landings',
        image: 'assets/img/megamenu/influencer.jpg',
      },
      {
        key: 'blog',
        label: 'Blog Homepage',
        url: '/landings/blog',
        parentKey: 'landings',
        image: 'assets/img/megamenu/blog-homepage.jpg',
      },
    ],
  }
]
