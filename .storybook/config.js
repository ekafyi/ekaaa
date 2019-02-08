import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withInfo, setDefaults } from '@storybook/addon-info'
import { checkA11y, configureA11y } from '@storybook/addon-a11y';

// for styled-components ThemeProvider decorator
import React from 'react'; 
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/layouts/GlobalStyle'
import theme from '../data/theme'


// Customize `options` addon
// https://github.com/storybooks/storybook/tree/master/addons/options
const optionConfig = {
	name: 'ekaaa.me',
	addonPanelInRight: true
}
addDecorator(withOptions(optionConfig))

// Customize `info` addon
// https://github.com/storybooks/storybook/tree/master/addons/info
const infoConfig = {
	styles: stylesheet => ({
		// Setting the style with a function
		...stylesheet,
		header: {
			...stylesheet.header,
			fontFamily: 'inherit',
			h1: {
				...stylesheet.header.h1,
				display: 'inline-block',
				fontSize: '48px',
				fontWeight: '500',
				borderBottom: '10px solid yellow',
			},
			h2: {
				...stylesheet.header.h2,
				fontSize: '36px',
				fontWeight: '500'
			}
		},
		source: {
			...stylesheet.source,
			h1: {
				...stylesheet.source.h1,
				fontSize: '24px',
				marginTop: '24px'
			}
		},
		propTableHead: {
			margin: '24px 0 24px 0',
			fontSize: '18px',
			color: '#4A51A8'
		}
	})
}
addDecorator(withInfo(infoConfig))

// bugfix info
// https://github.com/storybooks/storybook/issues/2708#issuecomment-386737471
// import PropTable from '@storybook/addon-info/dist/components/PropTable';
// const PropTypesTable = ({ propDefinitions, ...props }) => {
//   propDefinitions.forEach((def) => {
//     if (typeof def.propType === 'string') {
//       def.propType = { name: def.propType };
//     }
//   });
//   return <PropTable propDefinitions={propDefinitions} {...props} />;
// };
// setDefaults({
//   TableComponent: PropTypesTable, // Override the component used to render the props table
// });

// a11y check decorator
// https://github.com/storybooks/storybook/tree/master/addons/a11y
const a11yConfig = {}
configureA11y(a11yConfig)
addDecorator(checkA11y)

// styled-components ThemeProvider decorator
const DecoratorWithTheme = (storyFn) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      { storyFn() }
      <GlobalStyle />
    </React.Fragment>
  </ThemeProvider>
);
addDecorator(DecoratorWithTheme);

// import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

configure(loadStories, module)