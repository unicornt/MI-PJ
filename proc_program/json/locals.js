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
            "value": "Calls-No-Argument-1-Local",
            "raw": "'Calls-No-Argument-1-Local'"
          },
          {
            "type": "Identifier",
            "name": "callsNoArgument_OneLocal"
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
            "value": "Calls-No-Argument-2-Locals",
            "raw": "'Calls-No-Argument-2-Locals'"
          },
          {
            "type": "Identifier",
            "name": "callsNoArgument_2Locals"
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
            "value": "Calls-No-Argument-3-Locals",
            "raw": "'Calls-No-Argument-3-Locals'"
          },
          {
            "type": "Identifier",
            "name": "callsNoArgument_3Locals"
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
            "value": "Calls-No-Argument-4-Locals",
            "raw": "'Calls-No-Argument-4-Locals'"
          },
          {
            "type": "Identifier",
            "name": "callsNoArgument_4Locals"
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
            "value": "Calls-No-Argument-5-Locals",
            "raw": "'Calls-No-Argument-5-Locals'"
          },
          {
            "type": "Identifier",
            "name": "callsNoArgument_5Locals"
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
            "value": "Calls-No-Argument-10-Locals",
            "raw": "'Calls-No-Argument-10-Locals'"
          },
          {
            "type": "Identifier",
            "name": "callsNoArgument_10Locals"
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
            "value": "Calls-No-Argument-100-Locals",
            "raw": "'Calls-No-Argument-100-Locals'"
          },
          {
            "type": "Identifier",
            "name": "callsNoArgument_100Locals"
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
        "name": "callsNoArgument_OneLocal"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x1"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            ],
                            "kind": "var"
                          },
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "callsNoArgument_2Locals"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x1"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x2"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                }
                              }
                            ],
                            "kind": "var"
                          },
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "callsNoArgument_3Locals"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x1"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x2"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x3"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3"
                                }
                              }
                            ],
                            "kind": "var"
                          },
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "callsNoArgument_4Locals"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x1"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x2"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x3"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x4"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4"
                                }
                              }
                            ],
                            "kind": "var"
                          },
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "callsNoArgument_5Locals"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x1"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x2"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x3"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x4"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x5"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 5,
                                  "raw": "5"
                                }
                              }
                            ],
                            "kind": "var"
                          },
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "callsNoArgument_10Locals"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x1"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x2"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x3"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x4"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x5"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 5,
                                  "raw": "5"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x6"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 6,
                                  "raw": "6"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x7"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 7,
                                  "raw": "7"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x8"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 8,
                                  "raw": "8"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x9"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 9,
                                  "raw": "9"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x10"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10"
                                }
                              }
                            ],
                            "kind": "var"
                          },
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "callsNoArgument_100Locals"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x1"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x2"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x3"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x4"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x5"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 5,
                                  "raw": "5"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x6"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 6,
                                  "raw": "6"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x7"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 7,
                                  "raw": "7"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x8"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 8,
                                  "raw": "8"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x9"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 9,
                                  "raw": "9"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x10"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x11"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 11,
                                  "raw": "11"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x12"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 12,
                                  "raw": "12"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x13"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 13,
                                  "raw": "13"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x14"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 14,
                                  "raw": "14"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x15"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 15,
                                  "raw": "15"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x16"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 16,
                                  "raw": "16"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x17"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 17,
                                  "raw": "17"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x18"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 18,
                                  "raw": "18"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x19"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 19,
                                  "raw": "19"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x20"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 20,
                                  "raw": "20"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x21"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 21,
                                  "raw": "21"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x22"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 22,
                                  "raw": "22"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x23"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 23,
                                  "raw": "23"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x24"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 24,
                                  "raw": "24"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x25"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 25,
                                  "raw": "25"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x26"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 26,
                                  "raw": "26"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x27"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 27,
                                  "raw": "27"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x28"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 28,
                                  "raw": "28"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x29"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 29,
                                  "raw": "29"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x30"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 30,
                                  "raw": "30"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x31"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 31,
                                  "raw": "31"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x32"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 32,
                                  "raw": "32"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x33"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 33,
                                  "raw": "33"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x34"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 34,
                                  "raw": "34"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x35"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 35,
                                  "raw": "35"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x36"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 36,
                                  "raw": "36"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x37"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 37,
                                  "raw": "37"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x38"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 38,
                                  "raw": "38"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x39"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 39,
                                  "raw": "39"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x40"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 40,
                                  "raw": "40"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x41"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 41,
                                  "raw": "41"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x42"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 42,
                                  "raw": "42"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x43"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 43,
                                  "raw": "43"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x44"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 44,
                                  "raw": "44"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x45"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 45,
                                  "raw": "45"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x46"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 46,
                                  "raw": "46"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x47"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 47,
                                  "raw": "47"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x48"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 48,
                                  "raw": "48"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x49"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 49,
                                  "raw": "49"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x50"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 50,
                                  "raw": "50"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x51"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 51,
                                  "raw": "51"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x52"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 52,
                                  "raw": "52"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x53"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 53,
                                  "raw": "53"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x54"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 54,
                                  "raw": "54"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x55"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 55,
                                  "raw": "55"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x56"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 56,
                                  "raw": "56"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x57"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 57,
                                  "raw": "57"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x58"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 58,
                                  "raw": "58"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x59"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 59,
                                  "raw": "59"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x60"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 60,
                                  "raw": "60"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x61"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 61,
                                  "raw": "61"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x62"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 62,
                                  "raw": "62"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x63"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 63,
                                  "raw": "63"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x64"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 64,
                                  "raw": "64"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x65"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 65,
                                  "raw": "65"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x66"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 66,
                                  "raw": "66"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x67"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 67,
                                  "raw": "67"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x68"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 68,
                                  "raw": "68"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x69"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 69,
                                  "raw": "69"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x70"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 70,
                                  "raw": "70"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x71"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 71,
                                  "raw": "71"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x72"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 72,
                                  "raw": "72"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x73"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 73,
                                  "raw": "73"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x74"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 74,
                                  "raw": "74"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x75"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 75,
                                  "raw": "75"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x76"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 76,
                                  "raw": "76"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x77"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 77,
                                  "raw": "77"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x78"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 78,
                                  "raw": "78"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x79"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 79,
                                  "raw": "79"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x80"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 80,
                                  "raw": "80"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x81"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 81,
                                  "raw": "81"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x82"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 82,
                                  "raw": "82"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x83"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 83,
                                  "raw": "83"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x84"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 84,
                                  "raw": "84"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x85"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 85,
                                  "raw": "85"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x86"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 86,
                                  "raw": "86"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x87"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 87,
                                  "raw": "87"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x88"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 88,
                                  "raw": "88"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x89"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 89,
                                  "raw": "89"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x90"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 90,
                                  "raw": "90"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x91"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 91,
                                  "raw": "91"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x92"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 92,
                                  "raw": "92"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x93"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 93,
                                  "raw": "93"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x94"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 94,
                                  "raw": "94"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x95"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 95,
                                  "raw": "95"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x96"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 96,
                                  "raw": "96"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x97"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 97,
                                  "raw": "97"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x98"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 98,
                                  "raw": "98"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x99"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 99,
                                  "raw": "99"
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "x100"
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 100,
                                  "raw": "100"
                                }
                              }
                            ],
                            "kind": "var"
                          },
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