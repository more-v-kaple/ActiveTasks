const isObjectEmpty = obj => {
    let isEmpty = false;
    const ZERO = 0;

    if (
        obj !== null &&
        Object.keys(obj).length === ZERO &&
        obj.constructor === Object
    ) {
        isEmpty = true;
    }

    return isEmpty;
};

export default isObjectEmpty;
