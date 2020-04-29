import { NO_ERRORS_SCHEMA } from "@angular/core";
import { UserRegisterComponent } from "./userRegister.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("UserRegisterComponent", () => {

  let fixture: ComponentFixture<UserRegisterComponent>;
  let component: UserRegisterComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [UserRegisterComponent]
    });

    fixture = TestBed.createComponent(UserRegisterComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
