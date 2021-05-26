{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "load"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "base.js",
            "raw": "\"base.js\""
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
            "name": "str"
          },
          "init": null
        }
      ],
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "re"
          },
          "init": null
        }
      ],
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "SimpleSplit"
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
                  "name": "str"
                },
                "property": {
                  "type": "Identifier",
                  "name": "split"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "re"
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
        "name": "Split1Setup"
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
                "name": "re"
              },
              "right": {
                "type": "Literal",
                "value": {},
                "raw": "/[Cz]/",
                "regex": {
                  "pattern": "[Cz]",
                  "flags": ""
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "str"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "createHaystack"
                },
                "arguments": []
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Split2Setup"
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
                "name": "re"
              },
              "right": {
                "type": "Literal",
                "value": {},
                "raw": "/[Cz]/u",
                "regex": {
                  "pattern": "[Cz]",
                  "flags": "u"
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "str"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "createHaystack"
                },
                "arguments": []
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Split3Setup"
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
                "name": "re"
              },
              "right": {
                "type": "Literal",
                "value": {},
                "raw": "/[Cz]/y",
                "regex": {
                  "pattern": "[Cz]",
                  "flags": "y"
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "str"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "createHaystack"
                },
                "arguments": []
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Split4Setup"
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
                "name": "re"
              },
              "right": {
                "type": "Literal",
                "value": {},
                "raw": "/[Cz]/uy",
                "regex": {
                  "pattern": "[Cz]",
                  "flags": "uy"
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "str"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "createHaystack"
                },
                "arguments": []
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Split5Setup"
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
                "name": "re"
              },
              "right": {
                "type": "Literal",
                "value": {},
                "raw": "/[Cz]/",
                "regex": {
                  "pattern": "[Cz]",
                  "flags": ""
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "str"
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\""
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Split6Setup"
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
                "name": "re"
              },
              "right": {
                "type": "Literal",
                "value": {},
                "raw": "/[cZ]/",
                "regex": {
                  "pattern": "[cZ]",
                  "flags": ""
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "str"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "createHaystack"
                },
                "arguments": []
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Split7Setup"
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
                "name": "re"
              },
              "right": {
                "type": "Literal",
                "value": {},
                "raw": "/[A-Za-z\\u0080-\\u00FF ]/",
                "regex": {
                  "pattern": "[A-Za-z\\u0080-\\u00FF ]",
                  "flags": ""
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "str"
              },
              "right": {
                "type": "Literal",
                "value": "hipopótamo maçã pólen ñ poção água língüa",
                "raw": "\"hipopótamo maçã pólen ñ poção água língüa\""
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
                    "name": "SimpleSplit"
                  },
                  {
                    "type": "Identifier",
                    "name": "Split1Setup"
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "SimpleSplit"
                  },
                  {
                    "type": "Identifier",
                    "name": "Split2Setup"
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "SimpleSplit"
                  },
                  {
                    "type": "Identifier",
                    "name": "Split3Setup"
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "SimpleSplit"
                  },
                  {
                    "type": "Identifier",
                    "name": "Split4Setup"
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "SimpleSplit"
                  },
                  {
                    "type": "Identifier",
                    "name": "Split5Setup"
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "SimpleSplit"
                  },
                  {
                    "type": "Identifier",
                    "name": "Split6Setup"
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "SimpleSplit"
                  },
                  {
                    "type": "Identifier",
                    "name": "Split7Setup"
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