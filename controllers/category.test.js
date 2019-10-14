const CategoryController = require("../controllers/category");
const categoryService = require("../services/category-service");

describe("categoryController", () => {
        test("render all should be called one", () =>{
            //arrange
        const requestMock = {}
        const responseMock = {
            render: jest.fn()
        };
        categoryService.findAll = jest.fn(() => []);

        //act
        CategoryController.renderAll(requestMock, responseMock);

        //assert
        expect(responseMock.render).toHaveBeenCalledTimes(1)
        expect(responseMock.render).toHaveBeenCalledWith("categories", {category: [] })
        })
        
    
});