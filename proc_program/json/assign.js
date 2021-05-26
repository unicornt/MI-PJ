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
            "value": "Assign",
            "raw": "'Assign'"
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
                    "value": "BasicAssign1",
                    "raw": "'BasicAssign1'"
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
                    "name": "BasicAssign1"
                  },
                  {
                    "type": "Identifier",
                    "name": "BasicAssign1Setup"
                  },
                  {
                    "type": "Identifier",
                    "name": "BasicAssign1TearDown"
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
                    "value": "BasicAssign3",
                    "raw": "'BasicAssign3'"
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
                    "name": "BasicAssign3"
                  },
                  {
                    "type": "Identifier",
                    "name": "BasicAssign3Setup"
                  },
                  {
                    "type": "Identifier",
                    "name": "BasicAssign3TearDown"
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
                    "value": "BasicAssignNull3",
                    "raw": "'BasicAssignNull3'"
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
                    "name": "BasicAssignNull3"
                  },
                  {
                    "type": "Identifier",
                    "name": "BasicAssignNull3Setup"
                  },
                  {
                    "type": "Identifier",
                    "name": "BasicAssignNull3TearDown"
                  }
                ]
              }
            ]
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
            "name": "object"
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
            "name": "src1"
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
            "name": "src2"
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
            "name": "src3"
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
            "name": "obj1"
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
            "name": "obj2"
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
        "name": "BasicAssign1Setup"
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
                "name": "object"
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
                "type": "Identifier",
                "name": "obj1"
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
                "type": "Identifier",
                "name": "obj2"
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
                "type": "Identifier",
                "name": "src1"
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "id"
                    },
                    "computed": false,
                    "value": {
                      "type": "Literal",
                      "value": "6930530530",
                      "raw": "\"6930530530\""
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "obj1"
                    },
                    "computed": false,
                    "value": {
                      "type": "Identifier",
                      "name": "obj1"
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "obj2"
                    },
                    "computed": false,
                    "value": {
                      "type": "Identifier",
                      "name": "obj2"
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "BasicAssign1"
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
                  "name": "Object"
                },
                "property": {
                  "type": "Identifier",
                  "name": "assign"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "object"
                },
                {
                  "type": "Identifier",
                  "name": "src1"
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
        "name": "BasicAssign1TearDown"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "object"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "id"
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "src1"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "id"
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "object"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "obj1"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "obj1"
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "object"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "obj2"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "obj2"
                }
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
        "name": "BasicAssign3Setup"
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
                "name": "object"
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
                "type": "Identifier",
                "name": "obj1"
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
                "type": "Identifier",
                "name": "obj2"
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
                "type": "Identifier",
                "name": "src1"
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "id"
                    },
                    "computed": false,
                    "value": {
                      "type": "Literal",
                      "value": "6930530530",
                      "raw": "\"6930530530\""
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                  }
                ]
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
                "name": "src2"
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "obj1"
                    },
                    "computed": false,
                    "value": {
                      "type": "Identifier",
                      "name": "obj1"
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                  }
                ]
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
                "name": "src3"
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "obj2"
                    },
                    "computed": false,
                    "value": {
                      "type": "Identifier",
                      "name": "obj2"
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "BasicAssign3"
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
                  "name": "Object"
                },
                "property": {
                  "type": "Identifier",
                  "name": "assign"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "object"
                },
                {
                  "type": "Identifier",
                  "name": "src1"
                },
                {
                  "type": "Identifier",
                  "name": "src2"
                },
                {
                  "type": "Identifier",
                  "name": "src3"
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
        "name": "BasicAssign3TearDown"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "object"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "id"
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "src1"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "id"
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "object"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "obj1"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "src2"
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "object"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "obj2"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "src3"
                }
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
        "name": "BasicAssignNull3Setup"
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
                "name": "object"
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
                "type": "Identifier",
                "name": "obj1"
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
                "type": "Identifier",
                "name": "obj2"
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
                "type": "Identifier",
                "name": "src1"
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "id"
                    },
                    "computed": false,
                    "value": {
                      "type": "Literal",
                      "value": "6930530530",
                      "raw": "\"6930530530\""
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                  }
                ]
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
                "name": "src2"
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null"
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
                "name": "src3"
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "obj1"
                    },
                    "computed": false,
                    "value": {
                      "type": "Identifier",
                      "name": "obj1"
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "obj2"
                    },
                    "computed": false,
                    "value": {
                      "type": "Identifier",
                      "name": "obj2"
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "BasicAssignNull3"
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
                  "name": "Object"
                },
                "property": {
                  "type": "Identifier",
                  "name": "assign"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "object"
                },
                {
                  "type": "Identifier",
                  "name": "src1"
                },
                {
                  "type": "Identifier",
                  "name": "src2"
                },
                {
                  "type": "Identifier",
                  "name": "src3"
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
        "name": "BasicAssignNull3TearDown"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "object"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "id"
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "src1"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "id"
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "object"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "obj1"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "src2"
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "object"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "obj2"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "src3"
                }
              }
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