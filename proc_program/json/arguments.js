{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "addBenchmark"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "name"
        },
        {
          "type": "Identifier",
          "name": "test"
        }
      ],
      "body": {
        "type": "BlockStatement",
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
                  "type": "Identifier",
                  "name": "name"
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
                          "type": "Identifier",
                          "name": "name"
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
                          "name": "test"
                        }
                      ]
                    }
                  ]
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "addBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Calls-No-Argument",
            "raw": "'Calls-No-Argument'"
          },
          {
            "type": "Identifier",
            "name": "callsNoArgument"
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
          "name": "addBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Calls-One-Argument",
            "raw": "'Calls-One-Argument'"
          },
          {
            "type": "Identifier",
            "name": "callsOneArgument"
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
          "name": "addBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Calls-Six-Arguments",
            "raw": "'Calls-Six-Arguments'"
          },
          {
            "type": "Identifier",
            "name": "callsSixArguments"
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
          "name": "addBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Calls-With-Receiver",
            "raw": "'Calls-With-Receiver'"
          },
          {
            "type": "Identifier",
            "name": "callsWithReceiver"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "callsNoArgument"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "f"
            },
            "params": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                }
              ]
            },
            "generator": false,
            "expression": false,
            "async": false
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                }
              ],
              "kind": "var"
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "name": "i"
              },
              "right": {
                "type": "Literal",
                "value": 1000,
                "raw": "1000"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "argument": {
                "type": "Identifier",
                "name": "i"
              },
              "prefix": true
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": []
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
        "name": "callsOneArgument"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "f"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "a"
              }
            ],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "a"
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
                  "name": "z"
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            ],
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                }
              ],
              "kind": "var"
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "name": "i"
              },
              "right": {
                "type": "Literal",
                "value": 1000,
                "raw": "1000"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "argument": {
                "type": "Identifier",
                "name": "i"
              },
              "prefix": true
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
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
                      "name": "f"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
                      }
                    ]
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
        "name": "callsSixArguments"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "g"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "a"
              },
              {
                "type": "Identifier",
                "name": "b"
              },
              {
                "type": "Identifier",
                "name": "c"
              },
              {
                "type": "Identifier",
                "name": "d"
              },
              {
                "type": "Identifier",
                "name": "e"
              },
              {
                "type": "Identifier",
                "name": "f"
              }
            ],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "c"
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
                  "name": "a"
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
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
                  "name": "b"
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
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
                  "name": "c"
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2"
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
                  "name": "d"
                },
                "init": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3"
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
                  "name": "e"
                },
                "init": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4"
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
                  "name": "f"
                },
                "init": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5"
                }
              }
            ],
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                }
              ],
              "kind": "var"
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "name": "i"
              },
              "right": {
                "type": "Literal",
                "value": 1000,
                "raw": "1000"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "argument": {
                "type": "Identifier",
                "name": "i"
              },
              "prefix": true
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
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
                      "name": "g"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      },
                      {
                        "type": "Identifier",
                        "name": "c"
                      },
                      {
                        "type": "Identifier",
                        "name": "d"
                      },
                      {
                        "type": "Identifier",
                        "name": "e"
                      },
                      {
                        "type": "Identifier",
                        "name": "f"
                      }
                    ]
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
        "name": "callsWithReceiver"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "constructObject"
            },
            "params": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          }
                        ]
                      },
                      "generator": false,
                      "expression": false,
                      "async": false
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "o"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "constructObject"
                  },
                  "arguments": []
                }
              }
            ],
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                }
              ],
              "kind": "var"
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "name": "i"
              },
              "right": {
                "type": "Literal",
                "value": 1000,
                "raw": "1000"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "argument": {
                "type": "Identifier",
                "name": "i"
              },
              "prefix": true
            },
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "f"
                      }
                    },
                    "arguments": []
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
    }
  ],
  "sourceType": "script"
}