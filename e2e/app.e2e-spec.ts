import { KitoloPage } from './app.po';

describe('kitolo App', function() {
  let page: KitoloPage;

  beforeEach(() => {
    page = new KitoloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
