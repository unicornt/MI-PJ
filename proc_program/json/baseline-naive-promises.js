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
            "value": "BaselineNaivePromises",
            "raw": "'BaselineNaivePromises'"
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
                    "value": "Basic",
                    "raw": "'Basic'"
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
                    "name": "Basic"
                  },
                  {
                    "type": "Identifier",
                    "name": "Setup"
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
            "name": "a"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "b"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "c"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "d"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "e"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "f"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "g"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "h"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "i"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "j"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "x"
          },
          "init": null
        }
      ],
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Setup"
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
                "name": "x"
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Promise"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "resolve"
                  }
                },
                "arguments": []
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
                "name": "j"
              },
              "right": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "name": "j"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "p"
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "p"
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "i"
              },
              "right": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "name": "i"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "p"
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
                                                            "type": "CallExpression",
                                                            "callee": {
                                                              "type": "MemberExpression",
                                                              "computed": false,
                                                              "object": {
                                                                "type": "Identifier",
                                                                "name": "p"
                                                              },
                                                              "property": {
                                                                "type": "Identifier",
                                                                "name": "then"
                                                              }
                                                            },
                                                            "arguments": [
                                                              {
                                                                "type": "Identifier",
                                                                "name": "j"
                                                              }
                                                            ]
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "name": "then"
                                                          }
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "Identifier",
                                                            "name": "j"
                                                          }
                                                        ]
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "name": "then"
                                                      }
                                                    },
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "name": "j"
                                                      }
                                                    ]
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "name": "then"
                                                  }
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "name": "j"
                                                  }
                                                ]
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "then"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "name": "j"
                                              }
                                            ]
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "then"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "name": "j"
                                          }
                                        ]
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "then"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "j"
                                      }
                                    ]
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "then"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "j"
                                  }
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "then"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "j"
                              }
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "then"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "j"
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
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "h"
              },
              "right": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "name": "h"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "p"
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "p"
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "g"
              },
              "right": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "name": "g"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "p"
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "p"
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "f"
              },
              "right": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "name": "f"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "p"
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "p"
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "e"
              },
              "right": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "name": "e"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "p"
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "p"
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "d"
              },
              "right": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "name": "d"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "p"
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "p"
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "c"
              },
              "right": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "name": "c"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "p"
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "p"
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "b"
              },
              "right": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "name": "b"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "p"
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "p"
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "a"
              },
              "right": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "name": "a"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "p"
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "p"
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "%PerformMicrotaskCheckpoint"
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
        "name": "Basic"
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
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "name": "x"
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "name": "then"
                                                    }
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "name": "j"
                                                    }
                                                  ]
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "then"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "name": "i"
                                                }
                                              ]
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "then"
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "name": "h"
                                            }
                                          ]
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "then"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "g"
                                        }
                                      ]
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "then"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "name": "f"
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "then"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "e"
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "then"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "d"
                            }
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "then"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "c"
                        }
                      ]
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "then"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "b"
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "then"
                }
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "a"
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
                "name": "%PerformMicrotaskCheckpoint"
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
  ],
  "sourceType": "script"
}