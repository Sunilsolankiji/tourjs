# tourjs - Interactive Website Tours

A lightweight, dependency-free JavaScript library to create engaging website tours and interactive walkthroughs for your users.

[![npm version](https://badge.fury.io/js/tourjs.svg)](https://badge.fury.io/js/tourjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- **Lightweight** - No dependencies, pure vanilla JavaScript
- **Easy to Use** - Simple API for creating tours
- **Customizable** - Extensive configuration options
- **Responsive** - Works on all screen sizes
- **Keyboard Navigation** - Full keyboard support
- **Smooth Animations** - Beautiful transition effects
- **Accessibility** - WCAG compliant

## Installation

### NPM

```bash
npm install tourjs
```

### Direct Include

```html
<link rel="stylesheet" href="tourjs.css" />
<script src="tourjs.js"></script>
```

## Quick Start

### Basic Usage

```javascript
const tour = new ztTour({
  steps: [
    {
      element: '.welcome',
      popup: {
        title: 'Welcome',
        description: 'Welcome to our website!',
        side: 'bottom',
        align: 'start',
      },
    },
    {
      element: '.features',
      popup: {
        title: 'Our Features',
        description: 'Check out our amazing features',
        side: 'top',
        align: 'center',
      },
    },
  ],
});

tour.start();
```

## Configuration

### Tour Options

```javascript
{
  // Array of steps to display in the tour
  steps: [],

  // Opacity of the overlay backdrop (0-1)
  overlayOpacity: 0.7,

  // Distance between element and cutout in pixels
  stagePadding: 10,

  // Distance between popup and element in pixels
  popupOffset: 10,

  // Border radius of the cutout around element
  stageRadius: 5,

  // Color of the overlay
  overlayColor: '#000',

  // Enable/disable animations
  animate: true,

  // Smooth scroll to highlighted element
  smoothScroll: false,

  // Allow closing by clicking backdrop
  allowBackdropClose: true,

  // Custom CSS class for popup
  popupClass: '',

  // Enable/disable keyboard navigation (ESC to close, arrows to navigate)
  keyboardControl: true,

  // Show progress counter (e.g., "1 / 5")
  showProgress: false,

  // Array of visible buttons: 'next', 'previous', 'close'
  VisibleButtons: ['next', 'previous', 'close'],

  // Array of disabled buttons
  disableButtons: [],

  // Animation duration in milliseconds
  animationDuration: 400,

  // Button text
  nextBtnText: 'Next →',
  prevBtnText: '← Previous',
  DoneBtnText: 'Done',

  // Callbacks
  onNextClick: (step) => {},
  onPreviousClick: (step) => {},
  onClose: () => {}
}
```

### Step Configuration

```javascript
{
  // CSS selector for the element to highlight
  element: '.my-element',

  // Popup configuration
  popup: {
    title: 'Step Title',
    description: 'Step description text',

    // Position: 'top', 'bottom', 'left', 'right', 'over'
    side: 'bottom',

    // Alignment: 'start', 'center', 'end'
    align: 'center'
  }
}
```

## Methods

### Start the tour

```javascript
tour.start();
```

### Go to specific step

```javascript
tour.goToStep(2);
```

### Go to next step

```javascript
tour.nextStep();
```

### Go to previous step

```javascript
tour.previousStep();
```

### End the tour

```javascript
tour.end();
```

## Examples

### Complete Example

```javascript
const tourOptions = {
  steps: [
    {
      element: '.header',
      popup: {
        title: 'Welcome to Our Site',
        description: 'This is our header with navigation',
        side: 'bottom',
        align: 'start',
      },
    },
    {
      element: '.search-bar',
      popup: {
        title: 'Search',
        description: 'Use the search bar to find content',
        side: 'bottom',
        align: 'center',
      },
    },
    {
      element: '.cta-button',
      popup: {
        title: 'Call to Action',
        description: 'Click here to get started',
        side: 'top',
        align: 'end',
      },
    },
    {
      popup: {
        title: 'All Done!',
        description: 'You have completed the tour. Enjoy exploring!',
        side: 'over',
        align: 'over',
      },
    },
  ],
  overlayOpacity: 0.8,
  showProgress: true,
  keyboardControl: true,
  onNextClick: (step) => console.log('Next step:', step),
  onClose: () => console.log('Tour ended'),
};

const tour = new ztTour(tourOptions);
tour.start();
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## API Reference

See [Tour Library Documentation](./docs/Tour-Library-Documentation.pdf) for detailed API documentation.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand our community standards.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Author

Created by [Sunil Solanki](https://github.com/Sunilsolankiji)

## Support

For issues, feature requests, or questions, please open an issue on [GitHub](https://github.com/Sunilsolankiji/tourjs/issues).

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and updates.

## Roadmap

- [ ] TypeScript definitions
- [ ] React component wrapper
- [ ] Vue component wrapper
- [ ] Unit tests
- [ ] E2E tests
- [ ] Performance optimizations

---

Made with ❤️ by Sunil Solanki
