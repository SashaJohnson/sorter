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
      
    toSort = [];
    
    for (var i =0; i < indices.length; i++) {
    
        toSort.push(this.elements[indices[i]]); 
        
    }    
    
    sorted = toSort.sort();
    
    for (var i =0; i < indices.length; i++)  {
        
        this.elements[indices[i]] = sorted[i]; 
        
    }
    
    
  }


  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;