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
            "value": "Babel",
            "raw": "'Babel'"
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
                    "value": "Babel",
                    "raw": "'Babel'"
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
                    "name": "Babel"
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
        "name": "_possibleConstructorReturn"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "self"
        },
        {
          "type": "Identifier",
          "name": "call"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "name": "self"
              },
              "prefix": true
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
                      "name": "ReferenceError"
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "this hasn't been initialised - super() hasn't been called",
                        "raw": "'this hasn\\'t been initialised - super() hasn\\'t been called'"
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "name": "call"
                },
                "right": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "name": "call"
                      },
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "value": "object",
                      "raw": "'object'"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "name": "call"
                      },
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "value": "function",
                      "raw": "'function'"
                    }
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "name": "call"
              },
              "alternate": {
                "type": "Identifier",
                "name": "self"
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
        "name": "_inherits"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "subClass"
        },
        {
          "type": "Identifier",
          "name": "superClass"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "name": "superClass"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'"
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "Identifier",
                  "name": "superClass"
                },
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
                }
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
                      "name": "TypeError"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "value": "Super expression must either be null or a function, not ",
                          "raw": "'Super expression must either be null or a function, not '"
                        },
                        "right": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "name": "superClass"
                          },
                          "prefix": true
                        }
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subClass"
                },
                "property": {
                  "type": "Identifier",
                  "name": "prototype"
                }
              },
              "right": {
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
                    "name": "create"
                  }
                },
                "arguments": [
                  {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "name": "superClass"
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "superClass"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "prototype"
                      }
                    }
                  },
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "constructor"
                        },
                        "computed": false,
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "value"
                              },
                              "computed": false,
                              "value": {
                                "type": "Identifier",
                                "name": "subClass"
                              },
                              "kind": "init",
                              "method": false,
                              "shorthand": false
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "enumerable"
                              },
                              "computed": false,
                              "value": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false"
                              },
                              "kind": "init",
                              "method": false,
                              "shorthand": false
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "writable"
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
                            },
                            {
                              "type": "Property",
                              "key": {
                                "type": "Identifier",
                                "name": "configurable"
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
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "name": "superClass"
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Object"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "setPrototypeOf"
                  }
                },
                "consequent": {
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
                      "name": "setPrototypeOf"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "subClass"
                    },
                    {
                      "type": "Identifier",
                      "name": "superClass"
                    }
                  ]
                },
                "alternate": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "subClass"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "__proto__"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "superClass"
                  }
                }
              }
            },
            "alternate": null
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
        "name": "_classCallCheck"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "instance"
        },
        {
          "type": "Identifier",
          "name": "Constructor"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "operator": "instanceof",
                "left": {
                  "type": "Identifier",
                  "name": "instance"
                },
                "right": {
                  "type": "Identifier",
                  "name": "Constructor"
                }
              },
              "prefix": true
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
                      "name": "TypeError"
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Cannot call a class as a function",
                        "raw": "'Cannot call a class as a function'"
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
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
            "name": "Point"
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "name": "Point"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "_classCallCheck"
                    },
                    "arguments": [
                      {
                        "type": "ThisExpression"
                      },
                      {
                        "type": "Identifier",
                        "name": "Point"
                      }
                    ]
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
          }
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
            "name": "MyPoint"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "FunctionExpression",
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "name": "_Point"
                }
              ],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "_inherits"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "MyPoint"
                        },
                        {
                          "type": "Identifier",
                          "name": "_Point"
                        }
                      ]
                    }
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "MyPoint"
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
                              "name": "_classCallCheck"
                            },
                            "arguments": [
                              {
                                "type": "ThisExpression"
                              },
                              {
                                "type": "Identifier",
                                "name": "MyPoint"
                              }
                            ]
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "_possibleConstructorReturn"
                            },
                            "arguments": [
                              {
                                "type": "ThisExpression"
                              },
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "LogicalExpression",
                                    "operator": "||",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "MyPoint"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "__proto__"
                                      }
                                    },
                                    "right": {
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
                                          "name": "getPrototypeOf"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "MyPoint"
                                        }
                                      ]
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "apply"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ThisExpression"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "arguments"
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "name": "MyPoint"
                    }
                  }
                ]
              },
              "generator": false,
              "expression": false,
              "async": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "name": "Point"
              }
            ]
          }
        }
      ],
      "kind": "var"
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
        "name": "Babel"
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