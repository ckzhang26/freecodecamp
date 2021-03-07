function spinalCase(str) {
    return str
          .replace(/([a-z])([A-Z])/g, '$1 $2')
          .split(/[^a-z0-9]/i)
          .map(word => word.toLowerCase())
          .join('-');
  }
  
  spinalCase('This Is Spinal Tap');