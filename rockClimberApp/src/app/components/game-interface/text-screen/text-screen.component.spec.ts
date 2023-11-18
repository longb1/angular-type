import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextScreenComponent } from './text-screen.component';

describe('TextScreenComponent', () => {
  let component: TextScreenComponent;
  let fixture: ComponentFixture<TextScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
