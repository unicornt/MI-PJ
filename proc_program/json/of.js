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
                      "value": "EmptyArrayOf",
                      "raw": "'EmptyArrayOf'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "EmptyArrayOf"
                    },
                    {
                      "type": "Identifier",
                      "name": "EmptyArrayOfSetup"
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
                      "value": "SmallTransplantedArrayOf",
                      "raw": "'SmallTransplantedArrayOf'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "SmallTransplantedArrayOf"
                    },
                    {
                      "type": "Identifier",
                      "name": "SmallTransplantedArrayOfSetup"
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
                      "value": "SmallSmiArrayOf",
                      "raw": "'SmallSmiArrayOf'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "SmallSmiArrayOf"
                    },
                    {
                      "type": "Identifier",
                      "name": "SmallSmiArrayOfSetup"
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
                      "value": "LargeSmiArrayOf",
                      "raw": "'LargeSmiArrayOf'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "LargeSmiArrayOf"
                    },
                    {
                      "type": "Identifier",
                      "name": "LargeSmiArrayOfSetup"
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
                      "value": "SmallDoubleArrayOf",
                      "raw": "'SmallDoubleArrayOf'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "SmallDoubleArrayOf"
                    },
                    {
                      "type": "Identifier",
                      "name": "SmallDoubleArrayOfSetup"
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
                      "value": "SmallStringArrayOf",
                      "raw": "'SmallStringArrayOf'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "SmallStringArrayOf"
                    },
                    {
                      "type": "Identifier",
                      "name": "SmallStringArrayOfSetup"
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
                      "value": "SmallMixedArrayOf",
                      "raw": "'SmallMixedArrayOf'"
                    },
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "SmallMixedArrayOf"
                    },
                    {
                      "type": "Identifier",
                      "name": "SmallMixedArrayOfSetup"
                    }
                  ]
                }
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "ArrayLike"
                },
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": []
                },
                "generator": false,
                "expression": false,
                "async": false
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
                      "name": "ArrayLike"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "of"
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "Array"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "of"
                    }
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
                      "name": "arg1"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg2"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg3"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg4"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg5"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg6"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg7"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg8"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg9"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg10"
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
                      "name": "arg11"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg12"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg13"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg14"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg15"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg16"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg17"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg18"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg19"
                    },
                    "init": null
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "arg20"
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
                      "name": "result"
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
                  "name": "EmptyArrayOf"
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
                              "name": "Array"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "of"
                            }
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
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "BaselineArray"
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
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "name": "arg1"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg2"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg3"
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
                  "name": "SmallSmiArrayOf"
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
                              "name": "Array"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "of"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "arg1"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg2"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg3"
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
                  "name": "LargeSmiArrayOf"
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
                              "name": "Array"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "of"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "arg1"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg2"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg3"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg4"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg5"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg6"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg7"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg8"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg9"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg10"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg11"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg12"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg13"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg14"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg15"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg16"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg17"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg18"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg19"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg20"
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
                  "name": "SmallTransplantedArrayOf"
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
                              "name": "ArrayLike"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "of"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "arg1"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg2"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg3"
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
                  "name": "SmallDoubleArrayOf"
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
                              "name": "Array"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "of"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "arg1"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg2"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg3"
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
                  "name": "SmallStringArrayOf"
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
                              "name": "Array"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "of"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "arg1"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg2"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg3"
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
                  "name": "SmallMixedArrayOf"
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
                              "name": "Array"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "of"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "arg1"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg2"
                            },
                            {
                              "type": "Identifier",
                              "name": "arg3"
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
                  "name": "EmptyArrayOfSetup"
                },
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": []
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "BaselineArraySetup"
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
                          "name": "arg1"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
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
                          "name": "arg2"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
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
                          "name": "arg3"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
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
                  "name": "SmallSmiArrayOfSetup"
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
                          "name": "arg1"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
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
                          "name": "arg2"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
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
                          "name": "arg3"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
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
                  "name": "SmallTransplantedArrayOfSetup"
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
                          "name": "arg1"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
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
                          "name": "arg2"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
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
                          "name": "arg3"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
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
                  "name": "SmallDoubleArrayOfSetup"
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
                          "name": "arg1"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1.5,
                          "raw": "1.5"
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
                          "name": "arg2"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2.5,
                          "raw": "2.5"
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
                          "name": "arg3"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 3.5,
                          "raw": "3.5"
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
                  "name": "SmallStringArrayOfSetup"
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
                          "name": "arg1"
                        },
                        "right": {
                          "type": "Literal",
                          "value": "cat",
                          "raw": "'cat'"
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
                          "name": "arg2"
                        },
                        "right": {
                          "type": "Literal",
                          "value": "dog",
                          "raw": "'dog'"
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
                          "name": "arg3"
                        },
                        "right": {
                          "type": "Literal",
                          "value": "giraffe",
                          "raw": "'giraffe'"
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
                  "name": "SmallMixedArrayOfSetup"
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
                          "name": "arg1"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
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
                          "name": "arg2"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2.5,
                          "raw": "2.5"
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
                          "name": "arg3"
                        },
                        "right": {
                          "type": "Literal",
                          "value": "giraffe",
                          "raw": "'giraffe'"
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
                  "name": "LargeSmiArrayOfSetup"
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
                          "name": "arg1"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
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
                          "name": "arg2"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
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
                          "name": "arg3"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
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
                          "name": "arg4"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4"
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
                          "name": "arg5"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5"
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
                          "name": "arg6"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6"
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
                          "name": "arg7"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7"
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
                          "name": "arg8"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8"
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
                          "name": "arg9"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9"
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
                          "name": "arg10"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10"
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
                          "name": "arg11"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 11,
                          "raw": "11"
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
                          "name": "arg12"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 12,
                          "raw": "12"
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
                          "name": "arg13"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 13,
                          "raw": "13"
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
                          "name": "arg14"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 14,
                          "raw": "14"
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
                          "name": "arg15"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 15,
                          "raw": "15"
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
                          "name": "arg16"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 16,
                          "raw": "16"
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
                          "name": "arg17"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 17,
                          "raw": "17"
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
                          "name": "arg18"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 18,
                          "raw": "18"
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
                          "name": "arg19"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 19,
                          "raw": "19"
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
                          "name": "arg20"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20"
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