{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "benchy"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "fn"
        },
        {
          "type": "Identifier",
          "name": "name"
        }
      ],
      "body": {
        "type": "BlockStatement",
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
                  "type": "Identifier",
                  "name": "name"
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
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
                          "name": "name"
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true"
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
                          "name": "fn"
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
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "forLoop"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "array"
        },
        {
          "type": "Identifier",
          "name": "searchValue"
        }
      ],
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
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "array"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "searchValue"
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
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "farraylse"
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
        "name": "indexOf"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "array"
        },
        {
          "type": "Identifier",
          "name": "searchValue"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
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
                    "name": "indexOf"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "searchValue"
                  }
                ]
              },
              "right": {
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
        "name": "includes"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "array"
        },
        {
          "type": "Identifier",
          "name": "searchValue"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                  "name": "includes"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "searchValue"
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
            "name": "PACKED"
          },
          "init": {
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
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5"
              },
              {
                "type": "Literal",
                "value": 6,
                "raw": "6"
              },
              {
                "type": "Literal",
                "value": 7,
                "raw": "7"
              },
              {
                "type": "Literal",
                "value": 8,
                "raw": "8"
              },
              {
                "type": "Literal",
                "value": 9,
                "raw": "9"
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "value": 11,
                "raw": "11"
              },
              {
                "type": "Literal",
                "value": 12,
                "raw": "12"
              },
              {
                "type": "Literal",
                "value": 13,
                "raw": "13"
              },
              {
                "type": "Literal",
                "value": 14,
                "raw": "14"
              },
              {
                "type": "Literal",
                "value": 15,
                "raw": "15"
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
            "name": "HOLEY"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "Array"
            },
            "arguments": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "PACKED"
                },
                "property": {
                  "type": "Identifier",
                  "name": "length"
                }
              }
            ]
          }
        }
      ],
      "kind": "const"
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "PACKED"
          },
          "property": {
            "type": "Identifier",
            "name": "length"
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
        "prefix": true
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
              "name": "HOLEY"
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
              "name": "PACKED"
            },
            "property": {
              "type": "Identifier",
              "name": "i"
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "helper"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "fn"
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
                  "name": "SEARCH_VALUE"
                },
                "init": {
                  "type": "Literal",
                  "value": 15,
                  "raw": "15"
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
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "fn"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "PACKED"
                      },
                      {
                        "type": "Identifier",
                        "name": "SEARCH_VALUE"
                      }
                    ]
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "fn"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "HOLEY"
                      },
                      {
                        "type": "Identifier",
                        "name": "SEARCH_VALUE"
                      }
                    ]
                  }
                }
              }
            ],
            "kind": "const"
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "benchy"
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "helper"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "forLoop"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          },
          {
            "type": "Literal",
            "value": "for loop",
            "raw": "'for loop'"
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
          "name": "benchy"
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "helper"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "indexOf"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          },
          {
            "type": "Literal",
            "value": "Array#indexOf",
            "raw": "'Array#indexOf'"
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
          "name": "benchy"
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "helper"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "includes"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          },
          {
            "type": "Literal",
            "value": "Array#includes",
            "raw": "'Array#includes'"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}