import { NO_ERRORS_SCHEMA } from "@angular/core";
import { WishListComponent } from "./wishList.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("WishListComponent", () => {

  let fixture: ComponentFixture<WishListComponent>;
  let component: WishListComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [WishListComponent]
    });

    fixture = TestBed.createComponent(WishListComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
