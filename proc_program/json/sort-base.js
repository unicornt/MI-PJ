{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "kArraySize"
          },
          "init": {
            "type": "Literal",
            "value": 4000,
            "raw": "4000"
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "template_array"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": []
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
          "name": "kArraySize"
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
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "template_array"
                },
                "property": {
                  "type": "Identifier",
                  "name": "i"
                }
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Math"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "floor"
                  }
                },
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "Math"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "random"
                        }
                      },
                      "arguments": []
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "kArraySize"
                    }
                  }
                ]
              }
            }
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
            "name": "array_to_sort"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": []
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "AssertPackedSmiElements"
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
                "name": "assert"
              },
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%HasFastPackedElements"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      }
                    ]
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%HasSmiElements"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      }
                    ]
                  }
                },
                {
                  "type": "Literal",
                  "value": "Element kind is not PACKED_SMI_ELEMENTS",
                  "raw": "\"Element kind is not PACKED_SMI_ELEMENTS\""
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
        "name": "AssertPackedDoubleElements"
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
                "name": "assert"
              },
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%HasFastPackedElements"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      }
                    ]
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%HasDoubleElements"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      }
                    ]
                  }
                },
                {
                  "type": "Literal",
                  "value": "Element kind is not PACKED_DOUBLE_ELEMENTS",
                  "raw": "\"Element kind is not PACKED_DOUBLE_ELEMENTS\""
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
        "name": "AssertPackedObjectElements"
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
                "name": "assert"
              },
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%HasFastPackedElements"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      }
                    ]
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%HasObjectElements"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      }
                    ]
                  }
                },
                {
                  "type": "Literal",
                  "value": "Element kind is not PACKED_ELEMENTS",
                  "raw": "\"Element kind is not PACKED_ELEMENTS\""
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
        "name": "AssertHoleySmiElements"
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
                "name": "assert"
              },
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%HasHoleyElements"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      }
                    ]
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%HasSmiElements"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      }
                    ]
                  }
                },
                {
                  "type": "Literal",
                  "value": "Element kind is not HOLEY_SMI_ELEMENTS",
                  "raw": "\"Element kind is not HOLEY_SMI_ELEMENTS\""
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
        "name": "AssertHoleyDoubleElements"
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
                "name": "assert"
              },
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%HasHoleyElements"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      }
                    ]
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%HasDoubleElements"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      }
                    ]
                  }
                },
                {
                  "type": "Literal",
                  "value": "Element kind is not HOLEY_DOUBLE_ELEMENTS",
                  "raw": "\"Element kind is not HOLEY_DOUBLE_ELEMENTS\""
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
        "name": "AssertHoleyObjectElements"
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
                "name": "assert"
              },
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%HasHoleyElements"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      }
                    ]
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "%HasObjectElements"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      }
                    ]
                  }
                },
                {
                  "type": "Literal",
                  "value": "Element kind is not HOLEY_ELEMENTS",
                  "raw": "\"Element kind is not HOLEY_ELEMENTS\""
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
        "name": "AssertDictionaryElements"
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
                "name": "assert"
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "%HasDictionaryElements"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "array_to_sort"
                    }
                  ]
                },
                {
                  "type": "Literal",
                  "value": "Element kind is not DICTIONARY_ELEMENTS",
                  "raw": "\"Element kind is not DICTIONARY_ELEMENTS\""
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
        "name": "CreatePackedSmiArray"
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
                "name": "array_to_sort"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Array"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "from"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "template_array"
                  }
                ]
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "AssertPackedSmiElements"
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
        "name": "CreatePackedDoubleArray"
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
                "name": "array_to_sort"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Array"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "from"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "template_array"
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "x"
                      },
                      {
                        "type": "Identifier",
                        "name": "_"
                      }
                    ],
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "x"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0.1,
                        "raw": "0.1"
                      }
                    },
                    "generator": false,
                    "expression": true,
                    "async": false
                  }
                ]
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "AssertPackedDoubleElements"
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
        "name": "CreatePackedObjectArray"
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
                "name": "array_to_sort"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Array"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "from"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "template_array"
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "name": "x"
                      },
                      {
                        "type": "Identifier",
                        "name": "_"
                      }
                    ],
                    "body": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "value ",
                            "cooked": "value "
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "name": "x"
                        }
                      ]
                    },
                    "generator": false,
                    "expression": true,
                    "async": false
                  }
                ]
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "AssertPackedObjectElements"
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
        "name": "CreateHoleySmiArray"
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
                "name": "array_to_sort"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Array"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "from"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "template_array"
                  }
                ]
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "array_to_sort"
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              },
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "AssertHoleySmiElements"
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
        "name": "CreateHoleyDoubleArray"
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
                "name": "array_to_sort"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "kArraySize"
                  }
                ]
              }
            }
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
                "name": "kArraySize"
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
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "template_array"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0.1,
                        "raw": "0.1"
                      }
                    }
                  }
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
                "name": "AssertHoleyDoubleElements"
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
        "name": "CreateHoleyObjectArray"
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
                "name": "array_to_sort"
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Array"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "kArraySize"
                  }
                ]
              }
            }
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
                "name": "kArraySize"
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
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    },
                    "right": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "value ",
                            "cooked": "value "
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true
                        }
                      ],
                      "expressions": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "template_array"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        }
                      ]
                    }
                  }
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
                "name": "AssertHoleyObjectElements"
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
        "name": "CreateDictionaryArray"
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
                "name": "array_to_sort"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Array"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "from"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "template_array"
                  }
                ]
              }
            }
          },
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
                  "name": "defineProperty"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "array_to_sort"
                },
                {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "Identifier",
                    "name": "kArraySize"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "get"
                      },
                      "computed": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "foo"
                          }
                        },
                        "generator": false,
                        "expression": true,
                        "async": false
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Identifier",
                        "name": "set"
                      },
                      "computed": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "v"
                          }
                        ],
                        "body": {
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
                              "name": "foo"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "v"
                          }
                        },
                        "generator": false,
                        "expression": true,
                        "async": false
                      },
                      "kind": "init",
                      "method": false,
                      "shorthand": false
                    }
                  ]
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
                "name": "AssertDictionaryElements"
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
        "name": "Sort"
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
                  "name": "array_to_sort"
                },
                "property": {
                  "type": "Identifier",
                  "name": "sort"
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
        "name": "CreateSortFn"
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "left": {
            "type": "Identifier",
            "name": "comparefns"
          },
          "right": {
            "type": "ArrayExpression",
            "elements": []
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "id": null,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "cmpfn"
                          },
                          "init": null
                        }
                      ],
                      "kind": "let"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "comparefns"
                    },
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
                                "name": "array_to_sort"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "sort"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "cmpfn"
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
        "name": "cmp_smaller"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "name": "a"
              },
              "right": {
                "type": "Identifier",
                "name": "b"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                },
                "prefix": true
              }
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "name": "b"
              },
              "right": {
                "type": "Identifier",
                "name": "a"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1"
              }
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0"
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
        "name": "cmp_greater"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "cmp_smaller"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "b"
                },
                {
                  "type": "Identifier",
                  "name": "a"
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
            "name": "counter"
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "createSortSuite"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "name"
        },
        {
          "type": "Identifier",
          "name": "reference"
        },
        {
          "type": "Identifier",
          "name": "run"
        },
        {
          "type": "Identifier",
          "name": "setup"
        },
        {
          "type": "AssignmentPattern",
          "left": {
            "type": "Identifier",
            "name": "tearDown"
          },
          "right": {
            "type": "ArrowFunctionExpression",
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
                  "name": "run_fn"
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "id": null,
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
                            "name": "counter"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "setup"
                          },
                          "arguments": []
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "run"
                          },
                          "arguments": []
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "tearDown"
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
              }
            ],
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "createSuite"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "name"
                },
                {
                  "type": "Identifier",
                  "name": "reference"
                },
                {
                  "type": "Identifier",
                  "name": "run_fn"
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