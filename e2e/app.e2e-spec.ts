import { GuestListPage } from './app.po';

describe('guest-list App', function() {
  let page: GuestListPage;

  beforeEach(() => {
    page = new GuestListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
