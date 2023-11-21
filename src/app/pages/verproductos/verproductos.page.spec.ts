import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerproductosPage } from './verproductos.page';

describe('VerproductosPage', () => {
  let component: VerproductosPage;
  let fixture: ComponentFixture<VerproductosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
