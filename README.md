# cy-tkey-screenshot

Automatically generate screenshots for your translation keys using Cypress.

## Setup

### Install cy-tkey-screenshot

Add cy-tkey-screenshot as a dependency in your project:

*Using `npm`:*

```bash
npm install cy-tkey-screenshot --save-dev
```

*Using `yarn`:*

```bash
yarn add --dev cy-tkey-screenshot
```

### Set up Cypress to use cy-tkey-screenshot

Import *cy-tkey-screenshot* in your *cypress/support/commands.js* file:

```javascript
// cypress/support/commands.js
require("cy-tkey-screenshot")
```

or

```javascript
// cypress/support/commands.js
import "cy-tkey-screenshot"
```

## Usage

You'll need to call this command in your Cypress tests:

```javascript
cy.generateTranslationScreenshots()
```

This command will look at the elements on your page, find any translation keys and generate the screenshots.

For this to work, your elements need to have the `data-tkey` [data attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#HTML_syntax):

```
<h1 data-tkey="landingpage.header.title">Hello World!</h1>
```

Depending on how your app is implemented, there might be very easy ways of adding that automatically. For example, if you are using React and have a translation component, you might simply add this data attribute in your component.

I recommend using cy-tkey-screenshot if you have good E2E coverage in Cypress: in that case, most likely you can just add `cy.generateTranslationScreenshots()` to some existing code, or even just when the `window:load` [event](https://docs.cypress.io/api/events/catalog-of-events.html#Event-Types) happens in Cypress. In [LibreLingo](https://github.com/kantord/LibreLingo), we use this as part of the visual regression testing, so addign it means no extra effort: we get these screenshots essentially for free.

If you don't have a good E2E coverage or don't even have Cypress set up, then you'll probably not see much benefit from cy-tkey-screenshot, and would just be better off creating the screenshots manually.
