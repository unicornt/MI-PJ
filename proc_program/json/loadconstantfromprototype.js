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
            "value": "LoadConstantFromPrototype",
            "raw": "'LoadConstantFromPrototype'"
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
                    "value": "LoadConstantFromPrototype",
                    "raw": "'LoadConstantFromPrototype'"
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
                    "name": "LoadConstantFromPrototype"
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
        "name": "Foo"
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
      "type": "EmptyStatement"
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "Foo"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "bar"
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": []
        }
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "Foo"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "covfefe"
          }
        },
        "right": {
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
        }
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "Foo"
            },
            "property": {
              "type": "Identifier",
              "name": "prototype"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "baz"
          }
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "LoadConstantFromPrototype"
      },
      "params": [],
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
                  "name": "foo"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Foo"
                  },
                  "arguments": []
                }
              }
            ],
            "kind": "let"
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
                "type": "Literal",
                "value": 1000,
                "raw": "1000"
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
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "foo"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "bar"
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "foo"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "covfefe"
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "foo"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "baz"
                    }
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
  ],
  "sourceType": "script"
}