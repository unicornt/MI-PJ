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
            "name": "SetSmiBenchmark"
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
                "value": "Set-Smi",
                "raw": "'Set-Smi'"
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
                        "name": "SetAddSmi"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupSmiBase"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
                        "name": "SetHasSmi"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupSmi"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
                        "name": "SetDeleteSmi"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupSmi"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
            "name": "SetStringBenchmark"
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
                "value": "Set-String",
                "raw": "'Set-String'"
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
                        "name": "SetAddString"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupStringBase"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
                        "name": "SetHasString"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupString"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
                        "name": "SetDeleteString"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupString"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
            "name": "SetObjectBenchmark"
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
                "value": "Set-Object",
                "raw": "'Set-Object'"
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
                        "name": "SetAddObject"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupObjectBase"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
                        "name": "SetHasObject"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupObject"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
                        "name": "SetDeleteObject"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupObject"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
            "name": "SetDoubleBenchmark"
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
                "value": "Set-Double",
                "raw": "'Set-Double'"
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
                        "name": "SetAddDouble"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupDoubleBase"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
                        "name": "SetHasDouble"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupDouble"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
                        "name": "SetDeleteDouble"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupDouble"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
            "name": "SetIterationBenchmark"
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
                "value": "Set-Iteration",
                "raw": "'Set-Iteration'"
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
                        "value": "ForEach",
                        "raw": "'ForEach'"
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
                        "name": "SetForEach"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupSmi"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
            "name": "SetIterationBenchmark"
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
                "value": "Set-Iterator",
                "raw": "'Set-Iterator'"
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
                        "value": "Iterator",
                        "raw": "'Iterator'"
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
                        "name": "SetIterator"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetSetupSmi"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
            "name": "SetConstructorBenchmark"
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
                "value": "Set-Constructor",
                "raw": "'Set-Constructor'"
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
                        "value": "Smi",
                        "raw": "'Smi'"
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
                        "name": "SetConstructorSmi"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetupSmiKeys"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
                        "name": "SetConstructorString"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetupStringKeys"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
                        "value": "Object",
                        "raw": "'Object'"
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
                        "name": "SetConstructorObject"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetupObjectKeys"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
                        "value": "Double",
                        "raw": "'Double'"
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
                        "name": "SetConstructorDouble"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetupDoubleKeys"
                      },
                      {
                        "type": "Identifier",
                        "name": "SetTearDown"
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
            "name": "set"
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
        "name": "SetSetupSmiBase"
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
                "name": "SetupSmiKeys"
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
                "name": "set"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Set"
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
        "name": "SetSetupSmi"
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
                "name": "SetSetupSmiBase"
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
                "name": "SetAddSmi"
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
        "name": "SetSetupStringBase"
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
                "name": "SetupStringKeys"
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
                "name": "set"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Set"
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
        "name": "SetSetupString"
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
                "name": "SetSetupStringBase"
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
                "name": "SetAddString"
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
        "name": "SetSetupObjectBase"
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
                "name": "set"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Set"
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
        "name": "SetSetupObject"
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
                "name": "SetSetupObjectBase"
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
                "name": "SetAddObject"
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
        "name": "SetSetupDoubleBase"
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
                "name": "SetupDoubleKeys"
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
                "name": "set"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Set"
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
        "name": "SetSetupDouble"
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
                "name": "SetSetupDoubleBase"
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
                "name": "SetAddDouble"
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
        "name": "SetTearDown"
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
                "name": "set"
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
        "name": "SetConstructorSmi"
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
                "name": "set"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Set"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "keys"
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
        "name": "SetAddSmi"
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
                        "name": "set"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "add"
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
        "name": "SetHasSmi"
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
                          "name": "set"
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
                        "name": "set"
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
        "name": "SetDeleteSmi"
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
                        "name": "set"
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
        "name": "SetConstructorString"
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
                "name": "set"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Set"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "keys"
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
        "name": "SetAddString"
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
                        "name": "set"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "add"
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
        "name": "SetHasString"
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
                          "name": "set"
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
                        "name": "set"
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
        "name": "SetDeleteString"
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
                        "name": "set"
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
        "name": "SetConstructorObject"
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
                "name": "set"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Set"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "keys"
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
        "name": "SetAddObject"
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
                        "name": "set"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "add"
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
        "name": "SetHasObject"
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
                          "name": "set"
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
                        "name": "set"
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
        "name": "SetDeleteObject"
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
                        "name": "set"
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
        "name": "SetConstructorDouble"
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
                "name": "set"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Set"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "keys"
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
        "name": "SetAddDouble"
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
                        "name": "set"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "add"
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
        "name": "SetHasDouble"
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
                          "name": "set"
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
                        "name": "set"
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
        "name": "SetDeleteDouble"
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
                        "name": "set"
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
        "name": "SetForEach"
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "set"
                },
                "property": {
                  "type": "Identifier",
                  "name": "forEach"
                }
              },
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "v"
                    },
                    {
                      "type": "Identifier",
                      "name": "k"
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "!==",
                          "left": {
                            "type": "Identifier",
                            "name": "v"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "k"
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
                  },
                  "generator": false,
                  "expression": false,
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
        "name": "SetIterator"
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
                  "name": "result"
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
            "type": "ForOfStatement",
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "v"
                  },
                  "init": null
                }
              ],
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "name": "set"
            },
            "body": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "+=",
                "left": {
                  "type": "Identifier",
                  "name": "result"
                },
                "right": {
                  "type": "Identifier",
                  "name": "v"
                }
              }
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
    }
  ],
  "sourceType": "script"
}