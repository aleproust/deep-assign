export function deepAssign(...object) {
  return  object.reduce((acc, curr) => {
    Object.entries(curr).forEach(([currKey, currValue]) => {
       acc =  acc[currKey] && typeof acc[currKey] === 'object' ? {...acc, [currKey]: deepAssign(acc[currKey], currValue)}
        : { ...acc, [currKey]: currValue};
    });
    return acc;
  },                    {});
}
