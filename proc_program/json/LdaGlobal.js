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
            "value": "LoadGlobal",
            "raw": "'LoadGlobal'"
          },
          {
            "type": "Identifier",
            "name": "ldaGlobal"
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
            "value": "LoadGlobalInsideTypeof",
            "raw": "'LoadGlobalInsideTypeof'"
          },
          {
            "type": "Identifier",
            "name": "ldaGlobalInsideTypeof"
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
            "name": "g_var"
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "ldaGlobal"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
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
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "name": "g_var"
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
        "name": "ldaGlobalInsideTypeof"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
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
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "name": "g_var"
                    },
                    "prefix": true
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