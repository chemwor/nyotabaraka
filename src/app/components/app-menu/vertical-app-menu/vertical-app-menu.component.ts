import { Component, Input } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router';
import { findAllParent, findMenuItem, getMenuItemFromURL } from '@helpers/menu'
import type { MenuItemType } from 'src/app/common/menu-items'
import { VerticalMenuItemWithChildrenComponent } from './components/vertical-menu-item-with-children.component'
import { VerticalMenuItemComponent } from './components/vertical-menu-item.component'
import { basePath } from 'src/app/states/constants'

@Component({
  selector: 'vertical-app-menu',
  standalone: true,
  imports: [VerticalMenuItemWithChildrenComponent, VerticalMenuItemComponent],
  templateUrl: './vertical-app-menu.component.html',
})
export class VerticalAppMenuComponent {
  @Input() menuItems!: MenuItemType[]

  activeMenuItems?: string[]
  trimmedURL = location?.pathname?.replaceAll(
    basePath !== '' ? basePath + '/' : '',
    '/'
  )
  matchingMenuItem: MenuItemType | undefined

  isMenuOpen = true; // Track menu open/close state

  constructor(private router: Router) {
    // Listen for navigation events and close menu
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
      }
    });
  }

  ngOnInit(): void {
    if (this.menuItems)
      this.matchingMenuItem = getMenuItemFromURL(
        this.menuItems,
        this.trimmedURL
      )
    if (this.matchingMenuItem) {
      const activeMt = findMenuItem(this.menuItems, this.matchingMenuItem.key)
      if (activeMt) {
        this.activeMenuItems = [
          activeMt.key,
          ...findAllParent(this.menuItems, activeMt),
        ]
      }
    }
  }

  getActiveClass(item: MenuItemType) {
    return this.activeMenuItems?.includes(item.key) ? ' show' : ''
  }
}
