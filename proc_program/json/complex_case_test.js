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
            "name": "g"
          },
          "init": {
            "type": "Literal",
            "value": "[\\t\\n\\f ]",
            "raw": "\"[\\\\t\\\\n\\\\f ]\""
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
            "name": "W"
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "name": "g"
            },
            "right": {
              "type": "Literal",
              "value": "*",
              "raw": "\"*\""
            }
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
            "name": "h"
          },
          "init": {
            "type": "Literal",
            "value": "[\\ud800-\\udbff][\\udc00-\\udfff]",
            "raw": "\"[\\\\ud800-\\\\udbff][\\\\udc00-\\\\udfff]\""
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
            "name": "k"
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Literal",
              "value": "[\\u0080-\\ud7ff\\ue000-\\ufffd]|",
              "raw": "\"[\\\\u0080-\\\\ud7ff\\\\ue000-\\\\ufffd]|\""
            },
            "right": {
              "type": "Identifier",
              "name": "h"
            }
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
            "name": "U"
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "value": "[0-9a-fA-F]{1,6}",
                "raw": "\"[0-9a-fA-F]{1,6}\""
              },
              "right": {
                "type": "Identifier",
                "name": "g"
              }
            },
            "right": {
              "type": "Literal",
              "value": "?",
              "raw": "\"?\""
            }
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
            "name": "E"
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
                    "type": "Literal",
                    "value": "(?:",
                    "raw": "\"(?:\""
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "U"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "|[\\u0020-\\u007e\\u0080-\\ud7ff\\ue000\\ufffd]|",
                  "raw": "\"|[\\\\u0020-\\\\u007e\\\\u0080-\\\\ud7ff\\\\ue000\\\\ufffd]|\""
                }
              },
              "right": {
                "type": "Identifier",
                "name": "h"
              }
            },
            "right": {
              "type": "Literal",
              "value": ")",
              "raw": "\")\""
            }
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
            "name": "m"
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Literal",
              "value": "\\\\",
              "raw": "\"\\\\\\\\\""
            },
            "right": {
              "type": "Identifier",
              "name": "E"
            }
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
            "name": "o"
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
                    "type": "Literal",
                    "value": "(?:[\\t\\x21\\x23-\\x26\\x28-\\x5b\\x5d-\\x7e]|",
                    "raw": "\"(?:[\\\\t\\\\x21\\\\x23-\\\\x26\\\\x28-\\\\x5b\\\\x5d-\\\\x7e]|\""
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "k"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "|",
                  "raw": "\"|\""
                }
              },
              "right": {
                "type": "Identifier",
                "name": "m"
              }
            },
            "right": {
              "type": "Literal",
              "value": ")",
              "raw": "\")\""
            }
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
            "name": "p"
          },
          "init": {
            "type": "Literal",
            "value": "[^'\"\\n\\f\\\\]|\\\\[\\s\\S]",
            "raw": "'[^\\'\"\\\\n\\\\f\\\\\\\\]|\\\\\\\\[\\\\s\\\\S]'"
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
            "name": "q"
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
                      "type": "Literal",
                      "value": "\"(?:'|",
                      "raw": "'\"(?:\\'|'"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "p"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": ")*\"",
                    "raw": "')*\"'"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "|'(?:\"|",
                  "raw": "'|\\'(?:\\\"|'"
                }
              },
              "right": {
                "type": "Identifier",
                "name": "p"
              }
            },
            "right": {
              "type": "Literal",
              "value": ")*'",
              "raw": "')*\\''"
            }
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
            "name": "r"
          },
          "init": {
            "type": "Literal",
            "value": "[-+]?(?:[0-9]+(?:[.][0-9]+)?|[.][0-9]+)",
            "raw": "\"[-+]?(?:[0-9]+(?:[.][0-9]+)?|[.][0-9]+)\""
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
            "name": "t"
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
                    "type": "Literal",
                    "value": "(?:[a-zA-Z_]|",
                    "raw": "\"(?:[a-zA-Z_]|\""
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "k"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "|",
                  "raw": "\"|\""
                }
              },
              "right": {
                "type": "Identifier",
                "name": "m"
              }
            },
            "right": {
              "type": "Literal",
              "value": ")",
              "raw": "\")\""
            }
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
            "name": "u"
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
                    "type": "Literal",
                    "value": "(?:[a-zA-Z0-9_-]|",
                    "raw": "\"(?:[a-zA-Z0-9_-]|\""
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "k"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "|",
                  "raw": "\"|\""
                }
              },
              "right": {
                "type": "Identifier",
                "name": "m"
              }
            },
            "right": {
              "type": "Literal",
              "value": ")",
              "raw": "\")\""
            }
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
            "name": "v"
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "name": "u"
            },
            "right": {
              "type": "Literal",
              "value": "+",
              "raw": "\"+\""
            }
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
            "name": "I"
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
                  "value": "-?",
                  "raw": "\"-?\""
                },
                "right": {
                  "type": "Identifier",
                  "name": "t"
                }
              },
              "right": {
                "type": "Identifier",
                "name": "u"
              }
            },
            "right": {
              "type": "Literal",
              "value": "*",
              "raw": "\"*\""
            }
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
            "name": "x"
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
                    "type": "Literal",
                    "value": "(?:@?-?",
                    "raw": "\"(?:@?-?\""
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "t"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "|#)",
                  "raw": "\"|#)\""
                }
              },
              "right": {
                "type": "Identifier",
                "name": "u"
              }
            },
            "right": {
              "type": "Literal",
              "value": "*",
              "raw": "\"*\""
            }
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
            "name": "y"
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
                  "type": "Identifier",
                  "name": "r"
                },
                "right": {
                  "type": "Literal",
                  "value": "(?:%|",
                  "raw": "\"(?:%|\""
                }
              },
              "right": {
                "type": "Identifier",
                "name": "I"
              }
            },
            "right": {
              "type": "Literal",
              "value": ")?",
              "raw": "\")?\""
            }
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
            "name": "z"
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
                            "type": "Literal",
                            "value": "url[(]",
                            "raw": "\"url[(]\""
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "W"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "(?:",
                          "raw": "\"(?:\""
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "q"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": "|",
                      "raw": "\"|\""
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "o"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "*)",
                  "raw": "\"*)\""
                }
              },
              "right": {
                "type": "Identifier",
                "name": "W"
              }
            },
            "right": {
              "type": "Literal",
              "value": "[)]",
              "raw": "\"[)]\""
            }
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
            "name": "B"
          },
          "init": {
            "type": "Literal",
            "value": "U[+][0-9A-F?]{1,6}(?:-[0-9A-F]{1,6})?",
            "raw": "\"U[+][0-9A-F?]{1,6}(?:-[0-9A-F]{1,6})?\""
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
            "name": "C"
          },
          "init": {
            "type": "Literal",
            "value": "<!--",
            "raw": "\"<\\!--\""
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
            "name": "F"
          },
          "init": {
            "type": "Literal",
            "value": "-->",
            "raw": "\"-->\""
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
            "name": "S"
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "name": "g"
            },
            "right": {
              "type": "Literal",
              "value": "+",
              "raw": "\"+\""
            }
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
            "name": "G"
          },
          "init": {
            "type": "Literal",
            "value": "/(?:[*][^*]*[*]+(?:[^/][^*]*[*]+)*/|/[^\\n\\f]*)",
            "raw": "\"/(?:[*][^*]*[*]+(?:[^/][^*]*[*]+)*/|/[^\\\\n\\\\f]*)\""
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
            "name": "J"
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "value": "(?!url[(])",
                "raw": "\"(?!url[(])\""
              },
              "right": {
                "type": "Identifier",
                "name": "I"
              }
            },
            "right": {
              "type": "Literal",
              "value": "[(]",
              "raw": "\"[(]\""
            }
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
            "name": "R"
          },
          "init": {
            "type": "Literal",
            "value": "[~|^$*]=",
            "raw": "\"[~|^$*]=\""
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
            "name": "T"
          },
          "init": {
            "type": "Literal",
            "value": "[^\"'\\\\/]|/(?![/*])",
            "raw": "'[^\"\\'\\\\\\\\/]|/(?![/*])'"
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
            "name": "V"
          },
          "init": {
            "type": "Literal",
            "value": "\\uFEFF",
            "raw": "\"\\\\uFEFF\""
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
            "name": "Y"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "V"
                  },
                  {
                    "type": "Identifier",
                    "name": "B"
                  },
                  {
                    "type": "Identifier",
                    "name": "z"
                  },
                  {
                    "type": "Identifier",
                    "name": "J"
                  },
                  {
                    "type": "Identifier",
                    "name": "x"
                  },
                  {
                    "type": "Identifier",
                    "name": "q"
                  },
                  {
                    "type": "Identifier",
                    "name": "y"
                  },
                  {
                    "type": "Identifier",
                    "name": "C"
                  },
                  {
                    "type": "Identifier",
                    "name": "F"
                  },
                  {
                    "type": "Identifier",
                    "name": "S"
                  },
                  {
                    "type": "Identifier",
                    "name": "G"
                  },
                  {
                    "type": "Identifier",
                    "name": "R"
                  },
                  {
                    "type": "Identifier",
                    "name": "T"
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
                "value": "|",
                "raw": "\"|\""
              }
            ]
          }
        }
      ],
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "ComplexGlobalCaseInsensitiveMatch"
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
                  "name": "X"
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "RegExp"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "Y"
                    },
                    {
                      "type": "Literal",
                      "value": "gi",
                      "raw": "\"gi\""
                    }
                  ]
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Literal",
                  "value": "abcſABCβκς",
                  "raw": "\"abcſABCβκς\""
                },
                "property": {
                  "type": "Identifier",
                  "name": "match"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "X"
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
                  "type": "Literal",
                  "value": "color:",
                  "raw": "\"color:\""
                },
                "property": {
                  "type": "Identifier",
                  "name": "match"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "X"
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "benchmarks"
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "name": "ComplexGlobalCaseInsensitiveMatch"
                },
                {
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
              ]
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
          "name": "createBenchmarkSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "ComplexCaseInsensitiveTest",
            "raw": "\"ComplexCaseInsensitiveTest\""
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}