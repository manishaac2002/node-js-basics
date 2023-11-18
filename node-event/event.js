const EventEmitter = require ('events')
const emitter = new EventEmitter();

// Registered a Listener
// es5
// emitter.on('messageLoaded',function(arg){
//     console.log('Listener called',arg); 
// })

// es6 
// arrow function
emitter.on('messageLoaded',(arg)=>{
    console.log('Listener called',arg); 
})

// Raise an event
emitter.emit('messageLoaded',{id:1,url:'https://'})

// exercise
// Raise :logging (data:message)

// listener
emitter.on('data',()=>{
    console.log('message');
})

// raise a event
emitter.emit('data',)

// example 

// First listener
emitter.on('event', function firstListener() {
    console.log('Helloooo! first listener');
  });
  // Second listener
  emitter.on('event', function secondListener(arg1, arg2) {
    console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
  });
  // Third listener
  emitter.on('event', function thirdListener(...args) {
    const parameters = args.join(', ');
    console.log(`event with parameters ${parameters} in third listener`);
  });
  
  console.log(emitter.listeners('event'));
//   event
  emitter.emit('event', 1, 2, 3, 4, 5);

