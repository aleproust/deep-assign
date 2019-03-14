# deep-assign


## Example

```
const a = { a: 1, b: {customAttributes: {type: 'object'}}};
const b = { a: 1, b: {customAttributes: {properties: {HardwareType: {type: 'keyword'}}}}};

console.log(deepAssign(a,b));

result: {
    a: 1,
    b: {
      customAttributes: {
        type: 'object',
        properties: {
          HardwareType: {
            type: 'keyword'
          }
        }
      }
    }
  }

```
