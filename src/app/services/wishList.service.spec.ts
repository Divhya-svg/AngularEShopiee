import { WishListService } from "./wishList.service";
import { TestBed } from "@angular/core/testing";

describe("WishListService", () => {

  let service: WishListService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WishListService
      ]
    });
    service = TestBed.get(WishListService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
