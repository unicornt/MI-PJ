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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "CreateCompareFn"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "transformfn"
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "argument": {
                        "type": "Identifier",
                        "name": "counter"
                      },
                      "prefix": true
                    }
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "name": "counter"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "name": "kArraySize"
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "transformfn"
                            },
                            "arguments": []
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
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
                          "name": "a"
                        },
                        {
                          "type": "Identifier",
                          "name": "b"
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
            "name": "cmp_packed_smi_to_double"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateCompareFn"
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "id": null,
                "params": [],
                "body": {
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
                      "name": "push"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0.1,
                      "raw": "0.1"
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "cmp_holey_smi_to_double"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateCompareFn"
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "id": null,
                "params": [],
                "body": {
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
                      "name": "push"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0.1,
                      "raw": "0.1"
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "cmp_double_to_double"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateCompareFn"
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "id": null,
                "params": [],
                "body": {
                  "type": "AssignmentExpression",
                  "operator": "*=",
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
                    "value": 2,
                    "raw": "2"
                  }
                },
                "generator": false,
                "expression": true,
                "async": false
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
          "type": "Identifier",
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "PackedSmiToPackedDouble",
            "raw": "'PackedSmiToPackedDouble'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateSortFn"
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "cmp_packed_smi_to_double"
                  }
                ]
              }
            ]
          },
          {
            "type": "Identifier",
            "name": "CreatePackedSmiArray"
          },
          {
            "type": "Identifier",
            "name": "AssertPackedDoubleElements"
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
            "value": "HoleySmiToHoleyDouble",
            "raw": "'HoleySmiToHoleyDouble'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateSortFn"
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "cmp_holey_smi_to_double"
                  }
                ]
              }
            ]
          },
          {
            "type": "Identifier",
            "name": "CreateHoleySmiArray"
          },
          {
            "type": "Identifier",
            "name": "AssertHoleyDoubleElements"
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
            "value": "PackedDoubleToHoleyDouble",
            "raw": "'PackedDoubleToHoleyDouble'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateSortFn"
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "cmp_double_to_double"
                  }
                ]
              }
            ]
          },
          {
            "type": "Identifier",
            "name": "CreatePackedDoubleArray"
          },
          {
            "type": "Identifier",
            "name": "AssertHoleyDoubleElements"
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
            "name": "cmp_packed_to_dict"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateCompareFn"
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "id": null,
                "params": [],
                "body": {
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "%MaxSmi"
                      },
                      "arguments": []
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42"
                  }
                },
                "generator": false,
                "expression": true,
                "async": false
              }
            ]
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
            "name": "cmp_holey_to_dict"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateCompareFn"
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "id": null,
                "params": [],
                "body": {
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "%MaxSmi"
                      },
                      "arguments": []
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42"
                  }
                },
                "generator": false,
                "expression": true,
                "async": false
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
          "type": "Identifier",
          "name": "createSortSuite"
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "PackedElementToDictionary",
            "raw": "'PackedElementToDictionary'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateSortFn"
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "cmp_packed_to_dict"
                  }
                ]
              }
            ]
          },
          {
            "type": "Identifier",
            "name": "CreatePackedObjectArray"
          },
          {
            "type": "Identifier",
            "name": "AssertDictionaryElements"
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
            "value": "HoleyElementToDictionary",
            "raw": "'HoleyElementToDictionary'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "CreateSortFn"
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "name": "cmp_holey_to_dict"
                  }
                ]
              }
            ]
          },
          {
            "type": "Identifier",
            "name": "CreateHoleyObjectArray"
          },
          {
            "type": "Identifier",
            "name": "AssertDictionaryElements"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}