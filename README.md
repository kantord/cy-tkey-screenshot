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
