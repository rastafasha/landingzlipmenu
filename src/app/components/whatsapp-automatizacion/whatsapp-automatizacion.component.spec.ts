import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappAutomatizacionComponent } from './whatsapp-automatizacion.component';

describe('WhatsappAutomatizacionComponent', () => {
  let component: WhatsappAutomatizacionComponent;
  let fixture: ComponentFixture<WhatsappAutomatizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappAutomatizacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappAutomatizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
