# Vue Project Quick Start

1. Create project folder
2. Open the project in VSCode
3. In Command Pallete, add a develoment container with existing setup: Vue with node
4. Reopen the folder in Remote Container: first time it will create a container with Vue alredy installed
5. Open a terminal and create a new project:
```bash
vue create .
```
6. Choose the desired presets
7. Spin the welcome page

### Install Vuetify
```
vue add vuetify
```
Notice the v-tags in the project, they are part of Vuetify API.

### Vuetify UI Documentation

#### PROPS: They are attributes that are exposed to accept data from the parent component.

<img style="width: 60%" src='./src/assets/appbarAPI.png'>

```html
<v-app-bar app>
```

### Vuetify’s Grid System
The primary foundation for layout with Vuetify is its grid system. Inspired by Bootstrap’s grid system, Vuetify’s grid system is built with flexbox and consists of four primary components:

* **Container (v-container)** - This is the base wrapper for creating any grid layout on your page. By default, it will provide default max-width behavior to ensure your content is accessible at larger device sizes
* **Row (v-row)** - This is the wrapper component around columns and should be a direct child of v-container
* **Column (v-col)** - The wrapper around content, which must be a direct child of v-row
* **Spacer (v-spacer)** - A useful component for filling available space or making space between two components

<img style="width: 60%" src='./src/assets/Grid_2Row.png'>
<img style="width: 60%" src='./src/assets/Grid_Spacer.png'>
<img style="width: 60%" src='./src/assets/Grid_12Col.png'>
<img style="width: 60%" src='./src/assets/Grid_6Col.png'>


These comprise of the fundamental building blocks for laying out and aligning content on the page.

### Responsive Design
Like any responsive design system, Vuetify has breakpoints that allow you to control the layout of your application depending on the size of the window and/or device. Out of the box, there are five predefined breakpoints in Vuetify which allow you to easily designate behavior and styles in Vuetify.

* Extra small (xs) - For small devices like mobile devices
* Small (sm) - For small to medium tablets
* Medium (md) - For large tablet to desktop
* Large (lg) - For desktop
* Extra Large (xl) - For 4k and ultra-wide devices

Be sure to pay special attention to the two letter codes for each breakpoint, as they are used throughout Vuetify to refer to the various breakpoints.

For example, in the dashboard view, SalesGraph should be 100% wide (cols="12"), and on tablet devices and larger, it should be 1/3 wide (cols="4", i.e. 12 * 1/3):

```html
<v-row>
    <v-col v-for="sale in sales" :key="`${sale.title}`" cols="12" md="4">
      <SalesGraph :sale="sale" />
    </v-col>
</v-row>
```
Another example, on desktop devices and larger, the Snackbar should be positioned to the left:
```html
<v-snackbar v-model="snackbar" :left="$vuetify.breakpoint.lgAndUp">
      You have selected {{ selectedEmployee.name }},
      {{ selectedEmployee.title }}
      <v-btn color="pink" text @click="snackbar = false"> Close </v-btn>
</v-snackbar>
```
The [breakpoint service](https://vuetifyjs.com/en/features/breakpoints/#thresholds) is a programmatic way of accessing viewport information within components. It exposes a number of properties on the `$vuetify` object that can be used to control aspects of your application based upon the viewport size. The name property correlates to the currently active breakpoint; e.g. xs, sm, md, lg, xl.
```javascript
{
  // Breakpoints
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean

  // Conditionals
  xsOnly: boolean
  smOnly: boolean
  smAndDown: boolean
  smAndUp: boolean
  mdOnly: boolean
  mdAndDown: boolean
  mdAndUp: boolean
  lgOnly: boolean
  lgAndDown: boolean
  lgAndUp: boolean
  xlOnly: boolean

  // true if screen width < mobileBreakpoint
  mobile: boolean
  mobileBreakpoint: number

  // Current breakpoint name (e.g. 'md')
  name: string

  // Dimensions
  height: number
  width: number

  // Thresholds
  // Configurable through options
  {
    xs: number
    sm: number
    md: number
    lg: number
  }

  // Scrollbar
  scrollBarWidth: number
}
```
Here are some examples:

* md - Returns a Boolean for whether the device is between 960px and 1264px
* mdAndUp - Returns a Boolean for whether the device is greater than or equal to 960px
* mdAndDown - Retursn a Boolean for whether the device is less than or equal to 960px



### Vue Router
In order to start navigating through pages, it is time to install a router.
```
vue add router
```
Don't panic if the installation changes the code, due to boiler plate automatic confir. Use your Version control to discard those changes.










### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
