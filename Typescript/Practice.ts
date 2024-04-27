                // Creating a Map
let map = new Map<number, string>();

// Adding elements to the Map
map.set(1, 'One');
map.set(2, 'Two');
map.set(3, 'Three');

// Accessing elements in the Map
console.log(map.get(1)); 

// Iterating over the Map
map.forEach((value, key) => {
  console.log(key, value);
});

// Checking if a key exists in the Map
console.log(map.has(1));

// Deleting elements from the Map
map.delete(2);

// Clearing all elements from the Map
map.clear();


                // Creating a Set
let set = new Set<number>();

// Adding elements to the Set
set.add(1);
set.add(2);
set.add(3);

// Checking if a value exists in the Set
console.log(set.has(1)); 

// Iterating over the Set
set.forEach((value) => {
  console.log(value);
});

// Deleting elements from the Set
set.delete(2);

// Clearing all elements from the Set
set.clear();


            // Defining an enum
enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  
  // Using an enum
  let playerDirection: Direction = Direction.Up;
  console.log(playerDirection); 
  
  // Accessing enum values by name or index
  console.log(Direction.Up); 
  console.log(Direction[0]); 
  
  // Enums with custom values
  enum Color {
    Red = '#FF0000',
    Green = '#00FF00',
    Blue = '#0000FF'
  }
  
  console.log(Color.Red); 
  
  // Enums with computed values
  enum LogLevel {
    Error = 1,
    Warn,
    Info,
    Debug
  }
  
  console.log(LogLevel.Warn); 
  
  // Enums with mixed member types
  enum Status {
    Active = 'ACTIVE',
    Inactive = 0
  }
  
  console.log(Status.Active); 
  console.log(Status.Inactive); 
  

            // Declaring a tuple type
let Tuple: [number, string, boolean];

// Initializing a tuple
Tuple = [100, 'Sathiya', true];

// Accessing tuple elements
console.log(Tuple[0]); 
console.log(Tuple[1]); 
console.log(Tuple[2]); 

// Updating tuple elements
Tuple[0] = 200;
Tuple[1] = 'Sneha';
Tuple[2] = false;

// Destructuring tuple elements
let [numberValue, stringValue, booleanValue] = Tuple;
console.log(numberValue);
console.log(stringValue); 
console.log(booleanValue); 