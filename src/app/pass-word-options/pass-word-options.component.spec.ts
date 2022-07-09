import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassWordOptionsComponent } from './pass-word-options.component';

describe('PassWordOptionsComponent', () => {
  let component: PassWordOptionsComponent;
  let fixture: ComponentFixture<PassWordOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassWordOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassWordOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
