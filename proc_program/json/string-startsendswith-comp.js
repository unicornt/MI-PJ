{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "createSuiteWithWarmup"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "name"
        },
        {
          "type": "Identifier",
          "name": "count"
        },
        {
          "type": "Identifier",
          "name": "fn"
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
                      "type": "Identifier",
                      "name": "count"
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
                          "value": true,
                          "raw": "true"
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
                          "name": "fn"
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "inputs"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "Iñtërnâtiônàlizætiøn☃💩�",
                "raw": "'I\\xF1t\\xEBrn\\xE2ti\\xF4n\\xE0liz\\xE6ti\\xF8n\\u2603\\uD83D\\uDCA9\\uFFFD'"
              },
              {
                "type": "Literal",
                "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "raw": "'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
              },
              {
                "type": "Literal",
                "value": "Integer eu augue suscipit, accumsan ipsum nec, sagittis sem.",
                "raw": "'Integer eu augue suscipit, accumsan ipsum nec, sagittis sem.'"
              },
              {
                "type": "Literal",
                "value": "In vitae pellentesque dolor. Curabitur leo nunc, luctus vitae",
                "raw": "'In vitae pellentesque dolor. Curabitur leo nunc, luctus vitae'"
              },
              {
                "type": "Literal",
                "value": "risus eget, fermentum hendrerit justo.",
                "raw": "'risus eget, fermentum hendrerit justo.'"
              }
            ]
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "first"
          },
          "init": {
            "type": "Literal",
            "value": "I",
            "raw": "'I'"
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "helper"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "fn"
        }
      ],
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
                  "name": "sum"
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
            "type": "ForOfStatement",
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "input"
                  },
                  "init": null
                }
              ],
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "name": "inputs"
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "fn"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "input"
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "sum"
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
        "name": "startsWith"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "string"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "string"
                },
                "property": {
                  "type": "Identifier",
                  "name": "startsWith"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "first"
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
        "name": "startsIndex"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "string"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "string"
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              },
              "right": {
                "type": "Identifier",
                "name": "first"
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "endsWith"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "string"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "string"
                },
                "property": {
                  "type": "Identifier",
                  "name": "endsWith"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "first"
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
        "name": "endsIndex"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "string"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "string"
                },
                "property": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "string"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "name": "first"
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
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "startsWith",
            "raw": "'startsWith'"
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "helper"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "startsWith"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "startsIndex",
            "raw": "'startsIndex'"
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "helper"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "startsIndex"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "endsWith",
            "raw": "'endsWith'"
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "helper"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "endsWith"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "endsIndex",
            "raw": "'endsIndex'"
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "helper"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "endsIndex"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}