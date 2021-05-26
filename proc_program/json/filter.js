{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "id": null,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "NaiveFilter"
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
                            "name": "index"
                          },
                          "init": {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            },
                            "prefix": true
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
                            "name": "resIndex"
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
                            "name": "length"
                          },
                          "init": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "==",
                              "left": {
                                "type": "Identifier",
                                "name": "array"
                              },
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null"
                              }
                            },
                            "consequent": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            },
                            "alternate": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "array"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
                              }
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
                            "name": "result"
                          },
                          "init": {
                            "type": "ArrayExpression",
                            "elements": []
                          }
                        }
                      ],
                      "kind": "const"
                    },
                    {
                      "type": "WhileStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "index"
                          },
                          "prefix": true
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      },
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
                                  "name": "value"
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "array"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "index"
                                  }
                                }
                              }
                            ],
                            "kind": "const"
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "func"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "value"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "index"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "array"
                                }
                              ]
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
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "result"
                                      },
                                      "property": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "argument": {
                                          "type": "Identifier",
                                          "name": "resIndex"
                                        },
                                        "prefix": false
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "value"
                                    }
                                  }
                                }
                              ]
                            },
                            "alternate": null
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
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "NaiveFilterSetup"
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
                          "name": "array"
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3"
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
                          "name": "NaiveFilter"
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
                          "name": "NaiveFilter"
                        },
                        "arguments": []
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "array"
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 3.4,
                              "raw": "3.4"
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
                          "name": "NaiveFilter"
                        },
                        "arguments": []
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "array"
                        },
                        "right": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "Array"
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10"
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
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "array"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "'hello'"
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "NaiveFilter"
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
                          "name": "SmiSetup"
                        },
                        "arguments": []
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "UnaryExpression",
                        "operator": "delete",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "array"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "prefix": true
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
                  "name": "RunOptFastFilter"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "multiple"
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
                          "type": "Identifier",
                          "name": "result"
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "array"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "filter"
                            }
                          },
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "a"
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "name": "multiple"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3"
                                }
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
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
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "%NeverOptimizeFunction"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "OptFastFilter"
                    }
                  ]
                }
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "OptFastFilter"
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
                          "name": "RunOptFastFilter"
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
                  "name": "side_effect"
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
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "%NeverOptimizeFunction"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "side_effect"
                    }
                  ]
                }
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "OptUnreliableFilter"
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
                          "name": "result"
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "array"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "filter"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "func"
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "side_effect"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "array"
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
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "DefineHigherOrderTests"
                  },
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "NaiveFilterReplacement",
                              "raw": "'NaiveFilterReplacement'"
                            },
                            {
                              "type": "Identifier",
                              "name": "NaiveFilter"
                            },
                            {
                              "type": "Identifier",
                              "name": "NaiveFilterSetup"
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "v"
                                }
                              ],
                              "body": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true"
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
                            }
                          ]
                        },
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "DoubleFilter",
                              "raw": "'DoubleFilter'"
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "newClosure"
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "filter",
                                  "raw": "'filter'"
                                }
                              ]
                            },
                            {
                              "type": "Identifier",
                              "name": "DoubleSetup"
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "v"
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "%",
                                  "left": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "Math"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "floor"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "v"
                                      }
                                    ]
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
                            }
                          ]
                        },
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "SmiFilter",
                              "raw": "'SmiFilter'"
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "newClosure"
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "filter",
                                  "raw": "'filter'"
                                }
                              ]
                            },
                            {
                              "type": "Identifier",
                              "name": "SmiSetup"
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "v"
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "%",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "v"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
                            }
                          ]
                        },
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "FastFilter",
                              "raw": "'FastFilter'"
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "newClosure"
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "filter",
                                  "raw": "'filter'"
                                }
                              ]
                            },
                            {
                              "type": "Identifier",
                              "name": "FastSetup"
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "_"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "%",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "i"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
                            }
                          ]
                        },
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "GenericFilter",
                              "raw": "'GenericFilter'"
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "newClosure"
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "filter",
                                  "raw": "'filter'"
                                },
                                {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true"
                                }
                              ]
                            },
                            {
                              "type": "Identifier",
                              "name": "ObjectSetup"
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "_"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "%",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "i"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
                            }
                          ]
                        },
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "OptFastFilter",
                              "raw": "'OptFastFilter'"
                            },
                            {
                              "type": "Identifier",
                              "name": "OptFastFilter"
                            },
                            {
                              "type": "Identifier",
                              "name": "FastSetup"
                            },
                            {
                              "type": "Identifier",
                              "name": "undefined"
                            }
                          ]
                        },
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "OptUnreliableFilter",
                              "raw": "'OptUnreliableFilter'"
                            },
                            {
                              "type": "Identifier",
                              "name": "OptUnreliableFilter"
                            },
                            {
                              "type": "Identifier",
                              "name": "FastSetup"
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "v"
                                }
                              ],
                              "body": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true"
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
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
        "arguments": []
      }
    }
  ],
  "sourceType": "script"
}