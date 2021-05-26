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
            "value": "SetFromSameType",
            "raw": "'SetFromSameType'"
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
                    "value": "SetFromSameType",
                    "raw": "'SetFromSameType'"
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
                    "name": "SetFromSameType"
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
            "name": "src"
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
              }
            ]
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "typed_src"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "Float32Array"
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "src"
              }
            ]
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "typed_dest"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "Float32Array"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 16,
                "raw": "16"
              }
            ]
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "SetFromSameType"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "typed_dest"
                },
                "property": {
                  "type": "Identifier",
                  "name": "set"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "typed_src"
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