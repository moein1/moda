import { AngualarSidePage } from './app.po';

describe('angualar-side App', () => {
  let page: AngualarSidePage;

  beforeEach(() => {
    page = new AngualarSidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
