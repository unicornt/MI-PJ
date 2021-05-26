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
            "value": "sort-base.js",
            "raw": "'sort-base.js'"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "SortAsc"
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
                  "name": "array_to_sort"
                },
                "property": {
                  "type": "Identifier",
                  "name": "sort"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "cmp_smaller"
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
        "name": "Random"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "length"
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
                "name": "array_to_sort"
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
                        "name": "array_to_sort"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "push"
                      }
                    },
                    "arguments": [
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
                            "name": "floor"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
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
                                  "name": "random"
                                }
                              },
                              "arguments": []
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "length"
                            }
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "AssertPackedSmiElements"
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
        "name": "Sorted"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "length"
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
                "name": "array_to_sort"
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
                        "name": "array_to_sort"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "push"
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
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "AssertPackedSmiElements"
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
        "name": "CreateSortSuitesForLength"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "length"
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
                "name": "createSortSuite"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": "Random",
                    "raw": "'Random'"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "length"
                  }
                },
                {
                  "type": "Literal",
                  "value": 1000,
                  "raw": "1000"
                },
                {
                  "type": "Identifier",
                  "name": "SortAsc"
                },
                {
                  "type": "ArrowFunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "Random"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "length"
                      }
                    ]
                  },
                  "generator": false,
                  "expression": true,
                  "async": false
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
                "name": "createSortSuite"
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": "Sorted",
                    "raw": "'Sorted'"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "length"
                  }
                },
                {
                  "type": "Literal",
                  "value": 1000,
                  "raw": "1000"
                },
                {
                  "type": "Identifier",
                  "name": "SortAsc"
                },
                {
                  "type": "ArrowFunctionExpression",
                  "id": null,
                  "params": [],
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "Sorted"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "length"
                      }
                    ]
                  },
                  "generator": false,
                  "expression": true,
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "CreateSortSuitesForLength"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10"
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
          "name": "CreateSortSuitesForLength"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 100,
            "raw": "100"
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
          "name": "CreateSortSuitesForLength"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
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
          "name": "CreateSortSuitesForLength"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 10000,
            "raw": "10000"
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
          "name": "CreateSortSuitesForLength"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 100000,
            "raw": "100000"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}