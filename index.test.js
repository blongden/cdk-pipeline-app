const index = require("./index")

test('greeting returns hello world', () => {
    expect(index.greeting()).toBe("Hello, world!")
})