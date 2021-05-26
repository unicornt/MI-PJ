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
            "value": "Generators",
            "raw": "'Generators'"
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
                    "value": "Basic",
                    "raw": "'Basic'"
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
                    "name": "Basic"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Benchmark"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "Loop",
                    "raw": "'Loop'"
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
                    "name": "Loop"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Benchmark"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "Input",
                    "raw": "'Input'"
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
                    "name": "Input"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Benchmark"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "YieldStar",
                    "raw": "'YieldStar'"
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
                    "name": "YieldStar"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "five"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1"
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2"
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Literal",
                "value": 3,
                "raw": "3"
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Literal",
                "value": 4,
                "raw": "4"
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Literal",
                "value": 5,
                "raw": "5"
              },
              "delegate": false
            }
          }
        ]
      },
      "generator": true,
      "expression": false,
      "async": false
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Basic"
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
                  "name": "g"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "five"
                  },
                  "arguments": []
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "name": "sum"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "g"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "next"
                    }
                  },
                  "arguments": []
                },
                "property": {
                  "type": "Identifier",
                  "name": "value"
                }
              }
            }
          },
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "g"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "next"
                    }
                  },
                  "arguments": []
                },
                "property": {
                  "type": "Identifier",
                  "name": "value"
                }
              }
            }
          },
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "g"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "next"
                    }
                  },
                  "arguments": []
                },
                "property": {
                  "type": "Identifier",
                  "name": "value"
                }
              }
            }
          },
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "g"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "next"
                    }
                  },
                  "arguments": []
                },
                "property": {
                  "type": "Identifier",
                  "name": "value"
                }
              }
            }
          },
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "g"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "next"
                    }
                  },
                  "arguments": []
                },
                "property": {
                  "type": "Identifier",
                  "name": "value"
                }
              }
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "operator": "!=",
                "left": {
                  "type": "Identifier",
                  "name": "sum"
                },
                "right": {
                  "type": "Literal",
                  "value": 15,
                  "raw": "15"
                }
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "g"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "next"
                      }
                    },
                    "arguments": []
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "done"
                  }
                },
                "prefix": true
              }
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "Literal",
                "value": "wrong",
                "raw": "\"wrong\""
              }
            },
            "alternate": null
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
        "name": "fibonacci"
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
                  "name": "x"
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
                  "name": "y"
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "argument": {
                "type": "Identifier",
                "name": "x"
              },
              "delegate": false
            }
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "Identifier",
                      "name": "y"
                    },
                    "delegate": false
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "tmp"
                      },
                      "init": {
                        "type": "Identifier",
                        "name": "x"
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "x"
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
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "y"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "tmp"
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "generator": true,
      "expression": false,
      "async": false
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Loop"
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
                  "name": "n"
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
                  "name": "x"
                },
                "init": null
              }
            ],
            "kind": "let"
          },
          {
            "type": "ForOfStatement",
            "left": {
              "type": "Identifier",
              "name": "x"
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "fibonacci"
              },
              "arguments": []
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "argument": {
                        "type": "Identifier",
                        "name": "n"
                      },
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42"
                    }
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "label": null
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "!=",
              "left": {
                "type": "Identifier",
                "name": "x"
              },
              "right": {
                "type": "Literal",
                "value": 165580141,
                "raw": "165580141"
              }
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "Literal",
                "value": "wrong",
                "raw": "\"wrong\""
              }
            },
            "alternate": null
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
        "name": "multiples"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "x"
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
                  "name": "skip"
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
                  "name": "next"
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
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "name": "skip"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "skip"
                          },
                          "right": {
                            "type": "YieldExpression",
                            "argument": {
                              "type": "Identifier",
                              "name": "next"
                            },
                            "delegate": false
                          }
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "argument": {
                            "type": "Identifier",
                            "name": "skip"
                          },
                          "prefix": false
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "next"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "x"
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "generator": true,
      "expression": false,
      "async": false
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Input"
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
                  "name": "g"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "multiples"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3"
                    }
                  ]
                }
              }
            ],
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "results"
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "g"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "next"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "g"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "next"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "g"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "next"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5"
                      }
                    ]
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "g"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "next"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10"
                      }
                    ]
                  }
                ]
              }
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "!=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "results"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "slice"
                      }
                    },
                    "arguments": [
                      {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        "prefix": true
                      }
                    ]
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "value"
                }
              },
              "right": {
                "type": "Literal",
                "value": 60,
                "raw": "60"
              }
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "Literal",
                "value": "wrong",
                "raw": "\"wrong\""
              }
            },
            "alternate": null
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
        "name": "infix"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "node"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "name": "node"
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "infix"
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "node"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "left"
                          }
                        }
                      ]
                    },
                    "delegate": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "node"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "label"
                      }
                    },
                    "delegate": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "infix"
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "node"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "right"
                          }
                        }
                      ]
                    },
                    "delegate": true
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "generator": true,
      "expression": false,
      "async": false
    },
    {
      "type": "ClassDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Node"
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
                  "name": "label"
                },
                {
                  "type": "Identifier",
                  "name": "left"
                },
                {
                  "type": "Identifier",
                  "name": "right"
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
                          "name": "label"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "label"
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
                          "name": "left"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "left"
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
                          "name": "right"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "right"
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "YieldStar"
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
                  "name": "tree"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Node"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Node"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "Node"
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3"
                            },
                            {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Node"
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4"
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "Node"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": 16,
                                      "raw": "16"
                                    },
                                    {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "Node"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": 5,
                                          "raw": "5"
                                        },
                                        {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "Node"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": 23,
                                              "raw": "23"
                                            },
                                            {
                                              "type": "NewExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "Node"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": 0,
                                                  "raw": "0"
                                                }
                                              ]
                                            },
                                            {
                                              "type": "NewExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "Node"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": 17,
                                                  "raw": "17"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "Node"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": 44,
                                              "raw": "44"
                                            },
                                            {
                                              "type": "NewExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "Node"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": 20,
                                                  "raw": "20"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "Node"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": 7,
                                      "raw": "7"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "undefined"
                                    },
                                    {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "Node"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": 23,
                                          "raw": "23"
                                        },
                                        {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "Node"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0"
                                            }
                                          ]
                                        },
                                        {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "Node"
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": 41,
                                              "raw": "41"
                                            },
                                            {
                                              "type": "Identifier",
                                              "name": "undefined"
                                            },
                                            {
                                              "type": "NewExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "Node"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": 11,
                                                  "raw": "11"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Node"
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 8,
                                  "raw": "8"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "Node"
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Node"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6"
                        },
                        {
                          "type": "Identifier",
                          "name": "undefined"
                        },
                        {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "Node"
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 7,
                              "raw": "7"
                            }
                          ]
                        }
                      ]
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
                  "name": "labels"
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "infix"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "tree"
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "!=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "labels"
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "Literal",
                "value": "wrong",
                "raw": "\"wrong\""
              }
            },
            "alternate": null
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