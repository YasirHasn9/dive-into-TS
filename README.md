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

              BROWSER
                 ^
                 |
                 |
            |----------|
            | plain js |
            |----------|
                 ^
                 |
                 |
           |-------------|
           | ts complier |
           |-------------|
                 ^
                 |
                 |

|----------------------------------|  
|ts code (js with type annotations)|  
|----------------------------------|

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

**_ check fetchJson.ts _**

what is type in ts ?
Easy way to refer to the different properties + function that a value has, whaaaaaaaaat ?

first, what is value ?
well, in ts or js is anything that we can assign to a value.

so, if i asked what is 'red'?
there is 2 answers here
one , you can tell me , this is just a string
two , this is a value that has properties + methods like charAt()
charCodeAt()
concat()
includes() and so on, but this is inconvenient answer you can tell this is string and in programming when we define a type of a value
then we know that this value type has a lot of methods
**_ every value we assign has a type _**

#important
what do we care about types ?
allows for the ts compiler to analyze our code for errors
and also helps other engineers to know what values are flowing around the codebase

what is type ?
shortcut to refer to different properties and functions that a value has

## type annotations and type inference

type annotations tells the ts what type of value a variable refer to.
type inference ts tries to figure out what type of value a variable refer to, automatically
to summarize them:
annotation done by the us
inference done by the ts

**_ note _**
when ts can not predict the type of value , it referees to it as any.
as developers try to avoid 'any' at all costs
