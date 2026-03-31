<!-- SPDX-License-Identifier: CC-BY-4.0 -->
# L0002 Dialect Extensions

L0002 is the base dialect of Graffiticode, focused on simple interactions and visualizations.

## L0002 Functions

| Function | Signature | Description |
| :------- | :-------- | :---------- |
| `hello` | `<string: record>` | Renders a "hello, {string}!" greeting |
| `image` | `<string: record>` | Renders an image from a URL |
| `theme` | `<tag record: record>` | Sets UI theme (DARK or LIGHT) wrapping a body expression |
| `id` | `<string any: record>` | Sets an element identifier |

## L0002 Built-in Tags

- `DARK` — dark theme
- `LIGHT` — light theme

## L0002 Examples

### Hello world
```
hello "world"..
```

### Themed greeting
```
theme DARK hello "world"..
```

### Image display
```
image "https://example.com/photo.jpg"..
```

### Combining core and L0002 functions
```
let name = "world"..
theme LIGHT hello name..
```
