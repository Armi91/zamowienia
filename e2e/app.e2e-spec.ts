import { KonikPage } from './app.po';

describe('konik App', function() {
  let page: KonikPage;

  beforeEach(() => {
    page = new KonikPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
