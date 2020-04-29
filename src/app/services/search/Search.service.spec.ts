import { SearchService } from "./Search.service";
import { TestBed } from "@angular/core/testing";

describe("SearchService", () => {

  let service: SearchService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchService
      ]
    });
    service = TestBed.get(SearchService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
