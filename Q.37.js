"use strict";
// 37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", message = "I love TypeScript!") {
    console.log(`I'm making a ${size} T-shirt with the message "${message}".`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "TypeScript is awesome!");
