const { string } = require("yargs")
const index = require("./index")

test('greeting returns hello world', () => {
    expect(index.greeting()).toBe("Hello world!")
})

test('handler returns async response', async () => {
    const response = await index.handler()
    expect(response.statusCode).toBe(200)
    expect(typeof(response.body)).toBe("string")
})
