{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "SimpleCtor"
      },
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
                "name": "RegExp"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "[Cz]",
                  "raw": "\"[Cz]\""
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
        "name": "FlagsCtor"
      },
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
                "name": "RegExp"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "[Cz]",
                  "raw": "\"[Cz]\""
                },
                {
                  "type": "Literal",
                  "value": "guiym",
                  "raw": "\"guiym\""
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
        "name": "SimpleCtorWithoutNew"
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
                "name": "RegExp"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "[Cz]",
                  "raw": "\"[Cz]\""
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
        "name": "FlagsCtorWithoutNew"
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
                "name": "RegExp"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "[Cz]",
                  "raw": "\"[Cz]\""
                },
                {
                  "type": "Literal",
                  "value": "guiym",
                  "raw": "\"guiym\""
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
        "name": "CtorWithRegExpPattern"
      },
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
                "name": "RegExp"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": {},
                  "raw": "/[Cz]/",
                  "regex": {
                    "pattern": "[Cz]",
                    "flags": ""
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "CtorWithRegExpPatternAndFlags"
      },
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
                "name": "RegExp"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": {},
                  "raw": "/[Cz]/",
                  "regex": {
                    "pattern": "[Cz]",
                    "flags": ""
                  }
                },
                {
                  "type": "Literal",
                  "value": "guiym",
                  "raw": "\"guiym\""
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
      "type": "ClassDeclaration",
      "id": {
        "type": "Identifier",
        "name": "SubRegExp"
      },
      "superClass": {
        "type": "Identifier",
        "name": "RegExp"
      },
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "key": {
              "type": "Identifier",
              "name": "source"
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
                      "type": "Literal",
                      "value": "[Cz]",
                      "raw": "\"[Cz]\""
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
              "name": "flags"
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
                      "type": "Literal",
                      "value": "guiym",
                      "raw": "\"guiym\""
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
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "CtorWithRegExpSubclassPattern"
      },
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
                "name": "RegExp"
              },
              "arguments": [
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "SubRegExp"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": {},
                      "raw": "/[Cz]/",
                      "regex": {
                        "pattern": "[Cz]",
                        "flags": ""
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "CtorWithUndefinedPattern"
      },
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
                "name": "RegExp"
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
        "name": "CtorWithFlagsAndUndefinedPattern"
      },
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
                "name": "RegExp"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "undefined"
                },
                {
                  "type": "Literal",
                  "value": "guiym",
                  "raw": "\"guiym\""
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "benchmarks"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "SimpleCtor"
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
                    "type": "Identifier",
                    "name": "FlagsCtor"
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
                    "type": "Identifier",
                    "name": "SimpleCtorWithoutNew"
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
                    "type": "Identifier",
                    "name": "FlagsCtorWithoutNew"
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
                    "type": "Identifier",
                    "name": "CtorWithRegExpPattern"
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
                    "type": "Identifier",
                    "name": "CtorWithRegExpPatternAndFlags"
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
                    "type": "Identifier",
                    "name": "CtorWithRegExpSubclassPattern"
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
                    "type": "Identifier",
                    "name": "CtorWithUndefinedPattern"
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
                    "type": "Identifier",
                    "name": "CtorWithFlagsAndUndefinedPattern"
                  },
                  {
                    "type": "Identifier",
                    "name": "undefined"
                  }
                ]
              }
            ]
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
}