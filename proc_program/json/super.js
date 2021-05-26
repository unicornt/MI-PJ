{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'"
      },
      "directive": "use strict"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "SuperBenchmark"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "BenchmarkSuite"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "Super",
                "raw": "'Super'"
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 100,
                    "raw": "100"
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
                        "value": "SuperMethodCall",
                        "raw": "'SuperMethodCall'"
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
                        "name": "SuperMethodCall"
                      }
                    ]
                  },
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "Benchmark"
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "SuperGetterCall",
                        "raw": "'SuperGetterCall'"
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
                        "name": "SuperGetterCall"
                      }
                    ]
                  },
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "Benchmark"
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "SuperSetterCall",
                        "raw": "'SuperSetterCall'"
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
                        "name": "SuperSetterCall"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Base"
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "key": {
              "type": "Identifier",
              "name": "constructor"
            },
            "computed": false,
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "body": []
              },
              "generator": false,
              "expression": false,
              "async": false
            },
            "kind": "constructor",
            "static": false
          },
          {
            "type": "MethodDefinition",
            "key": {
              "type": "Identifier",
              "name": "x"
            },
            "computed": false,
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "_x"
                        }
                      },
                      "prefix": false
                    }
                  }
                ]
              },
              "generator": false,
              "expression": false,
              "async": false
            },
            "kind": "get",
            "static": false
          },
          {
            "type": "MethodDefinition",
            "key": {
              "type": "Identifier",
              "name": "x"
            },
            "computed": false,
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "name": "v"
                }
              ],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "_x"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "v"
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "_x"
                      }
                    }
                  }
                ]
              },
              "generator": false,
              "expression": false,
              "async": false
            },
            "kind": "set",
            "static": false
          },
          {
            "type": "MethodDefinition",
            "key": {
              "type": "Identifier",
              "name": "f"
            },
            "computed": false,
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "_x"
                        }
                      },
                      "prefix": false
                    }
                  }
                ]
              },
              "generator": false,
              "expression": false,
              "async": false
            },
            "kind": "method",
            "static": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Derived"
      },
      "superClass": {
        "type": "Identifier",
        "name": "Base"
      },
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "key": {
              "type": "Identifier",
              "name": "constructor"
            },
            "computed": false,
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "_x"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                ]
              },
              "generator": false,
              "expression": false,
              "async": false
            },
            "kind": "constructor",
            "static": false
          },
          {
            "type": "MethodDefinition",
            "key": {
              "type": "Identifier",
              "name": "SuperCall"
            },
            "computed": false,
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
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
                          "type": "Super"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "f"
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
            "kind": "method",
            "static": false
          },
          {
            "type": "MethodDefinition",
            "key": {
              "type": "Identifier",
              "name": "GetterCall"
            },
            "computed": false,
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Super"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "x"
                      }
                    }
                  }
                ]
              },
              "generator": false,
              "expression": false,
              "async": false
            },
            "kind": "method",
            "static": false
          },
          {
            "type": "MethodDefinition",
            "key": {
              "type": "Identifier",
              "name": "SetterCall"
            },
            "computed": false,
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Super"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "x"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5"
                      }
                    }
                  }
                ]
              },
              "generator": false,
              "expression": false,
              "async": false
            },
            "kind": "method",
            "static": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "derived"
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "Derived"
            },
            "arguments": []
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "SuperMethodCall"
      },
      "params": [],
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
                  "name": "derived"
                },
                "property": {
                  "type": "Identifier",
                  "name": "SuperCall"
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "SuperGetterCall"
      },
      "params": [],
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
                  "name": "derived"
                },
                "property": {
                  "type": "Identifier",
                  "name": "GetterCall"
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "SuperSetterCall"
      },
      "params": [],
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
                  "name": "derived"
                },
                "property": {
                  "type": "Identifier",
                  "name": "SetterCall"
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
    }
  ],
  "sourceType": "script"
}