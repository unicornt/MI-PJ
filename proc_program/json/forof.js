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
            "value": "ForOf",
            "raw": "'ForOf'"
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
                    "value": "ArrayValues",
                    "raw": "'ArrayValues'"
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
                    "name": "ForOf"
                  },
                  {
                    "type": "Identifier",
                    "name": "ForOfArraySetup"
                  },
                  {
                    "type": "Identifier",
                    "name": "ForOfTearDown"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Benchmark"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "ArrayKeys",
                    "raw": "'ArrayKeys'"
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
                    "name": "ForOf"
                  },
                  {
                    "type": "Identifier",
                    "name": "ForOfArrayKeysSetup"
                  },
                  {
                    "type": "Identifier",
                    "name": "ForOfTearDown"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Benchmark"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "ArrayEntries",
                    "raw": "'ArrayEntries'"
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
                    "name": "ForOf"
                  },
                  {
                    "type": "Identifier",
                    "name": "ForOfArrayEntriesSetup"
                  },
                  {
                    "type": "Identifier",
                    "name": "ForOfTearDown"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Benchmark"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "Uint8Array",
                    "raw": "'Uint8Array'"
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
                    "name": "ForOf"
                  },
                  {
                    "type": "Identifier",
                    "name": "ForOfUint8ArraySetup"
                  },
                  {
                    "type": "Identifier",
                    "name": "ForOfTearDown"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Benchmark"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "Float64Array",
                    "raw": "'Float64Array'"
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
                    "name": "ForOf"
                  },
                  {
                    "type": "Identifier",
                    "name": "ForOfFloat64ArraySetup"
                  },
                  {
                    "type": "Identifier",
                    "name": "ForOfTearDown"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Benchmark"
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "String",
                    "raw": "'String'"
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
                    "name": "ForOf"
                  },
                  {
                    "type": "Identifier",
                    "name": "ForOfStringSetup"
                  },
                  {
                    "type": "Identifier",
                    "name": "ForOfTearDown"
                  }
                ]
              }
            ]
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
            "name": "iterable"
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
            "name": "N"
          },
          "init": {
            "type": "Literal",
            "value": 100,
            "raw": "100"
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
            "name": "expected"
          },
          "init": null
        },
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
        "name": "ForOfArraySetupHelper"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "constructor"
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
                "name": "iterable"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "constructor"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "N"
                  }
                ]
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
                "type": "Identifier",
                "name": "N"
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "iterable"
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
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "expected"
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "Identifier",
                  "name": "N"
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                }
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
        "name": "ForOfArraySetup"
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
                "name": "ForOfArraySetupHelper"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "Array"
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
        "name": "ForOfArrayKeysSetup"
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
                "name": "ForOfArraySetupHelper"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "Array"
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
                "name": "iterable"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "iterable"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "keys"
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
        "name": "ForOfArrayEntriesSetup"
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
                "name": "ForOfArraySetupHelper"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "Array"
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
                "name": "iterable"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "iterable"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "entries"
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
                "name": "expected"
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "N"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "N"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
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
        "name": "ForOfUint8ArraySetup"
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
                "name": "ForOfArraySetupHelper"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "Uint8Array"
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
        "name": "ForOfFloat64ArraySetup"
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
                "name": "ForOfArraySetupHelper"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "Float64Array"
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
        "name": "ForOfStringSetup"
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
                "name": "iterable"
              },
              "right": {
                "type": "Literal",
                "value": "abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ0123456789",
                "raw": "\"abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ0123456789\""
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
                "name": "expected"
              },
              "right": {
                "type": "Literal",
                "value": "9",
                "raw": "\"9\""
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
        "name": "Equals"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "expected"
        },
        {
          "type": "Identifier",
          "name": "actual"
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
                "type": "Identifier",
                "name": "expected"
              },
              "right": {
                "type": "Identifier",
                "name": "actual"
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
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "name": "expected"
                },
                "prefix": true
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "name": "actual"
                },
                "prefix": true
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": false,
                "raw": "false"
              }
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "name": "expected"
                },
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": false,
                "raw": "false"
              }
            },
            "alternate": null
          },
          {
            "type": "ForOfStatement",
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "k"
                  },
                  "init": null
                }
              ],
              "kind": "var"
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "Object"
                },
                "property": {
                  "type": "Identifier",
                  "name": "keys"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "expected"
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "in",
                      "left": {
                        "type": "Identifier",
                        "name": "k"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "actual"
                      }
                    },
                    "prefix": true
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false"
                    }
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Equals"
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "expected"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "k"
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "actual"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "k"
                          }
                        }
                      ]
                    },
                    "prefix": true
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false"
                    }
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ForOfStatement",
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "k"
                  },
                  "init": null
                }
              ],
              "kind": "var"
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "Object"
                },
                "property": {
                  "type": "Identifier",
                  "name": "keys"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "actual"
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "in",
                      "left": {
                        "type": "Identifier",
                        "name": "k"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "expected"
                      }
                    },
                    "prefix": true
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false"
                    }
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true"
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
        "name": "ForOfTearDown"
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
                "name": "iterable"
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null"
              }
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Equals"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "expected"
                  },
                  {
                    "type": "Identifier",
                    "name": "result"
                  }
                ]
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "Error"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "value": "Bad result: ",
                          "raw": "\"Bad result: \""
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "result"
                        }
                      }
                    ]
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "ForOf"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
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
            "right": {
              "type": "Identifier",
              "name": "iterable"
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
                      "name": "result"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "x"
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
    }
  ],
  "sourceType": "script"
}