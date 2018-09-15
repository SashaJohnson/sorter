class Sorter {
  constructor(elements = []) { 
    
    this.elements = elements;
    
  }

  add(element) {
    
    this.elements.push(element);
    
  }

  at(index) {
   
    return this.elements[index];
   
  }

  length() {
    
    return this.elements.length;
    
  }

  toArray() {
    
    return this.elements;
    
  }

  sort(indices) {
    
    
    
    
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;