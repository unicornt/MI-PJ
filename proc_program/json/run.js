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
            "value": "../base.js",
            "raw": "'../base.js'"
          }
        ]
      }
    },
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
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "name": "arguments"
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0"
              }
            },
            "right": {
              "type": "Literal",
              "value": ".js",
              "raw": "'.js'"
            }
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
            "name": "success"
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true"
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "PrintResult"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "name"
        },
        {
          "type": "Identifier",
          "name": "result"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "print"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "name": "name"
                    },
                    "right": {
                      "type": "Literal",
                      "value": "-BytecodeHandler(Score): ",
                      "raw": "'-BytecodeHandler(Score): '"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "result"
                  }
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "PrintStep"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "name"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": []
      },
      "generator": false,
      "expression": false,
      "async": false
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "PrintError"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "name"
        },
        {
          "type": "Identifier",
          "name": "error"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "PrintResult"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "name"
                },
                {
                  "type": "Identifier",
                  "name": "error"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "success"
              },
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false"
              }
            }
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "BenchmarkSuite"
            },
            "property": {
              "type": "Identifier",
              "name": "config"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "doWarmup"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "undefined"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "BenchmarkSuite"
            },
            "property": {
              "type": "Identifier",
              "name": "config"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "doDeterministic"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "undefined"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "BenchmarkSuite"
          },
          "property": {
            "type": "Identifier",
            "name": "RunSuites"
          }
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "NotifyResult"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "PrintResult"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "NotifyError"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "PrintError"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "NotifyStep"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "PrintStep"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}