import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompraPage } from './compra.page';

describe('CompraPage', () => {
  let component: CompraPage;
  let fixture: ComponentFixture<CompraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
