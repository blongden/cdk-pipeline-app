function greeting() {
  return "Hello, world!"
}

exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(greeting()),
  }
  return response
}

exports.greeting = greeting
