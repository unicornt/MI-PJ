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
            "value": "ES6",
            "raw": "'ES6'"
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
                    "value": "ES6",
                    "raw": "'ES6'"
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
                    "name": "ES6"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Point"
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
              "params": [
                {
                  "type": "Identifier",
                  "name": "x"
                },
                {
                  "type": "Identifier",
                  "name": "y"
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "x"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "x"
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
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "y"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "y"
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
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "id": {
        "type": "Identifier",
        "name": "MyPoint"
      },
      "superClass": {
        "type": "Identifier",
        "name": "Point"
      },
      "body": {
        "type": "ClassBody",
        "body": []
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "makePoint"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "x"
        },
        {
          "type": "Identifier",
          "name": "y"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "name": "MyPoint"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "x"
                },
                {
                  "type": "Identifier",
                  "name": "y"
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
        "name": "ES6"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "makePoint"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2"
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