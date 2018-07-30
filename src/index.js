function mapValues (obj, f) {
    const res = {};
    Object.keys(obj).forEach(key => {
        res[key] = f(obj[key], key)
    });
    return res
}

export default (modules, types) => {
    let newObj = {};

    mapValues(types, (names, type) => {
        newObj[type] = {};
        types[type].forEach(name=> {
            var newKey = modules + '/' + name;
            newObj[type][name] = newKey;
        });
    });
    return newObj;
}