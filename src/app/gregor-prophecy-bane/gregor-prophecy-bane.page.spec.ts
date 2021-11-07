import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GregorProphecyBanePage } from './gregor-prophecy-bane.page';

describe('GregorProphecyBanePage', () => {
  let component: GregorProphecyBanePage;
  let fixture: ComponentFixture<GregorProphecyBanePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GregorProphecyBanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GregorProphecyBanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
