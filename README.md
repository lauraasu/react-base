# React application base
**Minimalistic react application structure with development server and build system.**

## Setup
- run `npm install` to install all dependencies.
- run `npm start` to start the development server or `npm build` to build the production version in */dist* directory.
- open [http://localhost:3000](http://localhost:3000) in your browser (if it didn't open automatically).

## Command line
- `npm start` - start the development server on port 3000 (provides hot-reload, generators).
- `npm run build` - build the production version in */dist* directory.
- `npm run serve` - serves the production version from the */dist* directory (build it first!).
- `npm run graphql` - starts the graphql server (development server starts this as well).
- `npm run lint` - check your code for issues and style rules.

## Technologies
- ES2015+ (Babel)
- React
- Redux
- GraphQL server & client
- SASS (SCSS)
- Webpack + hot loader
- ESLint

## Directory & files structure

### TL;DR version
- `src/` contains your application source code.
  - `src/views` contains the application views.
  - `src/components` contains reusable components that can be used by several views.
  - `src/gfx` contains visual resources (styles, images, icons, fonts etc).
- `build/` contains code and configuration for operating the development server and building production version.
- `server/` contains simple graphql server.
- `config/` contains application configuration.

### Detailed version
- `src/` contains your application source code.
  - `src/index.js` is the webpack application entry point - everything starts from there.
  - `src/reducer.js` defines the root reducer.
  - `src/index.html` is the html template used to generate the index page sent to the client.
  - `src/App.js` is the root React component which contains the root routes and dev-tools logic.
  - `src/views` contains the application views. Each view resides in a separate directory and follows naming convention that *create user* directory contains *CreateUserView.js*. The directory can contains additional files such as stylesheets (.scss), sub-views, components etc.
    - `src/views/index.js` is an automatically-generated views index file used for dev-tools menu and routes. This file can be safely deleted and will be regenerated when starting the development server or building production application. This file should not be checked into version control.
  - `src/components` contains reusable components that can be used by several views and follows naming convention that *main-menu* directory contains *MainMenu.js*. Each component resides in a separate directory and may contain additional files as needed. View-specific components should be placed in the given view directory (for example *src/views/create-user/components/user-form/UserForm.js*).
  - `src/gfx` contains all resources related to how the application looks (styles, images, icons, fonts etc).
    - `src/gfx/main.scss` is the main styles entry-point and should only contain imports of other resources listed below. Additional logical files can be added.
    - `src/gfx/vars.scss` contains only variables that are common for the entire application (colors etc).
    - `src/gfx/reset.scss` contains baseline rules to reset/normalize styles across browsers.
    - `src/gfx/typography.scss` contains global typography-related rules such as default font, heading appearance etc.
    - `src/gfx/layout.scss` contains global layout-related rules such as grid system.
  - `src/services` contains various application-specific functionality used by views and components such as making low-level REST API requests.
  - `src/constants` - contains application-specific constants. Avoid using string literals when possible.
    - `src/constants/shapes.js` - contains reusable React PropTypes validation shapes.
  - `src/api` contains drivers for talking to various APIs. Each driver should reside in a separate directory and may contain additional files. Any kind of client-side API mocking should be implemented in this level. This directory can be removed if the application does not integrate with any APIs.
- `build/` contains code and configuration for operating the development server and building production version.
  - `build/paths.js` contains map of various paths used by the system that can be references by the subsystems.
  - `build/scripts` contains the scripts executed by the *npm run ...* commands (script name matches the command name). These are processed by babel as well.
    - `build/scripts/dev` starts the development server.
    - `build/scripts/build` builds the production version.
    - `build/scripts/serve` serves the production version.
  - `build/webpack` contains the webpack configurations.
    - `build/webpack/webpack.base.js` is the base webpack configuration shared by others extending it.
    - `build/webpack/webpack.dev.js` is the base webpack configuration used by the development server.
    - `build/webpack/webpack.build.js` is the base webpack configuration used to build the production version.
  - `build/services` contains various scripts used by the build system and development server.
  - `build/templates` contains the JavaScript template strings based templates used to generate resources by the dev-tools server.
- `config/` contains application configuration.
- `dist/` is generated by the *npm run build* command and contains the production version of the application. This directory can safely be deleted and regenerated at any time and should not be checked into version control.
- `server/` contains simple graphql server code
- `node_modules` contains the application dependencies. This directory is generated by the *npm install* command and should not be checked into version control.
- `README.md` is the file you're currently reading.
- `package.json` contains the list of application dependencies and references to the scripts (*npm run build* etc).
- `.babelrc` contains the babel configuration.
- `.eslintrc` contains the ESLint linter configuration.
- `.eslintignore` contains the list of directories the linter should ignore.
- `.gitignore` contains the list of directories the git version control should ignore.
- `yarn.lock` stores the exact installed versions of dependencies, automatically managed by yarn. This file should be checked into version control.
- `LICENCE` contains this software package's license agreement.

## Development tools
Because **DX** (development experience) matters too!
- The development server uses hot-reload to update changed views and components on the fly without even losing state.
- Application dev-tools
  - The development-version of the application includes an additional component *src/components/dev-tools/DevTools.js* in the root element that renders a simple user interface normally hidden out of view.
  - To show this, hover your mouse on the right edge of the screen for a second, a drawer slides out.
  - This contains automatically-generated links to each of the views in the system, useful for prototyping (automatic route */view/view-name* is also added).
  - It also contains a simple form for generating new views. Simply enter a view name such as *"user info"* and the view file *views/user-info/UserInfoView.js* is automatically generated by the dev-server based on template from *build/templates/view.tpl*.
  - The views index file *src/views/index.js* is automatically generated and contains references to all of the views.
  - Components relying on this index file are automatically hot-reloaded when a new view is added or existing one is removed.
- React dev-tools
  - Get [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) for Google Chrome browser.
  - Get [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) for Google Chrome browser.
- Apollo dev-tools
  - Get [Apollo Client Development tools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm/related) for Google Chrome browser.
- Linting
  - Configure your IDE to show ESLint errors.
  - run `npm run lint` before checking your code into version control to check for issues.

## Creating views & components
Please follow the naming convention that *register-user* view resides in *src/views/register-user/RegisterUserView.js* and the root element has `className="register-user-view"` etc.

Components follow the same logic as views.

### Simple stateless view example
This would be located in *src/views/user-view/UserView.js*.
```js
import React from 'react';

export default () => (
	<div className="user-view">
		<h1>User view</h1>
	</div>
);

```

### Stateful view example
This would be located in *src/views/counter-view/CounterView.js*.
```js
import React, { Component } from 'react';

export default class CounterView extends Component {

	state = {
		counter: 0,
	};

	render = () => (
		<div className="counter-view">
			<h1>Counter</h1>
			<p>Counter: {this.state.counter}</p>
			<button onClick={this.handleIncrementCounter}>Increment counter</button>
		</div>
	);

	handleIncrementCounter = () => {
		this.setState({
			counter: this.state.counter + 1,
		});
	}
}

```

## Task list & possible ideas
- Update react-apollo once they fix the "Accessing PropTypes via the main React package is deprecated.." issue.
- Make the development graphql server live on the same port as the application.
- Implement production server serving both the static app and also GraphQL server (express instead of serve).
- Make the development server port configurable.
- Implement GraphQL server sessions.
- Implement GraphQL server authentication example.
- Implement https proxy.
- Implement indexing reducers?
- Integrate testing?
- Implement environment configuration logic?
- Handle SVG background?
- Add REST API example?
- Add watcher to npm serve script to rebuild on changes?
- Integrate logging (Winston, Bunyan, debug, ...)?
- Build or remove the UIG view?
