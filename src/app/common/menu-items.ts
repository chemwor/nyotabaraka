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
  }
]
