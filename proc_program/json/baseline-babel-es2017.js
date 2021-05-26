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
            "value": "BaselineES2017",
            "raw": "'BaselineES2017'"
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
                  },
                  {
                    "type": "Identifier",
                    "name": "Setup"
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
        "name": "_asyncToGenerator"
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
            "type": "ReturnStatement",
            "argument": {
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
                          "name": "gen"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "fn"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "apply"
                            }
                          },
                          "arguments": [
                            {
                              "type": "ThisExpression"
                            },
                            {
                              "type": "Identifier",
                              "name": "arguments"
                            }
                          ]
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Promise"
                      },
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "resolve"
                            },
                            {
                              "type": "Identifier",
                              "name": "reject"
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "FunctionDeclaration",
                                "id": {
                                  "type": "Identifier",
                                  "name": "step"
                                },
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "name": "key"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "arg"
                                  }
                                ],
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "TryStatement",
                                      "block": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "VariableDeclaration",
                                            "declarations": [
                                              {
                                                "type": "VariableDeclarator",
                                                "id": {
                                                  "type": "Identifier",
                                                  "name": "info"
                                                },
                                                "init": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "gen"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "key"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "arg"
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
                                                  "name": "value"
                                                },
                                                "init": {
                                                  "type": "MemberExpression",
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "name": "info"
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "value"
                                                  }
                                                }
                                              }
                                            ],
                                            "kind": "var"
                                          }
                                        ]
                                      },
                                      "handler": {
                                        "type": "CatchClause",
                                        "param": {
                                          "type": "Identifier",
                                          "name": "error"
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
                                                  "name": "reject"
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "error"
                                                  }
                                                ]
                                              }
                                            },
                                            {
                                              "type": "ReturnStatement",
                                              "argument": null
                                            }
                                          ]
                                        }
                                      },
                                      "finalizer": null
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "info"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "done"
                                        }
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "resolve"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "value"
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      },
                                      "alternate": {
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
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "Promise"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "resolve"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "value"
                                                    }
                                                  ]
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "then"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "FunctionExpression",
                                                  "id": null,
                                                  "params": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "value"
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
                                                            "name": "step"
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "Literal",
                                                              "value": "next",
                                                              "raw": "\"next\""
                                                            },
                                                            {
                                                              "type": "Identifier",
                                                              "name": "value"
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
                                                  "type": "FunctionExpression",
                                                  "id": null,
                                                  "params": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "err"
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
                                                            "name": "step"
                                                          },
                                                          "arguments": [
                                                            {
                                                              "type": "Literal",
                                                              "value": "throw",
                                                              "raw": "\"throw\""
                                                            },
                                                            {
                                                              "type": "Identifier",
                                                              "name": "err"
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "step"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": "next",
                                      "raw": "\"next\""
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
                      ]
                    }
                  }
                ]
              },
              "generator": false,
              "expression": false,
              "async": false
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
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "b"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "c"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "d"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "e"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "f"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "g"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "h"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "i"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "j"
          },
          "init": null
        },
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
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Setup"
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
                "type": "Identifier",
                "name": "x"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Promise"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "resolve"
                  }
                },
                "arguments": []
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
                "name": "j"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
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
                              "name": "_ref"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "_asyncToGenerator"
                              },
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "x"
                                        }
                                      }
                                    ]
                                  },
                                  "generator": true,
                                  "expression": false,
                                  "async": false
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "j"
                        },
                        "params": [],
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
                                    "name": "_ref"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "apply"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "arguments"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "arguments": []
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
                "name": "i"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
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
                              "name": "_ref2"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "_asyncToGenerator"
                              },
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [],
                                  "body": {
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
                                              "name": "j"
                                            },
                                            "arguments": []
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
                                              "name": "j"
                                            },
                                            "arguments": []
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
                                              "name": "j"
                                            },
                                            "arguments": []
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
                                              "name": "j"
                                            },
                                            "arguments": []
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
                                              "name": "j"
                                            },
                                            "arguments": []
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
                                              "name": "j"
                                            },
                                            "arguments": []
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
                                              "name": "j"
                                            },
                                            "arguments": []
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
                                              "name": "j"
                                            },
                                            "arguments": []
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
                                              "name": "j"
                                            },
                                            "arguments": []
                                          },
                                          "delegate": false
                                        }
                                      },
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "j"
                                          },
                                          "arguments": []
                                        }
                                      }
                                    ]
                                  },
                                  "generator": true,
                                  "expression": false,
                                  "async": false
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "params": [],
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
                                    "name": "_ref2"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "apply"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "arguments"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "arguments": []
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
                "name": "h"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
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
                              "name": "_ref3"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "_asyncToGenerator"
                              },
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "i"
                                          },
                                          "arguments": []
                                        }
                                      }
                                    ]
                                  },
                                  "generator": true,
                                  "expression": false,
                                  "async": false
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "h"
                        },
                        "params": [],
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
                                    "name": "_ref3"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "apply"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "arguments"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "h"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "arguments": []
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
                "name": "g"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
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
                              "name": "_ref4"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "_asyncToGenerator"
                              },
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "h"
                                          },
                                          "arguments": []
                                        }
                                      }
                                    ]
                                  },
                                  "generator": true,
                                  "expression": false,
                                  "async": false
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "g"
                        },
                        "params": [],
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
                                    "name": "_ref4"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "apply"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "arguments"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "g"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "arguments": []
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
                "name": "f"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
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
                              "name": "_ref5"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "_asyncToGenerator"
                              },
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "g"
                                          },
                                          "arguments": []
                                        }
                                      }
                                    ]
                                  },
                                  "generator": true,
                                  "expression": false,
                                  "async": false
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
                      },
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
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "_ref5"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "apply"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "arguments"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "f"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "arguments": []
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
                "name": "e"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
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
                              "name": "_ref6"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "_asyncToGenerator"
                              },
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "f"
                                          },
                                          "arguments": []
                                        }
                                      }
                                    ]
                                  },
                                  "generator": true,
                                  "expression": false,
                                  "async": false
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "e"
                        },
                        "params": [],
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
                                    "name": "_ref6"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "apply"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "arguments"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "e"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "arguments": []
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
                "name": "d"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
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
                              "name": "_ref7"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "_asyncToGenerator"
                              },
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "e"
                                          },
                                          "arguments": []
                                        }
                                      }
                                    ]
                                  },
                                  "generator": true,
                                  "expression": false,
                                  "async": false
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "d"
                        },
                        "params": [],
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
                                    "name": "_ref7"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "apply"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "arguments"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "d"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "arguments": []
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
                "name": "c"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
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
                              "name": "_ref8"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "_asyncToGenerator"
                              },
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "d"
                                          },
                                          "arguments": []
                                        }
                                      }
                                    ]
                                  },
                                  "generator": true,
                                  "expression": false,
                                  "async": false
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "c"
                        },
                        "params": [],
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
                                    "name": "_ref8"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "apply"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "arguments"
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
                "arguments": []
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
                "name": "b"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
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
                              "name": "_ref9"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "_asyncToGenerator"
                              },
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "c"
                                          },
                                          "arguments": []
                                        }
                                      }
                                    ]
                                  },
                                  "generator": true,
                                  "expression": false,
                                  "async": false
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "b"
                        },
                        "params": [],
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
                                    "name": "_ref9"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "apply"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "arguments"
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "b"
                        }
                      }
                    ]
                  },
                  "generator": false,
                  "expression": false,
                  "async": false
                },
                "arguments": []
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
                "name": "a"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
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
                              "name": "_ref10"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "_asyncToGenerator"
                              },
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "b"
                                          },
                                          "arguments": []
                                        }
                                      }
                                    ]
                                  },
                                  "generator": true,
                                  "expression": false,
                                  "async": false
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "name": "a"
                        },
                        "params": [],
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
                                    "name": "_ref10"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "apply"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "arguments"
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
                "arguments": []
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "%PerformMicrotaskCheckpoint"
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "a"
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
                "name": "%PerformMicrotaskCheckpoint"
              },
              "arguments": []
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