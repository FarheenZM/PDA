require("minitest/autorun")
require("minitest/rg")

require_relative('../card')
require_relative('../testing_task_2')

class TestCardGame < MiniTest::Test

  def setup()
    @card1 = Card.new("Ace", 1)
    @card2 = Card.new("Two", 2)

    @cardgame = CardGame.new()

    @cards = [@card1, @card2]

  end

  def test_card_is_ace()
    result = @cardgame.checkforAce(@card1)
    assert_equal(true, result)
  end

  def test_highest_card()
    assert_equal(@card2, @cardgame.highest_card(@card1, @card2))
  end

  def test_cards_total()
    result = CardGame.cards_total(@cards)
    assert_equal("You have a total of 3", result)
  end

end
