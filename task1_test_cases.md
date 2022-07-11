### Test case 1:
Check that the user is able to login with a valid username and password.
- Pre-condition: User should be registered with valid username and password.
- Steps:
    - Click on login link
    - Enter valid username and password
    - Click login button
- Expected result:
    - Display message of successful login
    - Redirect to user homepage

### Test case 2:
Check that the user is not able to login with an invalid username and password.
- Pre-condition: user is not registered with valid username and password.
- Steps: 
    - Click on login link
    - Enter valid username and password
    - Click login button
- Expected result:
    - Display message of error, login failed

### Test case 3:
Verify that all the links and banners are redirecting to correct pages and none of the links are broken.
- Pre-condition: use browser to visit this website
- Steps: click all the links on the website
- Expected result: all the links redirect to correct pages and no broken links.

### Test case 4:
Verify that items can be added to cart.
- Pre-condition: 
    - Open the shop page.
- Steps: 
    - Click Buy button to put the corresponding item into cart.
- Expected result: 
    - Each click of Buy button would put one item into the cart. 
    - The amount of added items would be displayed as the figure after cart link, and updated according to the times of clicks.


### Test case 5
Verify the name, picture, and price of items added to the cart are shown.
- Pre-condition: 
    - At least one item in cart
- Steps:
    - Open the cart page
- Expected result:
    - The name, picture, price, quantity and subtotal of each selected items are displayed in cart.
    - The name, picture and price of item is the same as that displayed in the shop page.
    - The quantity of each item is consistent with the number of times the user clicked the Buy button. 
    - Each item followed by an action button.
    - A total price of all items is shown below.
    - Price, Subtotal, and Total are all shown in the same format, with a "$" in front of the figure and keep two decimal places.

### Test case 6
Verify that user can change the number of quantity and the corresponding information (quantity, subtotal, total) can be updated accordingly.
- Pre-condition: 
    - At least one item in cart
- Steps:
    - Open cart page
    - Change the number in the input box of quantity.
- Expected result:
    - The border of input box becomes red and the Check Out button disabled when the input number is zero, negative, or decimal number.
    - The figure in the alert at the top of the list of added items is consistent with the total number of quantity.
    - The subtotal of each item is updated according to the change of quantity.
    - The total price of all items is updated according to the change of quantity.


### Test case 7
Verify the function of remove item button
- Pre-condition: 
    - At least one item in the cart
- Steps:
    - Open cart page
    - Click the action button in the corresponding row.
    - Confirm Yes in the pop up window.
- Expected result:
    - When the removed item is not the last one in the cart:
        - The corresponding item is removed from the cart.
        - The total price is updated accordingly.
        - The figure in the alert at the top of the added item list is updated.
    - When the removed item is the last one in the cart:
        - The cart is empty.
        - The message of your cart is empty presents.
        - The Check Out and Empty Cart buttons disappear.
        - The Start Shopping button presents.

### Test case 8
Verify the function of empty cart button
- Pre-condition: 
    - At least one item in the cart
- Steps:
    - Open cart page
    - Click the Empty Cart button.
    - Confirm Yes in the pop up window.
- Expected result:
    - The cart is empty.
    - The message of your cart is empty presents.      
    - The Check Out and Empty Cart buttons disappear.
    - The Start Shopping button presents.

### Test case 9
Proceed to check out.
- Pre-condition: 
    - At least one item in the cart.
- Steps:
    - Open cart page
    - Click Check Out button
- Expected result:
    - Redirect to checkout page

### Test case 10
Submit order
- Pre-condition: 
    - open checkout page
- Steps:
    - Input mandatory information of delivery and payment details
    - Click Submit button
- Expected result:
    - Message of alert presents when not all the mandatory information is filled in.
    - Submit button is disabled when not all the mandatory information is filled in.
    - Message of alert presents when the format of Email address is not correct.
    - Submit button is disabled when the format of Email address is not correct.
    - Message of alert presents when the format of credit card number is not consistent with the type of the chosen credit card.
    - Submit button is disabled when the format of credit card number is not consistent with the type of the chosen credit card.
    - Submit button enables when all the mandatory information is correctly filled in.
    - Message of order number and Start Shopping button present after click Submit button.