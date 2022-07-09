import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassWordInputComponent } from './pass-word-input.component';

describe('PassWordInputComponent', () => {
  let component: PassWordInputComponent;
  let fixture: ComponentFixture<PassWordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassWordInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassWordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
