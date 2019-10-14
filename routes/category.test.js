const app = require("../app");
const supertest = require("supertest");
const CategoryController = require("../controllers/category");

const underTest = supertest(app);

describe("GET /category", () => {
    test("should have an HTTP status code of 200", () => {
      underTest
        .get("/category")
        .expect(200)
        .end((err, res) => {
          done();
        });
    });
  
    test("should call CategoryController.renderAll method once", () => {
      CategoryController.renderAll = jest.fn();
      underTest.get("/category").end((err, res) => {
        expect(CategoryController.renderAll).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });