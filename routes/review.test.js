const app = require("../app");
const supertest = require("supertest");
const ReviewController = require("../controllers/review");

const underTest = supertest(app);

describe("GET /review", () => {
    test("should have an HTTP status code of 200", () => {
      underTest
        .get("/review")
        .expect(200)
        .end((err, res) => {
          done();
        });
    });
  
    test("should call ReviewController.renderAll method once", () => {
      ReviewController.renderAll = jest.fn();
      underTest.get("/review").end((err, res) => {
        expect(ReviewController.renderAll).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });