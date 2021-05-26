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
            "value": "Untagged",
            "raw": "'Untagged'"
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
                    "value": "Untagged-Simple",
                    "raw": "'Untagged-Simple'"
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
                    "name": "Untagged"
                  },
                  {
                    "type": "Identifier",
                    "name": "UntaggedSetup"
                  },
                  {
                    "type": "Identifier",
                    "name": "UntaggedTearDown"
                  }
                ]
              }
            ]
          }
        ]
      }
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
            "value": "LargeUntagged",
            "raw": "'LargeUntagged'"
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
                    "value": "Untagged-Large",
                    "raw": "'Untagged-Large'"
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
                    "name": "UntaggedLarge"
                  },
                  {
                    "type": "Identifier",
                    "name": "UntaggedLargeSetup"
                  },
                  {
                    "type": "Identifier",
                    "name": "UntaggedLargeTearDown"
                  }
                ]
              }
            ]
          }
        ]
      }
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
            "value": "Tagged",
            "raw": "'Tagged'"
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
                    "value": "TaggedRawSimple",
                    "raw": "'TaggedRawSimple'"
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
                    "name": "TaggedRaw"
                  },
                  {
                    "type": "Identifier",
                    "name": "TaggedRawSetup"
                  },
                  {
                    "type": "Identifier",
                    "name": "TaggedRawTearDown"
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
            "name": "SUBJECT"
          },
          "init": {
            "type": "Literal",
            "value": "Bob",
            "raw": "'Bob'"
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
            "name": "TARGET"
          },
          "init": {
            "type": "Literal",
            "value": "Mary",
            "raw": "'Mary'"
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
            "name": "OBJECT"
          },
          "init": {
            "type": "Literal",
            "value": "apple",
            "raw": "'apple'"
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "UntaggedSetup"
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
                "name": "result"
              },
              "right": {
                "type": "Identifier",
                "name": "undefined"
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
        "name": "Untagged"
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
                "name": "result"
              },
              "right": {
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
                      "raw": " gives ",
                      "cooked": " gives "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " an ",
                      "cooked": " an "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": ".",
                      "cooked": "."
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "name": "SUBJECT"
                  },
                  {
                    "type": "Identifier",
                    "name": "TARGET"
                  },
                  {
                    "type": "Identifier",
                    "name": "OBJECT"
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
        "name": "UntaggedTearDown"
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
                  "name": "expected"
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
                              "value": "",
                              "raw": "''"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "SUBJECT"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": " gives ",
                            "raw": "' gives '"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "TARGET"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": " an ",
                        "raw": "' an '"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "OBJECT"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": ".",
                    "raw": "'.'"
                  }
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "name": "result"
              },
              "right": {
                "type": "Identifier",
                "name": "expected"
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
        "name": "UntaggedLargeSetup"
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
                "name": "result"
              },
              "right": {
                "type": "Identifier",
                "name": "undefined"
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
        "name": "UntaggedLarge"
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
                "name": "result"
              },
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus\n aliquam, elit euismod vestibulum ",
                      "cooked": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus\n aliquam, elit euismod vestibulum "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "lacinia, arcu odio sagittis mauris, id\n blandit dolor felis pretium nisl. Maecenas porttitor, nunc ut accumsan mollis,\n arcu metus rutrum arcu, ",
                      "cooked": "lacinia, arcu odio sagittis mauris, id\n blandit dolor felis pretium nisl. Maecenas porttitor, nunc ut accumsan mollis,\n arcu metus rutrum arcu, "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "ut varius dolor lorem nec risus. Integer convallis\n tristique ante, non pretium ante suscipit at. Sed egestas massa enim, convallis\n fermentum neque vehicula ac. Donec imperdiet a tortor ac semper. Morbi accumsan\n quam nec erat viverra iaculis. ",
                      "cooked": "ut varius dolor lorem nec risus. Integer convallis\n tristique ante, non pretium ante suscipit at. Sed egestas massa enim, convallis\n fermentum neque vehicula ac. Donec imperdiet a tortor ac semper. Morbi accumsan\n quam nec erat viverra iaculis. "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "Donec a scelerisque cras amet.",
                      "cooked": "Donec a scelerisque cras amet."
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  },
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
        "name": "UntaggedLargeTearDown"
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
                  "name": "expected"
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
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
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
                                            "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                                            "raw": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. \""
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "Vivamus\n aliquam, elit euismod vestibulum ",
                                            "raw": "\"Vivamus\\n aliquam, elit euismod vestibulum \""
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": "lacinia, arcu odio",
                                        "raw": "\"lacinia, arcu odio\""
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": " sagittis mauris, id\n blandit dolor felis pretium nisl. Maecenas ",
                                      "raw": "\" sagittis mauris, id\\n blandit dolor felis pretium nisl. Maecenas \""
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": "porttitor, nunc ut accumsan mollis,\n arcu metus rutrum arcu, ",
                                    "raw": "\"porttitor, nunc ut accumsan mollis,\\n arcu metus rutrum arcu, \""
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": "ut varius dolor lorem nec risus. Integer convallis\n tristique ante, ",
                                "raw": "\"ut varius dolor lorem nec risus. Integer convallis\\n tristique ante, \""
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": "non pretium ante suscipit at. Sed egestas massa enim, convallis\n ",
                              "raw": "\"non pretium ante suscipit at. Sed egestas massa enim, convallis\\n \""
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": "fermentum neque vehicula ac. Donec imperdiet a tortor ac semper. Morbi",
                            "raw": "\"fermentum neque vehicula ac. Donec imperdiet a tortor ac semper. Morbi\""
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": " accumsan\n quam nec erat viverra iaculis. ",
                          "raw": "\" accumsan\\n quam nec erat viverra iaculis. \""
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": "Donec a ",
                      "raw": "\"Donec a \""
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": "scelerisque cras amet.",
                    "raw": "\"scelerisque cras amet.\""
                  }
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "name": "result"
              },
              "right": {
                "type": "Identifier",
                "name": "expected"
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
        "name": "TaggedRawSetup"
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
                "name": "result"
              },
              "right": {
                "type": "Identifier",
                "name": "undefined"
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
        "name": "TaggedRaw"
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
                "name": "result"
              },
              "right": {
                "type": "TaggedTemplateExpression",
                "tag": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "String"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "raw"
                  }
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
                        "raw": " gives ",
                        "cooked": " gives "
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " an ",
                        "cooked": " an "
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " \\ud83c\\udf4f.",
                        "cooked": " 🍏."
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "name": "SUBJECT"
                    },
                    {
                      "type": "Identifier",
                      "name": "TARGET"
                    },
                    {
                      "type": "Identifier",
                      "name": "OBJECT"
                    }
                  ]
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
        "name": "TaggedRawTearDown"
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
                  "name": "expected"
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
                              "value": "",
                              "raw": "''"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "SUBJECT"
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": " gives ",
                            "raw": "' gives '"
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "TARGET"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": " an ",
                        "raw": "' an '"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "OBJECT"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": " \\ud83c\\udf4f.",
                    "raw": "' \\\\ud83c\\\\udf4f.'"
                  }
                }
              }
            ],
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "name": "result"
              },
              "right": {
                "type": "Identifier",
                "name": "expected"
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