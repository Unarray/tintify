# Tintify
Tintify tints your untinted terminal

---

**Tintify** is an NPM package that bring you all you need to add colors and effects to your terminal !

This package isn't a simple list of ANSI escape sequences.
It bring you utilities functions that permit you to use custom RGB colors or the HEXADECIMAL notation.
In future update, we will bring you others functions like a formater, where you can pass a string with specific flag to add color *(ie: `"§2Hello §4world!"` where `§2` and `§4` represent a color/effect)* or functions to create rainbow strings

---
# Installation
```cmd
npm install tintify
```

---

# Enums

## `Effect`
|           Key | Description               |
| ------------: | :------------------------ |
|          Bold | Set bold mode             |
|          Thin | Set thin mode             |
|        Italic | Set italic mode           |
|     Underline | Set underline mode        |
|         Blink | Set blinking mode         |
|       Reverse | Set inverse/reverse mode  |
|        Hidden | Set hidden/invisible mode |
| Strikethrough | Set strikethrough mode    |

## `EffectReset`
|           Key | Description                 |
| ------------: | :-------------------------- |
|           All | Reset all (effet & colors)  |
|          Bold | Reset bold mode             |
|          Thin | Reset thin mode             |
|        Italic | Reset italic mode           |
|     Underline | Reset underline mode        |
|         Blink | Reset blinking mode         |
|       Reverse | Reset inverse/reverse mode  |
|        Hidden | Reset hidden/invisible mode |
| Strikethrough | Reset strikethrough mode    |

## `Forground`
|     Key | Description                 |
| ------: | :-------------------------- |
|   Black | Reset all (effet & colors)  |
|     Red | Reset bold mode             |
|   Green | Reset thin mode             |
|  Yellow | Reset italic mode           |
|    Blue | Reset underline mode        |
| Magenta | Reset blinking mode         |
|    Cyan | Reset inverse/reverse mode  |
|   White | Reset hidden/invisible mode |
| Default | Reset strikethrough mode    |