#### Grid

Material Design’s responsive UI is based on a 12-column grid layout. This grid creates visual consistency between layouts.

The grid system features the following:

-   It uses Flexbox
-   There are two types of layout: containers and items
-   Item widths are set in percentages, so they’re always fluid and sized relative to their parent element
-   Items have padding to create the spacing between individual items.
-   **There are five grid breakpoints: xs, sm, md, lg, and xl**

#### Icons

Icons are a huge part of material design, they are used in buttons to convey an action, to convey information e.t.c. It’s used to symbolize a command, file, device, or directory.

Icons are also used to represent actions like trash, print, and save, and are commonly found in app bars, toolbars, buttons, and lists.

Icons in Material-UI can be rendered using two methods; Icon for rendering font icons, and SvgIcon for rendering SVG paths.

The SvgIcon component takes an SVG path element as its child and converts it to a React component that displays the path, and allows the icon to be styled and respond to mouse events.

#### Buttons

Since material-ui components are in isolation, you’ll need to import the Button component.

`import Button from '@material-ui/core/Button';`

##### Flat buttons

Flat buttons are buttons with just text. They have no background color and no border. They may be used in dialogs, toolbars, or inline. They do not lift but fill with color on press.

##### Outlined buttons

Outlined buttons are text-only buttons with medium emphasis. They behave like flat buttons but have an outline and are typically used for actions that are important but aren’t the primary action in an app.

##### Floating action button

A floating action button (FAB) represents the primary action in a screen, actions like, composing a new email, adding a new contact or deleting an image entry.

It’s shaped like a circle and it floats above every other view, a background color is applied upon focus and it lifts upon tap or click. It can also be set to reveal more actions or content upon clicking.

<Button variant="fab" color="primary" aria-label="add"><AddIcon /</Button>

#### Material-UI components

#### App bars

The App bar, formerly known as the action bar in Android, it acts as a header navigation menu. It is a toolbar that’s used for branding, navigation, search, and actions. To use the App bar, these two components are needed from material-ui:

```js
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
```

#### Navigation

Bottom navigation menus are placed at the bottom and they make it easy to switch between top-level views in a single tap.

The navigation menu is characterized by three to five actions, each containing an icon and a label. Although it’s important to note that only navigation bars with three actions should contain both an icon and a label.

#### Cards

A card is a sheet of material that serves as an entry point to more detailed information.

Cards are a convenient means of displaying content composed of different elements. Cards are used to display information that can be easily glanced at and usually has a Call To Action.

#### Reading

https://blog.logrocket.com/the-definitive-guide-to-react-material-d730c8a3e8ba
