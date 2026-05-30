import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingCtaComponent } from './closing-cta.component';

describe('ClosingCtaComponent', () => {
  let component: ClosingCtaComponent;
  let fixture: ComponentFixture<ClosingCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosingCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosingCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
