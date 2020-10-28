# dive-into-TS

in this repo im gonna learn TS and do some projects through the journey

#what is type script ?
at first , it is just js code or kinda of
js + a type system = ts

what ts can do for you as a developer ?

# 1. helps to catch errors during the dev

imagine that you write a js code , in your opinion , how could you catch an error ?
simply, it is through executing the code . well , in this case , ts help in catching them.

# 2. use type annotation to analyze code

TS compiler will use something called type annotation to analyze my code. as developers, we are the ones who are responsible to add these annotation.
you can think of annotations as comments or information that are flowing in our program

# 3. only active during the dev

easy to put, the browser has no idea what is ts. so , the extra code that we use with ts will be js because the code of ts will be complied and turned to be js

# 4. does not provide any performance optimization

|----------------------------------| |---------------| |----------|
|ts code (js with type annotations)| --> | ts complier | --> | plain js | ---> BROWSER
|----------------------------------| |---------------| |----------|

# Environment setup

npm install -g typescript ts-node

**_ ts-node: allows us to compile and execute the ts code with one command line _**

## note

if you are on MacOS and can't install it , use sudo in front of the command line
sudo npm install -g typescript ts-node ----> for MacOS

to make sure you have the ts type in you terminal tsc

so to save you some and see how the ts works
just run in the terminal
ts-node file name
