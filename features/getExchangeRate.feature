Feature: Converting different currency to get exchange rate
Priority: Major

Scenario Outline: Converting different currency.
   Given user is on the Westpac currency converter page
   When user select <from_currency> from Convert from field
   And user enter "1" in amount field
   And selects <to_currency> from Convert to field
   And user click on Converter button
   Then I should see converted currency rate with <from_currency> and <to_currency> displayed
   Examples:
       | from_currency        | to_currency          |
       | New Zealand Dollar   | United States Dollar |
       | United States Dollar | New Zealand Dollar   |
       | Pound Sterling       | New Zealand Dollar   |
       | Swiss Franc          | Euro                 |
