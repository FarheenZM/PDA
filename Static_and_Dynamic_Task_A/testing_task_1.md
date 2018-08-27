### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1 # It should be == (comparison operator) not = (assignment operator)
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # It should be def not dif
  # missing comma between method arguments
  if card1.value > card2.value
    return card.name
    # return card1
  else
    card2
    # return missing
  end
end
end # extra end

def self.cards_total(cards)
  total # total variable should be assigned to 0
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
  # return should come outside for loop
  # total is integer & should be converted to string
end

# End of class missing
```
