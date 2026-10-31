import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiFraudeComponent } from './anti-fraude.component';

describe('AntiFraudeComponent', () => {
  let component: AntiFraudeComponent;
  let fixture: ComponentFixture<AntiFraudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntiFraudeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiFraudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
