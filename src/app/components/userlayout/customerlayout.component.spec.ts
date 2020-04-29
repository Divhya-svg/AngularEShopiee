import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CustomerlayoutComponent } from "./customerlayout.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CustomerlayoutComponent", () => {

  let fixture: ComponentFixture<CustomerlayoutComponent>;
  let component: CustomerlayoutComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CustomerlayoutComponent]
    });

    fixture = TestBed.createComponent(CustomerlayoutComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
