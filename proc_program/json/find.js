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
                  "name": "RunOptFast"
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
                              "name": "find"
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
                                  "name": "v"
                                },
                                "right": {
                                  "type": "TemplateLiteral",
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "value": {
                                        "raw": "value ",
                                        "cooked": "value "
                                      },
                                      "tail": false
                                    },
                                    {
                                      "type": "TemplateElement",
                                      "value": {
                                        "raw": "",
                                        "cooked": ""
                                      },
                                      "tail": true
                                    }
                                  ],
                                  "expressions": [
                                    {
                                      "type": "Identifier",
                                      "name": "multiple"
                                    }
                                  ]
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
                      "name": "OptFast"
                    }
                  ]
                }
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "OptFast"
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
                          "name": "RunOptFast"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "max_index"
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
                  "name": "OptUnreliable"
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
                              "name": "find"
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
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "Naive"
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
                      "type": "ForStatement",
                      "init": {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "index"
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
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "name": "index"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "argument": {
                          "type": "Identifier",
                          "name": "index"
                        },
                        "prefix": false
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
                                      "type": "Identifier",
                                      "name": "result"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "value"
                                    }
                                  }
                                },
                                {
                                  "type": "BreakStatement",
                                  "label": null
                                }
                              ]
                            },
                            "alternate": null
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
                  "name": "NaiveSetup"
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
                          "name": "Naive"
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
                          "name": "Naive"
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
                          "name": "Naive"
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
                          "name": "Naive"
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
                              "value": "NaiveFindReplacement",
                              "raw": "'NaiveFindReplacement'"
                            },
                            {
                              "type": "Identifier",
                              "name": "Naive"
                            },
                            {
                              "type": "Identifier",
                              "name": "NaiveSetup"
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
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "max_index"
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
                              "value": "DoubleFind",
                              "raw": "'DoubleFind'"
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
                                  "value": "find",
                                  "raw": "'find'"
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
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "max_index"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 0.5,
                                    "raw": "0.5"
                                  }
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
                              "value": "SmiFind",
                              "raw": "'SmiFind'"
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
                                  "value": "find",
                                  "raw": "'find'"
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
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "max_index"
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
                              "value": "FastFind",
                              "raw": "'FastFind'"
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
                                  "value": "find",
                                  "raw": "'find'"
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
                                  "name": "v"
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                "right": {
                                  "type": "TemplateLiteral",
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "value": {
                                        "raw": "value ",
                                        "cooked": "value "
                                      },
                                      "tail": false
                                    },
                                    {
                                      "type": "TemplateElement",
                                      "value": {
                                        "raw": "",
                                        "cooked": ""
                                      },
                                      "tail": true
                                    }
                                  ],
                                  "expressions": [
                                    {
                                      "type": "Identifier",
                                      "name": "max_index"
                                    }
                                  ]
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
                              "value": "GenericFind",
                              "raw": "'GenericFind'"
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
                                  "value": "find",
                                  "raw": "'find'"
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
                                  "name": "v"
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "max_index"
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
                              "value": "OptFastFind",
                              "raw": "'OptFastFind'"
                            },
                            {
                              "type": "Identifier",
                              "name": "OptFast"
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
                              "value": "OptUnreliableFind",
                              "raw": "'OptUnreliableFind'"
                            },
                            {
                              "type": "Identifier",
                              "name": "OptUnreliable"
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
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "max_index"
                                }
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