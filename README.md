# Meteor TAPi18n React

React component for [TAPi18n](https://github.com/TAPevents/tap-i18n).

## Installation

``` sh
meteor add dnswus:tapi18n-react
```

## How it works

### Simple key:

Drop the `<TAP />` component with a `label` parameter.

JSX:
```javascript
Meteor.startup(function() {
  React.render(<TAP label="fields.lastName" />, document.body);
});
```

en.i18n.json:
```json
{
  "fields": {
    "lastName": "Last name"
  }
}
```

fr.i18n.json:
```json
{
  "fields": {
    "lastName": "Nom de famille"
  }
}
```

### Sprintf:

Drop the `<TAP />` component with `label` and `options` parameters.

JSX:
```javascript
Meteor.startup(function() {
  React.render(<TAP label="fields.hello" options="Dennis" />, document.body);
});
```

en.i18n.json:
```json
{
  "fields": {
    "hello": "Hello %s!"
  }
}
```

fr.i18n.json:
```json
{
  "fields": {
    "hello": "Bonjour %s!"
  }
}
```

### Named variables:

Drop the `<TAP>` component with a `label` parameter and nested `<option>` elements with `key` parameter and `textContent` as value.

JSX:
```javascript
Meteor.startup(function() {
  React.render(<TAP label="fields.hello">
    <option key="name">Dennis</option>
    <option key="username">{Meteor.user().username}</option>
  </TAP>, document.body);
});
```

en.i18n.json:
```json
{
  "fields": {
    "hello": "Hello __name__, your username is __username__!"
  }
}
```

fr.i18n.json:
```json
{
  "fields": {
    "hello": "Bonjour __name__, votre nom d'utilisateur est __username__!"
  }
}
```
