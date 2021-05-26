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
                      "value": "Debugger.paused",
                      "raw": "'Debugger.paused'"
                    },
                    {
                      "type": "Literal",
                      "value": 10000,
                      "raw": "10000"
                    },
                    {
                      "type": "Identifier",
                      "name": "DebuggerPaused"
                    },
                    {
                      "type": "Identifier",
                      "name": "Setup"
                    },
                    {
                      "type": "Identifier",
                      "name": "TearDown"
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
                      "value": "Debugger.getPossibleBreakpoints",
                      "raw": "'Debugger.getPossibleBreakpoints'"
                    },
                    {
                      "type": "Literal",
                      "value": 10000,
                      "raw": "10000"
                    },
                    {
                      "type": "Identifier",
                      "name": "DebuggerGetPossibleBreakpoints"
                    },
                    {
                      "type": "Identifier",
                      "name": "SetupGetPossibleBreakpoints"
                    },
                    {
                      "type": "Identifier",
                      "name": "TearDown"
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
                      "value": "AsyncStacksInstrumentation",
                      "raw": "'AsyncStacksInstrumentation'"
                    },
                    {
                      "type": "Literal",
                      "value": 10000,
                      "raw": "10000"
                    },
                    {
                      "type": "Identifier",
                      "name": "AsyncStacksInstrumentation"
                    },
                    {
                      "type": "Identifier",
                      "name": "SetupAsyncStacksInstrumentation"
                    },
                    {
                      "type": "Identifier",
                      "name": "TearDown"
                    }
                  ]
                }
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
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "SendMessage"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "Debugger.enable",
                            "raw": "'Debugger.enable'"
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
                          "name": "SendMessage"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "Runtime.evaluate",
                            "raw": "'Runtime.evaluate'"
                          },
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "expression"
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": "",
                                  "raw": "''"
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
                  "name": "TearDown"
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
                          "name": "SendMessage"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "Debugger.disable",
                            "raw": "'Debugger.disable'"
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
                  "name": "DebuggerPaused"
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
                          "value": 10,
                          "raw": "10"
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
                            "type": "DebuggerStatement"
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
                      "name": "scriptId"
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
                  "name": "SetupGetPossibleBreakpoints"
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
                          "name": "Setup"
                        },
                        "arguments": []
                      }
                    },
                    {
                      "type": "VariableDeclaration",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "expression"
                          },
                          "init": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''"
                          }
                        }
                      ],
                      "kind": "let"
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
                              "operator": "+=",
                              "left": {
                                "type": "Identifier",
                                "name": "expression"
                              },
                              "right": {
                                "type": "TemplateLiteral",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "function foo",
                                      "cooked": "function foo"
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "(){\n        if (a) {\n          return true;\n        } else {\n          return false;\n        }\n      }\\n",
                                      "cooked": "(){\n        if (a) {\n          return true;\n        } else {\n          return false;\n        }\n      }\n"
                                    },
                                    "tail": true
                                  }
                                ],
                                "expressions": [
                                  {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                ]
                              }
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "EmptyStatement"
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "listener"
                        },
                        "right": {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "msg"
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "msg"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "method"
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "Debugger.scriptParsed",
                                    "raw": "'Debugger.scriptParsed'"
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
                                          "name": "scriptId"
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "msg"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "params"
                                            }
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "scriptId"
                                          }
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
                                          "name": "listener"
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": null,
                                          "raw": "null"
                                        }
                                      }
                                    }
                                  ]
                                },
                                "alternate": null
                              }
                            ]
                          },
                          "generator": false,
                          "expression": false,
                          "async": false
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "SendMessage"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "Runtime.evaluate",
                            "raw": "'Runtime.evaluate'"
                          },
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "expression"
                                },
                                "computed": false,
                                "value": {
                                  "type": "Identifier",
                                  "name": "expression"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": true
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
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "DebuggerGetPossibleBreakpoints"
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
                          "name": "SendMessage"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "Debugger.getPossibleBreakpoints",
                            "raw": "'Debugger.getPossibleBreakpoints'"
                          },
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "start"
                                },
                                "computed": false,
                                "value": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "lineNumber"
                                      },
                                      "computed": false,
                                      "value": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "shorthand": false
                                    },
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "columnNumber"
                                      },
                                      "computed": false,
                                      "value": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "shorthand": false
                                    },
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "scriptId"
                                      },
                                      "computed": false,
                                      "value": {
                                        "type": "Identifier",
                                        "name": "scriptId"
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "shorthand": false
                                    }
                                  ]
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
                  "name": "SetupAsyncStacksInstrumentation"
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
                          "name": "Setup"
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
                          "name": "SendMessage"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "Debugger.setAsyncCallStackDepth",
                            "raw": "'Debugger.setAsyncCallStackDepth'"
                          },
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "maxDepth"
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": 1024,
                                  "raw": "1024"
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
                  "name": "AsyncStacksInstrumentation"
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
                            "name": "p"
                          },
                          "init": {
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
                            "name": "nopCallback"
                          },
                          "init": {
                            "type": "ArrowFunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                              "type": "Identifier",
                              "name": "undefined"
                            },
                            "generator": false,
                            "expression": true,
                            "async": false
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
                            "name": "done"
                          },
                          "init": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false"
                          }
                        }
                      ],
                      "kind": "var"
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
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "p"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "then"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "nopCallback"
                                  }
                                ]
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "p"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "then"
                            }
                          },
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [],
                              "body": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "done"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true"
                                }
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "WhileStatement",
                      "test": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Identifier",
                          "name": "done"
                        },
                        "prefix": true
                      },
                      "body": {
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
                    }
                  ]
                },
                "generator": false,
                "expression": false,
                "async": false
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