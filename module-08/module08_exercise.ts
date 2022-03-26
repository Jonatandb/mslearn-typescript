
namespace AllGreetings {
  export namespace Greetings  {
    export function returnGreeting (greeting: string) {
      console.log(`The message from namespace Greetings is ${greeting}.`);
    }
  }

  export namespace GreetingsWithLength {
    export function returnGreeting (greeting: string) {
      let greetingLength = getLength(greeting);
      console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
        return message.length
    }
  }

}

import greet = AllGreetings.Greetings

//returnGreeting('Hello');                     // Returns error
greet.returnGreeting('Bonjour');         // OK
AllGreetings.GreetingsWithLength.returnGreeting('Hola');  // OK
