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
            "value": "sort-base.js",
            "raw": "'sort-base.js'"
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
            "name": "kLength"
          },
          "init": {
            "type": "Literal",
            "value": 20000,
            "raw": "2e4"
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
            "name": "kLengthHalf"
          },
          "init": {
            "type": "BinaryExpression",
            "operator": ">>>",
            "left": {
              "type": "Identifier",
              "name": "kLength"
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1"
            }
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "SortAsc"
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
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "cmp_smaller"
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
        "name": "Up"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "length"
        }
      ],
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
              "prefix": true
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
                        "name": "a"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "push"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "i"
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Down"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "length"
        }
      ],
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
              "prefix": true
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
                        "name": "a"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "push"
                      }
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "length"
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
        "name": "SawSeq"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "tooth"
        },
        {
          "type": "Identifier",
          "name": "length"
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
                  "name": "count"
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
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true"
            },
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
                      "name": "tooth"
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "push"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "i"
                            }
                          ]
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": ">=",
                          "left": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "argument": {
                              "type": "Identifier",
                              "name": "count"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "length"
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": null
                        },
                        "alternate": null
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "SawSeq2"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "tooth"
        },
        {
          "type": "Identifier",
          "name": "length"
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
                  "name": "count"
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
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true"
            },
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
                      "name": "tooth"
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "push"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "i"
                            }
                          ]
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": ">=",
                          "left": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "argument": {
                              "type": "Identifier",
                              "name": "count"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "length"
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": null
                        },
                        "alternate": null
                      }
                    ]
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
                      "name": "tooth"
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "push"
                            }
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "Identifier",
                                "name": "tooth"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "i"
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": ">=",
                          "left": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "argument": {
                              "type": "Identifier",
                              "name": "count"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "length"
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": null
                        },
                        "alternate": null
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "SawSeq3"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "tooth"
        },
        {
          "type": "Identifier",
          "name": "length"
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
                  "name": "count"
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
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true"
            },
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
                      "name": "tooth"
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
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "push"
                            }
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "Identifier",
                                "name": "tooth"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "i"
                              }
                            }
                          ]
                        }
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": ">=",
                          "left": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "argument": {
                              "type": "Identifier",
                              "name": "count"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "length"
                          }
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": null
                        },
                        "alternate": null
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
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Random"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "length"
        }
      ],
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
              "prefix": true
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
                        "name": "a"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "push"
                      }
                    },
                    "arguments": [
                      {
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
                              "name": "length"
                            }
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
      },
      "generator": false,
      "expression": false,
      "async": false
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "TearDown"
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
                  "name": "length"
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "array_to_sort"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
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
              "prefix": true
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": ">",
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
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "array_to_sort"
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "value": "Not sorted correctly: i = ",
                            "raw": "\"Not sorted correctly: i = \""
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        }
                      }
                    ]
                  },
                  "alternate": null
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
                "type": "Identifier",
                "name": "array_to_sort"
              },
              "right": {
                "type": "ArrayExpression",
                "elements": []
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
            "name": "SetupSaw1000"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "SawSeq"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "array_to_sort"
                },
                {
                  "type": "Literal",
                  "value": 1000,
                  "raw": "1000"
                },
                {
                  "type": "Identifier",
                  "name": "kLength"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "SetupSaw500"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "SawSeq"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "array_to_sort"
                },
                {
                  "type": "Literal",
                  "value": 500,
                  "raw": "500"
                },
                {
                  "type": "Identifier",
                  "name": "kLength"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "SetupSaw200"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "SawSeq"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "array_to_sort"
                },
                {
                  "type": "Literal",
                  "value": 200,
                  "raw": "200"
                },
                {
                  "type": "Identifier",
                  "name": "kLength"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "SetupSaw200Sym"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "SawSeq2"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "array_to_sort"
                },
                {
                  "type": "Literal",
                  "value": 200,
                  "raw": "200"
                },
                {
                  "type": "Identifier",
                  "name": "kLength"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "SetupSaw200Down"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "SawSeq3"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "array_to_sort"
                },
                {
                  "type": "Literal",
                  "value": 200,
                  "raw": "200"
                },
                {
                  "type": "Identifier",
                  "name": "kLength"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "SetupPreSortedHalfs"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "firstfn"
        },
        {
          "type": "Identifier",
          "name": "secondfn"
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
                "name": "array_to_sort"
              },
              "right": {
                "type": "ArrayExpression",
                "elements": []
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "firstfn"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "array_to_sort"
                },
                {
                  "type": "Identifier",
                  "name": "kLengthHalf"
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
                "name": "secondfn"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "array_to_sort"
                },
                {
                  "type": "Identifier",
                  "name": "kLengthHalf"
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
            "name": "SetupUpDown"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "SetupPreSortedHalfs"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "Up"
                },
                {
                  "type": "Identifier",
                  "name": "Down"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "SetupUpUp"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "SetupPreSortedHalfs"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "Up"
                },
                {
                  "type": "Identifier",
                  "name": "Up"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "SetupDownDown"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "SetupPreSortedHalfs"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "Down"
                },
                {
                  "type": "Identifier",
                  "name": "Down"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "SetupDownUp"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "SetupPreSortedHalfs"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "Down"
                },
                {
                  "type": "Identifier",
                  "name": "Up"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Random",
            "raw": "'Random'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "SortAsc"
          },
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "Random"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "array_to_sort"
                },
                {
                  "type": "Identifier",
                  "name": "kLength"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          },
          {
            "type": "Identifier",
            "name": "TearDown"
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
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Up",
            "raw": "'Up'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "SortAsc"
          },
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "Up"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "array_to_sort"
                },
                {
                  "type": "Identifier",
                  "name": "kLength"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          },
          {
            "type": "Identifier",
            "name": "TearDown"
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
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Down",
            "raw": "'Down'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "SortAsc"
          },
          {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "Down"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "array_to_sort"
                },
                {
                  "type": "Identifier",
                  "name": "kLength"
                }
              ]
            },
            "generator": false,
            "expression": true,
            "async": false
          },
          {
            "type": "Identifier",
            "name": "TearDown"
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
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Saw1000",
            "raw": "'Saw1000'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "SortAsc"
          },
          {
            "type": "Identifier",
            "name": "SetupSaw1000"
          },
          {
            "type": "Identifier",
            "name": "TearDown"
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
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Saw500",
            "raw": "'Saw500'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "SortAsc"
          },
          {
            "type": "Identifier",
            "name": "SetupSaw500"
          },
          {
            "type": "Identifier",
            "name": "TearDown"
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
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Saw200",
            "raw": "'Saw200'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "SortAsc"
          },
          {
            "type": "Identifier",
            "name": "SetupSaw200"
          },
          {
            "type": "Identifier",
            "name": "TearDown"
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
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Saw200Symmetric",
            "raw": "'Saw200Symmetric'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "SortAsc"
          },
          {
            "type": "Identifier",
            "name": "SetupSaw200Sym"
          },
          {
            "type": "Identifier",
            "name": "TearDown"
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
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "Saw200Down",
            "raw": "'Saw200Down'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "SortAsc"
          },
          {
            "type": "Identifier",
            "name": "SetupSaw200Down"
          },
          {
            "type": "Identifier",
            "name": "TearDown"
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
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "UpDown",
            "raw": "'UpDown'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "SortAsc"
          },
          {
            "type": "Identifier",
            "name": "SetupUpDown"
          },
          {
            "type": "Identifier",
            "name": "TearDown"
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
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "UpUp",
            "raw": "'UpUp'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "SortAsc"
          },
          {
            "type": "Identifier",
            "name": "SetupUpUp"
          },
          {
            "type": "Identifier",
            "name": "TearDown"
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
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "DownDown",
            "raw": "'DownDown'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "SortAsc"
          },
          {
            "type": "Identifier",
            "name": "SetupDownDown"
          },
          {
            "type": "Identifier",
            "name": "TearDown"
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
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "DownUp",
            "raw": "'DownUp'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "SortAsc"
          },
          {
            "type": "Identifier",
            "name": "SetupDownUp"
          },
          {
            "type": "Identifier",
            "name": "TearDown"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}