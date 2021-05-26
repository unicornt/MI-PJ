{
  "type": "Program",
  "body": [
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
            "value": "ConstructArrayLike",
            "raw": "'ConstructArrayLike'"
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
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Benchmark"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "ConstructArrayLike",
                    "raw": "'ConstructArrayLike'"
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false"
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false"
                  },
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Identifier",
                    "name": "constructor"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "arr"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5"
              },
              {
                "type": "Literal",
                "value": 6,
                "raw": "6"
              },
              {
                "type": "Literal",
                "value": 7,
                "raw": "7"
              },
              {
                "type": "Literal",
                "value": 8,
                "raw": "8"
              },
              {
                "type": "Literal",
                "value": 9,
                "raw": "9"
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "value": 11,
                "raw": "11"
              },
              {
                "type": "Literal",
                "value": 12,
                "raw": "12"
              },
              {
                "type": "Literal",
                "value": 13,
                "raw": "13"
              },
              {
                "type": "Literal",
                "value": 14,
                "raw": "14"
              },
              {
                "type": "Literal",
                "value": 15,
                "raw": "15"
              },
              {
                "type": "Literal",
                "value": 16,
                "raw": "16"
              }
            ]
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "constructor"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "name": "Int32Array"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "arr"
                }
              ]
            }
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
}