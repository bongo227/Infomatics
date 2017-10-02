## Closure Properties of Regular Languages

### $\epsilon$-NFA

If we allow $\epsilon$ transitions, which represents an instananious transition, NFA's can be transformed to have one start and one accepting state.

This doesnt increase the power of NFA's, but it has some convenience.

### Concatination

$L_1 . L_2 = \\{xy \mid x \in L_1, y \in L_2\\}$

$L_1 . L_2$ is the concatination of two languages, for example $\{a, b\}$, $\{c, d\}$ becomes $\{ac, ad, bc, bd\}$

Its obvious the concatination is closed, since we can add an $\epsilon$ transition between the start and accepting states of the machines for languages $L_1$ and $L_2$
s
### Kleene star

$L* = {\epsilon} \cup L \cup L.L \cup ...$

$L*$ Is the langauge of 0 or more strings of $L$

Again kleene start is also closed. By introducing a new start state (which is also an accepting state) with an $\epsilon$ transition to the machine for $L$ and add $\epsilon$ transitions back from the machine to the new start/accepting state. This allows the machine for $L$ to run for any amount of times.

## Regular Expressions

Regular expressions are a language for defining languages.

| Symbol | Definition |
| --- | --- |
| $\emptyset$ | <div style="width: 150px">$L(\emptyset) = \emptyset$</div>  |
| $\epsilon$ | $L(\epsilon) = \{\epsilon\}$ |
| $a$ (for $a \in \sum$) | $L(a) = \{a\}$ |
| $+$ | $L(a+b) = L(a) \cup L(b)$ |
| $.$ | $L(a.b) = L(a) . L(b)$ |
| $\*$ | $L(a\*) = L(a)\*$ |

### Order
In the absence of brackets the order of operation is as follows:

1. $*$
2. $.$
3. $+$

### Kleene's Theorem

__Kleene's Theorem:__ DFA's and regular expressions give rise to exactly the same class of langauges (the regular langauges)

So regular languages can be defined as regular expressions.

### Kleene algebra

Regular expressions can be manipulated with kleene algebra without changing the language

- $a + (b + c) = (a + b) + c$
- $a + \emptyset$
- ...
- $\epsilon + aa\* = \epsilon + a \* a = a\*$

### Ardens rule

Given an equation of the form $X = aX + b$ its smallest solution is $X = a\*b$. If $\epsilon \notin L(a)$, this is the only solution

### DFA's to regular expressions

For each state $r$, the variable $X_r$ stands for the set of states that take us from $r$ to the accepting state.

$$
\begin{align}
X_p &= 1 X_p + 0 X_q + \epsilon && \\
X_q &= 1 X_q + 0 X_q && \\
&= 1*0 X_p && \text{Argen's rule} \\
X_p &= 1 X_p + 01*0 X_p + \epsilon && \\
&= (1 + 01 * 0)X_p + \epsilon && \\
&= (1 + 01 * 0)* && \text{Arden's rule}
\end{align}
$$

## Applications of regular languages

### Grep

Search for prices in pounds and pence:

```
grep "[0-9]*\.[0-9][0-9]" document.txt
```

- `fgrep` searches for one or more fixed string, using an efficent string matching algorthum
- `grep` searches for strings matching a pattern
- `egrep` searches for strings matching an extended pattern

### String searching

Supose we want to search for string $s$ in document $D$. An efficent implentation is the Knuth-Morris-Pratt algorithum:

1. Convert NFA accepting $s$     to DFA M (costs some time, worth it for short $s$ and long $D$).
2. Run $D$ through $M$ (each character in $D$ processed once, no buffering).
3. Every time we get to the accepting state of $M$, signal a hit.

This can be extended to search for mulitple strings in parralel with a more complex NFA.

### Pattern searching

`egrep` will print all lines containing a match.

1. We can convert a pattern into a (smallish) NFA.
2. We can run the NFA using the just-in-time simulation (avoids exponential state-space blow-up).

### Data validation

- Within XML we can enforce constraints on parts of the data.
- For text fields on web froms, we can check if the input text is in the correct form.

### Lexical analysis
### Automated varification