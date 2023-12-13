const index = require("./index")

test('handler returns expected response', async () => {
    const response = await index.handler()
    expect(response.statusCode).toBe(200)
    expect(JSON.parse(response.body)).toBe("Hello, broken world!")
})
