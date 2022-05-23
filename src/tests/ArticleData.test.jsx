import { render, waitFor, screen, queryByAttribute } from "@testing-library/react";
import ArticleData from "../components/article/ArticleData";
import * as Constants from './../constants';

//The test suite to test Article JSON API
describe('Testing Content article API', () => {
    const getById = queryByAttribute.bind(null, 'id');
    const getByClassName = queryByAttribute.bind(null, 'class');
    it('should call article json api', async () => {
        global.fetch = () =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(Constants.sampleJson)
            });
            let dom = render(<ArticleData />);
        await waitFor(() => {
            //Test the article,body,author,title and images
            expect(screen.getByText("Sample Article")).toBeInTheDocument();
            expect(screen.getByText("Hey there")).toBeInTheDocument();
            expect(screen.getByText("John Doe")).toBeInTheDocument();
            expect(screen.getByText("Top article title")).toBeInTheDocument();
            const images = getByClassName(dom.container, "lead-image-container");
            expect(images).toBeInTheDocument();
        })
    })


    it('should fail article json api', async () => {
        global.fetch = () => Promise.reject("error");
        let dom = render(<ArticleData />);
        await waitFor(() => {
            const dataElement = getById(dom.container, "error");
            expect(dataElement).toBeInTheDocument();
        })
    })

})

