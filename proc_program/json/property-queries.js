{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "ObjectWithKeys"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "count"
        },
        {
          "type": "AssignmentPattern",
          "left": {
            "type": "Identifier",
            "name": "keyOffset"
          },
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0"
          }
        },
        {
          "type": "Identifier",
          "name": "keyGen"
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
                  "name": "body"
                },
                "init": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\""
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
                "name": "count"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "argument": {
                "type": "Identifier",
                "name": "i"
              },
              "prefix": false
            },
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
                        "name": "key"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "keyGen"
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "i"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "keyOffset"
                            }
                          }
                        ]
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "name": "key"
                      },
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "Identifier",
                            "name": "body"
                          },
                          "right": {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "this.",
                                  "cooked": "this."
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": " = 0\\n",
                                  "cooked": " = 0\n"
                                },
                                "tail": true
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Identifier",
                                "name": "key"
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "Identifier",
                            "name": "body"
                          },
                          "right": {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "this[",
                                  "cooked": "this["
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "] = 0\\n",
                                  "cooked": "] = 0\n"
                                },
                                "tail": true
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Identifier",
                                "name": "key"
                              }
                            ]
                          }
                        }
                      }
                    ]
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
                  "name": "f"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Function"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "body"
                    }
                  ]
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "name": "f"
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
        "name": "ObjectWithProperties"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "count"
        },
        {
          "type": "Identifier",
          "name": "keyOffset"
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
                "name": "ObjectWithKeys"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "count"
                },
                {
                  "type": "Identifier",
                  "name": "keyOffset"
                },
                {
                  "type": "ArrowFunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "key"
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": "key",
                      "raw": "\"key\""
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "key"
                    }
                  },
                  "generator": false,
                  "expression": true,
                  "async": false
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
        "name": "ObjectWithElements"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "count"
        },
        {
          "type": "Identifier",
          "name": "keyOffset"
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
                "name": "ObjectWithKeys"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "count"
                },
                {
                  "type": "Identifier",
                  "name": "keyOffset"
                },
                {
                  "type": "ArrowFunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "key"
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "name": "key"
                  },
                  "generator": false,
                  "expression": true,
                  "async": false
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
        "name": "ObjectWithMixedKeys"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "count"
        },
        {
          "type": "Identifier",
          "name": "keyOffset"
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
                "name": "ObjectWithKeys"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "count"
                },
                {
                  "type": "Identifier",
                  "name": "keyOffset"
                },
                {
                  "type": "ArrowFunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "key"
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "%",
                            "left": {
                              "type": "Identifier",
                              "name": "key"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "name": "key"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "key",
                            "raw": "\"key\""
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "Identifier",
                                "name": "key"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
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
        "name": "ObjectWithProtoKeys"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "depth"
        },
        {
          "type": "Identifier",
          "name": "keys"
        },
        {
          "type": "Identifier",
          "name": "cacheable"
        },
        {
          "type": "AssignmentPattern",
          "left": {
            "type": "Identifier",
            "name": "keyGen"
          },
          "right": {
            "type": "Identifier",
            "name": "ObjectWithProperties"
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
                  "name": "o"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "keyGen"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "keys"
                    }
                  ]
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
                  "name": "current"
                },
                "init": {
                  "type": "Identifier",
                  "name": "o"
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
                  "name": "keyOffset"
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
                "name": "depth"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "argument": {
                "type": "Identifier",
                "name": "i"
              },
              "prefix": false
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
                      "name": "keyOffset"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "keys"
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
                        "type": "Identifier",
                        "name": "current"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "__proto__"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "keyGen"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "keys"
                        },
                        {
                          "type": "Identifier",
                          "name": "keyOffset"
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
                      "name": "current"
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "current"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "__proto__"
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "name": "cacheable"
              },
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false"
              }
            },
            "consequent": {
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
                        "name": "current"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "__proto__"
                      }
                    },
                    "right": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Proxy"
                      },
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "properties": []
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": []
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "o"
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
        "name": "HoleyIntArray"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "size"
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
                  "name": "array"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Array"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "size"
                    }
                  ]
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
                "name": "size"
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "name": "i"
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3"
              }
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
                        "name": "array"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "i"
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
              "name": "array"
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
        "name": "IntArray"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "size"
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
                  "name": "array"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Array"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "size"
                    }
                  ]
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
                "name": "size"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "argument": {
                "type": "Identifier",
                "name": "i"
              },
              "prefix": false
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
                        "name": "array"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "i"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "i"
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
              "name": "array"
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
        "name": "MakeDictionaryMode"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "obj"
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
                  "name": "obj"
                },
                "property": {
                  "type": "Identifier",
                  "name": "foo"
                }
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "obj"
                },
                "property": {
                  "type": "Identifier",
                  "name": "bar"
                }
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
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "obj"
                },
                "property": {
                  "type": "Identifier",
                  "name": "foo"
                }
              },
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "obj"
                },
                "property": {
                  "type": "Identifier",
                  "name": "bar"
                }
              },
              "prefix": true
            }
          },
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
                  "name": "obj"
                },
                "property": {
                  "type": "Literal",
                  "value": 1000000000,
                  "raw": "1e9"
                }
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0"
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "obj"
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
        "name": "Internalize"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "s"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
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
                    "name": "keys"
                  }
                },
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "computed": true,
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "method": false,
                        "shorthand": false
                      }
                    ]
                  }
                ]
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0"
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
        "name": "Deinternalize"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "s"
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "name": "s"
                      }
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "join"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\""
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
            "name": "QUERY_INTERNALIZED_PROP"
          },
          "init": {
            "type": "Literal",
            "value": "INTERN-prop",
            "raw": "\"INTERN-prop\""
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
            "name": "QUERY_DEINTERNALIZED_PROP"
          },
          "init": {
            "type": "Literal",
            "value": "DEINTERN-prop",
            "raw": "\"DEINTERN-prop\""
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
            "name": "QUERY_NON_EXISTING_INTERNALIZED_PROP"
          },
          "init": {
            "type": "Literal",
            "value": "NE-INTERN-prop",
            "raw": "\"NE-INTERN-prop\""
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
            "name": "QUERY_NON_EXISTING_DEINTERNALIZED_PROP"
          },
          "init": {
            "type": "Literal",
            "value": "NE-DEINTERN-prop",
            "raw": "\"NE-DEINTERN-prop\""
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
            "name": "QUERY_ELEMENT"
          },
          "init": {
            "type": "Literal",
            "value": "el",
            "raw": "\"el\""
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
            "name": "QUERY_ELEMENT_AS_STRING"
          },
          "init": {
            "type": "Literal",
            "value": "el-str",
            "raw": "\"el-str\""
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
            "name": "QUERY_NON_EXISTING_ELEMENT"
          },
          "init": {
            "type": "Literal",
            "value": "NE-el",
            "raw": "\"NE-el\""
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
            "name": "OBJ_MODE_FAST"
          },
          "init": {
            "type": "Literal",
            "value": "fast",
            "raw": "\"fast\""
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
            "name": "OBJ_MODE_SLOW"
          },
          "init": {
            "type": "Literal",
            "value": "slow",
            "raw": "\"slow\""
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
            "name": "TestQueries"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "name": "QUERY_INTERNALIZED_PROP"
              },
              {
                "type": "Identifier",
                "name": "QUERY_DEINTERNALIZED_PROP"
              },
              {
                "type": "Identifier",
                "name": "QUERY_NON_EXISTING_INTERNALIZED_PROP"
              },
              {
                "type": "Identifier",
                "name": "QUERY_NON_EXISTING_DEINTERNALIZED_PROP"
              },
              {
                "type": "Identifier",
                "name": "QUERY_ELEMENT"
              },
              {
                "type": "Identifier",
                "name": "QUERY_ELEMENT_AS_STRING"
              },
              {
                "type": "Identifier",
                "name": "QUERY_NON_EXISTING_ELEMENT"
              }
            ]
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
            "name": "QUERIES_PER_OBJECT_NUMBER"
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10"
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "FilterKeys"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "keys"
        },
        {
          "type": "Identifier",
          "name": "count"
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
                  "name": "len"
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "keys"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "length"
                  }
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "name": "len"
              },
              "right": {
                "type": "Identifier",
                "name": "count"
              }
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Error"
                },
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": "Keys array is too short: ",
                      "raw": "\"Keys array is too short: \""
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "len"
                    }
                  }
                ]
              }
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "step"
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Identifier",
                    "name": "len"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "count"
                  }
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "name": "step"
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Error"
                },
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": "Bad count specified: ",
                      "raw": "\"Bad count specified: \""
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "count"
                    }
                  }
                ]
              }
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "keys"
                },
                "property": {
                  "type": "Identifier",
                  "name": "filter"
                }
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "element"
                    },
                    {
                      "type": "Identifier",
                      "name": "index"
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "operator": "==",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "%",
                      "left": {
                        "type": "Identifier",
                        "name": "index"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "step"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "generator": false,
                  "expression": true,
                  "async": false
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
        "name": "MakeKeyQueries"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "keys"
        },
        {
          "type": "Identifier",
          "name": "query_kind"
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
                  "name": "properties"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "keys"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "filter"
                    }
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "element"
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "isNaN"
                        },
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "Number"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "element"
                              }
                            ]
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
                  "name": "elements"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "keys"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "filter"
                    }
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "element"
                        }
                      ],
                      "body": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "isNaN"
                          },
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Number"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "element"
                                }
                              ]
                            }
                          ]
                        },
                        "prefix": true
                      },
                      "generator": false,
                      "expression": true,
                      "async": false
                    }
                  ]
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "properties"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "FilterKeys"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "properties"
                  },
                  {
                    "type": "Identifier",
                    "name": "QUERIES_PER_OBJECT_NUMBER"
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
                "name": "elements"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "FilterKeys"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "elements"
                  },
                  {
                    "type": "Identifier",
                    "name": "QUERIES_PER_OBJECT_NUMBER"
                  }
                ]
              }
            }
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "name": "query_kind"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "name": "QUERY_INTERNALIZED_PROP"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "name": "properties"
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "name": "QUERY_DEINTERNALIZED_PROP"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "properties"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "map"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "Deinternalize"
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "name": "QUERY_NON_EXISTING_INTERNALIZED_PROP"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "name": "QUERY_NON_EXISTING_DEINTERNALIZED_PROP"
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "non_existing"
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": []
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
                        "name": "QUERIES_PER_OBJECT_NUMBER"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "argument": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "prefix": false
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
                                "name": "non_existing"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "push"
                              }
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": "non-existing",
                                  "raw": "\"non-existing\""
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "name": "query_kind"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "QUERY_NON_EXISTING_INTERNALIZED_PROP"
                      }
                    },
                    "consequent": {
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
                                "name": "non_existing"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "map"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "Internalize"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "alternate": {
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
                                "name": "non_existing"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "map"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "Deinternalize"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "name": "QUERY_ELEMENT"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "elements"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "map"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "Number"
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "name": "QUERY_ELEMENT_AS_STRING"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "elements"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "map"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "String"
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "name": "QUERY_NON_EXISTING_ELEMENT"
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "non_existing"
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": []
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
                        "name": "QUERIES_PER_OBJECT_NUMBER"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "argument": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "prefix": false
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
                                "name": "non_existing"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "push"
                              }
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Literal",
                                  "value": 1200,
                                  "raw": "1200"
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "*",
                                  "left": {
                                    "type": "Literal",
                                    "value": 100,
                                    "raw": "100"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "name": "non_existing"
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "Error"
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "Bad query_kind: ",
                            "raw": "\"Bad query_kind: \""
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "query_kind"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
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
            "name": "TestData"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": []
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false"
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "name": "forEach"
          }
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "cachable"
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "name": "OBJ_MODE_FAST"
                          },
                          {
                            "type": "Identifier",
                            "name": "OBJ_MODE_SLOW"
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "forEach"
                      }
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "name": "obj_mode"
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
                                    "name": "proto_mode"
                                  },
                                  "init": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "Identifier",
                                      "name": "cachable"
                                    },
                                    "consequent": {
                                      "type": "Literal",
                                      "value": "",
                                      "raw": "\"\""
                                    },
                                    "alternate": {
                                      "type": "Literal",
                                      "value": "-with-slow-proto",
                                      "raw": "\"-with-slow-proto\""
                                    }
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
                                    "name": "name"
                                  },
                                  "init": {
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
                                          "raw": "-obj",
                                          "cooked": "-obj"
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
                                        "name": "obj_mode"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "proto_mode"
                                      }
                                    ]
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
                                    "name": "objects"
                                  },
                                  "init": {
                                    "type": "ArrayExpression",
                                    "elements": []
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Literal",
                                        "value": 10,
                                        "raw": "10"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 50,
                                        "raw": "50"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 100,
                                        "raw": "100"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 200,
                                        "raw": "200"
                                      },
                                      {
                                        "type": "Literal",
                                        "value": 500,
                                        "raw": "500"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "forEach"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "id": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "name": "prop_count"
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
                                              "type": "Identifier",
                                              "name": "obj"
                                            },
                                            "right": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "name": "ObjectWithProtoKeys"
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": 5,
                                                  "raw": "5"
                                                },
                                                {
                                                  "type": "BinaryExpression",
                                                  "operator": "*",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "prop_count"
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 2,
                                                    "raw": "2"
                                                  }
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "cachable"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "ObjectWithMixedKeys"
                                                }
                                              ]
                                            }
                                          }
                                        },
                                        {
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "operator": "==",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "obj_mode"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "OBJ_MODE_SLOW"
                                            }
                                          },
                                          "consequent": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "AssignmentExpression",
                                                  "operator": "=",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "name": "obj"
                                                  },
                                                  "right": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "Identifier",
                                                      "name": "MakeDictionaryMode"
                                                    },
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "name": "obj"
                                                      }
                                                    ]
                                                  }
                                                }
                                              }
                                            ]
                                          },
                                          "alternate": null
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
                                                "name": "objects"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "push"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "obj"
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
                                    "name": "TestData"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "push"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "key": {
                                          "type": "Identifier",
                                          "name": "name"
                                        },
                                        "computed": false,
                                        "value": {
                                          "type": "Identifier",
                                          "name": "name"
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": true
                                      },
                                      {
                                        "type": "Property",
                                        "key": {
                                          "type": "Identifier",
                                          "name": "objects"
                                        },
                                        "computed": false,
                                        "value": {
                                          "type": "Identifier",
                                          "name": "objects"
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": true
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "CreateTestFunction"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "template"
        },
        {
          "type": "Identifier",
          "name": "object"
        },
        {
          "type": "Identifier",
          "name": "keys"
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
                  "name": "text"
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "value": "// random comment ",
                        "raw": "\"// random comment \""
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
                            "name": "random"
                          }
                        },
                        "arguments": []
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": "\n",
                      "raw": "\"\\n\""
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "template"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "object"
                      },
                      {
                        "type": "Identifier",
                        "name": "keys"
                      }
                    ]
                  }
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
                  "name": "func"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "Function"
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "object",
                      "raw": "\"object\""
                    },
                    {
                      "type": "Literal",
                      "value": "keys",
                      "raw": "\"keys\""
                    },
                    {
                      "type": "Identifier",
                      "name": "text"
                    }
                  ]
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "id": null,
              "params": [],
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "func"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "object"
                  },
                  {
                    "type": "Identifier",
                    "name": "keys"
                  }
                ]
              },
              "generator": false,
              "expression": true,
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
        "name": "CombineTestFunctions"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "tests"
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "tests"
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
                      "prefix": false
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
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "tests"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "i"
                              }
                            },
                            "arguments": []
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "TestFunctions"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "name"
                    },
                    "computed": false,
                    "value": {
                      "type": "Literal",
                      "value": "in",
                      "raw": "\"in\""
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "keys"
                    },
                    "computed": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "object"
                        }
                      ],
                      "body": {
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
                            "name": "keys"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "object"
                          }
                        ]
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
                      "name": "template"
                    },
                    "computed": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "object"
                        },
                        {
                          "type": "Identifier",
                          "name": "keys"
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
                                  "name": "lines"
                                },
                                "init": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "var result = true;",
                                            "cooked": "var result = true;"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": []
                                    },
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "for (var i = 0; i < keys.length; i++) {",
                                            "cooked": "for (var i = 0; i < keys.length; i++) {"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": []
                                    },
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "  var key = keys[i];",
                                            "cooked": "  var key = keys[i];"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": []
                                    },
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "  result = (key in object) && result;",
                                            "cooked": "  result = (key in object) && result;"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": []
                                    },
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "}",
                                            "cooked": "}"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": []
                                    },
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "return result;",
                                            "cooked": "return result;"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": []
                                    }
                                  ]
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "lines"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "join"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "\n",
                                  "raw": "\"\\n\""
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
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "name"
                    },
                    "computed": false,
                    "value": {
                      "type": "Literal",
                      "value": "Object.hasOwnProperty",
                      "raw": "\"Object.hasOwnProperty\""
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "keys"
                    },
                    "computed": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "object"
                        }
                      ],
                      "body": {
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
                            "name": "getOwnPropertyNames"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "object"
                          }
                        ]
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
                      "name": "template"
                    },
                    "computed": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "object"
                        },
                        {
                          "type": "Identifier",
                          "name": "keys"
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
                                  "name": "lines"
                                },
                                "init": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "var result = true;",
                                            "cooked": "var result = true;"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": []
                                    },
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "for (var i = 0; i < keys.length; i++) {",
                                            "cooked": "for (var i = 0; i < keys.length; i++) {"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": []
                                    },
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "  var key = keys[i];",
                                            "cooked": "  var key = keys[i];"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": []
                                    },
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "  result = object.hasOwnProperty(key) && result;",
                                            "cooked": "  result = object.hasOwnProperty(key) && result;"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": []
                                    },
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "}",
                                            "cooked": "}"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": []
                                    },
                                    {
                                      "type": "TemplateLiteral",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "return result;",
                                            "cooked": "return result;"
                                          },
                                          "tail": true
                                        }
                                      ],
                                      "expressions": []
                                    }
                                  ]
                                }
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "lines"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "join"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "\n",
                                  "raw": "\"\\n\""
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
                    "kind": "init",
                    "method": false,
                    "shorthand": false
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "Benchmarks"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": []
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "test_function_desc"
            },
            "init": null
          }
        ],
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "name": "TestFunctions"
      },
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
                  "name": "test_function_name"
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "test_function_desc"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "name"
                  }
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "ForOfStatement",
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "query_kind"
                  },
                  "init": null
                }
              ],
              "kind": "var"
            },
            "right": {
              "type": "Identifier",
              "name": "TestQueries"
            },
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
                        "name": "benchmarks"
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": []
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
                        "name": "suit_name"
                      },
                      "init": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "test_function_name"
                          },
                          "right": {
                            "type": "Literal",
                            "value": "--",
                            "raw": "\"--\""
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "query_kind"
                        }
                      }
                    }
                  ],
                  "kind": "var"
                },
                {
                  "type": "ForOfStatement",
                  "left": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "test_data"
                        },
                        "init": null
                      }
                    ],
                    "kind": "var"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "TestData"
                  },
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
                              "name": "name"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "Identifier",
                                  "name": "suit_name"
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "--",
                                  "raw": "\"--\""
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "test_data"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "name"
                                }
                              }
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
                              "name": "tests"
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": []
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "ForOfStatement",
                        "left": {
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
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "test_data"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "objects"
                          }
                        },
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
                                    "name": "keys"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "test_function_desc"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "keys"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "object"
                                      }
                                    ]
                                  }
                                }
                              ],
                              "kind": "var"
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "keys"
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "name": "MakeKeyQueries"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "keys"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "query_kind"
                                    }
                                  ]
                                }
                              }
                            },
                            {
                              "type": "VariableDeclaration",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "test"
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "CreateTestFunction"
                                    },
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "test_function_desc"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "template"
                                        }
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "object"
                                      },
                                      {
                                        "type": "Identifier",
                                        "name": "keys"
                                      }
                                    ]
                                  }
                                }
                              ],
                              "kind": "var"
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
                                    "name": "tests"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "push"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "test"
                                  }
                                ]
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
                              "name": "run_function"
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "CombineTestFunctions"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "tests"
                                }
                              ]
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
                              "name": "benchmark"
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "Benchmark"
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "name"
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
                                  "name": "run_function"
                                }
                              ]
                            }
                          }
                        ],
                        "kind": "var"
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
                              "name": "benchmarks"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "push"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "benchmark"
                            }
                          ]
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "Benchmarks"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "push"
                      }
                    },
                    "arguments": [
                      {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "BenchmarkSuite"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "suit_name"
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
                            "type": "Identifier",
                            "name": "benchmarks"
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
      }
    }
  ],
  "sourceType": "script"
}