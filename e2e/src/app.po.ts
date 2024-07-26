import { browser, by, element } from 'protractor';

export class AppPage {
    // eslint-disable-next-line class-methods-use-this
    navigateTo() {
        return browser.get('/') as Promise<any>;
    }

    // eslint-disable-next-line class-methods-use-this
    getTitleText() {
        return element(by.css('app-root h1')).getText() as Promise<string>;
    }
}
