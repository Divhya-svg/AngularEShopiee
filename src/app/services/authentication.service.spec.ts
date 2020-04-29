import { AuthenticationService } from "./authentication.service";
import { TestBed } from "@angular/core/testing";

describe("AuthenticationService", () => {

  let service: AuthenticationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService
      ]
    });
    service = TestBed.get(AuthenticationService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
