const app = require("../app");
const supertest = require("supertest");
const TagController = require("../controllers/tagController");

const underTest = supertest(app);

describe("GET /tags", () => {
    test("should have an HTTP status code of 200", () => {
      underTest
        .get("/tags")
        .expect(200)
        .end((err, res) => {
          done();
        });
    });
  
    test("should call TagController.renderAll method once", () => {
      TagController.renderAll = jest.fn();
      underTest.get("/tags").end((err, res) => {
        expect(TagController.renderAll).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });