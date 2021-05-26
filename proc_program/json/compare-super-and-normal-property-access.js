{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "load"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "../base.js",
            "raw": "'../base.js'"
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
            "name": "BENCHMARK_NAME"
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "name": "arguments"
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0"
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
            "name": "TEST_TYPE"
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "name": "arguments"
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1"
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
            "name": "optimize_param"
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "name": "arguments"
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2"
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
            "name": "optimize"
          },
          "init": null
        }
      ],
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "name": "optimize_param"
        },
        "right": {
          "type": "Literal",
          "value": "opt",
          "raw": "\"opt\""
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
                "name": "optimize"
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true"
              }
            }
          }
        ]
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "BinaryExpression",
          "operator": "==",
          "left": {
            "type": "Identifier",
            "name": "optimize_param"
          },
          "right": {
            "type": "Literal",
            "value": "noopt",
            "raw": "\"noopt\""
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
                  "name": "optimize"
                },
                "right": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false"
                }
              }
            }
          ]
        },
        "alternate": {
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
                    "type": "Literal",
                    "value": "Test configuration error",
                    "raw": "\"Test configuration error\""
                  }
                ]
              }
            }
          ]
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
            "name": "DETERMINISTIC_RUNS"
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1"
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
            "name": "LOCAL_ITERATIONS"
          },
          "init": {
            "type": "Literal",
            "value": 10000,
            "raw": "10000"
          }
        }
      ],
      "kind": "const"
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
            "type": "Identifier",
            "name": "BENCHMARK_NAME"
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
                    "type": "Identifier",
                    "name": "BENCHMARK_NAME"
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
                    "type": "Identifier",
                    "name": "DETERMINISTIC_RUNS"
                  },
                  {
                    "type": "Identifier",
                    "name": "runBenchmark"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "id": {
        "type": "Identifier",
        "name": "A"
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "body": []
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "A"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_a0"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "A"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_a1"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "A"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_a2"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "A"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_a3"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "A"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_a4"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "A"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_a5"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "A"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_a6"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "A"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_a7"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "A"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_a8"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "A"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_a9"
          }
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10"
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "id": {
        "type": "Identifier",
        "name": "B"
      },
      "superClass": {
        "type": "Identifier",
        "name": "A"
      },
      "body": {
        "type": "ClassBody",
        "body": []
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
              "name": "B"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_b0"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "B"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_b1"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "B"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_b2"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "B"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_b3"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "B"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_b4"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "B"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_b5"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "B"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_b6"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "B"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_b7"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "B"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_b8"
          }
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "B"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "super_prop_b9"
          }
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10"
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "id": {
        "type": "Identifier",
        "name": "C"
      },
      "superClass": {
        "type": "Identifier",
        "name": "B"
      },
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "key": {
              "type": "Identifier",
              "name": "test_super_a"
            },
            "computed": false,
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "name": "unused"
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
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
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
                                        "computed": false,
                                        "object": {
                                          "type": "Super"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "super_prop_a0"
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Super"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "super_prop_a1"
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Super"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "super_prop_a2"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Super"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "super_prop_a3"
                                    }
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Super"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "super_prop_a4"
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Super"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "super_prop_a5"
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Super"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "super_prop_a6"
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Super"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "super_prop_a7"
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Super"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "super_prop_a8"
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Super"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "super_prop_a9"
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
            "kind": "method",
            "static": false
          },
          {
            "type": "MethodDefinition",
            "key": {
              "type": "Identifier",
              "name": "test_super_b"
            },
            "computed": false,
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "name": "unused"
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
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
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
                                        "computed": false,
                                        "object": {
                                          "type": "Super"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "super_prop_b0"
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Super"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "super_prop_b1"
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Super"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "super_prop_b2"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Super"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "super_prop_b3"
                                    }
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Super"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "super_prop_b4"
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Super"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "super_prop_b5"
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Super"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "super_prop_b6"
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Super"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "super_prop_b7"
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Super"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "super_prop_b8"
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Super"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "super_prop_b9"
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
            "kind": "method",
            "static": false
          }
        ]
      }
    },
    {
      "type": "EmptyStatement"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "createClasses"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "base"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "id": {
              "type": "Identifier",
              "name": "B"
            },
            "superClass": {
              "type": "Identifier",
              "name": "base"
            },
            "body": {
              "type": "ClassBody",
              "body": []
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "B"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prototype"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "super_prop_b0"
                }
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "B"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prototype"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "super_prop_b1"
                }
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "B"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prototype"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "super_prop_b2"
                }
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "B"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prototype"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "super_prop_b3"
                }
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "B"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prototype"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "super_prop_b4"
                }
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "B"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prototype"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "super_prop_b5"
                }
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "B"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prototype"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "super_prop_b6"
                }
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "B"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prototype"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "super_prop_b7"
                }
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "B"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prototype"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "super_prop_b8"
                }
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "B"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prototype"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "super_prop_b9"
                }
              },
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10"
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "id": {
              "type": "Identifier",
              "name": "C"
            },
            "superClass": {
              "type": "Identifier",
              "name": "B"
            },
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "key": {
                    "type": "Identifier",
                    "name": "test_super_a"
                  },
                  "computed": false,
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "unused"
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
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
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
                                              "computed": false,
                                              "object": {
                                                "type": "Super"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "super_prop_a0"
                                              }
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Super"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "super_prop_a1"
                                              }
                                            }
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Super"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "super_prop_a2"
                                            }
                                          }
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Super"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "super_prop_a3"
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Super"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "super_prop_a4"
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Super"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "super_prop_a5"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Super"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "super_prop_a6"
                                    }
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Super"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "super_prop_a7"
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Super"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "super_prop_a8"
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Super"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "super_prop_a9"
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
                  "kind": "method",
                  "static": false
                },
                {
                  "type": "MethodDefinition",
                  "key": {
                    "type": "Identifier",
                    "name": "test_super_b"
                  },
                  "computed": false,
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "unused"
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
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
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
                                              "computed": false,
                                              "object": {
                                                "type": "Super"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "super_prop_b0"
                                              }
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Super"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "super_prop_b1"
                                              }
                                            }
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Super"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "super_prop_b2"
                                            }
                                          }
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Super"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "super_prop_b3"
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Super"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "super_prop_b4"
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Super"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "super_prop_b5"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Super"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "super_prop_b6"
                                    }
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Super"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "super_prop_b7"
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Super"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "super_prop_b8"
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Super"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "super_prop_b9"
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
                  "kind": "method",
                  "static": false
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "C"
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
        "name": "test_property_access"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "o"
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
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
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
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "o"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "prop0"
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "o"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "prop1"
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "o"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "prop2"
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "o"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "prop3"
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "o"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "prop4"
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "o"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "prop5"
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "prop6"
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "o"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "prop7"
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "o"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prop8"
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "o"
                },
                "property": {
                  "type": "Identifier",
                  "name": "prop9"
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "objects"
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
            "name": "tested_functions"
          },
          "init": null
        }
      ],
      "kind": "let"
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "name": "TEST_TYPE"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "super_1",
            "raw": "\"super_1\""
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "objects"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "C"
                      },
                      "arguments": []
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
                  "type": "Identifier",
                  "name": "tested_functions"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "C"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "prototype"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "test_super_a"
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "normal_1",
            "raw": "\"normal_1\""
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "objects"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "__proto__"
                          },
                          "computed": false,
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Literal",
                                  "value": "prop0",
                                  "raw": "\"prop0\""
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Literal",
                                  "value": "prop1",
                                  "raw": "\"prop1\""
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Literal",
                                  "value": "prop2",
                                  "raw": "\"prop2\""
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Literal",
                                  "value": "prop3",
                                  "raw": "\"prop3\""
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Literal",
                                  "value": "prop4",
                                  "raw": "\"prop4\""
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Literal",
                                  "value": "prop5",
                                  "raw": "\"prop5\""
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Literal",
                                  "value": "prop6",
                                  "raw": "\"prop6\""
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Literal",
                                  "value": "prop7",
                                  "raw": "\"prop7\""
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Literal",
                                  "value": "prop8",
                                  "raw": "\"prop8\""
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                              },
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Literal",
                                  "value": "prop9",
                                  "raw": "\"prop9\""
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10"
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
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "tested_functions"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "name": "test_property_access"
                    }
                  ]
                }
              }
            },
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "super_2",
            "raw": "\"super_2\""
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "objects"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "C"
                      },
                      "arguments": []
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
                  "type": "Identifier",
                  "name": "tested_functions"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "C"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "prototype"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "test_super_b"
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "normal_2",
            "raw": "\"normal_2\""
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "objects"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop0",
                            "raw": "\"prop0\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop1",
                            "raw": "\"prop1\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop2",
                            "raw": "\"prop2\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop3",
                            "raw": "\"prop3\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop4",
                            "raw": "\"prop4\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop5",
                            "raw": "\"prop5\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop6",
                            "raw": "\"prop6\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop7",
                            "raw": "\"prop7\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop8",
                            "raw": "\"prop8\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop9",
                            "raw": "\"prop9\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
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
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "tested_functions"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "name": "test_property_access"
                    }
                  ]
                }
              }
            },
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "super_3",
            "raw": "\"super_3\""
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "objects"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": []
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
                  "name": "tested_functions"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": []
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
                  "value": 5,
                  "raw": "5"
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
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "c"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "createClasses"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "A"
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "objects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "c"
                          },
                          "arguments": []
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
                          "name": "tested_functions"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "c"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "prototype"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "test_super_a"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "normal_3",
            "raw": "\"normal_3\""
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "proto"
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "prop0",
                          "raw": "\"prop0\""
                        },
                        "computed": false,
                        "value": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10"
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "prop1",
                          "raw": "\"prop1\""
                        },
                        "computed": false,
                        "value": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10"
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "prop2",
                          "raw": "\"prop2\""
                        },
                        "computed": false,
                        "value": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10"
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "prop3",
                          "raw": "\"prop3\""
                        },
                        "computed": false,
                        "value": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10"
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "prop4",
                          "raw": "\"prop4\""
                        },
                        "computed": false,
                        "value": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10"
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "prop5",
                          "raw": "\"prop5\""
                        },
                        "computed": false,
                        "value": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10"
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "prop6",
                          "raw": "\"prop6\""
                        },
                        "computed": false,
                        "value": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10"
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "prop7",
                          "raw": "\"prop7\""
                        },
                        "computed": false,
                        "value": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10"
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "prop8",
                          "raw": "\"prop8\""
                        },
                        "computed": false,
                        "value": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10"
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Literal",
                          "value": "prop9",
                          "raw": "\"prop9\""
                        },
                        "computed": false,
                        "value": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10"
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
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
                  "name": "objects"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "__proto__"
                          },
                          "computed": false,
                          "value": {
                            "type": "Identifier",
                            "name": "proto"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "__proto__"
                          },
                          "computed": false,
                          "value": {
                            "type": "Identifier",
                            "name": "proto"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "__proto__"
                          },
                          "computed": false,
                          "value": {
                            "type": "Identifier",
                            "name": "proto"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "__proto__"
                          },
                          "computed": false,
                          "value": {
                            "type": "Identifier",
                            "name": "proto"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "__proto__"
                          },
                          "computed": false,
                          "value": {
                            "type": "Identifier",
                            "name": "proto"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "d",
                            "raw": "\"d\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
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
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "tested_functions"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "name": "test_property_access"
                    },
                    {
                      "type": "Identifier",
                      "name": "test_property_access"
                    },
                    {
                      "type": "Identifier",
                      "name": "test_property_access"
                    },
                    {
                      "type": "Identifier",
                      "name": "test_property_access"
                    },
                    {
                      "type": "Identifier",
                      "name": "test_property_access"
                    }
                  ]
                }
              }
            },
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "super_4",
            "raw": "\"super_4\""
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "objects"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": []
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
                  "name": "tested_functions"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": []
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
                  "value": 5,
                  "raw": "5"
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
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "c"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "createClasses"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "A"
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "objects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "c"
                          },
                          "arguments": []
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
                          "name": "tested_functions"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "c"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "prototype"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "test_super_b"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "normal_4",
            "raw": "\"normal_4\""
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "objects"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop0",
                            "raw": "\"prop0\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop1",
                            "raw": "\"prop1\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop2",
                            "raw": "\"prop2\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop3",
                            "raw": "\"prop3\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop4",
                            "raw": "\"prop4\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop5",
                            "raw": "\"prop5\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop6",
                            "raw": "\"prop6\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop7",
                            "raw": "\"prop7\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop8",
                            "raw": "\"prop8\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop9",
                            "raw": "\"prop9\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\""
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
                            "type": "Literal",
                            "value": "prop0",
                            "raw": "\"prop0\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop1",
                            "raw": "\"prop1\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop2",
                            "raw": "\"prop2\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop3",
                            "raw": "\"prop3\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop4",
                            "raw": "\"prop4\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop5",
                            "raw": "\"prop5\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop6",
                            "raw": "\"prop6\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop7",
                            "raw": "\"prop7\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop8",
                            "raw": "\"prop8\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop9",
                            "raw": "\"prop9\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\""
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
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\""
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
                            "type": "Literal",
                            "value": "prop0",
                            "raw": "\"prop0\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop1",
                            "raw": "\"prop1\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop2",
                            "raw": "\"prop2\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop3",
                            "raw": "\"prop3\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop4",
                            "raw": "\"prop4\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop5",
                            "raw": "\"prop5\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop6",
                            "raw": "\"prop6\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop7",
                            "raw": "\"prop7\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop8",
                            "raw": "\"prop8\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop9",
                            "raw": "\"prop9\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\""
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
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\""
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
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\""
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
                            "type": "Literal",
                            "value": "prop0",
                            "raw": "\"prop0\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop1",
                            "raw": "\"prop1\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop2",
                            "raw": "\"prop2\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop3",
                            "raw": "\"prop3\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop4",
                            "raw": "\"prop4\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop5",
                            "raw": "\"prop5\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop6",
                            "raw": "\"prop6\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop7",
                            "raw": "\"prop7\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop8",
                            "raw": "\"prop8\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop9",
                            "raw": "\"prop9\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\""
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
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\""
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
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\""
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
                            "type": "Literal",
                            "value": "d",
                            "raw": "\"d\""
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
                            "type": "Literal",
                            "value": "prop0",
                            "raw": "\"prop0\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop1",
                            "raw": "\"prop1\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop2",
                            "raw": "\"prop2\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop3",
                            "raw": "\"prop3\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop4",
                            "raw": "\"prop4\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop5",
                            "raw": "\"prop5\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop6",
                            "raw": "\"prop6\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop7",
                            "raw": "\"prop7\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop8",
                            "raw": "\"prop8\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Literal",
                            "value": "prop9",
                            "raw": "\"prop9\""
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
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
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "tested_functions"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "name": "test_property_access"
                    },
                    {
                      "type": "Identifier",
                      "name": "test_property_access"
                    },
                    {
                      "type": "Identifier",
                      "name": "test_property_access"
                    },
                    {
                      "type": "Identifier",
                      "name": "test_property_access"
                    },
                    {
                      "type": "Identifier",
                      "name": "test_property_access"
                    }
                  ]
                }
              }
            },
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
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
                    "type": "Literal",
                    "value": "Test configuration error",
                    "raw": "\"Test configuration error\""
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "type": "ForOfStatement",
      "left": {
        "type": "Identifier",
        "name": "f"
      },
      "right": {
        "type": "Identifier",
        "name": "tested_functions"
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "name": "optimize"
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%PrepareFunctionForOptimization"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "f"
                      }
                    ]
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%NeverOptimizeFunction"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "f"
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "runBenchmark"
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
                  "name": "expected_value"
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10"
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
                  "name": "ix"
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
                "name": "LOCAL_ITERATIONS"
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "object"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "objects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "ix"
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
                        "name": "r"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "tested_functions"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "ix"
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
                            "name": "object"
                          },
                          {
                            "type": "Identifier",
                            "name": "object"
                          }
                        ]
                      }
                    }
                  ],
                  "kind": "const"
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "!=",
                    "left": {
                      "type": "Identifier",
                      "name": "r"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "expected_value"
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
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "Test error",
                              "raw": "\"Test error\""
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "==",
                    "left": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "argument": {
                        "type": "Identifier",
                        "name": "ix"
                      },
                      "prefix": true
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "objects"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
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
                            "name": "ix"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "name": "optimize"
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ForOfStatement",
                              "left": {
                                "type": "Identifier",
                                "name": "f"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "tested_functions"
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "%OptimizeFunctionOnNextCall"
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "f"
                                        }
                                      ]
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "success"
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true"
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "PrintResult"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "name"
        },
        {
          "type": "Identifier",
          "name": "result"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "print"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "name": "name"
                    },
                    "right": {
                      "type": "Literal",
                      "value": "(Score): ",
                      "raw": "'(Score): '"
                    }
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
      "generator": false,
      "expression": false,
      "async": false
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "PrintError"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "name"
        },
        {
          "type": "Identifier",
          "name": "error"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "PrintResult"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "name"
                },
                {
                  "type": "Identifier",
                  "name": "error"
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
                "name": "success"
              },
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false"
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
              "name": "BenchmarkSuite"
            },
            "property": {
              "type": "Identifier",
              "name": "config"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "doWarmup"
          }
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false"
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
              "name": "BenchmarkSuite"
            },
            "property": {
              "type": "Identifier",
              "name": "config"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "doDeterministic"
          }
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true"
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
            "name": "BenchmarkSuite"
          },
          "property": {
            "type": "Identifier",
            "name": "RunSuites"
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
                  "name": "NotifyResult"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "PrintResult"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "NotifyError"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "PrintError"
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
  ],
  "sourceType": "script"
}