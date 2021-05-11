const esprima = require('esprima');
const estraverse = require('estraverse')
const escodegen = require('escodegen')
const asttypes = require('ast-types')
function Stack(){
    
}
var fs=require("fs");
var ocode = fs.readFileSync('2.js').toString();
console.log(ocode);
ast=esprima.parseScript(ocode);
var sk = 
{
    item: [],
    push: (ele)=>{
        sk.item.push(ele);
    },
    pop: ()=>{
        sk.item.pop();
    },
    tope: ()=>{
        if(sk.item.length > 0)
            return sk.item[sk.item.length-1];
        else{
            console.log("no element in stack");
            return -1;
        }
    },
    tope2: ()=>{
        if(sk.item.length > 1)
            return sk.item[sk.item.length-2];
        else{
            console.log("less than 2 elements in stack");
            return -1;
        }
    }
};
var Func = new Array();
estraverse.traverse(ast, {
    enter: node => {
        if(node.type=='FunctionDeclaration'){
            Func[node.id.name]=1;
        }
        if(node.type=='CallExpression'){
            Func[node.callee.name]=1;
        }
    },
    leave: node => {
    }
})
var nnode=asttypes.builders.expressionStatement(
    asttypes.builders.callExpression(
        asttypes.builders.memberExpression(
            asttypes.builders.identifier("console"), asttypes.builders.identifier("log")
        ),
        [asttypes.builders.literal("before function call")]
    )
);
sk.push(null);
sk.push(null);
estraverse.traverse(ast, {
    enter: node => {
        var par1 = sk.tope();
        var par2 = sk.tope2();
        console.log(par1,par2);
        if(node.type=='CallExpression'){
            var id = par2.body.indexOf(par1);
            par2.body.splice(id, 0, nnode);
        }
        sk.push(node);
    },
    leave: node => {
        sk.pop();
    }
})
const code = escodegen.generate(ast)
console.log(code)