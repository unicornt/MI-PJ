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
                  "name": "Internalize"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "s"
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
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "key": {
                                    "type": "Identifier",
                                    "name": "s"
                                  },
                                  "computed": true,
                                  "value": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
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
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
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
                      "name": "string"
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Internalize"
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "'a'"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "repeat"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 100,
                              "raw": "100"
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
                      "name": "pattern"
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
                      "name": "result"
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
                      "name": "setupString"
                    },
                    "init": {
                      "type": "ArrowFunctionExpression",
                      "id": null,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "pattern"
                        },
                        "right": {
                          "type": "Literal",
                          "value": ".",
                          "raw": "'.'"
                        }
                      },
                      "generator": false,
                      "expression": true,
                      "async": false
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
                      "name": "setupRegExp"
                    },
                    "init": {
                      "type": "ArrowFunctionExpression",
                      "id": null,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "pattern"
                        },
                        "right": {
                          "type": "Literal",
                          "value": {},
                          "raw": "/./g",
                          "regex": {
                            "pattern": ".",
                            "flags": "g"
                          }
                        }
                      },
                      "generator": false,
                      "expression": true,
                      "async": false
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
                      "name": "setupZeroWidth"
                    },
                    "init": {
                      "type": "ArrowFunctionExpression",
                      "id": null,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "pattern"
                        },
                        "right": {
                          "type": "Literal",
                          "value": {},
                          "raw": "/(?:)/g",
                          "regex": {
                            "pattern": "(?:)",
                            "flags": "g"
                          }
                        }
                      },
                      "generator": false,
                      "expression": true,
                      "async": false
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
                      "name": "setupZeroWidthUnicode"
                    },
                    "init": {
                      "type": "ArrowFunctionExpression",
                      "id": null,
                      "params": [],
                      "body": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "pattern"
                        },
                        "right": {
                          "type": "Literal",
                          "value": {},
                          "raw": "/(?:)/gu",
                          "regex": {
                            "pattern": "(?:)",
                            "flags": "gu"
                          }
                        }
                      },
                      "generator": false,
                      "expression": true,
                      "async": false
                    }
                  }
                ],
                "kind": "const"
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "benchIteratorCreation"
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
                              "name": "string"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "matchAll"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "pattern"
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
                  "name": "benchBuiltin"
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
                              "name": "match"
                            },
                            "init": null
                          }
                        ],
                        "kind": "const"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "string"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "matchAll"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "pattern"
                          }
                        ]
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
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "match"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
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
                  "name": "benchManualString"
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
                            "name": "regexp"
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "RegExp"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "pattern"
                              },
                              {
                                "type": "Literal",
                                "value": "g",
                                "raw": "'g'"
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
                            "name": "match"
                          },
                          "init": null
                        }
                      ],
                      "kind": "let"
                    },
                    {
                      "type": "WhileStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "!==",
                        "left": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "match"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "regexp"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "exec"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "string"
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null"
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
                                "type": "Identifier",
                                "name": "result"
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "match"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
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
                  "name": "benchManualRegExp"
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
                            "name": "match"
                          },
                          "init": null
                        }
                      ],
                      "kind": "let"
                    },
                    {
                      "type": "WhileStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "!==",
                        "left": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "match"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "pattern"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "exec"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "string"
                              }
                            ]
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null"
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
                                "type": "Identifier",
                                "name": "result"
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "match"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
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
                      "value": "StringMatchAllBuiltinRegExpIteratorCreation",
                      "raw": "'StringMatchAllBuiltinRegExpIteratorCreation'"
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20"
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
                              "value": "StringMatchAllBuiltinRegExpIteratorCreation",
                              "raw": "'StringMatchAllBuiltinRegExpIteratorCreation'"
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
                              "name": "benchIteratorCreation"
                            },
                            {
                              "type": "Identifier",
                              "name": "setupRegExp"
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
                      "value": "StringMatchAllBuiltinStringIteratorCreation",
                      "raw": "'StringMatchAllBuiltinStringIteratorCreation'"
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20"
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
                              "value": "StringMatchAllBuiltinStringIteratorCreation",
                              "raw": "'StringMatchAllBuiltinStringIteratorCreation'"
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
                              "name": "benchIteratorCreation"
                            },
                            {
                              "type": "Identifier",
                              "name": "setupString"
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
                      "value": "StringMatchAllBuiltinString",
                      "raw": "'StringMatchAllBuiltinString'"
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20"
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
                              "value": "StringMatchAllBuiltinString",
                              "raw": "'StringMatchAllBuiltinString'"
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
                              "name": "benchBuiltin"
                            },
                            {
                              "type": "Identifier",
                              "name": "setupString"
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
                      "value": "StringMatchAllManualString",
                      "raw": "'StringMatchAllManualString'"
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20"
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
                              "value": "StringMatchAllManualString",
                              "raw": "'StringMatchAllManualString'"
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
                              "name": "benchManualString"
                            },
                            {
                              "type": "Identifier",
                              "name": "setupString"
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
                      "value": "StringMatchAllBuiltinRegExp",
                      "raw": "'StringMatchAllBuiltinRegExp'"
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20"
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
                              "value": "StringMatchAllBuiltinRegExp",
                              "raw": "'StringMatchAllBuiltinRegExp'"
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
                              "name": "benchBuiltin"
                            },
                            {
                              "type": "Identifier",
                              "name": "setupRegExp"
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
                      "value": "StringMatchAllManualRegExp",
                      "raw": "'StringMatchAllManualRegExp'"
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20"
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
                              "value": "StringMatchAllManualRegExp",
                              "raw": "'StringMatchAllManualRegExp'"
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
                              "name": "benchManualRegExp"
                            },
                            {
                              "type": "Identifier",
                              "name": "setupRegExp"
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
                      "value": "StringMatchAllBuiltinZeroWidth",
                      "raw": "'StringMatchAllBuiltinZeroWidth'"
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20"
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
                              "value": "StringMatchAllBuiltinZeroWidth",
                              "raw": "'StringMatchAllBuiltinZeroWidth'"
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
                              "name": "benchBuiltin"
                            },
                            {
                              "type": "Identifier",
                              "name": "setupZeroWidth"
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
                      "value": "StringMatchAllBuiltinZeroWidthUnicode",
                      "raw": "'StringMatchAllBuiltinZeroWidthUnicode'"
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20"
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
                              "value": "StringMatchAllBuiltinZeroWidthUnicode",
                              "raw": "'StringMatchAllBuiltinZeroWidthUnicode'"
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
                              "name": "benchBuiltin"
                            },
                            {
                              "type": "Identifier",
                              "name": "setupZeroWidthUnicode"
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