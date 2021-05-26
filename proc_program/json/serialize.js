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
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "kErrorCount"
                    },
                    "init": {
                      "type": "Literal",
                      "value": 100000,
                      "raw": "100000"
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
                      "name": "errorsCreatedBySetup"
                    },
                    "init": null
                  }
                ],
                "kind": "let"
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "CreateErrors"
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "counter"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
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
                          "name": "errorsCreatedBySetup"
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": []
                        }
                      }
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
                        "kind": "let"
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
                          "name": "kErrorCount"
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
                                  "name": "errorsCreatedBySetup"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "fn"
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
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "SimpleSetup"
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
                          "name": "CreateErrors"
                        },
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
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
                            },
                            "generator": false,
                            "expression": true,
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
                  "name": "CustomSetup"
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
                          "name": "CreateErrors"
                        },
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
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
                            },
                            "generator": false,
                            "expression": true,
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
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "InlineSetup"
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
                                  "value": "Throwing from inlined function!",
                                  "raw": "\"Throwing from inlined function!\""
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
                            "type": "ReturnStatement",
                            "argument": {
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
                            "type": "ReturnStatement",
                            "argument": {
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
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "CreateErrors"
                        },
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Outer"
                              },
                              "arguments": []
                            },
                            "generator": false,
                            "expression": true,
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
                      "value": 12,
                      "raw": "12"
                    }
                  }
                ],
                "kind": "const"
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "RecursiveSetup"
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
                          "name": "counter"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
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
                          "name": "errorsCreatedBySetup"
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": []
                        }
                      }
                    },
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
                                        "name": "errorsCreatedBySetup"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "push"
                                      }
                                    },
                                    "arguments": [
                                      {
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
                                    ]
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null
                                }
                              ]
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
                                        "name": "errorsCreatedBySetup"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "push"
                                      }
                                    },
                                    "arguments": [
                                      {
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
                                    ]
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null
                                }
                              ]
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
                      "type": "WhileStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "errorsCreatedBySetup"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "kErrorCount"
                        }
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
                      "name": "counter"
                    },
                    "init": null
                  }
                ],
                "kind": "let"
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "SerializeStack"
                },
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "name": "counter"
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "errorsCreatedBySetup"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
                          }
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
                                "name": "%FlattenString"
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "errorsCreatedBySetup"
                                    },
                                    "property": {
                                      "type": "UpdateExpression",
                                      "operator": "++",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "counter"
                                      },
                                      "prefix": false
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "stack"
                                  }
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "%FlattenString"
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "Error"
                                    },
                                    "arguments": []
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "stack"
                                  }
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
                      "value": "Simple-Serialize-Error.stack",
                      "raw": "'Simple-Serialize-Error.stack'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "SerializeStack"
                    },
                    {
                      "type": "Identifier",
                      "name": "SimpleSetup"
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
                      "value": "Custom-Serialize-Error.stack",
                      "raw": "'Custom-Serialize-Error.stack'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "SerializeStack"
                    },
                    {
                      "type": "Identifier",
                      "name": "CustomSetup"
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
                      "value": "Inline-Serialize-Error.stack",
                      "raw": "'Inline-Serialize-Error.stack'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "SerializeStack"
                    },
                    {
                      "type": "Identifier",
                      "name": "InlineSetup"
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
                      "value": "Recursive-Serialize-Error.stack",
                      "raw": "'Recursive-Serialize-Error.stack'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "SerializeStack"
                    },
                    {
                      "type": "Identifier",
                      "name": "RecursiveSetup"
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