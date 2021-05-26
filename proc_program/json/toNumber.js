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
            "name": "A"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "name": "undefined"
              },
              {
                "type": "Literal",
                "value": 12,
                "raw": "12"
              },
              {
                "type": "Literal",
                "value": "123",
                "raw": "\"123\""
              }
            ]
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "NumberConstructor"
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
                  "name": "Number"
                },
                "property": {
                  "type": "Identifier",
                  "name": "isNaN"
                }
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Number"
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "A"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
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
                  "name": "Number"
                },
                "property": {
                  "type": "Identifier",
                  "name": "isNaN"
                }
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Number"
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "A"
                      },
                      "property": {
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
                  "name": "Number"
                },
                "property": {
                  "type": "Identifier",
                  "name": "isNaN"
                }
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Number"
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "A"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "createSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Constructor",
            "raw": "'Constructor'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "NumberConstructor"
          },
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "body": []
            },
            "generator": false,
            "expression": false,
            "async": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "NumberPlus"
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
                  "name": "Number"
                },
                "property": {
                  "type": "Identifier",
                  "name": "isNaN"
                }
              },
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "operator": "+",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "prefix": true
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
                  "name": "Number"
                },
                "property": {
                  "type": "Identifier",
                  "name": "isNaN"
                }
              },
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "operator": "+",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "prefix": true
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
                  "name": "Number"
                },
                "property": {
                  "type": "Identifier",
                  "name": "isNaN"
                }
              },
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "operator": "+",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "A"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "prefix": true
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
          "name": "createSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "UnaryPlus",
            "raw": "'UnaryPlus'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "NumberPlus"
          },
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "body": []
            },
            "generator": false,
            "expression": false,
            "async": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "NumberParseFloat"
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
                  "name": "Number"
                },
                "property": {
                  "type": "Identifier",
                  "name": "isNaN"
                }
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "parseFloat"
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "A"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
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
                  "name": "Number"
                },
                "property": {
                  "type": "Identifier",
                  "name": "isNaN"
                }
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "parseFloat"
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "A"
                      },
                      "property": {
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
                  "name": "Number"
                },
                "property": {
                  "type": "Identifier",
                  "name": "isNaN"
                }
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "parseFloat"
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "A"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "createSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "ParseFloat",
            "raw": "'ParseFloat'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "NumberParseFloat"
          },
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "body": []
            },
            "generator": false,
            "expression": false,
            "async": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}