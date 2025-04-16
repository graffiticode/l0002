# L0002 Vocabulary

This section documents dialect-specific functions available in the **L0002**
dialect of Graffiticode. These functions extend the core language with
additional functionality tailored to L0002 use cases.

## Functions

| Function | Signature | Description |
| :------- | :-------- | :---------- |
| `hello` | `<string: record>` | Renders a hello message |
| `theme` | `<[dark|light] record: record>` | Selects a theme |

### hello

Renders a hello message formatted in K&R style that includes the given string.

```
hello "world"  | returns "hello, world!"
```

### theme

Select a theme and render the theme toggle button to allow users to set the
theme. The tag values `dark` and `light` are the only accepted argument values.

```
theme dark "as night"
```
```
theme light "as day"
```

## Program Examples

Render the text "hello, world!" in the dark theme.

```
theme dark hello "night"..
```
