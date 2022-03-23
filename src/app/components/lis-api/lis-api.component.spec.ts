import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisApiComponent } from './lis-api.component';

describe('LisApiComponent', () => {
  let component: LisApiComponent;
  let fixture: ComponentFixture<LisApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
