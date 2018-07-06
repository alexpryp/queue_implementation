"use strict"

function Queue( capacity ) {
	this._capacity = capacity || Infinity;
	this._storage = {};
	this._head = 0;
	this._tail = 0;
}

Queue.prototype.enqueue = function( value ) {
	if( this.count() < this._capacity ) {
		this._storage[this._tail++] = value;
		return this.count();
	}
	return "The queues are full";
};

Queue.prototype.dequeue = function() {
	var element = this._storage[this._head];
	delete this._storage[this._head];
	
	if( this._head < this._tail ) {
		this._head++;
	}

	return element;
};

Queue.prototype.peek = function() {
	return this._storage[this._head];
};

Queue.prototype.count = function() {
	return this._tail - this._head;
};

Queue.prototype.contains = function( value ) {
	for ( var i = this._head; i < this._tail; i++ ) {
		if( this._storage[i] === value ) {
			return true;
		}
	}

	return false;
};

Queue.prototype.until = function( value ) {
	for( var i = this._head; i < this._tail; i++ ) {
		if ( this._storage[i] === value ) {
			return i - this._head + 1;
		}
	}

	return null;
};


/*Tests*/
var queue = new Queue();

console.log( queue.enqueue( 1 ));
console.log( queue.enqueue( 2 ));
console.log( queue.enqueue( 3 ));
console.log( queue.enqueue( 4 ));
console.log( queue.enqueue( 5 ));


console.log( queue.dequeue());
console.log( queue.dequeue());

console.log( queue.enqueue( 1 ));
console.log( queue.enqueue( 2 ));
console.log( queue.enqueue( 3 ));

console.log( queue.peek() );
console.log( queue.count() );
