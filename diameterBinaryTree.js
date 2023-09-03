//https://leetcode.com/problems/diameter-of-binary-tree/

/*
*
* Given the root of a binary tree, return the length of the diameter of the tree.
*
* The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass 
* through the root.
*
* The length of a path between two nodes is represented by the number of edges between them.
*
*/



let diameterOfBinaryTree = function(root){
    let maxD = 0;

    function dfs(node) {
        if (!node) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);
        let currD = left + right;

        maxD = Math.max(currD, maxD);
        return Math.max(left+1, right+1);
    }

    dfs(root);


    return maxD;


}

const root = {
    val:1,
    left:{
        val:2,
        left: {
            val:4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null,
        }
    },
    right: {
        val: 3,
        left: null,
        right: null,
    }
};

console.log(diameterOfBinaryTree(root));