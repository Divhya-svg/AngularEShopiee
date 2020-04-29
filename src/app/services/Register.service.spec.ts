import { RegisterService } from "./Register.service";
import { TestBed } from "@angular/core/testing";

describe("RegisterService", () => {

  let service: RegisterService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RegisterService
      ]
    });
    service = TestBed.get(RegisterService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
