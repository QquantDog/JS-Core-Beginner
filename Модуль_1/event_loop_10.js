function wrapper(cb) {
    setTimeout(cb, 2000);
}

wrapper(() => console.log("callback invokation"));
