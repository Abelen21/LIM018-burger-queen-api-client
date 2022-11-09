import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsmenuComponent } from './itemsmenu.component';

describe('ItemsmenuComponent', () => {
  let component: ItemsmenuComponent;
  let fixture: ComponentFixture<ItemsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
