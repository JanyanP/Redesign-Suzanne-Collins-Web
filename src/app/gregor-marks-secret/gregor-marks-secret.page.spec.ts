import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GregorMarksSecretPage } from './gregor-marks-secret.page';

describe('GregorMarksSecretPage', () => {
  let component: GregorMarksSecretPage;
  let fixture: ComponentFixture<GregorMarksSecretPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GregorMarksSecretPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GregorMarksSecretPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
