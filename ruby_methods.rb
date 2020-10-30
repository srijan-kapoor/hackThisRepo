# gsub with ruby blocks

def animal(input_animal = "dog")
  input_animal.gsub(/\w+/) { |animal| 
    if animal == "dog"
      "You have a dog!"
    elsif animal == "cat"
      "That's a cat"
    else
      "I don't recognize this animal."
    end
  }
end
