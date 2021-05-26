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
            "value": "PackedSmi",
            "raw": "'PackedSmi'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "Sort"
          },
          {
            "type": "Identifier",
            "name": "CreatePackedSmiArray"
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
            "value": "PackedDouble",
            "raw": "'PackedDouble'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "Sort"
          },
          {
            "type": "Identifier",
            "name": "CreatePackedDoubleArray"
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
            "value": "PackedElement",
            "raw": "'PackedElement'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "Sort"
          },
          {
            "type": "Identifier",
            "name": "CreatePackedObjectArray"
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
            "value": "HoleySmi",
            "raw": "'HoleySmi'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "Sort"
          },
          {
            "type": "Identifier",
            "name": "CreateHoleySmiArray"
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
            "value": "HoleyDouble",
            "raw": "'HoleyDouble'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "Sort"
          },
          {
            "type": "Identifier",
            "name": "CreateHoleyDoubleArray"
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
            "value": "HoleyElement",
            "raw": "'HoleyElement'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "Sort"
          },
          {
            "type": "Identifier",
            "name": "CreateHoleyObjectArray"
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
            "value": "Dictionary",
            "raw": "'Dictionary'"
          },
          {
            "type": "Literal",
            "value": 1000,
            "raw": "1000"
          },
          {
            "type": "Identifier",
            "name": "Sort"
          },
          {
            "type": "Identifier",
            "name": "CreateDictionaryArray"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}