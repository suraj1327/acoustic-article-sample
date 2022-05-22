import ArticleData from "../components/article/ArticleData";
import * as Constants from './../constants';
import { render, waitFor, queryByAttribute , screen,act as reactAct } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

let mockedResponse = Constants.sampleJson;

const getById = queryByAttribute.bind(null, "id");

const mockUrlApi = () => {
    let urlDeferred;
    const urlPromise = new Promise((resolve, reject) => {
        urlDeferred = { reject, resolve };
    });
    fetchMock.doMockOnce(Constants.articleUrl, urlPromise, { overwriteRoutes: false });
    return urlDeferred;
};

describe('Testing Content article API', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('should call article json api', async () => {
        let dom;
        const urlDeferred = mockUrlApi();
        reactAct(() => {
            dom = render(<ArticleData />);
          });
        await reactAct(async () => {
            await urlDeferred.resolve(mockedResponse);
        });
        await waitFor(() => {
            expect(fetch.mock.calls.length).toEqual(1);
            const dataElement = getById(dom.container, "articleData");
            expect(dataElement).toBeInTheDocument();
        })
        dom.unmount();
    })

})


