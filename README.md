# Pure Black Theme Browser Extension for Google Search

A lightweight browser extension that transforms **Google Search** into a **true pure black theme (#000000)** while preserving images, videos, and overall usability.

Unlike traditional dark themes that use dark gray backgrounds, this extension forces Google Search to use a genuine black interface for maximum OLED battery savings and improved contrast.

---

## Features

- True **Pure Black (#000000)** background
- Lightweight with no external dependencies
- Supports Google Search pages
- White text for improved readability
- Blue links for clear visibility
- Improved search category styling
- Dark hover effects for menus and suggestions
- Preserves images and videos
- Automatically updates dynamically loaded content using a Mutation Observer

---

## Preview

Google Search is transformed from Google's default dark gray interface into a clean, OLED-friendly black theme.

### Highlights

- Pure black backgrounds
- Better contrast
- Clean search results
- Improved category navigation
- Consistent styling across dynamically loaded content

---

## Installation

### Chrome / Brave / Edge 

1. Download or clone this repository.

```bash
git clone https://github.com/EbraamSobhy/pure-black-theme.git
```

2. Open your browser.

3. Navigate to:

```
chrome://extensions
```

4. Enable **Developer Mode**.

5. Click **Load unpacked**.

6. Select the extension folder.

7. Open Google Search.

Done!

---

## Project Structure

```
PureBlackTheme/
│
├── manifest.json
├── content.js
├── style.css
└── README.md
```

---

## How It Works

The extension injects:

- **CSS** for styling Google Search
- **JavaScript** for dynamically forcing newly created elements to remain black

A `MutationObserver` continuously watches the page so Google's dynamically loaded content is themed automatically.

---

## Styling

The extension includes custom improvements for:

- Search results
- Search bar
- Search categories
- Autocomplete suggestions
- Hover states
- Backgrounds
- Text colors
- Links

Images, SVGs, videos, canvases, and other media are intentionally left untouched.

---

## Permissions

The extension only runs on:

```
https://www.google.com/search*
```

No additional permissions are required.

No data is collected.

No tracking is performed.

No analytics are included.

---

## Browser Compatibility

Tested on:

- Google Chrome
- Microsoft Edge
- Brave Browser
- Opera

Any Chromium-based browser supporting Manifest V3 should work.

---

## Performance

- Lightweight
- No frameworks
- No libraries
- No network requests
- Minimal memory usage
- Fast page updates

---

## Customization

You can easily modify:

- Background colors
- Link colors
- Hover effects
- Search category styling
- Search result appearance

All styling is contained in `style.css`, while dynamic behavior is handled in `content.js`.

---

## Known Limitations

- Currently supports **Google Search** only.
- Google frequently changes its HTML structure, so future updates to Google's UI may require selector adjustments.

---

## Roadmap

- [ ] Chrome Web Store release
- [ ] Firefox support
- [ ] Google Images improvements
- [ ] Google News improvements
- [ ] Optional accent color customization
- [ ] User settings page
- [ ] Automatic updates

---

## Contributing

Contributions are welcome!

Feel free to:

- Report bugs
- Suggest improvements
- Submit pull requests

---

## License

This project is licensed under the MIT License.

---

Made with for users who prefer a pure black browsing experience.
