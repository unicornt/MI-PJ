{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'"
      },
      "directive": "use strict"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "DefaultConstructorBenchmark"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "BenchmarkSuite"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "LeafConstructors",
                "raw": "'LeafConstructors'"
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 100,
                    "raw": "100"
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
                        "value": "WithExplicitArguments",
                        "raw": "'WithExplicitArguments'"
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
                        "name": "WithExplicitArguments"
                      }
                    ]
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "Point"
          },
          "init": {
            "type": "ClassExpression",
            "id": {
              "type": "Identifier",
              "name": "Point"
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "key": {
                    "type": "Identifier",
                    "name": "constructor"
                  },
                  "computed": false,
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "x"
                      },
                      {
                        "type": "Identifier",
                        "name": "y"
                      },
                      {
                        "type": "Identifier",
                        "name": "z"
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
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "x"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "x"
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
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "y"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "y"
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
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "z"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "z"
                            }
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                  },
                  "kind": "constructor",
                  "static": false
                }
              ]
            }
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
            "name": "klasses"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ClassExpression",
                "id": {
                  "type": "Identifier",
                  "name": "A"
                },
                "superClass": {
                  "type": "Identifier",
                  "name": "Point"
                },
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "key": {
                        "type": "Identifier",
                        "name": "constructor"
                      },
                      "computed": false,
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "x"
                          },
                          {
                            "type": "Identifier",
                            "name": "y"
                          },
                          {
                            "type": "Identifier",
                            "name": "z"
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
                                  "type": "Super"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "y"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "z"
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
                      "kind": "constructor",
                      "static": false
                    }
                  ]
                }
              },
              {
                "type": "ClassExpression",
                "id": {
                  "type": "Identifier",
                  "name": "B"
                },
                "superClass": {
                  "type": "Identifier",
                  "name": "Point"
                },
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "key": {
                        "type": "Identifier",
                        "name": "constructor"
                      },
                      "computed": false,
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "x"
                          },
                          {
                            "type": "Identifier",
                            "name": "y"
                          },
                          {
                            "type": "Identifier",
                            "name": "z"
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
                                  "type": "Super"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "y"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "z"
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
                      "kind": "constructor",
                      "static": false
                    }
                  ]
                }
              },
              {
                "type": "ClassExpression",
                "id": {
                  "type": "Identifier",
                  "name": "C"
                },
                "superClass": {
                  "type": "Identifier",
                  "name": "Point"
                },
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "key": {
                        "type": "Identifier",
                        "name": "constructor"
                      },
                      "computed": false,
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "x"
                          },
                          {
                            "type": "Identifier",
                            "name": "y"
                          },
                          {
                            "type": "Identifier",
                            "name": "z"
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
                                  "type": "Super"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "y"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "z"
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
                      "kind": "constructor",
                      "static": false
                    }
                  ]
                }
              },
              {
                "type": "ClassExpression",
                "id": {
                  "type": "Identifier",
                  "name": "D"
                },
                "superClass": {
                  "type": "Identifier",
                  "name": "Point"
                },
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "key": {
                        "type": "Identifier",
                        "name": "constructor"
                      },
                      "computed": false,
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "x"
                          },
                          {
                            "type": "Identifier",
                            "name": "y"
                          },
                          {
                            "type": "Identifier",
                            "name": "z"
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
                                  "type": "Super"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "y"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "z"
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
                      "kind": "constructor",
                      "static": false
                    }
                  ]
                }
              },
              {
                "type": "ClassExpression",
                "id": {
                  "type": "Identifier",
                  "name": "E"
                },
                "superClass": {
                  "type": "Identifier",
                  "name": "Point"
                },
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "key": {
                        "type": "Identifier",
                        "name": "constructor"
                      },
                      "computed": false,
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "x"
                          },
                          {
                            "type": "Identifier",
                            "name": "y"
                          },
                          {
                            "type": "Identifier",
                            "name": "z"
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
                                  "type": "Super"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "x"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "y"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "z"
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
                      "kind": "constructor",
                      "static": false
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "WithExplicitArguments"
      },
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
                  "name": "result"
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
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
                    "name": "klass"
                  },
                  "init": null
                }
              ],
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "name": "klasses"
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
                      "name": "result"
                    },
                    "right": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "klass"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
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
              "name": "result"
            }
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
    },
    {
      "type": "EmptyStatement"
    }
  ],
  "sourceType": "script"
}