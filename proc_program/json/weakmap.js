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
            "name": "MapBenchmark"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "BenchmarkSuite"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "WeakMap",
                "raw": "'WeakMap'"
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
                        "value": "Set",
                        "raw": "'Set'"
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
                        "name": "WeakMapSet"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapSetupBase"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapTearDown"
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
                        "value": "Has",
                        "raw": "'Has'"
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
                        "name": "WeakMapHas"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapSetup"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapTearDown"
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
                        "value": "Get",
                        "raw": "'Get'"
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
                        "name": "WeakMapGet"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapSetup"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapTearDown"
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
                        "value": "Delete",
                        "raw": "'Delete'"
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
                        "name": "WeakMapDelete"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapSetup"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapTearDown"
                      }
                    ]
                  }
                ]
              }
            ]
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
            "name": "MapBenchmark"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "BenchmarkSuite"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "WeakMapSetGet-Large",
                "raw": "'WeakMapSetGet-Large'"
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10000000,
                    "raw": "1e7"
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
                        "value": "Set-Get",
                        "raw": "'Set-Get'"
                      },
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false"
                      },
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true"
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapSetGetLarge"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapSetupBaseLarge"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapTearDown"
                      }
                    ]
                  }
                ]
              }
            ]
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
            "name": "MapBenchmark"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "BenchmarkSuite"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "WeakMapSet-Huge",
                "raw": "'WeakMapSet-Huge'"
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 100000000,
                    "raw": "1e8"
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
                        "value": "Set-Get",
                        "raw": "'Set-Get'"
                      },
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false"
                      },
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true"
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapSetHuge"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapSetupBaseLarge"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapTearDown"
                      }
                    ]
                  }
                ]
              }
            ]
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
            "name": "MapBenchmark"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "BenchmarkSuite"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "WeakMap-Constructor",
                "raw": "'WeakMap-Constructor'"
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
                        "value": "Constructor",
                        "raw": "'Constructor'"
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
                        "name": "WeakMapConstructor"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetupObjectKeyValuePairs"
                      },
                      {
                        "type": "Identifier",
                        "name": "WeakMapTearDown"
                      }
                    ]
                  }
                ]
              }
            ]
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
            "name": "wm"
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
        "name": "WeakMapSetupBase"
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
                "name": "SetupObjectKeys"
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
                "name": "wm"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "WeakMap"
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
        "name": "WeakMapSetupBaseLarge"
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
                "name": "SetupObjectKeys"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "LargeN"
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
                "name": "wm"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "WeakMap"
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
        "name": "WeakMapSetup"
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
                "name": "WeakMapSetupBase"
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
                "name": "WeakMapSet"
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
        "name": "WeakMapTearDown"
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
                "name": "wm"
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
      "generator": false,
      "expression": false,
      "async": false
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "WeakMapConstructor"
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
                "name": "wm"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "WeakMap"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "keyValuePairs"
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
        "name": "WeakMapSet"
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
                        "name": "wm"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "set"
                      }
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "keys"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      },
                      {
                        "type": "Identifier",
                        "name": "i"
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "WeakMapHas"
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "wm"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "has"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "keys"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
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
                          "arguments": []
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
                    "type": "Identifier",
                    "name": "N"
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
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2"
                },
                "right": {
                  "type": "Identifier",
                  "name": "N"
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "wm"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "has"
                      }
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "keys"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      }
                    ]
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
                          "arguments": []
                        }
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
        "name": "WeakMapGet"
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "!==",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "wm"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "get"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "keys"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        }
                      ]
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "i"
                    }
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
                          "arguments": []
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
                    "type": "Identifier",
                    "name": "N"
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
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2"
                },
                "right": {
                  "type": "Identifier",
                  "name": "N"
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "wm"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "get"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "keys"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        }
                      ]
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "undefined"
                    }
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
                          "arguments": []
                        }
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
        "name": "WeakMapDelete"
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
                        "name": "wm"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "delete"
                      }
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "keys"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "WeakMapSetGetLarge"
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
                "type": "Identifier",
                "name": "LargeN"
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "wm"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "set"
                      }
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "keys"
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
                      },
                      {
                        "type": "Identifier",
                        "name": "i"
                      }
                    ]
                  }
                }
              ]
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
                "name": "LargeN"
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "wm"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "get"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "keys"
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
                      ]
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "i"
                    }
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
                          "arguments": []
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
                    "type": "Identifier",
                    "name": "N"
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
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2"
                },
                "right": {
                  "type": "Identifier",
                  "name": "LargeN"
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "wm"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "get"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "keys"
                          },
                          "property": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
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
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        }
                      ]
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "undefined"
                    }
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
                          "arguments": []
                        }
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
        "name": "WeakMapSetHuge"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "Foo"
            },
            "params": [
              {
                "type": "Identifier",
                "name": "i"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "x"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "i"
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "obj"
                },
                "init": null
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
                "type": "Identifier",
                "name": "LargeN"
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
                      "type": "Identifier",
                      "name": "obj"
                    },
                    "right": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Foo"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "i"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "wm"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "set"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "obj"
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
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
    }
  ],
  "sourceType": "script"
}