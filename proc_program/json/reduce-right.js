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
                  "name": "RunOptFastReduceRight"
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
                              "name": "reduceRight"
                            }
                          },
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "name": "p"
                                },
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
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "p"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "multiple"
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
                      "name": "OptFastReduceRight"
                    }
                  ]
                }
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "OptFastReduceRight"
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
                          "name": "RunOptFastReduceRight"
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
                  "name": "OptUnreliableReduceRight"
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
                              "name": "reduceRight"
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
                              "value": "DoubleReduceRight",
                              "raw": "'DoubleReduceRight'"
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
                                  "value": "reduceRight",
                                  "raw": "'reduceRight'"
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
                                  "name": "p"
                                },
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
                                  "name": "o"
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "p"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "v"
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
                              "value": "SmiReduceRight",
                              "raw": "'SmiReduceRight'"
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
                                  "value": "reduceRight",
                                  "raw": "'reduceRight'"
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
                                  "name": "p"
                                },
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
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "p"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
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
                              "value": "FastReduceRight",
                              "raw": "'FastReduceRight'"
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
                                  "value": "reduceRight",
                                  "raw": "'reduceRight'"
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
                                  "name": "p"
                                },
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
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "p"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "v"
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
                              "value": "OptFastReduceRight",
                              "raw": "'OptFastReduceRight'"
                            },
                            {
                              "type": "Identifier",
                              "name": "OptFastReduceRight"
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
                              "value": "OptUnreliableReduceRight",
                              "raw": "'OptUnreliableReduceRight'"
                            },
                            {
                              "type": "Identifier",
                              "name": "OptUnreliableReduceRight"
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
                                  "name": "p"
                                },
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
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "p"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "v"
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