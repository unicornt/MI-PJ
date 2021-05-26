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
            "value": "DataViewTest-DataView-BigEndian",
            "raw": "'DataViewTest-DataView-BigEndian'"
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
                    "value": "DataViewTest-DataView-BigEndian",
                    "raw": "'DataViewTest-DataView-BigEndian'"
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
                    "name": "doTestDataViewBigEndian"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
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
            "value": "DataViewTest-DataView-LittleEndian",
            "raw": "'DataViewTest-DataView-LittleEndian'"
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
                    "value": "DataViewTest-DataView-LittleEndian",
                    "raw": "'DataViewTest-DataView-LittleEndian'"
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
                    "name": "doTestDataViewLittleEndian"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
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
            "value": "DataViewTest-DataView-Floats",
            "raw": "'DataViewTest-DataView-Floats'"
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
                    "value": "DataViewTest-DataView-Floats",
                    "raw": "'DataViewTest-DataView-Floats'"
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
                    "name": "doTestDataViewFloats"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
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
            "value": "DataViewTest-TypedArray-BigEndian",
            "raw": "'DataViewTest-TypedArray-BigEndian'"
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
                    "value": "DataViewTest-TypedArray-BigEndian",
                    "raw": "'DataViewTest-TypedArray-BigEndian'"
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
                    "name": "doTestTypedArrayBigEndian"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
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
            "value": "DataViewTest-TypedArray-LittleEndian",
            "raw": "'DataViewTest-TypedArray-LittleEndian'"
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
                    "value": "DataViewTest-TypedArray-LittleEndian",
                    "raw": "'DataViewTest-TypedArray-LittleEndian'"
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
                    "name": "doTestTypedArrayLittleEndian"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
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
            "value": "DataViewTest-TypedArray-Floats",
            "raw": "'DataViewTest-TypedArray-Floats'"
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
                    "value": "DataViewTest-TypedArray-Floats",
                    "raw": "'DataViewTest-TypedArray-Floats'"
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
                    "name": "doTestTypedArrayFloats"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "doTestDataViewBigEndian"
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
                "name": "doIterations"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false"
                },
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true"
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
        "name": "doTestDataViewLittleEndian"
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
                "name": "doIterations"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true"
                },
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true"
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
        "name": "doTestTypedArrayBigEndian"
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
                "name": "doIterations"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false"
                },
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false"
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
        "name": "doTestTypedArrayLittleEndian"
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
                "name": "doIterations"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true"
                },
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false"
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
        "name": "doTestDataViewFloats"
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
                "name": "doFloatIterations"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true"
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
        "name": "doTestTypedArrayFloats"
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
                "name": "doFloatIterations"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false"
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
        "name": "doIterations"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "littleEndian"
        },
        {
          "type": "Identifier",
          "name": "dataView"
        }
      ],
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
                  "name": "buffer"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "makeBuffer"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
                    },
                    {
                      "type": "Identifier",
                      "name": "littleEndian"
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
                  "name": "iterations"
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10"
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "name": "dataView"
            },
            "consequent": {
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
                      "name": "iterations"
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "doOneIterationDV"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "buffer"
                        },
                        {
                          "type": "Identifier",
                          "name": "littleEndian"
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "alternate": {
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
                      "name": "iterations"
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "doOneIterationJS"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "buffer"
                        },
                        {
                          "type": "Identifier",
                          "name": "littleEndian"
                        }
                      ]
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
        "name": "makeBuffer"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "size"
        },
        {
          "type": "Identifier",
          "name": "littleEndian"
        }
      ],
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
                  "name": "buffer"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "ArrayBuffer"
                  },
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "name": "size"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14"
                      }
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
                  "name": "view"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "DataView"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "buffer"
                    }
                  ]
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
                "name": "size"
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "view"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "setInt8"
                      }
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 14,
                          "raw": "14"
                        }
                      },
                      {
                        "type": "Identifier",
                        "name": "i"
                      }
                    ]
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
                        "name": "view"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "setUint8"
                      }
                    },
                    "arguments": [
                      {
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
                            "value": 14,
                            "raw": "14"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "Identifier",
                        "name": "i"
                      }
                    ]
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
                        "name": "view"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "setInt16"
                      }
                    },
                    "arguments": [
                      {
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
                            "value": 14,
                            "raw": "14"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      },
                      {
                        "type": "Identifier",
                        "name": "littleEndian"
                      }
                    ]
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
                        "name": "view"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "setUint16"
                      }
                    },
                    "arguments": [
                      {
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
                            "value": 14,
                            "raw": "14"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4"
                        }
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      },
                      {
                        "type": "Identifier",
                        "name": "littleEndian"
                      }
                    ]
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
                        "name": "view"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "setInt32"
                      }
                    },
                    "arguments": [
                      {
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
                            "value": 14,
                            "raw": "14"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6"
                        }
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      },
                      {
                        "type": "Identifier",
                        "name": "littleEndian"
                      }
                    ]
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
                        "name": "view"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "setUint32"
                      }
                    },
                    "arguments": [
                      {
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
                            "value": 14,
                            "raw": "14"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10"
                        }
                      },
                      {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      },
                      {
                        "type": "Identifier",
                        "name": "littleEndian"
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "buffer"
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
        "name": "doOneIterationDV"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "buffer"
        },
        {
          "type": "Identifier",
          "name": "littleEndian"
        }
      ],
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
                  "name": "xor"
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
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "view"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "DataView"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "buffer"
                    }
                  ]
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "view"
                },
                "property": {
                  "type": "Identifier",
                  "name": "byteLength"
                }
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "name": "i"
              },
              "right": {
                "type": "Literal",
                "value": 14,
                "raw": "14"
              }
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "^=",
                    "left": {
                      "type": "Identifier",
                      "name": "xor"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "view"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getInt8"
                        }
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
                    "type": "AssignmentExpression",
                    "operator": "^=",
                    "left": {
                      "type": "Identifier",
                      "name": "xor"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "view"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getUint8"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
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
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "^=",
                    "left": {
                      "type": "Identifier",
                      "name": "xor"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "view"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getInt16"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
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
                        {
                          "type": "Identifier",
                          "name": "littleEndian"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "^=",
                    "left": {
                      "type": "Identifier",
                      "name": "xor"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "view"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getUint16"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4"
                          }
                        },
                        {
                          "type": "Identifier",
                          "name": "littleEndian"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "^=",
                    "left": {
                      "type": "Identifier",
                      "name": "xor"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "view"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getInt32"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6"
                          }
                        },
                        {
                          "type": "Identifier",
                          "name": "littleEndian"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "^=",
                    "left": {
                      "type": "Identifier",
                      "name": "xor"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "view"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getUint32"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
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
                        {
                          "type": "Identifier",
                          "name": "littleEndian"
                        }
                      ]
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
        "name": "doOneIterationJS"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "buffer"
        },
        {
          "type": "Identifier",
          "name": "littleEndian"
        }
      ],
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
                  "name": "xor"
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
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "reader"
                },
                "init": null
              }
            ],
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "name": "littleEndian"
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
                      "name": "reader"
                    },
                    "right": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "LittleEndian"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "buffer"
                        }
                      ]
                    }
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
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "name": "reader"
                    },
                    "right": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "BigEndian"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "buffer"
                        }
                      ]
                    }
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "buffer"
                },
                "property": {
                  "type": "Identifier",
                  "name": "byteLength"
                }
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "name": "i"
              },
              "right": {
                "type": "Literal",
                "value": 14,
                "raw": "14"
              }
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "^=",
                    "left": {
                      "type": "Identifier",
                      "name": "xor"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "reader"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getInt8"
                        }
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
                    "type": "AssignmentExpression",
                    "operator": "^=",
                    "left": {
                      "type": "Identifier",
                      "name": "xor"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "reader"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getUint8"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
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
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "^=",
                    "left": {
                      "type": "Identifier",
                      "name": "xor"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "reader"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getInt16"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
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
                      ]
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "^=",
                    "left": {
                      "type": "Identifier",
                      "name": "xor"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "reader"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getUint16"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
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
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "^=",
                    "left": {
                      "type": "Identifier",
                      "name": "xor"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "reader"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getInt32"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6"
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "^=",
                    "left": {
                      "type": "Identifier",
                      "name": "xor"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "reader"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getUint32"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          }
                        }
                      ]
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
        "name": "doFloatIterations"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "dataView"
        }
      ],
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
                  "name": "buffer"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "makeFloatBuffer"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000"
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
                  "name": "iterations"
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10"
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "name": "dataView"
            },
            "consequent": {
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
                      "name": "iterations"
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "doOneFloatIterationDV"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "buffer"
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "alternate": {
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
                      "name": "iterations"
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "doOneFloatIterationJS"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "buffer"
                        }
                      ]
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
        "name": "makeFloatBuffer"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "size"
        }
      ],
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
                  "name": "buffer"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "ArrayBuffer"
                  },
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "name": "size"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16"
                      }
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
                  "name": "view"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "DataView"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "buffer"
                    }
                  ]
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
                "name": "size"
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
                        "name": "view"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "setFloat64"
                      }
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 16,
                          "raw": "16"
                        }
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "Math"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "log10"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        ]
                      }
                    ]
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
                        "name": "view"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "setFloat32"
                      }
                    },
                    "arguments": [
                      {
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
                            "value": 16,
                            "raw": "16"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8"
                        }
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "Math"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "sqrt"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          }
                        ]
                      }
                    ]
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
                        "name": "view"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "setFloat32"
                      }
                    },
                    "arguments": [
                      {
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
                            "value": 16,
                            "raw": "16"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 12,
                          "raw": "12"
                        }
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "Math"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "cos"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "i"
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "buffer"
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
        "name": "doOneFloatIterationDV"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "buffer"
        }
      ],
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
                  "name": "sum"
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
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "view"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "DataView"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "buffer"
                    }
                  ]
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "view"
                },
                "property": {
                  "type": "Identifier",
                  "name": "byteLength"
                }
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "name": "i"
              },
              "right": {
                "type": "Literal",
                "value": 16,
                "raw": "16"
              }
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
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "view"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getFloat64"
                        }
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
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "view"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getFloat32"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 8,
                            "raw": "8"
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "view"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "getFloat32"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 12,
                            "raw": "12"
                          }
                        }
                      ]
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
        "name": "doOneFloatIterationJS"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "buffer"
        }
      ],
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
                  "name": "sum"
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
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "float32array"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Float32Array"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "buffer"
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
                  "name": "float64array"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Float64Array"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "buffer"
                    }
                  ]
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "buffer"
                },
                "property": {
                  "type": "Identifier",
                  "name": "byteLength"
                }
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "name": "i"
              },
              "right": {
                "type": "Literal",
                "value": 16,
                "raw": "16"
              }
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
                      "name": "sum"
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "float64array"
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8"
                        }
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "float32array"
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "float32array"
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "/",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
                        }
                      }
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
        "name": "BigEndian"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "buffer"
        },
        {
          "type": "Identifier",
          "name": "opt_byteOffset"
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
                  "name": "uint8View_"
                }
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Uint8Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "buffer"
                  },
                  {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "name": "opt_byteOffset"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
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
                "computed": false,
                "object": {
                  "type": "ThisExpression"
                },
                "property": {
                  "type": "Identifier",
                  "name": "int8View_"
                }
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Int8Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "buffer"
                  },
                  {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "name": "opt_byteOffset"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "BigEndian"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "getInt8"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "byteOffset"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "int8View_"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "byteOffset"
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "BigEndian"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "getUint8"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "byteOffset"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "uint8View_"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "byteOffset"
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "BigEndian"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "getInt16"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "byteOffset"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "|",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "uint8View_"
                      }
                    },
                    "property": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "byteOffset"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "<<",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "int8View_"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "byteOffset"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 8,
                      "raw": "8"
                    }
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "BigEndian"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "getUint16"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "byteOffset"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "|",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "uint8View_"
                      }
                    },
                    "property": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "byteOffset"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "<<",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "uint8View_"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "byteOffset"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 8,
                      "raw": "8"
                    }
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "BigEndian"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "getInt32"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "byteOffset"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "|",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "|",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "|",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "uint8View_"
                          }
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "byteOffset"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3"
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "<<",
                        "left": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "uint8View_"
                            }
                          },
                          "property": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "byteOffset"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8"
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "<<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "uint8View_"
                          }
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "byteOffset"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16"
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "<<",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "int8View_"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "byteOffset"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 24,
                      "raw": "24"
                    }
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "BigEndian"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "getUint32"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "byteOffset"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "uint8View_"
                          }
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "byteOffset"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3"
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "<<",
                        "left": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "uint8View_"
                            }
                          },
                          "property": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "byteOffset"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8"
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "<<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "uint8View_"
                          }
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "byteOffset"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16"
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "uint8View_"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "byteOffset"
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 24,
                        "raw": "24"
                      }
                    }
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "LittleEndian"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "buffer"
        },
        {
          "type": "Identifier",
          "name": "opt_byteOffset"
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
                  "name": "uint8View_"
                }
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Uint8Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "buffer"
                  },
                  {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "name": "opt_byteOffset"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
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
                "computed": false,
                "object": {
                  "type": "ThisExpression"
                },
                "property": {
                  "type": "Identifier",
                  "name": "int8View_"
                }
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Int8Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "buffer"
                  },
                  {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "name": "opt_byteOffset"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "LittleEndian"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "getInt8"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "byteOffset"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "int8View_"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "byteOffset"
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "LittleEndian"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "getUint8"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "byteOffset"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "uint8View_"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "byteOffset"
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "LittleEndian"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "getInt16"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "byteOffset"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "|",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "uint8View_"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "byteOffset"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "<<",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "int8View_"
                        }
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "name": "byteOffset"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 8,
                      "raw": "8"
                    }
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "LittleEndian"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "getUint16"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "byteOffset"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "|",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "uint8View_"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "byteOffset"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "<<",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "uint8View_"
                        }
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "name": "byteOffset"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 8,
                      "raw": "8"
                    }
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "LittleEndian"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "getInt32"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "byteOffset"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "|",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "|",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "|",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "uint8View_"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "byteOffset"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "<<",
                        "left": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "uint8View_"
                            }
                          },
                          "property": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "byteOffset"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8"
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "<<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "uint8View_"
                          }
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "byteOffset"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16"
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "<<",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "int8View_"
                        }
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "name": "byteOffset"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 24,
                      "raw": "24"
                    }
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "LittleEndian"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "getUint32"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "byteOffset"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "uint8View_"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "byteOffset"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "<<",
                        "left": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "uint8View_"
                            }
                          },
                          "property": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "byteOffset"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8"
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "<<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "uint8View_"
                          }
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "byteOffset"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16"
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "uint8View_"
                        }
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "name": "byteOffset"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 24,
                        "raw": "24"
                      }
                    }
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
    }
  ],
  "sourceType": "script"
}