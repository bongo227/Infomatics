## Closure Properties of Regular Languages

### $\epsilon$-NFA

If we allow $\epsilon$ transitions, which represents an instananious transition, NFA's can be transformed to have one start and one accepting state.

This doesnt increase the power of NFA's, but it has some convenience.

### Concatination

$L_1 . L_2 = \{xy | x \in L_1, y \in L_2\}$

$L_1 . L_2$ is the concatination of two languages, for example $\{a, b\}$, $\{c, d\}$ becomes $\{ac, ad, bc, bd\}$

Its obvious the concatination is closed, since we can add an $\epsilon$ transition between the start and accepting states of the machines for languages $L_1$ and $L_2$

### Kleene star

$L* = {\epsilon} \cup L \cup L.L \cup ...$

$L*$ Is the langauge of 0 or more strings of $L$

Again kleene start is also closed. By introducing a new start state with an $\epsilon$ transition to the machine for $L$ and add a $\epsilon$ transition back from the machine to the new accepting state. This allows the machine for $L$ to run for any amount of times.

## Regular Expressions

Regular expressions are a language for defining languages.

| Symbol | Definition |
| --- | --- |
| $\emptyset$ | <div style="width: 150px">$L(\emptyset) = \emptyset$</div>  |
| $\epsilon$ | $L(\epsilon) = \{\epsilon\}$ |
| $a$ (for $a \in \sum$) | $L(a) = \{a\}$ |
| $+$ | $L(a+b) = L(a) \cup L(b)$ |
| $.$ | $L(a.b) = L(a) . L(b)$ |
| $*$ | $L(a*) = L(a)*$ |

### Order
In the absence of brackets the order of operation is as follows:

1. $*$
2. $.$
3. $+$

## Kleene's Theorem

__Kleene's Theorem:__ DFA's and regular expressions give rise to exactly the same class of langauges (the regular langauges)

So regular languages can be defined as regular expressions.

### Kleene algebra

Regular expressions can be manipulated with kleene algebra without changing the language

- $a + (b + c) = (a + b) + c$
- $a + \emptyset$
- ...
- $\epsilon + aa* = \epsilon + a * a = a*$