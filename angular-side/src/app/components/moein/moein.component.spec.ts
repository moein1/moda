import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoeinComponent } from './moein.component';

describe('MoeinComponent', () => {
  let component: MoeinComponent;
  let fixture: ComponentFixture<MoeinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoeinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
