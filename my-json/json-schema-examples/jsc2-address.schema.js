// Address Schema, to be embedded on Person Schema

module.exports = {
    "id": "/SimpleAddress",
    "type": "object",
    "properties": {
        "lines": {
            "type": "array",
            "items": { "type": "string" }
        },
        "zip": { "type": "string" },
        "city": { "type": "string" },
        "country": { "type": "string", "minLength": 1, "maxLength": 100 }
    },
    "required": ["country"]
}
