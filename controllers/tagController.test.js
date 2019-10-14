const TagsController = require("../controllers/tagController");
const tagService = require("../services/tag-service");

describe("TagController", () => {
        test("display/tags should be called one", async () =>{
            //arrange
        const requestMock = {}
        const responseMock = {
            render: jest.fn()
        };
        tagService.findAll = jest.fn(() => []);

        //act
        await TagsController.displayTags(requestMock, responseMock);

        //assert
        expect(responseMock.render).toHaveBeenCalledTimes(1)
        expect(responseMock.render).toHaveBeenCalledWith("tags", {tags: [] })
        })
        
    
});