import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowWayHomeComponent } from './tow-way-home.component';

describe('TowWayHomeComponent', () => {
  let component: TowWayHomeComponent;
  let fixture: ComponentFixture<TowWayHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TowWayHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowWayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
