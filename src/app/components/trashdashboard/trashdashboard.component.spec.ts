import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashdashboardComponent } from './trashdashboard.component';

describe('TrashdashboardComponent', () => {
  let component: TrashdashboardComponent;
  let fixture: ComponentFixture<TrashdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
