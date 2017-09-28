## Propositonal Logic

### Propositions

Proposition 
:   A declarative sentence (declares a fact) that is either true or false.

| Propositon | Not propositions |
| --- | --- |
| It is raining. | What is the data? |
| $\pi = 1.23$ | $1 + x = 2$ |

### Logical operators

From these propositions we can from new compound propositions with logical operators:

| Operation | Example | Explanation |
| :--- | --- | :--- |
| Negation | $\neg p$ | it is not the case that $p$ |
| Conjunction | $p \land q$ | both $p$ and $q$ must be true for $p \land q$ to be true |
| Disjunction | $p \lor q$ | False when both $p$ and $q$ are false, true otherwise |
| Exclusive Or | $p \oplus q$ | Either $p$ or $q$ must be true (_not both_) for $p \oplus q$ to be true |
| Implication | $p \rightarrow q$ | False when $p$ is true and $q$ is false, true otherwise. $p$ is the hypothesis/antecedent and $q$ is the conclusion/conseqence |
| Biconditional | $p \leftrightarrow q$ | $p$ if and only if $q$, true when both $p$ and $q$ have the same truth values |

### Truth tables

With these logical operators we can build complex logical statements such as: $(p \lor q) \rightarrow (p \land q)$. To construct truth tables for these expressions we start with the individual variables $p$ and $q$, and solve sub expressions until we reach the full expression.

$$
\begin{array}{c|c|c|c|c|c}
p & q & \neg q & p \lor \neg q & p \land \neg q & (p \lor q) \rightarrow (p \land q) \\ \hline
\top & \top & \bot & \top & \top & \top \\
\top & \bot & \top & \top & \bot & \bot \\
\bot & \top & \bot & \bot & \bot & \top \\
\bot & \bot & \top & \top & \bot & \bot \\
\end{array}
$$

<!-- \begin{tabular}{c|c|c|c|c|c}
$p$ & $q$ & $\neg q$ & $p \lor \neg q$ & $p \land \neg q$ & $(p \lor q) \rightarrow (p \land q)$ \\ \hline
$\top$ & $\top$ & $\bot$ & $\top$ & $\top$ & $\top$ \\
$\top$ & $\bot$ & $\top$ & $\top$ & $\bot$ & $\bot$ \\
$\bot$ & $\top$ & $\bot$ & $\bot$ & $\bot$ & $\top$ \\
$\bot$ & $\bot$ & $\top$ & $\top$ & $\bot$ & $\bot$ \\
\end{tabular} -->

### Operator precedence

The order of which operators apply are as follows:

| Operator | Precedence |
| --- | --- |
| $\neg$ | 1 |
| $\land$ | 2 |
| $\lor$ | 3 |
| $\rightarrow$ | 4 |
| $\leftrightarrow$ | 5 |

### Logical Equivalences

Tautology
:   A compound proposition that is _true_, no matter what values the propositional variables hold.

Contradiction
:   A compound proposition that is _false_, no matter what values the propositional variables hold.

Contingency
:   Compound propositions that are neither a tautology or a contradiction.

- $p \lor \neg p$ is a tautology
- $p \land \neg p$ is a contradiction
- $p \lor q$ is a contingency

Two compound propositions are _logically equivilent_ if they have the same truth values in all cases. This occors when $p \leftrightarrow q$ is a tautology, where $p$ and $q$ are compound propositions. $p \equiv q$ is a statement, denoting that $p$ and $q$ are logically equivilent.

### Important Equivalences

| Equivalence | Name |
| --- | --- |
| $p \land \top  \equiv p \\\\ p \lor \bot \equiv p $ | Identity laws |
| $p \lor \top  \equiv \top \\\\ p \land \bot \equiv \bot $ | Domination laws |
| $p \lor p \equiv p \\\\ p \land p \equiv p$ | Idempotent laws |
| $¬¬p \equiv p$ | Double negation law |
| $p \lor q \equiv q \lor p \\\\ p \land q \equiv q \land p$ | Commutative laws |
| $(p \lor q) \lor r \equiv p \lor (q \lor r) \lor p \\\\ (p \land q) \land r \equiv p \land (q \land r) \land p$ | Associative laws |
| $p \lor (q \land r) \equiv (p \lor q) \land (p \lor r) \\\\ p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$ | Distributive laws |
| $¬(p \land q) \equiv ¬p \lor ¬q \\\\ ¬(p \lor q) \equiv ¬p \land ¬q$ | De Morgan's laws |
| $p \lor (p \land q) \equiv p \\\\ p \land (p \lor q) \equiv p$ | Absorption laws |
| $p \lor ¬p \equiv \top \\\\ p \land ¬p \equiv \bot$ | Negation laws |
| $ p \rightarrow q \equiv ¬p \lor q \\\\ p \rightarrow q \equiv ¬q \rightarrow ¬p \\\\ p \lor q \equiv ¬p \rightarrow q \\\\ p \land q \equiv ¬(p \rightarrow ¬q) \\\\ ¬(p \rightarrow q) \equiv p \land ¬q \\\\ (p \rightarrow q) \land (p \rightarrow r) \equiv p \rightarrow (q \land r) \\\\ (p \rightarrow q) \lor (p \rightarrow r) \equiv p \rightarrow (q \lor r) \\\\ (p \rightarrow r) \land (q \rightarrow r) \equiv (p \lor q) \rightarrow r \\\\ (p \rightarrow r) \lor (q \rightarrow r) \equiv (p \land q) \rightarrow r $ | Logical equivalences involving conditional statements |
| $ p \leftrightarrow q \equiv (p \rightarrow q) \land (q \rightarrow p) \\\\ p \leftrightarrow q \equiv ¬p \leftrightarrow ¬q\\\\ p \leftrightarrow q \equiv (p \land q) \lor (¬p \land ¬q)\\\\ ¬(p \leftrightarrow q) \equiv p \leftrightarrow ¬q $ | Logical equivalences involving biconditionals |

### Notation

Simular to $\sum$, their exsists a notation for $\lor$ and $\land$.
$$
p_0 \lor p_1 \lor ... \lor p_n \equiv \bigvee^n_{i = 0}p_i
$$
$$
p_0 \land p_1 \land ... \land p_n \equiv \bigwedge^n_{i = 0}p_i
$$

### Constructing new logical equivalences

Using equivalences we already know, we can prove expressions are tautologys or that two expressions are logically equivelent. While a truth table could also be used, it is much shorted to apply laws.

> Show that $(p \land q) \rightarrow (p \lor q)$ is a tautology.
> $$
\begin{align}
(p \land q) \rightarrow (p \lor q) &\equiv ¬(p \land q) \lor (p \lor q) & \\
                               &\equiv (¬p \lor ¬q) \lor (p \lor q) &\text{De Morgan's Law} \\
                               &\equiv (¬p \lor p) \lor (¬q \lor q) &\text{Assosiative and Commutative Law} \\
                               &\equiv \top \lor \top &\text{Negation Law} \\
                               &\equiv \top &\text{Domination Law}
\end{align}
$$

### Satisfaction

Satisfiable
:   A compound proposition were there _is a_ assignment of truth values that make it true.

Unsatisfiable
:   A compound proposition were there _is no_ assignment of truth values that make it true.

The values which make a compound proposition true is called the _solution to the satisfiability problem_.

## Predicates and Quantifiers

### Predicates

Statements that involve variables such as $x + 3 = y$ and $x > 1$ are undecided when their variables are not given a value. We need a more powerfull logic, _predicate logic_, to model these statements.

We turn the statement $x > 1$ into the predicate $P(x)$ where $P$ is $x > 1$. When we give $x$ a value, the statement becomes a proposition, e.g. $P(4)$ becomes $4 > 1$ which is $\top$.

A predicate can have any number of variables, $P(x_1, x_2, ..., x_n)$. A predicate with $n$ variables is called an $n$-ary predicate.

### Quantifiers

Assigning variables is not the only way to form a proposition from a predicate. __Quantification__ expresses the extend to which a predicate is true over a range.

| Name | Example | Note |
| :--- | --- | :--- |
| Universal quantifier | $\forall x P(x)$ | is true if $P(x)$ is true for all x (domain) |
| Existential quantifier | $\exists x P(X)$ | is true if $P(x)$ is true for at least one value in the domain |

> Is $\forall x (x^2 > x)$ where the domain is all real numbers true.
>
> No, if $x = \frac{1}{2}$, $x^2 > x$) is false, thus not all elements in the domain make $x^2 > x$ true.

### Restricting the domain

Consider $\forall x (x^2 > 0)$ where the domain of $x$ is $x < 0$. We could express that as:

$$
\forall x \;(x < 0 \rightarrow x^2 > 0)
$$

Their is a shorter notation for restricting the domain

$$
\forall x < 0 \;(x^2 > 0)
$$

### Precedence of Quantifiers
$\forall$ and $\exists$ have a higher precedence that all other logical operators.

### Binding Variables

When a quantifier is used on variable, or the variable is assigned a value, the variable is said to be __bound__. Predicates must have all the variables bound to be turned into a proposition. Variables that are not bound are __free__.

The __scope__ of a quantifier is the part of the logical expression to which it is applied, hence variables outside of the scope of all quantifiers are free (if their value has not been assigned).

### Logical Equivalence

Two expressions involving predicates and quantifiers are equal if their truth values are the same throughout the domain.

> Show that $\forall x (P(x) \land Q(x))$ and $\forall x P(x) \land \forall x Q(x)$ are logically equivalent.
> 
> - Let $a$ be some element in the domain, thus $P(a) \land Q(a)$ must be $\top$.
> - If $P(a) \land Q(a)$ is $\top$, $P(a)$ and $Q(a)$ must both be $\top$.
> - Since $P(a)$ and $Q(a)$ are $\top$ for all element in the domain, $\forall x P(x) \land \forall x Q(x)$ must also be $\top$.
>
> So
> $$
\forall x \; (P(x) \land Q(x)) \equiv \forall x \; P(x) \land \forall x \; Q(x)
$$

### Negation

| Statement | Equivalent | Note |
| --- | --- | :--- |
| $¬\forall x \; P(x)$ | $\exists x \; ¬P(x)$ | Their is an $x$ for which $P(x)$ is $\bot$ |
| $¬\exists x \; P(x)$ | $\forall x \; ¬P(x)$ | For every $x$, $¬P(x)$ is $\top$  |

> Prove $¬\forall x \; P(x) \equiv \exists x \; ¬P(x)$
>
> - $¬\forall x \; P(x)$ is $\top$, if and only if $\forall x \; P(x)$ is $\bot$
> - If $\forall x \; P(x)$ is $\bot$, then their is atleast one element in the domain for which $¬P(x)$ is true.
> - It follows then the $\exists x \; ¬P(x)$

### Nested Quantifiers

More complex statements often involve more than one quantifier. For example the logical statement that _if $x$ is positive and $y$ is negative, $xy$ is negative_ can be expressed as:

$$
\forall x \forall y \; ((x > 0) \land (y < 0) \rightarrow (xy < 0))
$$

## Proof

### Rules of Inference

Proofs are mathmatical arguments that determine the truth of a statement. __By an argument__, means a sequence of statements that end in a conclusion. __By valid__, means the conclusion must follow from the arguments. __By premise__, means the argument is valid if and only if it is impossible for all premises to be true and the conclusion false.

An __argument__ is propositional logic is a sequence of propositons, where the final proposition is the conclusion and all others are the premises. An __argument form__ in propositional logic is a sequence of compound propositions that is _valid_ no matter what propositions are substitude for a premise, so long as the premises are true.

The __modus ponens__ (law of detachment) is one rule we can use to proof statements. 
$$
(p \land (p \rightarrow q)) \rightarrow q
$$

> Let $p$ be "it snows" and $q$ be "will go skiing", if "we will go skiing if it snows" is "we will go skiing" true?
>
> $$
\begin{align}
& p \rightarrow q \\
& p \\ \hline
\therefore \; & q
\end{align}
$$

| Rule of Inference | Tautology | Name |
| --- | --- | --- |
| \begin{align} & p \rightarrow q \\ & p \\ \hline \therefore \; & q \end{align} | $(p \land (p \rightarrow q)) \rightarrow q$ | Modus ponens |
| \begin{align} & p \rightarrow q \\ & ¬q \\ \hline \therefore \; & ¬p \end{align} | $ (¬q \land (p \rightarrow q)) \rightarrow ¬p $ | Modus tollens |
| \begin{align} & p \rightarrow q \\ & q \rightarrow r \\ \hline \therefore \; & p \rightarrow r \end{align} | $ ((p \rightarrow q) \land (q \rightarrow r)) \rightarrow (p \rightarrow r) $ | Hypothetical syllogism |
| \begin{align} & p \lor q \\ & ¬p \\ \hline \therefore \; & q \end{align} | $ ((p \lor q) \land ¬p) \rightarrow q $ | Disjunctive syllogism |
| \begin{align} & p \\ \hline \therefore \; & p \lor q \end{align} | $ p \rightarrow (p \lor q) $ | Addition |
| \begin{align} & p \land q \\ \hline \therefore \; & p \end{align} | $ (p \land q) \rightarrow p $ | Simplification |
| \begin{align} & p \\ & q \\ \hline \therefore \; & p \land q \end{align} | $ ((p) \land (q)) \rightarrow (p \land q) $ | Conjunction |
| \begin{align} & p \lor q \\ & ¬p \lor r \\ \hline \therefore \; & q \lor r \end{align} | $ ((p \lor q) \land (¬p \lor r)) \rightarrow (q \lor r) $ | Resolution |


### Using Rules of Inference to Build Arguments

> Given the premesis: $¬p \land q$, $r \rightarrow p$, $¬r \rightarrow s$, $s \rightarrow t$ find an argument that shows the premisies lead to the conclusion $t$.
>
> $$
\begin{align}
1)\quad & ¬p \land q & \text{premise} \\
2)\quad & ¬p & \text{simplification (1)} \\
3)\quad & r \rightarrow p & \text{premise} \\
4)\quad & ¬r & \text{modus tollens (2)(3)} \\
5)\quad & ¬r \rightarrow s & \text{premise} \\
6)\quad & s & \text{modus ponens (4)(5)} \\
7)\quad & s \rightarrow t & \text{premise} \\
8)\quad & t & \text{modus ponens (6)(7)}
\end{align}
$$

### Fallacies

$(p \land (p \rightarrow q)) \rightarrow q$ is a tautology, fallacies often look like tautologys but are just contingencies:

Fallacy of affirming the conclusion
:   occors when $(q \land (p \rightarrow q)) \rightarrow p$ is treated as a tautology, but it is false when $p$ is false and $q$ is true.

Fallacy of denying the hypothesis
:   occors when $(¬p \land (p \rightarrow q)) \rightarrow ¬q$ is treated as a tautology, but it is false when $p$ is false and $q$ is true.

### Rules of Inference for Quantified Statements

| Rule of Inference | Name | Notes |
| --- | :--- | :--- |
| \begin{align} & \forall x P(x) \\ \hline \therefore \; & P(c) \end{align} | Universal instantiation | $P(c)$ is true, where $c$ is an element of the domain, since all elements are true. |
| \begin{align} & P(c) \\ \hline \therefore \; & \forall x P(x) \end{align} | Universal generalization | $\forall x P(x)$ is true, if $P(c)$ (where $c$ is an arbitary element in the domain) is true. Since we do not make any assumptions about $c$, other than its an element of the domain, all values of the domain must be true. |
| \begin{align} & \exists x P(x) \\ \hline \therefore \; & P(c) \end{align} | Existential instantiation | Their is an element $c$ in the domain that makes $P$ true. Note $c$ is not arbitary since some elements in the domain do not make $P$ true. |
| \begin{align} & P(c) \\ \hline \therefore \; & \exists x P(x) \end{align} | Existential generalization | If we know one element $c$ in the domain that makes $P$ true, then it follows that $\exists x P(x)$ |

> Show that the premesis "A student in the class has not read the book" and "Everyone in the class passed the exam" implys the conclusion that "Someone who passed the exam had not read the book"
>
> - Let $C(x)$ be "$x$ is in the class"
> - Let $P(x)$ be "$x$ passed the exam"
> - Let $B(x)$ be "$x$ has read the book"
>
> $$
\begin{align}
(1)\quad & \exists x (C(x) \land ¬B(x)) && \text{Premise} \\
(2)\quad & C(a) \land ¬B(a) && \text{Existential instantiation (1)} \\
(3)\quad & C(a) && \text{Simplification (2)} \\
(4)\quad & \forall x (C(x) \rightarrow P(x)) && \text{Premise} \\
(5)\quad & C(a) \rightarrow P(a) && \text{Universal instantiation (4)} \\
(6)\quad & P(a) && \text{Modus ponens (3, 5)} \\
(7)\quad & ¬B(a) && \text{Simplification (2)} \\
(8)\quad & P(a) \land ¬B(a) && \text{Conjunction (6, 7)} \\
(9)\quad & \exists x (P(x) \land ¬B(x)) && \text{Existential generalization (8)}
\end{align}
$$ 