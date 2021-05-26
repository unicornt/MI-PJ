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
            "name": "subjects"
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "abcde",
                "raw": "'abcde'"
              },
              {
                "type": "Literal",
                "value": "123456",
                "raw": "'123456'"
              },
              {
                "type": "Literal",
                "value": "aqwsde",
                "raw": "'aqwsde'"
              },
              {
                "type": "Literal",
                "value": "nbvveqxu",
                "raw": "'nbvveqxu'"
              },
              {
                "type": "Literal",
                "value": "f03ks-120-3;jfkm;ajp3f",
                "raw": "'f03ks-120-3;jfkm;ajp3f'"
              },
              {
                "type": "Literal",
                "value": "sd-93u498thikefnow8y3-0rh1nalksfnwo8y3t19-3r8hoiefnw",
                "raw": "'sd-93u498thikefnow8y3-0rh1nalksfnwo8y3t19-3r8hoiefnw'"
              }
            ]
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringDropFirstSlice"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "slice"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
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
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringDropFirstSlice",
            "raw": "'StringDropFirstSlice'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringDropFirstSlice"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringDropFirstSubstr"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "substr"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
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
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringDropFirstSubstr",
            "raw": "'StringDropFirstSubstr'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringDropFirstSubstr"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringDropFirstSubstring"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "substring"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
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
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringDropFirstSubstring",
            "raw": "'StringDropFirstSubstring'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringDropFirstSubstring"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringTakeFirstSlice"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "slice"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
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
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringTakeFirstSlice",
            "raw": "'StringTakeFirstSlice'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringTakeFirstSlice"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringTakeFirstSubstr"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "substr"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
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
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringTakeFirstSubstr",
            "raw": "'StringTakeFirstSubstr'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringTakeFirstSubstr"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringTakeFirstSubstring"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "substring"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
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
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringTakeFirstSubstring",
            "raw": "'StringTakeFirstSubstring'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringTakeFirstSubstring"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringDropLastSlice"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "slice"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "prefix": true
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
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringDropLastSlice",
            "raw": "'StringDropLastSlice'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringDropLastSlice"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringDropLastSubstr"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "substr"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "s"
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
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringDropLastSubstr",
            "raw": "'StringDropLastSubstr'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringDropLastSubstr"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringDropLastSubstring"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "substring"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "s"
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
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringDropLastSubstring",
            "raw": "'StringDropLastSubstring'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringDropLastSubstring"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringTakeLastSlice"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "slice"
                        }
                      },
                      "arguments": [
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "prefix": true
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
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringTakeLastSlice",
            "raw": "'StringTakeLastSlice'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringTakeLastSlice"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringTakeLastSubstr"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "substr"
                        }
                      },
                      "arguments": [
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "prefix": true
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
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringTakeLastSubstr",
            "raw": "'StringTakeLastSubstr'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringTakeLastSubstr"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringTakeLastSubstring"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "substring"
                        }
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "s"
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
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "s"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringTakeLastSubstring",
            "raw": "'StringTakeLastSubstring'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringTakeLastSubstring"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringDropFirstSlice"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "slice"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "prefix": true
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
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringDropFirstSlice",
            "raw": "'StringDropFirstSlice'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringDropFirstSlice"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringDropFirstSubstr"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "substr"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "s"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringDropFirstSubstr",
            "raw": "'StringDropFirstSubstr'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringDropFirstSubstr"
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "StringDropFirstSubstring"
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
                  "name": "sum"
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
                    "name": "j"
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
                "name": "j"
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "subjects"
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
                "name": "j"
              },
              "prefix": true
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
                        "name": "s"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "subjects"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "j"
                        }
                      }
                    }
                  ],
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "name": "sum"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "s"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "substring"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "s"
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
              "name": "sum"
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
          "name": "createSuiteWithWarmup"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "StringDropFirstSubstring",
            "raw": "'StringDropFirstSubstring'"
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Identifier",
            "name": "StringDropFirstSubstring"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}