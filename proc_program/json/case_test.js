{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "ConstCaseInsensitiveTest"
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
                  "type": "Literal",
                  "value": {},
                  "raw": "/[a-t]/i",
                  "regex": {
                    "pattern": "[a-t]",
                    "flags": "i"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "test"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "abCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgz",
                  "raw": "\"abCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgz\""
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
        "name": "ConstCaseInsensitiveNonLatin1Test"
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
                  "type": "Literal",
                  "value": {},
                  "raw": "/[α-ζ]/i",
                  "regex": {
                    "pattern": "[α-ζ]",
                    "flags": "i"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "test"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "βκςΑφabcdeβκEFGαοςερκ",
                  "raw": "\"βκςΑφabcdeβκEFGαοςερκ\""
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
            "name": "icre"
          },
          "init": {
            "type": "Literal",
            "value": {},
            "raw": "/[a-t]/i",
            "regex": {
              "pattern": "[a-t]",
              "flags": "i"
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
        "name": "GlobalConstCaseInsensitiveRegExpTest"
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
                  "name": "icre"
                },
                "property": {
                  "type": "Identifier",
                  "name": "test"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "abCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgz",
                  "raw": "\"abCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgz\""
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
            "name": "icre2"
          },
          "init": {
            "type": "Literal",
            "value": {},
            "raw": "/[α-ζ]/i",
            "regex": {
              "pattern": "[α-ζ]",
              "flags": "i"
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
        "name": "GlobalConstCaseInsensitiveNonLatin1RegExpTest"
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
                  "name": "icre2"
                },
                "property": {
                  "type": "Identifier",
                  "name": "test"
                }
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": "βκςΑφabcdeβκEFGαοςερκ",
                  "raw": "\"βκςΑφabcdeβκEFGαοςερκ\""
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
                  "name": "ConstCaseInsensitiveTest"
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
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "name": "ConstCaseInsensitiveNonLatin1Test"
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
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "name": "GlobalConstCaseInsensitiveRegExpTest"
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
            },
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "name": "GlobalConstCaseInsensitiveNonLatin1RegExpTest"
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
            "value": "CaseInsensitiveTest",
            "raw": "\"CaseInsensitiveTest\""
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}