import { isNullOrUndefined } from "../../Utils/src/Common"

export class BinaryTree<T extends (number | string)>{
    private root: Node<T>;

    constructor(...items: T[]){
        items.forEach(f=>this.add(f));
    }

    
    /**
     * Add value to tree. O(h)
     * @param value  Value for add.
     */
    add(value: T): void {
        this.root = this.addTo(value, this.root);
    }

    private addTo(value: T, parent: Node<T>): Node<T>{
        if(isNullOrUndefined(parent)){
            return new Node<T>(value);
        }

        if(value < parent.value){
            parent.left = this.addTo(value, parent.left);
        } else if(value > parent.value) {
            parent.right = this.addTo(value, parent.right);
        }
        return parent;
    }

    toString():string{
        return isNullOrUndefined(this.root) ? "" : this.root.toString();
    }

    remove(value: T){
        this.root = this.removeFrom(value, this.root);
    }

    private removeFrom(value: T, node: Node<T>):Node<T>{
        if(isNullOrUndefined(node)){
            return node;
        }

        if(value < node.value){
            node.left = this.removeFrom(value, node.left);
        } else if(value > node.value){
            node.right = this.removeFrom(value, node.right);
        } else {
            if(isNullOrUndefined(node.left) && isNullOrUndefined(node.right)){
                return null;
            } else if(isNullOrUndefined(node.left)) {
                return node.right;
            } else if(isNullOrUndefined(node.right)) {
                return node.left;
            } else {
                node.value = this.getMinimumFrom(node.right);
                node.right = this.removeFrom(node.value, node.right);
            }
        }
        return node;
    }

    getMinimum(): T{
        return this.getMinimumFrom(this.root);
    }

    private getMinimumFrom(node: Node<T>): T{
        if(isNullOrUndefined(node)){
            return null;
        }

        if(!isNullOrUndefined(node.left)){
            return this.getMinimumFrom(node.left);
        }

        return node.value;
    }

    getMaximum(): T{
        return this.getMaximumFrom(this.root);
    }

    private getMaximumFrom(node: Node<T>): T{
        if(isNullOrUndefined(node)){
            return null;
        }

        if(!isNullOrUndefined(node.right)){
            return this.getMaximumFrom(node.right);
        }
        
        return node.value;
    }

    inOrderTraversal(): T[]{
        let result = [];
        this.inOrderTraversalFrom(this.root, vlaue => result.push(vlaue));
        return result;
    }

    private inOrderTraversalFrom(node: Node<T>, handler: (value: T) => void){
        if(!isNullOrUndefined(node)){
            this.inOrderTraversalFrom(node.left, handler);
            handler(node.value);
            this.inOrderTraversalFrom(node.right, handler);
        }
    }

    preOrderTraversal(): T[]{
        let result = [];
        this.preOrderTraversalFrom(this.root, vlaue => result.push(vlaue));
        return result;
    }

    private preOrderTraversalFrom(node: Node<T>, handler: (value: T) => void){
        if(!isNullOrUndefined(node)){
            handler(node.value);
            this.preOrderTraversalFrom(node.left, handler);
            this.preOrderTraversalFrom(node.right, handler);
        }
    }

    postOrderTraversal(): T[]{
        let result = [];
        this.postOrderTraversalFrom(this.root, vlaue => result.push(vlaue));
        return result;
    }

    private postOrderTraversalFrom(node: Node<T>, handler: (value: T) => void){
        if(!isNullOrUndefined(node)){
            this.postOrderTraversalFrom(node.left, handler);
            this.postOrderTraversalFrom(node.right, handler);
            handler(node.value);
        }
    }

    contains(value: T): boolean{
        let current = this.root;
        while(!isNullOrUndefined(current)){
            if(value === current.value){
                return true;
            } 
            if (value < current.value){
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    get height(): number{
        return this.getHeightFrom(this.root);
    }

    private getHeightFrom(node: Node<T>): number{
        if(isNullOrUndefined(node)){
            return 0;
        }
        return Math.max(this.getHeightFrom(node.left), this.getHeightFrom(node.right)) + 1
    }

    get isBalanced() {
        return this.isBalancedFrom(this.root);
    }
    
    private isBalancedFrom(node: Node<T>):boolean {
        if (isNullOrUndefined(node))
            return true;
        
        return this.isBalancedFrom(node.left) && this.isBalancedFrom(node.right) 
                && (Math.abs(this.getHeightFrom(node.left) - this.getHeightFrom(node.right)) <= 1);
    }
}

class Node<T extends (number | string)> {
    value: T;
    left: Node<T>;
    right: Node<T>;

    constructor(value: T){
        this.value = value;
    }

    toString():string{
        var result = "(" + this.value;
        if(!isNullOrUndefined(this.left)){
            result += " " + this.left.toString();
        }
        if(!isNullOrUndefined(this.right)){
            result += " " + this.right.toString();
        }
        return result + ")";
    }
}