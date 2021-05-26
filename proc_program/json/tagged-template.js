{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "tag"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "strings"
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "name": "values"
          }
        }
      ],
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
                  "name": "a"
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "strings"
                },
                "property": {
                  "type": "Identifier",
                  "name": "length"
                }
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "+=",
                "left": {
                  "type": "Identifier",
                  "name": "a"
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "strings"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "i"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "length"
                  }
                }
              }
            }
          },
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "driver"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "n"
        }
      ],
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
                  "name": "result"
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
                "type": "Identifier",
                "name": "n"
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
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "result"
                    },
                    "right": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "Identifier",
                        "name": "tag"
                      },
                      "quasi": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": " ",
                              "cooked": " "
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": " ",
                              "cooked": " "
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": " ",
                              "cooked": " "
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "!\\n",
                              "cooked": "!\n"
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": "Hello",
                            "raw": "\"Hello\""
                          },
                          {
                            "type": "Literal",
                            "value": "cruel",
                            "raw": "\"cruel\""
                          },
                          {
                            "type": "Literal",
                            "value": "slow",
                            "raw": "\"slow\""
                          },
                          {
                            "type": "Literal",
                            "value": "world",
                            "raw": "\"world\""
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "result"
                    },
                    "right": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "Identifier",
                        "name": "tag"
                      },
                      "quasi": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": " ",
                              "cooked": " "
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": " ",
                              "cooked": " "
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": " ",
                              "cooked": " "
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": " ",
                              "cooked": " "
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": " ",
                              "cooked": " "
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "?!\\n",
                              "cooked": "?!\n"
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": "Why",
                            "raw": "\"Why\""
                          },
                          {
                            "type": "Literal",
                            "value": "is",
                            "raw": "\"is\""
                          },
                          {
                            "type": "Literal",
                            "value": "this",
                            "raw": "\"this\""
                          },
                          {
                            "type": "Literal",
                            "value": "so",
                            "raw": "\"so\""
                          },
                          {
                            "type": "Literal",
                            "value": "damn",
                            "raw": "\"damn\""
                          },
                          {
                            "type": "Literal",
                            "value": "slow",
                            "raw": "\"slow\""
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "result"
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
        "name": "TaggedTemplate"
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
                "name": "driver"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 10000,
                  "raw": "1e4"
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
        "name": "TaggedTemplateWarmUp"
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
                "name": "driver"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "1e1"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "driver"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "1e2"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "driver"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1000,
                  "raw": "1e3"
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "createSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "TaggedTemplate",
            "raw": "'TaggedTemplate'"
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Identifier",
            "name": "TaggedTemplate"
          },
          {
            "type": "Identifier",
            "name": "TaggedTemplateWarmUp"
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
            "name": "_templateObject"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "_taggedTemplateLiteralLoose"
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": "!\n",
                    "raw": "\"!\\n\""
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": "!\\n",
                    "raw": "\"!\\\\n\""
                  }
                ]
              }
            ]
          }
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "_templateObject2"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "_taggedTemplateLiteralLoose"
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": "?!\n",
                    "raw": "\"?!\\n\""
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": " ",
                    "raw": "\" \""
                  },
                  {
                    "type": "Literal",
                    "value": "?!\\n",
                    "raw": "\"?!\\\\n\""
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "_taggedTemplateLiteralLoose"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "strings"
        },
        {
          "type": "Identifier",
          "name": "raw"
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
                  "type": "Identifier",
                  "name": "strings"
                },
                "property": {
                  "type": "Identifier",
                  "name": "raw"
                }
              },
              "right": {
                "type": "Identifier",
                "name": "raw"
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "strings"
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
        "name": "driverLoose"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "n"
        }
      ],
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
                  "name": "result"
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
                "type": "Identifier",
                "name": "n"
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
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "result"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "tag"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "_templateObject"
                        },
                        {
                          "type": "Literal",
                          "value": "Hello",
                          "raw": "\"Hello\""
                        },
                        {
                          "type": "Literal",
                          "value": "cruel",
                          "raw": "\"cruel\""
                        },
                        {
                          "type": "Literal",
                          "value": "slow",
                          "raw": "\"slow\""
                        },
                        {
                          "type": "Literal",
                          "value": "world",
                          "raw": "\"world\""
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "result"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "tag"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "_templateObject2"
                        },
                        {
                          "type": "Literal",
                          "value": "Why",
                          "raw": "\"Why\""
                        },
                        {
                          "type": "Literal",
                          "value": "is",
                          "raw": "\"is\""
                        },
                        {
                          "type": "Literal",
                          "value": "this",
                          "raw": "\"this\""
                        },
                        {
                          "type": "Literal",
                          "value": "so",
                          "raw": "\"so\""
                        },
                        {
                          "type": "Literal",
                          "value": "damn",
                          "raw": "\"damn\""
                        },
                        {
                          "type": "Literal",
                          "value": "slow",
                          "raw": "\"slow\""
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "result"
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
        "name": "TaggedTemplateLoose"
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
                "name": "driverLoose"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 10000,
                  "raw": "1e4"
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
        "name": "TaggedTemplateLooseWarmUp"
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
                "name": "driverLoose"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "1e1"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "driverLoose"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "1e2"
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "driverLoose"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1000,
                  "raw": "1e3"
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "createSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "TaggedTemplateLoose",
            "raw": "'TaggedTemplateLoose'"
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Identifier",
            "name": "TaggedTemplateLoose"
          },
          {
            "type": "Identifier",
            "name": "TaggedTemplateLooseWarmUp"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}