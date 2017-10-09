## Closure Properties of Regular Languages

### £\epsilon£-NFA

If we allow £\epsilon£ transitions, which represents an instananious transition, NFA's can be transformed to have one start and one accepting state.

This doesnt increase the power of NFA's, but it has some convenience.

### Concatination

£L_1 . L_2 = \\{xy \mid x \in L_1, y \in L_2\\}£

£L_1 . L_2£ is the concatination of two languages, for example £\{a, b\}£, £\{c, d\}£ becomes £\{ac, ad, bc, bd\}£

Its obvious the concatination is closed, since we can add an £\epsilon£ transition between the start and accepting states of the machines for languages £L_1£ and £L_2£
s
### Kleene star

£L* = {\epsilon} \cup L \cup L.L \cup ...£

£L*£ Is the langauge of 0 or more strings of £L£

Again kleene start is also closed. By introducing a new start state (which is also an accepting state) with an £\epsilon£ transition to the machine for £L£ and add £\epsilon£ transitions back from the machine to the new start/accepting state. This allows the machine for £L£ to run for any amount of times.

## Regular Expressions

Regular expressions are a language for defining languages.

| Symbol | Definition |
| --- | --- |
| £\emptyset£ | <div style="width: 150px">£L(\emptyset) = \emptyset£</div>  |
| £\epsilon£ | £L(\epsilon) = \{\epsilon\}£ |
| £a£ (for £a \in \sum£) | £L(a) = \{a\}£ |
| £+£ | £L(a+b) = L(a) \cup L(b)£ |
| £.£ | £L(a.b) = L(a) . L(b)£ |
| £\*£ | £L(a\*) = L(a)\*£ |

### Order
In the absence of brackets the order of operation is as follows:

1. £*£
2. £.£
3. £+£

### Kleene's Theorem

__Kleene's Theorem:__ DFA's and regular expressions give rise to exactly the same class of langauges (the regular langauges)

So regular languages can be defined as regular expressions.

### Kleene algebra

Regular expressions can be manipulated with kleene algebra without changing the language

- £a + (b + c) = (a + b) + c£
- £a + \emptyset£
- ...
- £\epsilon + aa\* = \epsilon + a \* a = a\*£

### Ardens rule

Given an equation of the form £X = aX + b£ its smallest solution is £X = a\*b£. If £\epsilon \notin L(a)£, this is the only solution

### DFA's to regular expressions

For each state £r£, the variable £X_r£ stands for the set of states that take us from £r£ to the accepting state.

%
\begin{align}
X_p &= 1 X_p + 0 X_q + \epsilon && \\
X_q &= 1 X_q + 0 X_q && \\
&= 1*0 X_p && \text{Argen's rule} \\
X_p &= 1 X_p + 01*0 X_p + \epsilon && \\
&= (1 + 01 * 0)X_p + \epsilon && \\
&= (1 + 01 * 0)* && \text{Arden's rule}
\end{align}
%

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

Supose we want to search for string £s£ in document £D£. An efficent implentation is the Knuth-Morris-Pratt algorithum:

1. Convert NFA accepting £s£     to DFA M (costs some time, worth it for short £s£ and long £D£).
2. Run £D£ through £M£ (each character in £D£ processed once, no buffering).
3. Every time we get to the accepting state of £M£, signal a hit.

This can be extended to search for mulitple strings in parralel with a more complex NFA.

### Pattern searching

`egrep` will print all lines containing a match.

1. We can convert a pattern into a (smallish) NFA.
2. We can run the NFA using the just-in-time simulation (avoids exponential state-space blow-up).

### Data validation

- Within XML we can enforce constraints on parts of the data.
- For text fields on web froms, we can check if the input text is in the correct form.

### Lexing

Even tough a higher level language is to complex to be regular, regular expressions can be used to identify the fundemental building blocks (tokens) of the language.

Lexical Analysis
:   Breaking up source code into a series of tagged tokens (lexemes)

Lexical class
:   The class of a token, for example `1000` would be an integer literal, `foobar` would be an identifier.

#### How lexers work

- Build NFA's for the lexical classes £L_1, ..., L_k£ (in order of priority)
- Run the 'parrallel' automaton £N_1 \times ... \times N_k£ until it expires
- The last point in which we were in an accepting state is the largest match, chose the smallest £i£ such that were in an accepting state of £N_i£. Chose class £L_i£ as the lexical class for £x£ which is the highest priorty.
- Perform the specified action for the class £L_i£

### Verification

Regulare langauge theory can help verify desirable properites:

- Saftey, i.e. _bad things dont happen_
- Liveness, i.e. _good things do happen_
- Fierness, i.e. _things good for some processes dont cause to much badness to others_

#### Example

Suppose we have two processes £P_0, P_1£ that have use of a shared resource, but must not be given access at the same time.

£P_0, P_1£ can comunicate using three shared flags
- `req0` initially false, whether £P_0£ wants access
- `req1` initially false, whether £P_1£ wants access
- `turn` who is being allowed a turn

Code for £P_0£ when it wants access
```
req0 = true
turn = 1
while(req1 && turn == 1) WAIT
// P0 can now access resource
req0 = false
```

Code for £P_1£ is the same with £0, 1£ swapped and `req0` and `req1`swapped.

This can be moddled by a finite state machine:

The language for the complete system can now be obtained:
%
$$
(L(P_0) || L(P_1)) \cap (L(req0) || L(req1) || L(turn))
$$
%
where £||£ is the interleaving of regular langauges.

Now machine £M£ with 200 states can be built.

Now we can verify
- Mutual exclusion: £P_0£ and £P_1£ can never access simulaneously.
- Progress

## The Pumping Lemma

### Loops in DFA's
A machine £M£ with states £k£ will always have a loop since we can process strings £y£ where £\lvert y \rvert \geq k£, thus we visit some state twice. Thus any string £y£ can be decomposed into:
- £u£, the prefix of £y£ that leads to the first visit of the repeated state £q£
- £v£, the loop which goes from £q£ to £q£
- £w£, whatever is left of £y£ after £uv£

### Lemma

Suppose £L£ is a regular language, then £L£ has the following property £P£:

Their exists £k \geq 0£ such that, for all strings £x, y, z£ with £xyz \in L£ and £\lvert y \rvert \geq k£, there exist strings £u, v, w£ such that £y = uvw£, £v \ne \epsilon£, and for every £i \geq 0£ we have £xuv^i wz \in L£ 

### Contrapositive

To prove a language is not reqular, we take the contrapositive of the pumping lemma £\neg P£:

For all £k \geq 0£, there exist strings £x, y, z£ with £xyz \in L£ and £\lvert y \rvert \geq k£ such that, for every decomposition of £y£ as £y = uvw£ where £v \ne \epsilon£, their is some £i \geq 0£ which £xuv^i wz \not\in L£

### Using the pumping lemma

1. Your argument must work for all £k \geq 0£.
2. Choose strings £x,y, z£ (which might depend on £k£) to satisfy £xyz \in L£ and £\lvert y \rvert \geq k£. Additionaly £y£ should "disallow pumping" (number of loops depend on language).
3. Your argument must work for all decompositions of £y£ as £uvw£ with £v \ne \epsilon£.
4. Choose the number £i (\ne 1)£ such that £xuv^i wz \not\in L£, here £i£ might depend on all the previous data.

#### Example 1

> Show that £L = \{a^n b^n \mid n \geq 0\}£ is not regular
>
> - Suppose £k \geq 0£
> - Let £x = \epsilon£, £y = a^k£, £z = b^k£
> - Let £i = 0£
> - £uv^i w = uw = a^l£ for some £l < k£
> - Thus £xuv^i wz = a^l b^k£
> - £a^l b^k \not\in L£, thus £L£ satisfys £\neg P£, thus it is not regular

#### Example 2

> Show that £L = \{a^{n^2} \mid n \geq 0\}£ is not regular
>
> - Suppose £k \geq 0£
> - Let £x = a^{k^2 - k}£, £y = a^k£, £z = \epsilon£ so £xyz = a^{k^2} \in L£
> - Given £y = uvw£ where £v \ne \epsilon£, £1 \leq \lvert v \rvert \leq k£ (since £v£ is non empry and the length of £y£ is length £k£)
> - Let £i = 2£, thus £xuvwz = a^{k^2}£, £xuv^2 wz = a^{k^2 + \lvert v \rvert}£
> - The length of the new string becomes £k^2 + 1 \leq k^2 + \lvert v \rvert \leq k^2 + k£
> - The next perfect string after £k^2£ is £(k+1)^2 = £k^2 + 2k + 1£
> - Their are no perfect squares between £k^2£ and £(k+1)^2 = £k^2 + 2k + 1£
> - Thus £xuv^2 wz£ isnt a perfect square, thus £xuv^2 wz \not\in L£
> - Thus £L£ satisfys £\neg P£, thus it is not regular

## Context free languages

### Context free grammers

```
```

%
\begin{align*}
\text{Exp} &\rightarrow \text{Var} \mid \text{Num} \mid ( \text{Exp} ) \\
\text{Exp} &\rightarrow \text{Exp}  +  \text{Exp} \\
\text{Exp} &\rightarrow \text{Exp} \times \text{Exp} \\
\text{Var} &\rightarrow x \mid y \mid z  \\
\text{Num} &\rightarrow 0 \mid ... \mid 9 \\
\end{align*}
%

This grammer generates simple arithmetic expressions such as £6+7£ and £x \times ((z \times 2) + y)£.

Terminals
:   The ultimate constituants of the phrases generated

Non-terminals
:   Designate varoious sub-phrases, such as `Exp`, `Num` etc

Productions
:   Defines how a non-terminal is expanded into more terminals/non-terminals

Start symbol
:   Non-terminal to start with, in this case `Exp`

Syntax tree
:   Tree formed starting from the start symbol we grow syntax trees my expanding the non-terminals using the grammer rules.

Structural ambiguity
:   Strings that have multiple possible syntax trees

The language generated by a grammer is the set of _strings of terminals_ that can be derived.

### Derivations

At each stage we choose a non terminal and expand using a suitable rule, when their are no terminals left a derivation is complete.

%
\begin{align*}
\text{Exp} &\Rightarrow \text{Exp} \times \text{Exp} \\
    &\Rightarrow \text{Num} \times \text{Exp} \\
    &\Rightarrow \text{Num} \times (\text{Exp}) \\
    &\Rightarrow \text{Num} \times (\text{Exp} + \text{Exp}) \\
    &\Rightarrow 5 \times (\text{Exp} + \text{Exp}) \\
    &\Rightarrow 5 \times (\text{Exp} + \text{Num}) \\
    &\Rightarrow 5 \times (\text{Var} + \text{Exp}) \\
    &\Rightarrow 5 \times (x + \text{Exp}) \\
    &\Rightarrow 5 \times (x + 3) \\
\end{align*}
%

Leftmost derivation
:   Derivation expanding the leftmost terminal each time

Rightmost derivation
:   Derivation expanding the rightmost terminal each time

### Formal defintion

A context free grammer (CFG) £\mathcal{G}£ consists of:

- A finite set of £N£ non terminals
- A finitie set of £\sum£ terminals, disjoint from £N£
- A finite set £P£ of productions of the form £X \rightarrow \alpha£, where £X \in N, \alpha \in (N \cup \sum)*£
- A choise of start symbol £S \in N£ 

### Regular languages to context free

- Input symbols becomes termials
- States become non-terminals
- Initial state becomes start state
- Every transition £X \xrightarrow{a} Y£ becomes £X \rightarrow a Y£
- Accepting states £X£ becomes £X \rightarrow \epsilon£

Consider the following FSM.

##### TODO: insert FSM

The context free form is

%
\begin{align*}
A &\rightarrow \epsilon \mid 1 A \mid 0 B \\
B &\rightarrow \epsilon \mid 1 B \mid 0 A
\end{align*}
%