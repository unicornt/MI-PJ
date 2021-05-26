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
            "value": "SetFromDifferentType",
            "raw": "'SetFromDifferentType'"
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
                    "value": "SetFromDifferentType",
                    "raw": "'SetFromDifferentType'"
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
                    "name": "SetFromDifferentType"
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
            "name": "length"
          },
          "init": {
            "type": "Literal",
            "value": 16,
            "raw": "16"
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
            "name": "dest_arrays"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Uint8Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "length"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Int8Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "length"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Uint16Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "length"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Int16Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "length"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Uint32Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "length"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Int32Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "length"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Float32Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "length"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Float64Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "length"
                  }
                ]
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Uint8ClampedArray"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "length"
                  }
                ]
              }
            ]
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
            "name": "uint8_array"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "Uint8Array"
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "int32_array"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "Int32Array"
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "float32_array"
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
                "name": "length"
              }
            ]
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
            "name": "float64_array"
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
                "name": "length"
              }
            ]
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
          "type": "Identifier",
          "name": "length"
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
                  "name": "uint8_array"
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
                  "name": "int32_array"
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
                  "name": "float32_array"
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
                  "name": "float64_array"
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "SetFromDifferentType"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "left": {
              "type": "Identifier",
              "name": "typed_dest"
            },
            "right": {
              "type": "Identifier",
              "name": "dest_arrays"
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
                        "name": "typed_dest"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "set"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "uint8_array"
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
                        "name": "typed_dest"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "set"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "int32_array"
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
                        "name": "typed_dest"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "set"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "float32_array"
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
                        "name": "typed_dest"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "set"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "float64_array"
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