const ReviewController = require("../controllers/review");
const reviewService = require("../services/review-service");

describe("reviewController", () => {
        test("add review should be called once", async () => {
        //arrange
        const requestMock = {body: {title:"", content:"", rating:"3", category:"6", tag:""}}
        const responseMock = {
            render: jest.fn(),
            redirect: jest.fn()
        };
        reviewService.addReview = jest.fn();

        //act
        await ReviewController.newReview(requestMock, responseMock);

        //assert
        expect(responseMock.redirect).toHaveBeenCalledWith("/reviews")
        })
    });