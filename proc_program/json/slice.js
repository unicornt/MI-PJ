{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "kArraySize"
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
                      "name": "A"
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Array"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "kArraySize"
                        }
                      ]
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "i"
                        }
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
                    "name": "assert"
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "%HasSmiElements"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "A"
                        }
                      ]
                    },
                    {
                      "type": "Literal",
                      "value": "A should have SMI elements for this test",
                      "raw": "\"A should have SMI elements for this test\""
                    }
                  ]
                }
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "testArraySlice0"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
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
                  "name": "testArraySlice500"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 500,
                            "raw": "500"
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
                  "name": "testArraySlice500_999"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 500,
                            "raw": "500"
                          },
                          {
                            "type": "Literal",
                            "value": 999,
                            "raw": "999"
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
                  "name": "testArraySliceN500"
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
                            "name": "A"
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
                              "value": 500,
                              "raw": "500"
                            },
                            "prefix": true
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
                  "name": "testArraySlice200_700"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "Literal",
                            "value": 700,
                            "raw": "700"
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
                  "name": "testArraySlice200_N300"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "value": 300,
                              "raw": "300"
                            },
                            "prefix": true
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
                  "name": "testArraySlice4_1"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "value": 300,
                              "raw": "300"
                            },
                            "prefix": true
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(0)",
                      "raw": "\"Array.slice(0)\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice0"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(500)",
                      "raw": "\"Array.slice(500)\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice500"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(500,999)",
                      "raw": "\"Array.slice(500,999)\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice500_999"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(-500)",
                      "raw": "\"Array.slice(-500)\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySliceN500"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(200,700)",
                      "raw": "\"Array.slice(200,700)\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice200_700"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(200,-300)",
                      "raw": "\"Array.slice(200,-300)\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice200_N300"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(4,1)",
                      "raw": "\"Array.slice(4,1)\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice4_1"
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
    },
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
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Array"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "kArraySize"
                        }
                      ]
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "i"
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
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 100000,
                      "raw": "100000"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 255,
                    "raw": "255"
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "assert"
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "%HasDictionaryElements"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "A"
                        }
                      ]
                    },
                    {
                      "type": "Literal",
                      "value": "A should be in dictionary mode for this test",
                      "raw": "\"A should be in dictionary mode for this test\""
                    }
                  ]
                }
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "testArraySlice0"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
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
                  "name": "testArraySlice500_999"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 500,
                            "raw": "500"
                          },
                          {
                            "type": "Literal",
                            "value": 999,
                            "raw": "999"
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
                  "name": "testArraySlice200_700"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "Literal",
                            "value": 700,
                            "raw": "700"
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
                  "name": "testArraySlice200_N300"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "value": 300,
                              "raw": "300"
                            },
                            "prefix": true
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
                  "name": "testArraySlice4_1"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "value": 300,
                              "raw": "300"
                            },
                            "prefix": true
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(0)-dict",
                      "raw": "\"Array.slice(0)-dict\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice0"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(500,999)-dict",
                      "raw": "\"Array.slice(500,999)-dict\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice500_999"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(200,700)-dict",
                      "raw": "\"Array.slice(200,700)-dict\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice200_700"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(200,-300)-dict",
                      "raw": "\"Array.slice(200,-300)-dict\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice200_N300"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(4,1)-dict",
                      "raw": "\"Array.slice(4,1)-dict\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice4_1"
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
    },
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
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Array"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "kArraySize"
                        }
                      ]
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0.5,
                            "raw": "0.5"
                          }
                        }
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
                    "name": "assert"
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "%HasDoubleElements"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "A"
                        }
                      ]
                    },
                    {
                      "type": "Literal",
                      "value": "A should have double elements for this test",
                      "raw": "\"A should have double elements for this test\""
                    }
                  ]
                }
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "testArraySlice0"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
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
                  "name": "testArraySlice500_999"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 500,
                            "raw": "500"
                          },
                          {
                            "type": "Literal",
                            "value": 999,
                            "raw": "999"
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
                  "name": "testArraySlice200_700"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "Literal",
                            "value": 700,
                            "raw": "700"
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
                  "name": "testArraySlice200_N300"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "value": 300,
                              "raw": "300"
                            },
                            "prefix": true
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
                  "name": "testArraySlice4_1"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "value": 300,
                              "raw": "300"
                            },
                            "prefix": true
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(0)-double",
                      "raw": "\"Array.slice(0)-double\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice0"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(500,999)-double",
                      "raw": "\"Array.slice(500,999)-double\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice500_999"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(200,700)-double",
                      "raw": "\"Array.slice(200,700)-double\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice200_700"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(200,-300)-double",
                      "raw": "\"Array.slice(200,-300)-double\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice200_N300"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(4,1)-double",
                      "raw": "\"Array.slice(4,1)-double\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice4_1"
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
    },
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
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Array"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "kArraySize"
                        }
                      ]
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        },
                        "right": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "Object"
                          },
                          "arguments": []
                        }
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
                    "name": "assert"
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "%HasObjectElements"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "A"
                        }
                      ]
                    },
                    {
                      "type": "Literal",
                      "value": "A should have object elements for this test",
                      "raw": "\"A should have object elements for this test\""
                    }
                  ]
                }
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "testArraySlice0"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
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
                  "name": "testArraySlice500_999"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 500,
                            "raw": "500"
                          },
                          {
                            "type": "Literal",
                            "value": 999,
                            "raw": "999"
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
                  "name": "testArraySlice200_700"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "Literal",
                            "value": 700,
                            "raw": "700"
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
                  "name": "testArraySlice200_N300"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "value": 300,
                              "raw": "300"
                            },
                            "prefix": true
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
                  "name": "testArraySlice4_1"
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "value": 300,
                              "raw": "300"
                            },
                            "prefix": true
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(0)-object",
                      "raw": "\"Array.slice(0)-object\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice0"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(500,999)-object",
                      "raw": "\"Array.slice(500,999)-object\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice500_999"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(200,700)-object",
                      "raw": "\"Array.slice(200,700)-object\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice200_700"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(200,-300)-object",
                      "raw": "\"Array.slice(200,-300)-object\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice200_N300"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(4,1)-object",
                      "raw": "\"Array.slice(4,1)-object\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice4_1"
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
    },
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
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Array"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "kArraySize"
                        }
                      ]
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
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
                            "name": "A"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "i"
                        }
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
                    "name": "assert"
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "%HasSmiElements"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "A"
                        }
                      ]
                    },
                    {
                      "type": "Literal",
                      "value": "A should have SMI elements for this test",
                      "raw": "\"A should have SMI elements for this test\""
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
                      "name": "arguments_array"
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
                  "name": "sloppy_aliased"
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "arguments_array"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "arguments"
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "sloppy_aliased"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "apply"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null"
                    },
                    {
                      "type": "Identifier",
                      "name": "A"
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
                    "name": "assert"
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "%HasSloppyArgumentsElements"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "arguments_array"
                        }
                      ]
                    },
                    {
                      "type": "Literal",
                      "value": "arguments_array should have sloppy arguments elements for this test",
                      "raw": "\"arguments_array should have sloppy arguments elements for this test\""
                    }
                  ]
                }
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "testArraySlice0"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
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
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "slice"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "call"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "arguments_array"
                          },
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
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
                  "name": "testArraySlice500_999"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
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
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "slice"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "call"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "arguments_array"
                          },
                          {
                            "type": "Literal",
                            "value": 500,
                            "raw": "500"
                          },
                          {
                            "type": "Literal",
                            "value": 999,
                            "raw": "999"
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
                  "name": "testArraySlice200_700"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
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
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "slice"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "call"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "arguments_array"
                          },
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "Literal",
                            "value": 700,
                            "raw": "700"
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
                  "name": "testArraySlice200_N300"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
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
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "slice"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "call"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "arguments_array"
                          },
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "value": 300,
                              "raw": "300"
                            },
                            "prefix": true
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
                  "name": "testArraySlice4_1"
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
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
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
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "slice"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "call"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "arguments_array"
                          },
                          {
                            "type": "Literal",
                            "value": 200,
                            "raw": "200"
                          },
                          {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "value": 300,
                              "raw": "300"
                            },
                            "prefix": true
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(0)-sloppy-args",
                      "raw": "\"Array.slice(0)-sloppy-args\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice0"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(500,999)-sloppy-args",
                      "raw": "\"Array.slice(500,999)-sloppy-args\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice500_999"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(200,700)-sloppy-args",
                      "raw": "\"Array.slice(200,700)-sloppy-args\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice200_700"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(200,-300)-sloppy-args",
                      "raw": "\"Array.slice(200,-300)-sloppy-args\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice200_N300"
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
                    "name": "createSuiteWithWarmup"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Array.slice(4,1)-sloppy-args",
                      "raw": "\"Array.slice(4,1)-sloppy-args\""
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "name": "testArraySlice4_1"
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