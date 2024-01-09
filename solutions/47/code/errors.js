try {
    throw new Error('myCustomError');
} catch (error) {
    console.error(error);
}
