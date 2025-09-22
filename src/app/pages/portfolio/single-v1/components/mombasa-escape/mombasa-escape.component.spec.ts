import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MombasaEscapeComponent } from './mombasa-escape.component'

describe('NetworksComponent', () => {
  let component: MombasaEscapeComponent
  let fixture: ComponentFixture<MombasaEscapeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MombasaEscapeComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(MombasaEscapeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
