import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoProductoPage } from './nuevo-producto.page';

describe('NuevoProductoPage', () => {
  let component: NuevoProductoPage;
  let fixture: ComponentFixture<NuevoProductoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
