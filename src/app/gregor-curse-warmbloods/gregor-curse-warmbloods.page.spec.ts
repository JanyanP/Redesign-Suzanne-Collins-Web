import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GregorCurseWarmbloodsPage } from './gregor-curse-warmbloods.page';

describe('GregorCurseWarmbloodsPage', () => {
  let component: GregorCurseWarmbloodsPage;
  let fixture: ComponentFixture<GregorCurseWarmbloodsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GregorCurseWarmbloodsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GregorCurseWarmbloodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
