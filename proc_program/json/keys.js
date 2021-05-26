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
          "type": "Identifier",
          "name": "keyOffset"
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
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "name": "keyOffset"
              },
              "right": {
                "type": "Identifier",
                "name": "undefined"
              }
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "keyOffset"
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "name": "keyGen"
              },
              "right": {
                "type": "Identifier",
                "name": "undefined"
              }
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "keyGen"
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "i"
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
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
                            "type": "Identifier",
                            "name": "i"
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
                  "name": "o"
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": []
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "o"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "key"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "\"value\""
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
                            "type": "Identifier",
                            "name": "key"
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
                            "type": "Identifier",
                            "name": "key"
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
                    "name": "ObjectWithKeys"
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
                        "name": "ObjectWithKeys"
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "object_empty"
          },
          "init": {
            "type": "ObjectExpression",
            "properties": []
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
            "name": "array_empty"
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
            "name": "array_int_50"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "IntArray"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 50,
                "raw": "50"
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
            "name": "array_int_50_proto_elements"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "IntArray"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 50,
                "raw": "50"
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "array_int_50_proto_elements"
          },
          "property": {
            "type": "Identifier",
            "name": "__proto__"
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 51,
              "raw": "51"
            },
            {
              "type": "Literal",
              "value": 52,
              "raw": "52"
            },
            {
              "type": "Literal",
              "value": 53,
              "raw": "53"
            },
            {
              "type": "Literal",
              "value": 54,
              "raw": "54"
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
            "name": "array_int_holey_50"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "HoleyIntArray"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 50,
                "raw": "50"
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
            "name": "empty_proto_5_10"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "ObjectWithKeys"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5"
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "empty_proto_5_10"
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
            "name": "ObjectWithProtoKeys"
          },
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10"
            },
            {
              "type": "Literal",
              "value": 0,
              "raw": "0"
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
            "name": "empty_proto_5_5_slow"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "ObjectWithKeys"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5"
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "empty_proto_5_5_slow"
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
            "name": "ObjectWithProtoKeys"
          },
          "arguments": [
            {
              "type": "Literal",
              "value": 5,
              "raw": "5"
            },
            {
              "type": "Literal",
              "value": 0,
              "raw": "0"
            },
            {
              "type": "Literal",
              "value": false,
              "raw": "false"
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
            "name": "object_elements_proto_5_10"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "ObjectWithKeys"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5"
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "object_elements_proto_5_10"
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
            "name": "ObjectWithProtoKeys"
          },
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10"
            },
            {
              "type": "Literal",
              "value": 0,
              "raw": "0"
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
          "type": "Literal",
          "value": 5,
          "raw": "5"
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "object_elements_proto_5_10"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "__proto__"
                      }
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "__proto__"
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "__proto__"
                  }
                },
                "property": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": "proto",
                    "raw": "\"proto\""
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "i"
                  }
                }
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true"
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
            "name": "TestObjects"
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "object_empty"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "object_empty"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "array_empty"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "array_empty"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "array_int_50"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "array_int_50"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "array_int_holey_50"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "array_int_holey_50"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "array_int_50_proto_elements"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "array_int_50_proto_elements"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "empty_proto_5_10"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "empty_proto_5_10"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "empty_proto_5_5_slow"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "empty_proto_5_5_slow"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "object_elements_proto_5_10"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "object_elements_proto_5_10"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
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
            "name": "TestArrays"
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "array_empty"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "array_empty"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "array_int_50"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "array_int_50"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "array_int_holey_50"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "array_int_holey_50"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "array_int_50_proto_elements"
                },
                "computed": false,
                "value": {
                  "type": "Identifier",
                  "name": "array_int_50_proto_elements"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
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
        "name": "CreateTestFunctionGen"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "fn"
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
              "params": [
                {
                  "type": "Identifier",
                  "name": "object"
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
                          "name": "random_comment"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Literal",
                              "value": "\n// random comment",
                              "raw": "\"\\n// random comment\""
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
                        "type": "Identifier",
                        "name": "eval"
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "random_comment"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "fn"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "toString"
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
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Literal",
                  "value": "Object.keys()",
                  "raw": "\"Object.keys()\""
                },
                "computed": false,
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "CreateTestFunctionGen"
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
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
                            }
                          }
                        ]
                      },
                      "generator": false,
                      "expression": false,
                      "async": false
                    }
                  ]
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Literal",
                  "value": "for-in",
                  "raw": "\"for-in\""
                },
                "computed": false,
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "CreateTestFunctionGen"
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "id": null,
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
                                  "name": "count"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "result"
                                },
                                "init": null
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "ForInStatement",
                            "left": {
                              "type": "VariableDeclaration",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "key"
                                  },
                                  "init": null
                                }
                              ],
                              "kind": "var"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "object"
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "count"
                                    },
                                    "prefix": false
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "result"
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "object"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "key"
                                      }
                                    }
                                  }
                                }
                              ]
                            },
                            "each": false
                          },
                          {
                            "type": "EmptyStatement"
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "name": "result"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "count"
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
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Literal",
                  "value": "for-in hasOwnProperty()",
                  "raw": "\"for-in hasOwnProperty()\""
                },
                "computed": false,
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "CreateTestFunctionGen"
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "id": null,
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
                                  "name": "count"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "result"
                                },
                                "init": null
                              }
                            ],
                            "kind": "var"
                          },
                          {
                            "type": "ForInStatement",
                            "left": {
                              "type": "VariableDeclaration",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "name": "key"
                                  },
                                  "init": null
                                }
                              ],
                              "kind": "var"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "object"
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "object"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "hasOwnProperty"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "key"
                                        }
                                      ]
                                    },
                                    "prefix": true
                                  },
                                  "consequent": {
                                    "type": "ContinueStatement",
                                    "label": null
                                  },
                                  "alternate": null
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "count"
                                    },
                                    "prefix": false
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "result"
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "object"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "key"
                                      }
                                    }
                                  }
                                }
                              ]
                            },
                            "each": false
                          },
                          {
                            "type": "EmptyStatement"
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "name": "result"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "count"
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
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Literal",
                  "value": "for (i < Object.keys().length)",
                  "raw": "\"for (i < Object.keys().length)\""
                },
                "computed": false,
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "CreateTestFunctionGen"
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "id": null,
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
                                  "name": "count"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "result"
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
                                  "name": "keys"
                                },
                                "init": {
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
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "count"
                                    },
                                    "prefix": false
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "result"
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "object"
                                      },
                                      "property": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "keys"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "i"
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "EmptyStatement"
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "name": "result"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "count"
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
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Literal",
                  "value": "Object.keys().forEach()",
                  "raw": "\"Object.keys().forEach()\""
                },
                "computed": false,
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "CreateTestFunctionGen"
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "id": null,
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
                                  "name": "count"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "result"
                                },
                                "init": null
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
                                      "name": "value"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "index"
                                    },
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
                                          "type": "UpdateExpression",
                                          "operator": "++",
                                          "argument": {
                                            "type": "Identifier",
                                            "name": "count"
                                          },
                                          "prefix": false
                                        }
                                      },
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "result"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "value"
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
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "name": "result"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "count"
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
                },
                "kind": "init",
                "method": false,
                "shorthand": false
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
            "name": "TestFunctionsArrays"
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Literal",
                  "value": "for (i < array.length)",
                  "raw": "\"for (i < array.length)\""
                },
                "computed": false,
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "CreateTestFunctionGen"
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "id": null,
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
                                  "name": "count"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "result"
                                },
                                "init": null
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "name": "object"
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
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "count"
                                    },
                                    "prefix": false
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "result"
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "object"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "EmptyStatement"
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "name": "result"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "count"
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
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Literal",
                  "value": "for (i < length)",
                  "raw": "\"for (i < length)\""
                },
                "computed": false,
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "CreateTestFunctionGen"
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "id": null,
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
                                  "name": "count"
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
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "name": "result"
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
                                  "name": "length"
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "object"
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
                                "name": "length"
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
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "count"
                                    },
                                    "prefix": false
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "result"
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "object"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "i"
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "EmptyStatement"
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "name": "result"
                                },
                                {
                                  "type": "Identifier",
                                  "name": "count"
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
                },
                "kind": "init",
                "method": false,
                "shorthand": false
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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "NewBenchmark"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "test_function_gen"
        },
        {
          "type": "Identifier",
          "name": "test_function_name"
        },
        {
          "type": "Identifier",
          "name": "test_object"
        },
        {
          "type": "Identifier",
          "name": "test_object_name"
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
                  "name": "object"
                },
                "init": {
                  "type": "Identifier",
                  "name": "test_object"
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
                      "value": " ",
                      "raw": "\" \""
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "test_object_name"
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
                  "name": "test_function"
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "test_function_gen"
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
            "type": "ReturnStatement",
            "argument": {
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
                  "name": "test_function"
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
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "test_function_name"
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
                  "name": "test_function_gen"
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "TestFunctions"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "test_function_name"
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
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "test_object_name"
                  },
                  "init": null
                }
              ],
              "kind": "var"
            },
            "right": {
              "type": "Identifier",
              "name": "TestObjects"
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
                        "name": "test_object"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "TestObjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "test_object_name"
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
                        "name": "benchmark"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "NewBenchmark"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "test_function_gen"
                          },
                          {
                            "type": "Identifier",
                            "name": "test_function_name"
                          },
                          {
                            "type": "Identifier",
                            "name": "test_object"
                          },
                          {
                            "type": "Identifier",
                            "name": "test_object_name"
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
            },
            "each": false
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
                      "name": "test_function_name"
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
      },
      "each": false
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "test_function_name"
            },
            "init": null
          }
        ],
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "name": "TestFunctionsArrays"
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
                  "name": "test_function_gen"
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "TestFunctionsArrays"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "test_function_name"
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
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "test_array_name"
                  },
                  "init": null
                }
              ],
              "kind": "var"
            },
            "right": {
              "type": "Identifier",
              "name": "TestArrays"
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
                        "name": "test_array"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "TestArrays"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "test_array_name"
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
                        "name": "benchmark"
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "NewBenchmark"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "test_function_gen"
                          },
                          {
                            "type": "Identifier",
                            "name": "test_function_name"
                          },
                          {
                            "type": "Identifier",
                            "name": "test_array"
                          },
                          {
                            "type": "Identifier",
                            "name": "test_array_name"
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
            },
            "each": false
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
                      "name": "test_function_name"
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
      },
      "each": false
    }
  ],
  "sourceType": "script"
}