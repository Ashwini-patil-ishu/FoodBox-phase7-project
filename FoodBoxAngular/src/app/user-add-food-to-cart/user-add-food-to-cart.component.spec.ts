import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddFoodToCartComponent } from './user-add-food-to-cart.component';

describe('UserAddFoodToCartComponent', () => {
  let component: UserAddFoodToCartComponent;
  let fixture: ComponentFixture<UserAddFoodToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddFoodToCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddFoodToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
