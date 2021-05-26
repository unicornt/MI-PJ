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
            "name": "SIZE"
          },
          "init": {
            "type": "Literal",
            "value": 1024,
            "raw": "1024"
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
            "name": "input"
          },
          "init": null
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
            "name": "output"
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
        "name": "CreateSetup"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "TAConstructor"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                          "name": "values"
                        },
                        "init": {
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
                                  "name": "Array"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "from"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "length"
                                      },
                                      "computed": false,
                                      "value": {
                                        "type": "Identifier",
                                        "name": "SIZE"
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "shorthand": false
                                    }
                                  ]
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "map"
                            }
                          },
                          "arguments": [
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
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "TAConstructor"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "BigUint64Array"
                                  }
                                },
                                "consequent": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "BigInt"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "i"
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
                            }
                          ]
                        }
                      }
                    ],
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "input"
                      },
                      "right": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "TAConstructor"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "values"
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
        "name": "CreateRun"
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
                "name": "Function"
              },
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "\n    output = input.filter((el, i) => el < SIZE && (i % 2) === 0);\n  ",
                        "cooked": "\n    output = input.filter((el, i) => el < SIZE && (i % 2) === 0);\n  "
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
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
        "name": "isOutputInvalid"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "output"
                },
                "property": {
                  "type": "Identifier",
                  "name": "length"
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "input"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "length"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2"
                }
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true"
              }
            },
            "alternate": null
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
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "Identifier",
                  "name": "SIZE"
                },
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2"
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
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "!==",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "output"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "input"
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    }
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true"
                    }
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
        "name": "TearDown"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "isOutputInvalid"
              },
              "arguments": []
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "TypeError"
                },
                "arguments": [
                  {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "Unexpected result!\\n",
                          "cooked": "Unexpected result!\n"
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
                        "name": "output"
                      }
                    ]
                  }
                ]
              }
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "input"
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                },
                "prefix": true
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
                "name": "output"
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                },
                "prefix": true
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
          "name": "createSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Uint8Array",
            "raw": "'Uint8Array'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateRun"
            },
            "arguments": []
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateSetup"
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "Uint8Array"
              }
            ]
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
            "value": "Uint16Array",
            "raw": "'Uint16Array'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateRun"
            },
            "arguments": []
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateSetup"
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "Uint16Array"
              }
            ]
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
            "value": "Uint32Array",
            "raw": "'Uint32Array'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateRun"
            },
            "arguments": []
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateSetup"
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "Uint32Array"
              }
            ]
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
            "value": "Float32Array",
            "raw": "'Float32Array'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateRun"
            },
            "arguments": []
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateSetup"
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "Float32Array"
              }
            ]
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
            "value": "Float64Array",
            "raw": "'Float64Array'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateRun"
            },
            "arguments": []
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateSetup"
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "Float64Array"
              }
            ]
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
            "value": "BigUint64Array",
            "raw": "'BigUint64Array'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateRun"
            },
            "arguments": []
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateSetup"
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "BigUint64Array"
              }
            ]
          },
          {
            "type": "Identifier",
            "name": "TearDown"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}