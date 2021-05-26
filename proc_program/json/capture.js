{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "Simple"
                },
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "Error"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "Simple Error",
                            "raw": "\"Simple Error\""
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
                "type": "ClassDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "CustomError"
                },
                "superClass": {
                  "type": "Identifier",
                  "name": "Error"
                },
                "body": {
                  "type": "ClassBody",
                  "body": []
                }
              },
              {
                "type": "EmptyStatement"
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "Custom"
                },
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "CustomError"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "Custom Error",
                            "raw": "\"Custom Error\""
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
                  "name": "Inline"
                },
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "name": "Inner"
                      },
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Error"
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "Error from inlined function!",
                                  "raw": "\"Error from inlined function!\""
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
                        "name": "Middle"
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
                                "name": "Inner"
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
                        "name": "Outer"
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
                                "name": "Middle"
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "%PrepareFunctionForOptimization"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "Outer"
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
                          "name": "Outer"
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
                          "name": "Outer"
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
                          "name": "%OptimizeFunctionOnNextCall"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "Outer"
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
                          "name": "Outer"
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
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "kInitialRecursionValue"
                    },
                    "init": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10"
                    }
                  }
                ],
                "kind": "const"
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "Recursive"
                },
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "name": "StepOne"
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "val"
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "<=",
                              "left": {
                                "type": "Identifier",
                                "name": "val"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            "consequent": {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "Error"
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "Error in StepOne!",
                                    "raw": "\"Error in StepOne!\""
                                  }
                                ]
                              }
                            },
                            "alternate": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "StepTwo"
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "val"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 3,
                                    "raw": "3"
                                  }
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
                                "name": "StepTwo"
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "val"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 4,
                                    "raw": "4"
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
                        "name": "StepTwo"
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "val"
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "<=",
                              "left": {
                                "type": "Identifier",
                                "name": "val"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            "consequent": {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "Error"
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "Error in StepTwo!",
                                    "raw": "\"Error in StepTwo!\""
                                  }
                                ]
                              }
                            },
                            "alternate": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "StepOne"
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "val"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
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
                                "name": "StepOne"
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "val"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "StepOne"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "kInitialRecursionValue"
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
                    "name": "createSuite"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Simple-Capture-Error",
                      "raw": "'Simple-Capture-Error'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "Simple"
                    },
                    {
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
                  ]
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "createSuite"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Custom-Capture-Error",
                      "raw": "'Custom-Capture-Error'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "Custom"
                    },
                    {
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
                  ]
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "createSuite"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Inline-Capture-Error",
                      "raw": "'Inline-Capture-Error'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "Inline"
                    },
                    {
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
                  ]
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "createSuite"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Recursive-Capture-Error",
                      "raw": "'Recursive-Capture-Error'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "Recursive"
                    },
                    {
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