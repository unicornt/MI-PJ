{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "NumberToLocaleString"
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Number"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "toLocaleString"
                }
              },
              "arguments": []
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Number"
                  },
                  "arguments": [
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12"
                      },
                      "prefix": true
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "toLocaleString"
                }
              },
              "arguments": []
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Number"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 13,
                      "raw": "13"
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "toLocaleString"
                }
              },
              "arguments": []
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Number"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 123456789,
                      "raw": "123456789"
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "toLocaleString"
                }
              },
              "arguments": []
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Number"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1234567.89,
                      "raw": "1234567.89"
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "toLocaleString"
                }
              },
              "arguments": []
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Number"
                  },
                  "arguments": [
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 123456789,
                        "raw": "123456789"
                      },
                      "prefix": true
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "toLocaleString"
                }
              },
              "arguments": []
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Number"
                  },
                  "arguments": [
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1234567.89,
                        "raw": "1234567.89"
                      },
                      "prefix": true
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "toLocaleString"
                }
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
            "value": "toLocaleString",
            "raw": "'toLocaleString'"
          },
          {
            "type": "Literal",
            "value": 100000,
            "raw": "100000"
          },
          {
            "type": "Identifier",
            "name": "NumberToLocaleString"
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