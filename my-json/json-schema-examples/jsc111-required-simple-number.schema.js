// Address Schema, to be embedded on Person Schema

module.exports = {
    "id": "/MySimpleNumber",

    "type": "object",
    "properties": {
        "someNum": { "type": "integer", "minimum": 100 }
    },
    "required": ["someNum"]
}
