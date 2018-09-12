import { TestBed, async } from '@angular/core/testing';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { RouterTestingModule} from  '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppModule, RouterTestingModule]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    `should have as title 'AngularFire App with Authentication on Angular 6 and Narwal'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('AngularFire App with Authentication on Angular 6 and Narwal');
    })
  );
});
