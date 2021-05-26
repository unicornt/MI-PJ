{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "load"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "sort.js",
            "raw": "'sort.js'"
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "name": "BenchmarkSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "SortFloatTypes",
            "raw": "'SortFloatTypes'"
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1000,
                "raw": "1000"
              }
            ]
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateBenchmarks"
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "typedArrayFloatConstructors"
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}