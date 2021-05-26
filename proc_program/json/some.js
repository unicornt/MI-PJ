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
                  "name": "RunOptFastSome"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "multiple"
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
                          "name": "result"
                        },
                        "right": {
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
                              "name": "some"
                            }
                          },
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "i"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "a"
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "operator": "!==",
                                "left": {
                                  "type": "Identifier",
                                  "name": "multiple"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3"
                                }
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
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
                      "name": "OptFastSome"
                    }
                  ]
                }
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "OptFastSome"
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
                          "name": "RunOptFastSome"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3"
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
                  "name": "side_effect"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "a"
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "a"
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
                    "name": "%NeverOptimizeFunction"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "side_effect"
                    }
                  ]
                }
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "OptUnreliableSome"
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
                              "name": "array"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "some"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "func"
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "side_effect"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "array"
                                }
                              ]
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
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "DefineHigherOrderTests"
                  },
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "DoubleSome",
                              "raw": "'DoubleSome'"
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "newClosure"
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "some",
                                  "raw": "'some'"
                                }
                              ]
                            },
                            {
                              "type": "Identifier",
                              "name": "DoubleSetup"
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "v"
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0.0"
                                }
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
                            }
                          ]
                        },
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "SmiSome",
                              "raw": "'SmiSome'"
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "newClosure"
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "some",
                                  "raw": "'some'"
                                }
                              ]
                            },
                            {
                              "type": "Identifier",
                              "name": "SmiSetup"
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "v"
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 34343,
                                  "raw": "34343"
                                }
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
                            }
                          ]
                        },
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "FastSome",
                              "raw": "'FastSome'"
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "newClosure"
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "some",
                                  "raw": "'some'"
                                }
                              ]
                            },
                            {
                              "type": "Identifier",
                              "name": "FastSetup"
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "v"
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "hi",
                                  "raw": "'hi'"
                                }
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
                            }
                          ]
                        },
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "OptFastSome",
                              "raw": "'OptFastSome'"
                            },
                            {
                              "type": "Identifier",
                              "name": "OptFastSome"
                            },
                            {
                              "type": "Identifier",
                              "name": "FastSetup"
                            },
                            {
                              "type": "Identifier",
                              "name": "undefined"
                            }
                          ]
                        },
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "OptUnreliableSome",
                              "raw": "'OptUnreliableSome'"
                            },
                            {
                              "type": "Identifier",
                              "name": "OptUnreliableSome"
                            },
                            {
                              "type": "Identifier",
                              "name": "FastSetup"
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "v"
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "name": "v"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "hi",
                                  "raw": "'hi'"
                                }
                              },
                              "generator": false,
                              "expression": true,
                              "async": false
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