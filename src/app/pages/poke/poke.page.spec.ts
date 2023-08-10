import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PokePage } from './poke.page';

describe('PokePage', () => {
  let component: PokePage;
  let fixture: ComponentFixture<PokePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokePage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PokePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
