Feature: Vaildating currency converter feature
Priority: Major

Scenario: Validation message displayed when currency field is blank and button is clicked.
   Given user is on the Westpac currency converter page
   When user click on Converter button
   Then user should see validation message above Convert from field "Please enter the amount you want to convert."

Scenario: Validation message displayed when enter  “0” amount in Enter amount field and button is clicked.
   Given user is on the Westpac currency converter page
   When user enter "0" in amount field
   And user click on Converter button
   Then user should see validation message above Convert from field "Please enter the amount you want to convert."
