{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "newBenchmark"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "name"
        },
        {
          "type": "Identifier",
          "name": "handlers"
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "handlers"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "run"
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "handlers"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "setup"
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "handlers"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "teardown"
                          }
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
            "name": "result"
          },
          "init": null
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
            "name": "foo"
          },
          "init": {
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "ProxyConstructorWithArrowFunc",
            "raw": "\"ProxyConstructorWithArrowFunc\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": []
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
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
                              "name": "proxy"
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Proxy"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "foo"
                                },
                                {
                                  "type": "ObjectExpression",
                                  "properties": []
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "result"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "proxy"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "name": "result"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "value": "function",
                            "raw": "'function'"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Class"
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "body": []
      }
    },
    {
      "type": "EmptyStatement"
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "ProxyConstructorWithClass",
            "raw": "\"ProxyConstructorWithClass\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": []
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
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
                              "name": "proxy"
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Proxy"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "Class"
                                },
                                {
                                  "type": "ObjectExpression",
                                  "properties": []
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "result"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "proxy"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "name": "result"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "value": "function",
                            "raw": "'function'"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
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
            "name": "obj"
          },
          "init": {
            "type": "ObjectExpression",
            "properties": []
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "ProxyConstructorWithObject",
            "raw": "\"ProxyConstructorWithObject\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": []
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
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
                              "name": "proxy"
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Proxy"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "obj"
                                },
                                {
                                  "type": "ObjectExpression",
                                  "properties": []
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "result"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "proxy"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "name": "result"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "value": "function",
                            "raw": "'function'"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
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
            "name": "p"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "Proxy"
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": []
              },
              {
                "type": "ObjectExpression",
                "properties": []
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "ProxyConstructorWithProxy",
            "raw": "\"ProxyConstructorWithProxy\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": []
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
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
                              "name": "proxy"
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Proxy"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "p"
                                },
                                {
                                  "type": "ObjectExpression",
                                  "properties": []
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "result"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "proxy"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "name": "result"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "value": "function",
                            "raw": "'function'"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
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
            "name": "SOME_NUMBER"
          },
          "init": {
            "type": "Literal",
            "value": 42,
            "raw": "42"
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
            "name": "SOME_OTHER_NUMBER"
          },
          "init": {
            "type": "Literal",
            "value": 1337,
            "raw": "1337"
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
            "name": "ITERATIONS"
          },
          "init": {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "CallProxyWithoutTrap",
            "raw": "\"CallProxyWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
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
                              "name": "target"
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "SOME_NUMBER"
                                    }
                                  }
                                ]
                              },
                              "generator": false,
                              "expression": false,
                              "async": false
                            }
                          }
                        ],
                        "kind": "const"
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "target"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
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
                                  "name": "p"
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "result"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "CallProxyWithTrap",
            "raw": "\"CallProxyWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
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
                              "name": "target"
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "SOME_NUMBER"
                                    }
                                  }
                                ]
                              },
                              "generator": false,
                              "expression": false,
                              "async": false
                            }
                          }
                        ],
                        "kind": "const"
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "target"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "apply"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "thisArg"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "argumentsList"
                                        }
                                      ],
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "SOME_OTHER_NUMBER"
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
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
                                  "name": "p"
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "result"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_OTHER_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
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
            "name": "instance"
          },
          "init": null
        }
      ],
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "id": {
        "type": "Identifier",
        "name": "MyClass"
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "body": []
      }
    },
    {
      "type": "EmptyStatement"
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "ConstructProxyWithoutTrap",
            "raw": "\"ConstructProxyWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "MyClass"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "instance"
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "arguments": []
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "instanceof",
                          "left": {
                            "type": "Identifier",
                            "name": "instance"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "MyClass"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "ConstructProxyWithTrap",
            "raw": "\"ConstructProxyWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "Object"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "construct"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "argumentsList"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "newTarget"
                                        }
                                      ],
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "NewExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "MyClass"
                                              },
                                              "arguments": []
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "instance"
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "arguments": []
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "instanceof",
                          "left": {
                            "type": "Identifier",
                            "name": "instance"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "MyClass"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "obj"
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "prop"
              },
              "computed": false,
              "value": {
                "type": "Identifier",
                "name": "SOME_NUMBER"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "value"
          },
          "init": null
        }
      ],
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "GetStringWithoutTrap",
            "raw": "\"GetStringWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "prop"
                                  }
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "GetStringWithTrap",
            "raw": "\"GetStringWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "get"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "propertyKey"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "receiver"
                                        }
                                      ],
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "SOME_OTHER_NUMBER"
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "prop"
                                  }
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_OTHER_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "obj"
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Identifier",
              "name": "SOME_NUMBER"
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "GetIndexWithoutTrap",
            "raw": "\"GetIndexWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "GetIndexWithTrap",
            "raw": "\"GetIndexWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "get"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "propertyKey"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "receiver"
                                        }
                                      ],
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "SOME_OTHER_NUMBER"
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_OTHER_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
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
            "name": "symbol"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "Symbol"
            },
            "arguments": []
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "obj"
          },
          "property": {
            "type": "Identifier",
            "name": "symbol"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "SOME_NUMBER"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "GetSymbolWithoutTrap",
            "raw": "\"GetSymbolWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "symbol"
                                  }
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "GetSymbolWithTrap",
            "raw": "\"GetSymbolWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "get"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "propertyKey"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "receiver"
                                        }
                                      ],
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Identifier",
                                              "name": "SOME_OTHER_NUMBER"
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "symbol"
                                  }
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_OTHER_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "obj"
        },
        "right": {
          "type": "ObjectExpression",
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "HasStringWithoutTrap",
            "raw": "\"HasStringWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "in",
                                  "left": {
                                    "type": "Literal",
                                    "value": "prop",
                                    "raw": "'prop'"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "p"
                                  }
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "HasStringWithTrap",
            "raw": "\"HasStringWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "has"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "propertyKey"
                                        }
                                      ],
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Literal",
                                              "value": true,
                                              "raw": "true"
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "in",
                                  "left": {
                                    "type": "Literal",
                                    "value": "prop",
                                    "raw": "'prop'"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "p"
                                  }
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "obj"
          },
          "property": {
            "type": "Identifier",
            "name": "symbol"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "SOME_NUMBER"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "HasSymbolWithoutTrap",
            "raw": "\"HasSymbolWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "in",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "symbol"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "p"
                                  }
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "HasSymbolWithTrap",
            "raw": "\"HasSymbolWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "has"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "propertyKey"
                                        }
                                      ],
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Literal",
                                              "value": true,
                                              "raw": "true"
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "in",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "symbol"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "p"
                                  }
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "obj"
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "prop"
              },
              "computed": false,
              "value": {
                "type": "Identifier",
                "name": "undefined"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "value"
        },
        "right": {
          "type": "Identifier",
          "name": "SOME_NUMBER"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "SetStringWithoutTrap",
            "raw": "\"SetStringWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
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
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "prop"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "value"
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "SetStringWithTrap",
            "raw": "\"SetStringWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "set"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "propertyKey"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "value"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "receiver"
                                        }
                                      ],
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
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "target"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "propertyKey"
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "SOME_OTHER_NUMBER"
                                              }
                                            }
                                          },
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Literal",
                                              "value": true,
                                              "raw": "true"
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
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
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "prop"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "value"
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_OTHER_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "obj"
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Identifier",
              "name": "undefined"
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "value"
        },
        "right": {
          "type": "Identifier",
          "name": "SOME_NUMBER"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "SetIndexWithoutTrap",
            "raw": "\"SetIndexWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
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
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "value"
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "SetIndexWithTrap",
            "raw": "\"SetIndexWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "set"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "propertyKey"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "value"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "receiver"
                                        }
                                      ],
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
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "target"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "propertyKey"
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "SOME_OTHER_NUMBER"
                                              }
                                            }
                                          },
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Literal",
                                              "value": true,
                                              "raw": "true"
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
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
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "value"
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_OTHER_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "obj"
          },
          "property": {
            "type": "Identifier",
            "name": "symbol"
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
          "type": "Identifier",
          "name": "value"
        },
        "right": {
          "type": "Identifier",
          "name": "SOME_NUMBER"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "SetSymbolWithoutTrap",
            "raw": "\"SetSymbolWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
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
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "symbol"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "value"
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "SetSymbolWithTrap",
            "raw": "\"SetSymbolWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "set"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "propertyKey"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "value"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "receiver"
                                        }
                                      ],
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
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "target"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "propertyKey"
                                                }
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "name": "SOME_OTHER_NUMBER"
                                              }
                                            }
                                          },
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Literal",
                                              "value": true,
                                              "raw": "true"
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
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
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "symbol"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "value"
                                }
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "SOME_OTHER_NUMBER"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
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
            "name": "obj20prop"
          },
          "init": {
            "type": "ObjectExpression",
            "properties": []
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
            "name": "measured"
          },
          "init": null
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "HasInIdiom",
            "raw": "\"HasInIdiom\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "value": 20,
                            "raw": "20"
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
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "obj20prop"
                                  },
                                  "property": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "Literal",
                                      "value": "prop",
                                      "raw": "'prop'"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "i"
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "SOME_NUMBER"
                                }
                              }
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
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj20prop"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "has"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "propertyKey"
                                        }
                                      ],
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Literal",
                                              "value": true,
                                              "raw": "true"
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "shorthand": false
                                  },
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "get"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "propertyKey"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "receiver"
                                        }
                                      ],
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "IfStatement",
                                            "test": {
                                              "type": "LogicalExpression",
                                              "operator": "&&",
                                              "left": {
                                                "type": "BinaryExpression",
                                                "operator": "==",
                                                "left": {
                                                  "type": "UnaryExpression",
                                                  "operator": "typeof",
                                                  "argument": {
                                                    "type": "Identifier",
                                                    "name": "propertyKey"
                                                  },
                                                  "prefix": true
                                                },
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "string",
                                                  "raw": "'string'"
                                                }
                                              },
                                              "right": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "propertyKey"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "match"
                                                  }
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Literal",
                                                    "value": "prop",
                                                    "raw": "'prop'"
                                                  }
                                                ]
                                              }
                                            },
                                            "consequent": {
                                              "type": "ReturnStatement",
                                              "argument": {
                                                "type": "Identifier",
                                                "name": "SOME_NUMBER"
                                              }
                                            },
                                            "alternate": {
                                              "type": "ReturnStatement",
                                              "argument": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "Reflect"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "get"
                                                  }
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "target"
                                                  },
                                                  {
                                                    "type": "Identifier",
                                                    "name": "propertyKey"
                                                  },
                                                  {
                                                    "type": "Identifier",
                                                    "name": "receiver"
                                                  }
                                                ]
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "measured"
                          },
                          "right": {
                            "type": "FunctionExpression",
                            "id": {
                              "type": "Identifier",
                              "name": "measured"
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "name": "o"
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
                                        "name": "result"
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
                                {
                                  "type": "ForInStatement",
                                  "left": {
                                    "type": "VariableDeclaration",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "x"
                                        },
                                        "init": null
                                      }
                                    ],
                                    "kind": "var"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "o"
                                  },
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "Object"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "prototype"
                                              }
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "hasOwnProperty"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "o"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "x"
                                            }
                                          ]
                                        },
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "VariableDeclaration",
                                              "declarations": [
                                                {
                                                  "type": "VariableDeclarator",
                                                  "id": {
                                                    "type": "Identifier",
                                                    "name": "v"
                                                  },
                                                  "init": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "o"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "x"
                                                    }
                                                  }
                                                }
                                              ],
                                              "kind": "var"
                                            },
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "+=",
                                                "left": {
                                                  "type": "Identifier",
                                                  "name": "result"
                                                },
                                                "right": {
                                                  "type": "Identifier",
                                                  "name": "v"
                                                }
                                              }
                                            }
                                          ]
                                        },
                                        "alternate": null
                                      }
                                    ]
                                  },
                                  "each": false
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "result"
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
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "result"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "measured"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "p"
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "result"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "value": 20,
                              "raw": "20"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "SOME_NUMBER"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "obj"
        },
        "right": {
          "type": "ObjectExpression",
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "value"
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "IsExtensibleWithoutTrap",
            "raw": "\"IsExtensibleWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "Object"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "isExtensible"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "p"
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
                          "name": "value"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "obj"
        },
        "right": {
          "type": "ObjectExpression",
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "value"
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "IsExtensibleWithTrap",
            "raw": "\"IsExtensibleWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "isExtensible"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        }
                                      ],
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Literal",
                                              "value": true,
                                              "raw": "true"
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "Object"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "isExtensible"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "p"
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
                          "name": "value"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "name": "value"
                          },
                          "right": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true"
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "obj"
        },
        "right": {
          "type": "ObjectExpression",
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "value"
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "PreventExtensionsWithoutTrap",
            "raw": "\"PreventExtensionsWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "Object"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "preventExtensions"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "p"
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
                          "name": "value"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": []
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "obj"
        },
        "right": {
          "type": "ObjectExpression",
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "value"
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "PreventExtensionsWithTrap",
            "raw": "\"PreventExtensionsWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "preventExtensions"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
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
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "Object"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "preventExtensions"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "target"
                                                }
                                              ]
                                            }
                                          },
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Literal",
                                              "value": true,
                                              "raw": "true"
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "Object"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "preventExtensions"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "p"
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
                          "name": "value"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": []
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "GetPrototypeOfWithoutTrap",
            "raw": "\"GetPrototypeOfWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "Object"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getPrototypeOf"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "p"
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
                          "name": "value"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": []
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "GetPrototypeOfWithTrap",
            "raw": "\"GetPrototypeOfWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "getPrototypeOf"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        }
                                      ],
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "Array"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "prototype"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "Object"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "getPrototypeOf"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "p"
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
                          "name": "value"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": []
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "SetPrototypeOfWithoutTrap",
            "raw": "\"SetPrototypeOfWithoutTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
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
                              "name": "obj"
                            },
                            "init": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "key": {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  "computed": false,
                                  "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "shorthand": false
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "obj"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "__proto__"
                            }
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": []
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": []
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "Object"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "setPrototypeOf"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      ]
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
                          "name": "value"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": []
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              }
            ]
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
          "name": "newBenchmark"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "SetPrototypeOfWithTrap",
            "raw": "\"SetPrototypeOfWithTrap\""
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "setup"
                },
                "computed": false,
                "value": {
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
                              "name": "obj"
                            },
                            "init": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "key": {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  "computed": false,
                                  "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "shorthand": false
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "obj"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "__proto__"
                            }
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": []
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "p"
                          },
                          "right": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Proxy"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "obj"
                              },
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "key": {
                                      "type": "Identifier",
                                      "name": "setPrototypeOf"
                                    },
                                    "computed": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "name": "target"
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "proto"
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
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "Object"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "setPrototypeOf"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "target"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "proto"
                                                }
                                              ]
                                            }
                                          },
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Literal",
                                              "value": true,
                                              "raw": "true"
                                            }
                                          }
                                        ]
                                      },
                                      "generator": false,
                                      "expression": false,
                                      "async": false
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
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "run"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "type": "Identifier",
                            "name": "ITERATIONS"
                          }
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "Object"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "setPrototypeOf"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      ]
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
                          "name": "value"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "teardown"
                },
                "computed": false,
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": []
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "kind": "init",
                "method": true,
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