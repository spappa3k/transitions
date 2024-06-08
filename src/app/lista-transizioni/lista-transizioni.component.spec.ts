import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTransizioniComponent } from './lista-transizioni.component';

describe('ListaTransizioniComponent', () => {
  let component: ListaTransizioniComponent;
  let fixture: ComponentFixture<ListaTransizioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaTransizioniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTransizioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
