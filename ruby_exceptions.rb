# raises exception on invalid argument

def get_inverse(x)  
  raise ArgumentError, 'Argument is not a number' unless x.is_a? Numeric  
  1.0 / x  
end  
