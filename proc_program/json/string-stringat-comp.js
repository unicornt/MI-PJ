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
            "name": "input"
          },
          "init": {
            "type": "Literal",
            "value": "äϠ�𝌆 Lorem ipsum test test",
            "raw": "'äϠ�𝌆 Lorem ipsum test test'"
          }
        }
      ],
      "kind": "const"
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
                  "name": "input"
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
              "prefix": false
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
                        "type": "Identifier",
                        "name": "fn"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "input"
                        },
                        {
                          "type": "Identifier",
                          "name": "i"
                        },
                        {
                          "type": "Identifier",
                          "name": "i"
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
              "name": "sum"
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
        "name": "charCodeAt"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "str"
        },
        {
          "type": "Identifier",
          "name": "i"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "str"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "charCodeAt"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "i"
                  }
                ]
              },
              "right": {
                "type": "Literal",
                "value": 116,
                "raw": "116"
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
        "name": "charCodeAtBoth"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "str"
        },
        {
          "type": "Identifier",
          "name": "i"
        },
        {
          "type": "Identifier",
          "name": "j"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "str"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "charCodeAt"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "j"
                  }
                ]
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "str"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "charCodeAt"
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
        "name": "charAt"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "str"
        },
        {
          "type": "Identifier",
          "name": "i"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Literal",
                "value": "t",
                "raw": "'t'"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "str"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "charAt"
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
        "name": "charAtNever"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "str"
        },
        {
          "type": "Identifier",
          "name": "i"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Literal",
                "value": "𝌆",
                "raw": "'𝌆'"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "str"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "charAt"
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
        "name": "charAtBoth"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "str"
        },
        {
          "type": "Identifier",
          "name": "i"
        },
        {
          "type": "Identifier",
          "name": "j"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "str"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "charAt"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "j"
                  }
                ]
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "str"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "charAt"
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
        "name": "stringIndex"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "str"
        },
        {
          "type": "Identifier",
          "name": "i"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "str"
                },
                "property": {
                  "type": "Identifier",
                  "name": "i"
                }
              },
              "right": {
                "type": "Literal",
                "value": "t",
                "raw": "'t'"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "charCodeAt_const",
            "raw": "'charCodeAt_const'"
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
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
                  "name": "charCodeAt"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "charCodeAt_both",
            "raw": "'charCodeAt_both'"
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
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
                  "name": "charCodeAtBoth"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "charAt_const",
            "raw": "'charAt_const'"
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
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
                  "name": "charAt"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "charAt_never",
            "raw": "'charAt_never'"
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
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
                  "name": "charAtNever"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "charAt_both",
            "raw": "'charAt_both'"
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
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
                  "name": "charAtBoth"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "stringIndex_const",
            "raw": "'stringIndex_const'"
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
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
                  "name": "stringIndex"
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
  ],
  "sourceType": "script"
}