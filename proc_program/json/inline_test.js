{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "ConstTest"
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
                  "type": "Literal",
                  "value": {},
                  "raw": "/[Cz]/",
                  "regex": {
                    "pattern": "[Cz]",
                    "flags": ""
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "test"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "abCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgz",
                  "raw": "\"abCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgz\""
                }
              ]
            }
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "cre"
          },
          "init": {
            "type": "Literal",
            "value": {},
            "raw": "/[Cz]/",
            "regex": {
              "pattern": "[Cz]",
              "flags": ""
            }
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "GlobalConstTest"
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
                  "name": "cre"
                },
                "property": {
                  "type": "Identifier",
                  "name": "test"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "abCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgz",
                  "raw": "\"abCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgz\""
                }
              ]
            }
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "benchmarks"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "ConstTest"
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "id": null,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "body": []
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "GlobalConstTest"
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "id": null,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "body": []
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                  }
                ]
              }
            ]
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "createBenchmarkSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "InlineTest",
            "raw": "\"InlineTest\""
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}