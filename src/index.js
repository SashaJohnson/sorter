class Sorter {
  constructor(elements = [], comparator = function(a,b) { return a - b; }) { 
    
    this.elements = elements;
    this.comparator = comparator;
    
  }

  add(element) {
    
    this.elements.push(element);
    
  }

  at(index) {
   
    return this.elements[index];
   
  }

 get length() {
    
    return this.elements.length;
    
  }

  toArray() {
    
    return this.elements;
    
  }

  sort(indices) {
      
    var toSort = [];
    
    for (var i =0; i < indices.length; i++) {
    
        toSort.push(this.elements[indices[i]]); 
        
    }    
    
    var sorted = toSort.sort(this.comparator);
    
    indices.sort(function(left, right) { return left - right });
    
    for (var i =0; i < indices.length; i++)  {
        
        this.elements[indices[i]] = sorted[i]; 
     
    }
    
  }
  
  setComparator(compareFunction) {
   
   this.comparator = compareFunction;
    
    }    
    
  }

  

module.exports = Sorter;