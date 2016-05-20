# JSMicro - Is Null

### **`isNull(object)`**

Check does the given Javascript Object (array, object, string, etc) is a null.

### **`isNotNull(object)`**

Check does the given Javascript Null (array, object, string, etc) is not a null.

## Browser Usage

```bash
bower install --save jsmicro-is-null
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-null/index.js">
<script type="text/javascript">
    var obj = null;
    var nbr = 200;

    // Available in the window object.
    isNull(obj);      // true
    isNull(nbr);      // false
    isNotNull(nbr);   // true
</script>
```

## NodeJS Usage

```bash
npm install --save jsmicro-is-null
```

```js
const obj = require('jsmicro-is-null');

// Available in the global object.
isNull(null); // true
isNull(23322333); // false
isNotNull(23234); // true

// Also available in the export object.
obj.isNull(null); // true
obj.isNull(23322333); // false
obj.isNotNull(23333); // true
```

## Changelogs

#### **`v1.0.1 - May 21, 2016`**

* Added .npmignore

#### **`v1.0.0 - May 19, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)
