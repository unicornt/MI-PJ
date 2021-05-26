{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "params": [],
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
                      "type": "Literal",
                      "value": "Runtime.evaluate(String16Cstor)",
                      "raw": "'Runtime.evaluate(String16Cstor)'"
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
                              "value": "Runtime.evaluate(String16Cstor)",
                              "raw": "'Runtime.evaluate(String16Cstor)'"
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
                              "name": "EvaluateTest"
                            },
                            {
                              "type": "Identifier",
                              "name": "Setup"
                            },
                            {
                              "type": "Identifier",
                              "name": "TearDown"
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
                  "name": "Setup"
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
                          "name": "SendMessage"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "Runtime.evaluate",
                            "raw": "'Runtime.evaluate'"
                          },
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "key": {
                                  "type": "Identifier",
                                  "name": "expression"
                                },
                                "computed": false,
                                "value": {
                                  "type": "Literal",
                                  "value": "",
                                  "raw": "''"
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
                  "name": "TearDown"
                },
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": []
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "EvaluateTest"
                },
                "params": [],
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
                          "type": "Literal",
                          "value": 10,
                          "raw": "10"
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
                                "type": "Identifier",
                                "name": "SendMessage"
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "Runtime.evaluate",
                                  "raw": "'Runtime.evaluate'"
                                },
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "expression"
                                      },
                                      "computed": false,
                                      "value": {
                                        "type": "Literal",
                                        "value": "({})",
                                        "raw": "'({})'"
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "shorthand": false
                                    },
                                    {
                                      "type": "Property",
                                      "key": {
                                        "type": "Identifier",
                                        "name": "returnByValue"
                                      },
                                      "computed": false,
                                      "value": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true"
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
                        ]
                      }
                    }
                  ]
                },
                "generator": false,
                "expression": false,
                "async": false
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