import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaProductosPage } from './tabla-productos.page';

describe('TablaProductosPage', () => {
  let component: TablaProductosPage;
  let fixture: ComponentFixture<TablaProductosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TablaProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
