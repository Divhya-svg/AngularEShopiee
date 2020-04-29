import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FrontPageComponent } from "./frontPage.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FrontPageComponent", () => {

  let fixture: ComponentFixture<FrontPageComponent>;
  let component: FrontPageComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FrontPageComponent]
    });

    fixture = TestBed.createComponent(FrontPageComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
