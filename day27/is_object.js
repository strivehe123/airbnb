function is_object(value) {
    // null == object
    // function == function
    // object/array==object
    const value_type = typeof value
    return value != null && (value_type === 'object' || value_type === 'function')
}