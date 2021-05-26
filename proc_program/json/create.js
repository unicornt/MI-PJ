{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "shallowClone"
      },
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
                  "name": "create"
                }
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "object"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "__proto__"
                  }
                },
                {
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
                      "name": "getOwnPropertyDescriptors"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "object"
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
        "name": "makeSlowCopy"
      },
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "object"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "shallowClone"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "object"
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "object"
                },
                "property": {
                  "type": "Identifier",
                  "name": "__foo__"
                }
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1"
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
                  "name": "object"
                },
                "property": {
                  "type": "Identifier",
                  "name": "__foo__"
                }
              },
              "prefix": true
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "object"
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
        "name": "convertToPropertyDescriptors"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "dict"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
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
              "name": "dict"
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
                        "name": "propertiesObject"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "dict"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "key"
                        }
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
                        "name": "dict"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "key"
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
                          "name": "getOwnPropertyDescriptors"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "propertiesObject"
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "each": false
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "dict"
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
            "name": "properties_5"
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "a"
                },
                "computed": false,
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "b"
                },
                "computed": false,
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "c"
                },
                "computed": false,
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "d"
                },
                "computed": false,
                "value": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "e"
                },
                "computed": false,
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5"
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
            "name": "TEST_PROPERTIES"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "convertToPropertyDescriptors"
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "empty"
                    },
                    "computed": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": []
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "array_5"
                    },
                    "computed": false,
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3"
                        },
                        {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4"
                        },
                        {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5"
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
                      "type": "Identifier",
                      "name": "properties_5"
                    },
                    "computed": false,
                    "value": {
                      "type": "Identifier",
                      "name": "properties_5"
                    },
                    "kind": "init",
                    "method": false,
                    "shorthand": false
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "properties_10"
                    },
                    "computed": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "a"
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "b"
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "c"
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "d"
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "e"
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "f"
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "g"
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 7,
                            "raw": "7"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "h"
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 8,
                            "raw": "8"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9"
                          },
                          "kind": "init",
                          "method": false,
                          "shorthand": false
                        },
                        {
                          "type": "Property",
                          "key": {
                            "type": "Identifier",
                            "name": "j"
                          },
                          "computed": false,
                          "value": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10"
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
                  },
                  {
                    "type": "Property",
                    "key": {
                      "type": "Identifier",
                      "name": "properties_dict"
                    },
                    "computed": false,
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "makeSlowCopy"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "properties_5"
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
            "name": "TEST_PROTOTYPES"
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "null"
                },
                "computed": false,
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "empty"
                },
                "computed": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": []
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Literal",
                  "value": "Object.prototype",
                  "raw": "'Object.prototype'"
                },
                "computed": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Object"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prototype"
                  }
                },
                "kind": "init",
                "method": false,
                "shorthand": false
              },
              {
                "type": "Property",
                "key": {
                  "type": "Literal",
                  "value": "Array.prototype",
                  "raw": "'Array.prototype'"
                },
                "computed": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Array"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "prototype"
                  }
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
            "name": "testFunction"
          },
          "init": {
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
                        "name": "create"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "prototype"
                      },
                      {
                        "type": "Identifier",
                        "name": "properties"
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
      ],
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "createTestFunction"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "prototype"
        },
        {
          "type": "Identifier",
          "name": "properties"
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
                        "name": "testFunction"
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
              "name": "proto_name"
            },
            "init": null
          }
        ],
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "name": "TEST_PROTOTYPES"
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
                  "name": "prototype"
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "TEST_PROTOTYPES"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "proto_name"
                  }
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
                    "name": "prop_name"
                  },
                  "init": null
                }
              ],
              "kind": "var"
            },
            "right": {
              "type": "Identifier",
              "name": "TEST_PROPERTIES"
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
                        "name": "properties"
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "TEST_PROPERTIES"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "prop_name"
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
                              "value": "Create proto:",
                              "raw": "'Create proto:'"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "proto_name"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": " properties:",
                            "raw": "\" properties:\""
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "prop_name"
                        }
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
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "createTestFunction"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "prototype"
                              },
                              {
                                "type": "Identifier",
                                "name": "properties"
                              }
                            ]
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
        ]
      },
      "each": false
    },
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
            "value": "Create",
            "raw": "'Create'"
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
            "type": "Identifier",
            "name": "benchmarks"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}