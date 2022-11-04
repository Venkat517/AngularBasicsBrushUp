import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleErrorComponent } from './sample-error.component';

describe('SampleErrorComponent', () => {
  let component: SampleErrorComponent;
  let fixture: ComponentFixture<SampleErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
