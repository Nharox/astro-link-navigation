# @nharox/astro-link-navigation

Navigation with links to my various sites/profiles. Currently used on:

- https://nharox.games/
- https://nharox.photos/
- https://music.nharox.com/

## Installation

1. Install package as a dependency

```bash
npm install --save @nharox/astro-link-navigation
```

2. Import the component and set the required props

```astro
---
import { LinkNavigation } from '@nharox/astro-link-navigation';
---

<LinkNavigation
  maxWidth="1024px"
  paddingInline="20px"
  backgroundColor="black"
  foregroundColor="white"
  hoverColor="chartreuse"
  activeLink="website"
/>
```
