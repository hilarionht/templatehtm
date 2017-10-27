import { DoctorCelularPage } from './app.po';

describe('doctor-celular App', () => {
  let page: DoctorCelularPage;

  beforeEach(() => {
    page = new DoctorCelularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
