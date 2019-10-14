const app = require("../app");
const supertest = require("supertest");
const IndexController = require("../controllers/index");

const underTest = supertest(app);

describe("GET /", () => {
  test("should have an HTTP status code of 200", () => {
    underTest
      .get("/")
      .expect(200)
      .end((err, res) => {
        done();
      });
  });

  test("should call IndexController.index method once", () => {
    IndexController.index = jest.fn();
    underTest.get("/").end((err, res) => {
      expect(IndexController.index).toHaveBeenCalledTimes(1);
      done();
    });
  });
});