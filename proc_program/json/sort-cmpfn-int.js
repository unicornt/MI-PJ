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
            "value": "SortCustomCompareFnIntTypes",
            "raw": "'SortCustomCompareFnIntTypes'"
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
                "name": "typedArrayIntConstructors"
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "cmp_smaller"
                  },
                  {
                    "type": "Identifier",
                    "name": "cmp_greater"
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}