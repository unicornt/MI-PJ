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
            "value": "OneLineComment",
            "raw": "\"OneLineComment\""
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
                    "value": "OneLineComment",
                    "raw": "\"OneLineComment\""
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false"
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Identifier",
                    "name": "iterations"
                  },
                  {
                    "type": "Identifier",
                    "name": "Run"
                  },
                  {
                    "type": "Identifier",
                    "name": "OneLineCommentSetup"
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
            "value": "OneLineComments",
            "raw": "\"OneLineComments\""
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
                    "value": "OneLineComments",
                    "raw": "\"OneLineComments\""
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false"
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Identifier",
                    "name": "iterations"
                  },
                  {
                    "type": "Identifier",
                    "name": "Run"
                  },
                  {
                    "type": "Identifier",
                    "name": "OneLineCommentsSetup"
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
            "value": "MultiLineComment",
            "raw": "\"MultiLineComment\""
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
                    "value": "MultiLineComment",
                    "raw": "\"MultiLineComment\""
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false"
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Identifier",
                    "name": "iterations"
                  },
                  {
                    "type": "Identifier",
                    "name": "Run"
                  },
                  {
                    "type": "Identifier",
                    "name": "MultiLineCommentSetup"
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
        "name": "OneLineCommentSetup"
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
                "name": "code"
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "value": "//",
                  "raw": "\"//\""
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Literal",
                      "value": " This is a comment... ",
                      "raw": "\" This is a comment... \""
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "repeat"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 600,
                      "raw": "600"
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "%FlattenString"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "code"
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
        "name": "OneLineCommentsSetup"
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
                "name": "code"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Literal",
                    "value": "// This is a comment.\n",
                    "raw": "\"// This is a comment.\\n\""
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "repeat"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 600,
                    "raw": "600"
                  }
                ]
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "%FlattenString"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "code"
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
        "name": "MultiLineCommentSetup"
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
                "name": "code"
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": "/*",
                    "raw": "\"/*\""
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Literal",
                        "value": " This is a comment... ",
                        "raw": "\" This is a comment... \""
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "repeat"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 600,
                        "raw": "600"
                      }
                    ]
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "*/",
                  "raw": "\"*/\""
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "%FlattenString"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "code"
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
        "name": "Run"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "name": "code"
              },
              "right": {
                "type": "Identifier",
                "name": "undefined"
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
                        "value": "No test data",
                        "raw": "\"No test data\""
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "eval"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "code"
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