import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SongbirdsAndSnakesPage } from './songbirds-and-snakes.page';

describe('SongbirdsAndSnakesPage', () => {
  let component: SongbirdsAndSnakesPage;
  let fixture: ComponentFixture<SongbirdsAndSnakesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SongbirdsAndSnakesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SongbirdsAndSnakesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
