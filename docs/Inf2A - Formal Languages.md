# Inf2A - Formal Languages

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

## Pushdown Automata

Pushdown Automata
:   A control unit with finite states, equipped with a read head (that can only read the input left to right). Additionaly their is a stack which can be read, pushed and popped.

Consider a PDA with a single state £q£, input alphabet £\sum = \{(,)\}£ and stack alphabet £\Gamma = \{(,\bot \}£. Call £\bot£ the initial stack symbol.

The DA has four transitions in the form £\text{Input symbol, Top of stack : Pop top of stack then push onto stack}£

1. £(,\bot : (\bot£
2. £(,( : ((£
3. £),( : \epsilon£
4. £\epsilon, \bot : \epsilon£

For example, if the current read symbol is £(£ and the current stack symobl is £\bot£, pop £\bot£ then push £\bot£ then £(£

| Transition | Input | Stack state |
| --- | --- | --- |
| | £(()())£ | £\bot£ |
| 1 | £()())£ | £(\bot£ |
| 2 | £)())£ | £((\bot£ |
| 3 | £())£ | £(\bot£ |
| 2 | £))£ | £((\bot£ |
| 3 | £)£ | £(\bot£ |
| 3 | £\epsilon£ | £\bot£ |
| 4 | £\epsilon£ | £\epsilon£ |

If the input string has well matched brackets the stack will be emptyed when the input string ends, otherwise the brackets are not well matched.

### Formal defintiion

- A finite set of control states £Q£
- Fintite set of input alphabet £\sum£
- Finite stack alphabet £\Gamma£ including start symbol £\bot£
- Start state £s \in Q£
- Finite transition relation £\delta \subseteq (Q \times (\sum \cup \{ \epsilon \}) \times \Gamma) \times (Q \times \Gamma *)£

A string is accepted if their is some run of £M£ on £x£ starting at £s£ with stack £\bot£, and finishing (at any control state) with an empty stack having consumed all of £x£.

### CGG's to NPDA's

1. Stingle state £q£, input alphabet £\sum£, and stack alphabet £N \cup \sum£, and £S£ as the initial stack symbol
2. For each production £X \rightarrow a£ in P, include an £\epsilon£ transition, £q \xrightarrow{\epsilon, X : \alpha} q£
3. For each terminal £a \in \Sigma£, include a transition £p \xrightarrow{a, a:\epsilon} q£

Consider parsing the string £(x) \times 5£ using the CFG earlier. At each stage we guess the correct rule to apply.

%
\begin{tabular}{l|l|r}
Transition & Input read & Stack state \\ \hline
& $\epsilon$ & Exp \\
Apply $\times$ rule & $\epsilon$ & $\text{Exp} \times \text{Exp}$ \\
Apply $()$ rule & $\epsilon$ & $(\text{Exp}) \times \text{Exp}$ \\
Match $($ & $($ & $\text{Exp}) \times \text{Exp}$ \\
Apply Var rule & $($ & $\text{Var}) \times \text{Exp}$ \\
Match $x$ rule & $(x$ & $) \times \text{Exp}$ \\
Match $)$ rule & $(x)$ & $\times \text{Exp}$ \\
Match $\times$ rule & $(x) \times$ & $\text{Exp}$ \\
Apply Num rule & $(x) \times$ & $\text{Num}$ \\
Apply $5$ rule & $(x) \times$ & $5$ \\
Match $5$ & $(x) \times 5$ & \\
\end{tabular}
%

Note that each stage, the combination of input read and stack state gives a _sentential form_. The result is the leftmost derivation.

## LL(1) Pridictive Parsing

LL(1)
:   Read the input from the __L__eft, build the __L__eftmost derivation, looking __1__ symbol ahead.

To determine what rules to apply (not guess as we have done before) we use two pieces of infomation:

- Current lexical token
- The nonterminal to be expanded

If it is always possible to determine the rule using these pieces of infomation the languages is said to be LL(1).

### Example

Consider the following CFG

%
\begin{align*}
S &\rightarrow \epsilon \mid TS \\
T &\rightarrow (S)
\end{align*}
%

We can derive a _parse table_, which is a table of terminals and nonterminals that tells us what rule to apply for each case.

%
\begin{tabular}{c|ccc}
& ( & ) & \$ \\ \hline
$S$ & $S \rightarrow TS$ & $S \rightarrow \epsilon$ & $S \rightarrow \epsilon$ \\
$T$ & $T \rightarrow (S)$ &  &
\end{tabular}
%

The £\$£ signifys the end of input. Blank entries corresponds to illegals states thus the string is illegal.

### Parsing

Given a parse table we can parse a string using the following:

1. Begin with the start symbol £S£ on the stack.
2. If the current input symbol £a£ (could be £\$£), and the current stack symbol is a non-terminal £X£, look up the rule for £a,X£ in the table.
3. If the current input symbol is £a£ and the stack symbol is £a£ just pop £a£ and advance input.
4. Accept if the stack empties with £\$£ as the input symbol.

### Example

Conside the input string £(())£ and the parse table from above:

%
\begin{tabular}{c|ccc}
& ( & ) & \$ \\ \hline
$S$ & $S \rightarrow TS$ & $S \rightarrow \epsilon$ & $S \rightarrow \epsilon$ \\
$T$ & $T \rightarrow (S)$ &  &
\end{tabular}
%

Parsing is as follows:

%
\begin{tabular}{l|l|r}
Operation & Remaining input & Stack state \\ \hline
& $(())\$$ & S \\
Lookup $(,S$ & $(())\$$ & TS \\
Lookup $(,T$ & $(())\$$ & (S)S \\
Match $($ & $())\$$ & S)S \\
Lookup $(,S$ & $())\$$ & TS)S \\
Lookup $(,T$ & $())\$$ & (S)S)S \\
Match $($ & $))\$$ & S)S)S \\
Lookup $),S$ & $))\$$ & )S)S \\
Match $)$ & $)\$$ & S)S \\
Lookup $),S$ & $)\$$ & )S \\
Match $)$ & $\$$ & S \\
Lookup $\$,S$ & $\$$ & \\
\end{tabular}
%

### Formal defintion

£\mathcal{G}£ is LL(1) if for each terminal £a£ and nonterminal £X£, there is some production £X \rightarrow \alpha£ with the following property:

If £b_1 ... b_n X \gamma£ is a sentential form appearing in a leftmost derivation of some string £b_1 ... b_n a c_1 ... c_m (n, m \geq 0)£, the next sentential form appearing in the derivation is necessarily £b_1 ... b_n \alpha \gamma£.

### Non-LL(1) grammers

Consider the folloing grammer:

%$$S \rightarrow \epsilon \mid (S) \mid SS$$%

Now suppose the initial stack is £S£ and the first input symbol is £(£. We cant decide without looking ahead, if the rule to apply is £S \rightarrow (S)£ or £S \rightarrow SS£.

### Generating parse tables

£First(X)£
:   The set of all terminals that can appear at the start of a phrase derived from £X£.

£Follow(X)£ 
:   The set of all terminals that can appear immediately after X in some sentential form derived from the start symbol £S£.

can be empty
:   £\forall i [\epsilon \in First(x_i)]£

can begin with £a£
:   £\epsilon \in First(x_1) \cap ... \cap First(x_{i-1}£, and £a \in First(x_i)£

1. For each nonterminal £X£, compute two sets called £First(X)£ and £Follow(X)£.
    1. First sets
        0. Compute set £E£, which is the set of nonterminals that 'can be £\epsilon£'.
            - Add £X£ to £E£ whenever £X \rightarrow \epsilon£ is a production £\mathcal{G}£.
            - If £X \rightarrow Y_1 ... Y_m£ is a production and all £Y_1, ... Y_m£ are already in £E£, add £X£ to £E£.
            - Repeat until £E£ stabilizes
        1. Set £First(a) = \{a\}£ for each £a \in \Sigma£.
        2. For each nonterminal £X£, initially set £First(X)£ to £\{ \epsilon \}£ if £X \in E£, or £\emptyset£ otherwise.
        3. For each production £X \rightarrow x_1 ... x_n£ and each £i \leq n£, if £x_1, ..., x_{i-1} \in E£ and £a \in First(x_i)£, add £a£ to £First(X)£.
        4. Repeat step (d.) until all £First£ sets stabalize 
    2. Follow sets
        1. Intially set £Follow(S) = \{\$\}£ for the start symbol £S£, and £Follow(X) = \emptyset£ for all nonterminals £X£.
        2. For each production £X \rightarrow \alpha£, each splitting of £\alpha£ as £\beta Y x_1 ... x_n£ where £n \geq£ 1, and each £i£ with £x_1, ..., x_{i_1} \in E£, add all of £First(x_i)£ (excluding £\epsilon£) to £Follow(Y)£.
        3. For each production £X \rightarrow \alpha£ and each splitting of £\alpha£ as £\beta Y£ or £\beta Y x_1 ... x_n£ with £x_1, ..., x_n \in E£, add all of £Follow(X)£ to £Follow(Y)£.
        4. Repeat step 3 until all £Follow£ sets stabalize.
2. Use the First and Follow sets to fill out the parse tables.
    1. For each production £X \rightarrow \alpha£ of £\mathcal{G}£ in turn:
        - For each terminal £a£, if £\alpha£ _can begin with_ £a£, insert £X \rightarrow \alpha£ in row £X£, column £a£.
        - If £\alpha£ _can be empty_, then for each £b \in Follow(X)£ (where b may be £\$£), insert £X \rightarrow \alpha£ in row £X£, column £b£.
        - If their are clashes, the grammer is not LL(1).


### Example

Consider the following CFG

%
\begin{align*}
S &\rightarrow \epsilon \mid TS \\
T &\rightarrow (S)
\end{align*}
%

- First sets
    - £E = \{S\}£
    - £First(() = \{(\}£
    - £First()) = \{)\}£
    - £First(S) = \{ \epsilon \}£ (since £S \in E£)
    - £First(T) = \emptyset£ (since £T \not\in E£)
    - £First(T) = \{ ( \} \cup First(T)£ (since £( \in First(()£)
    - £First(S) = \{ ( \} \cup First(S)£ (since £( \in First(T)£) 
- Follow sets
    - Start with £Follow(S) = \{\$\}, Follow(T) = \emptyset£
    - £Follow(S) = Follow(S) \cup \{)\}£
    - £Follow(T) = Follow(T) \cup \{(\}£
    - £Follow(T) = Follow(T) \cup \{), \$\}£
- For production £S \rightarrow \epsilon£
    - £\epsilon£ _can be empty_ 
    - Insert the production into £),S£ and £\$,S£
- For production £S \rightarrow TS£
    - £TS£ can begin with £(£
    - Insert the production into £(,S£
- For prodcution £T \rightarrow (S)£
    - £(S)£ can begin with £(£
    - Insert the production into £(,T£

%
\begin{tabular}{l|ccccccc}
       & n & + & $*$ & $-$ & == & \$ \\ \hline
    C  & & & & C $\rightarrow$ E == E & & C $\rightarrow$ E == E\\
    E  & & & & E $\rightarrow$ TE P & & E $\rightarrow$ TE P\\
    TE & & TE $\rightarrow$ O $n$ TO & & TE $\rightarrow$ O $n$ TO & & TE $\rightarrow$ O n TO \\
    O  & & & & O $\rightarrow$ $-$ & & O $\rightarrow$ $\epsilon$ \\
    TO & & TE $\rightarrow$ O $n$ TO & TO $\rightarrow$ $*$ & & & TO $\rightarrow$ $\epsilon$  \\
    P  & & P $\rightarrow$ $+$ & & & & P $\rightarrow$ $\epsilon$  \\
\end{tabular}
%

### Problems with grammers

- They may be ambiguous (can have more than one leftmost derivation)
- They may have shared prefixes
- They may be left-recursive e.g. £\text{Exp} \rightarrow \text{Exp} + \text{Exp}£

#### Ambiguity

Here is an example of an ambigious statement:

%
\begin{align*}
\text{Exp} \rightarrow & \text{Num} \\
& \mid \text{Var} \\
& \mid \text{(Exp)} \\
& \mid -\text{Exp} \\
& \mid \text{Exp} + \text{Exp} \\
& \mid \text{Exp} - \text{Exp} \\
& \mid \text{Exp} * \text{Exp} \\
\end{align*}
%

For example, £2 * 4 + 3£, could be parsed as £(2 * 4) + 3£ or £2 * (4 + 3)£.

To make it _unambiguous_, we can add nonterminals, to capture distinct classes of expressions

%
\begin{align*}
\text{Exp} \rightarrow & \text{ ExpA} \mid \text{Exp} + \text{ExpA} \mid \text{Exp} - \text{ExpA} \\
\text{ExpA} \rightarrow & \text{ ExpB} \mid \text{ExpA} * \text{ExpB} \\
\text{ExpB} \rightarrow & \text{ (Exp)} \mid - \text{ExpB} \\
\text{ExpC} \rightarrow & -\text{Num} \mid \text{Var} \mid \text{(Exp)} \\
\end{align*}
%

Note this is note quite LL(1) yet.

#### Shared Prefixs

%
\begin{align*}
\text{Smnt} &\rightarrow do \text{ Smmt } while \text{ Cond}\\
\text{Smnt} &\rightarrow do \text{ Smmt } until \text{ Cond}
\end{align*}
%

In this example, an LL(1) parser would have no way to choose between these rules. The solution is to 'factor out' the common parts to delay the choice.

%
\begin{align*}
\text{Smnt} &\rightarrow do \text{ Smmt Test}\\
\text{Test} &\rightarrow while \text{ Cond} \mid until \text{ Cond}
\end{align*}
%

#### Left recursion

Conside the rules

%
\begin{align*}
\text{Exp} \rightarrow & \text{ExpA} \\
& \mid \text{Exp} + \text{ExpA} \\
& \mid \text{Exp} - \text{ExpA} \\
\end{align*}
%

Notice how it must start with £\text{ExpA}£, and that it is followed by zero or more £+ \text{ExpA}£ or £- \text{ExpA}£. We can use this observation to remove the left recursion like so:

%
\begin{align*}
\text{Exp} \rightarrow & \text{ ExpA OpsA} \\
\text{OpsA} \rightarrow & \; \epsilon \mid + \text{ExpA OpsA} \mid - \text{ExpA OpsA} \\
\end{align*}
%

## Chomsky Normal Form

A context free grammer £\mathcal{G} = (N, \Sigma, P, S)£ is in _Chomsky normal form (CNF)_ if all productions are of the form:

%
$$
A \rightarrow BC \text{ or } A \rightarrow a \quad (A, B, C \in N, a \in \Sigma)
$$
%

If we disregard the empty string every language £\mathcal{G}£ can be transformed into a grammer £\mathcal{G}'£ in CFG

%
$$
\mathcal{L}(\mathcal{G}') = \mathcal{L}(\mathcal{G}) - \{ \epsilon \}
$$
%

### Converting to CFG

1. Remove all £\epsilon£ productions, and for every rule £X \rightarrow \alpha Y \beta£ where £Y£ can be empty, add a new rule £X \rightarrow \alpha \beta£
2. Remove 'unit' productions £X \rightarrow Y£.
3. For each terminal, introduce a nonterminal £Z_a \rightarrow a£, for all rules £X \rightarrow x_1 ... x_k£ where £k \geq 2£. Replace each £a£ with £Z_a£
4. For every production £X \rightarrow Y_1 ... Y_n£ with £n \geq 3£, add new symbols £W_2, ... W_{n-1}£ and replace the rules with £X \rightarrow Y_1 W_2, W_2 \rightarrow Y_2 W_3, ..., W_{n-1} \rightarrow Y_{n-1} Y_n£.

#### Example

Consider the grammer

%
\begin{align*}
S &\rightarrow TT \mid [S] \\
T &\rightarrow \epsilon \mid (T) \\
\end{align*}
%

1. Remove £\epsilon£ productions
%
\begin{align*}
S &\rightarrow TT \mid T \mid [S] \mid [] \\
T &\rightarrow (T) \mid () \\
\end{align*}
%
2. Remove 'unit productions' £X \rightarrow Y£
%
\begin{align*}
S &\rightarrow TT \mid (T) \mid () \mid [S] \mid [] \\
T &\rightarrow (T) \mid () \\
\end{align*}
%
2. Add £Z_a \rightarrow a£ productions
%
\begin{align*}
S &\rightarrow TT \mid Z_( T Z_) \mid Z_( Z_) \mid Z_[ S Z_] \mid Z_[ Z_] \\
T &\rightarrow Z_( T Z_) \mid Z_( Z_) \\
Z_( &\rightarrow ( \\
Z_) &\rightarrow ) \\
Z_[ &\rightarrow [ \\
Z_] &\rightarrow ] \\ 
\end{align*}
%
3. Split long productions
%
\begin{align*}
S &\rightarrow TT \mid Z_( W \mid Z_( Z_) \mid Z_[ V \mid Z_[ Z_] \\
W &\rightarrow T Z_) \\
V &\rightarrow S Z_] \\
T &\rightarrow Z_( W \mid Z_( Z_) \\
Z_( &\rightarrow ( \\
Z_) &\rightarrow ) \\
Z_[ &\rightarrow [ \\
Z_] &\rightarrow ] \\ 
\end{align*}
%