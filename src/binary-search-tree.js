const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if(!data) {
      return;
    }
    let newNode = new Node(data);
    
    if(!this.rootNode) {
      this.rootNode = newNode;
      return;
    }
     
    let currentNode = this.rootNode;

    while(currentNode) {
      if(newNode.data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      }
      else if (newNode.data > currentNode.data){
        if(!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } else {
        return;
      } 
    }
  }

  has(data) {

    if(!this.rootNode) {
      return false;
    }

    let currentNode = this.rootNode;

    while(currentNode) {
      if(currentNode.data === data) {
        return true;
      } else {
        if(currentNode.data > data) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return false;
  }

  find(data) {

    if(!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;

    while(currentNode) {
      if(currentNode.data === data) {
        return currentNode;
      } else {
        if(currentNode.data > data) {
          currentNode = currentNode.left;
        }else {
          currentNode = currentNode.right; 
        }
      }
    }
    return null;
  }

  remove(data) {
    this.rootNode = removeData(this.rootNode, data);

    function removeData(curNode, value) {
      if(!curNode) {
        return null;
      }

      if(value < curNode.data) {
        curNode.left = removeData(curNode.left, value);
        return curNode;
      }
      else if(value > curNode.data) {
        curNode.right = removeData(curNode.right, value);
        return curNode;
      }else {
        if(!curNode.left && !curNode.right) {
          return null;
        }

        if(!curNode.left) {
          curNode = curNode.right;
          return curNode;
        }

        if(!curNode.right) {
          curNode = curNode.left;
          return curNode;
        }

        let minRight = curNode.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        curNode.data = minRight.data;
        curNode.right = removeData(curNode.right, minRight.data);
        return curNode;
      }
    } 
  }
  
  min() {
    if(!this.rootNode) {
      return;
    }

    let currentNode = this.rootNode;

    while(currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
    
  }

  max() {
    if(!this.rootNode) {
      return;
    }

    let currentNode = this.rootNode;

    while(currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};





