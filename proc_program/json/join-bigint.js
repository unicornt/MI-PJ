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
            "value": "join.js",
            "raw": "'join.js'"
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
            "value": "JoinBigIntTypes",
            "raw": "'JoinBigIntTypes'"
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 100,
                "raw": "100"
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
                "name": "typedArrayBigIntConstructors"
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false"
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}