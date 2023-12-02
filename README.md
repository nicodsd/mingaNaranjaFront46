# M-16 - I implemented the option to upload image by file - Nicolas Barrera

- I changed the forms where before the images were uploaded by url, now I implemented the possibility of uploading the images choosing them from the files stored on my computer.

# M-19 - Reaction like & dislike - Nicolas Barrera

- Implement the functionality to like and dislike the manga, in order to add interaction between users and the creators of the manga.
Some things need to be polished, such as rendering, handling it with redux, to show me the action that was performed when reacting and rendering the component correctly.
I also added a "MyReactions" page, where all the users' favorite manga are stored, offering the possibility to re-read those manga that I liked in the past.


# Mercado Pago Integration:

1-Access the official Mercado Pago API site: https://www.mercadopago.com.ar/developers/es.

2-Register on the site and request the test credentials, such as the Public Key and Access Token.

3-The Public Key is a special code that will allow you to connect the frontend of your application with Mercado Pago.

4-Create a part of the project called "frontend" (visible part of the application) where the donation options will be shown and the interactions with the user will take place.

5-Install a library called "@mercadopago/sdk-react" using a special command (for example, npm install @mercadopago/sdk-react).

6-In the frontend, create a page or a special component that displays the donation options and the corresponding button.

7-Use the Public Key to establish a secure connection between your application and the Mercado Pago API.

8-Create the necessary logic to send the donation information to the backend when the user selects an option and clicks the donation button.

9-Show the user the result of the transaction and provide a clear message to inform about the success or failure of the operation.

