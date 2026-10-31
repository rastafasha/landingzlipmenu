import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlSyncComponent } from './ml-sync.component';

describe('MlSyncComponent', () => {
  let component: MlSyncComponent;
  let fixture: ComponentFixture<MlSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlSyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
