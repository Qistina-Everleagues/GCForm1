import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestationalcarrierComponent } from './gestationalcarrier.component';

describe('GestationalcarrierComponent', () => {
  let component: GestationalcarrierComponent;
  let fixture: ComponentFixture<GestationalcarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestationalcarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestationalcarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
