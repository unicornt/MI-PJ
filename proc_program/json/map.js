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
                  "name": "NaiveMap"
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
                      "type": "VariableDeclaration",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "result"
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
                                "name": "length"
                              }
                            ]
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
                                  "type": "Identifier",
                                  "name": "index"
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "func"
                                },
                                "arguments": [
                                  {
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
                              }
                            }
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
                  "name": "NaiveMapSetup"
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
                          "name": "NaiveMap"
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
                          "name": "NaiveMap"
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
                          "name": "NaiveMap"
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
                          "name": "NaiveMap"
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
                  "name": "RunOptFastMap"
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
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "v"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": " ",
                                    "raw": "' '"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "multiple"
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
                      "name": "OptFastMap"
                    }
                  ]
                }
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "OptFastMap"
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
                          "name": "RunOptFastMap"
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
                  "name": "OptUnreliableMap"
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
                              "name": "map"
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
                              "value": "NaiveMapReplacement",
                              "raw": "'NaiveMapReplacement'"
                            },
                            {
                              "type": "Identifier",
                              "name": "NaiveMap"
                            },
                            {
                              "type": "Identifier",
                              "name": "NaiveMapSetup"
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
                                "type": "Identifier",
                                "name": "v"
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
                              "value": "SmiMap",
                              "raw": "'SmiMap'"
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
                                  "value": "map",
                                  "raw": "'map'"
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
                                "type": "Identifier",
                                "name": "v"
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
                              "value": "DoubleMap",
                              "raw": "'DoubleMap'"
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
                                  "value": "map",
                                  "raw": "'map'"
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
                                "type": "Identifier",
                                "name": "v"
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
                              "value": "FastMap",
                              "raw": "'FastMap'"
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
                                  "value": "map",
                                  "raw": "'map'"
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
                                "type": "Identifier",
                                "name": "v"
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
                              "value": "SmallSmiToDoubleMap",
                              "raw": "'SmallSmiToDoubleMap'"
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
                                  "value": "map",
                                  "raw": "'map'"
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
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0.5,
                                  "raw": "0.5"
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
                              "value": "SmallSmiToFastMap",
                              "raw": "'SmallSmiToFastMap'"
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
                                  "value": "map",
                                  "raw": "'map'"
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
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": "hi",
                                  "raw": "'hi'"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "v"
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
                              "value": "GenericMap",
                              "raw": "'GenericMap'"
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
                                  "value": "map",
                                  "raw": "'map'"
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
                                "type": "Identifier",
                                "name": "v"
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
                              "value": "OptFastMap",
                              "raw": "'OptFastMap'"
                            },
                            {
                              "type": "Identifier",
                              "name": "OptFastMap"
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
                              "value": "OptUnreliableMap",
                              "raw": "'OptUnreliableMap'"
                            },
                            {
                              "type": "Identifier",
                              "name": "OptUnreliableMap"
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
                                "type": "Identifier",
                                "name": "v"
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