## Propositonal Logic

### Propositions

Proposition 
:   A declarative sentence (declares a fact) that is either true or false.

| Propositon | Not propositions |
| --- | --- |
| It is raining. | What is the data? |
| £\pi = 1.23£ | £1 + x = 2£ |

### Logical operators

From these propositions we can from new compound propositions with logical operators:

| Operation | Example | Explanation |
| :--- | --- | :--- |
| Negation | £\neg p£ | it is not the case that £p£ |
| Conjunction | £p \land q£ | both £p£ and £q£ must be true for £p \land q£ to be true |
| Disjunction | £p \lor q£ | False when both £p£ and £q£ are false, true otherwise |
| Exclusive Or | £p \oplus q£ | Either £p£ or £q£ must be true (_not both_) for £p \oplus q£ to be true |
| Implication | £p \rightarrow q£ | False when £p£ is true and £q£ is false, true otherwise. £p£ is the hypothesis/antecedent and £q£ is the conclusion/conseqence |
| Biconditional | £p \leftrightarrow q£ | £p£ if and only if £q£, true when both £p£ and £q£ have the same truth values |

### Truth tables

With these logical operators we can build complex logical statements such as: £(p \lor q) \rightarrow (p \land q)£. To construct truth tables for these expressions we start with the individual variables £p£ and £q£, and solve sub expressions until we reach the full expression.

%
\begin{center}
\begin{tabular}{c|c|c|c|c|c}
$p$ & $q$ & $\neg q$ & $p \lor \neg q$ & $p \land \neg q$ & $(p \lor q) \rightarrow (p \land q)$ \\ \hline
$\top$ & $\top$ & $\bot$ & $\top$ & $\top$ & $\top$ \\
$\top$ & $\bot$ & $\top$ & $\top$ & $\bot$ & $\bot$ \\
$\bot$ & $\top$ & $\bot$ & $\bot$ & $\bot$ & $\top$ \\
$\bot$ & $\bot$ & $\top$ & $\top$ & $\bot$ & $\bot$ \\
\end{tabular}
\end{center}
%

### Operator precedence

The order of which operators apply are as follows:

| Operator          | Precedence |
| ----------------- | ---------- |
| £\neg£            | 1          |
| £\land£           | 2          |
| £\lor£            | 3          |
| £\rightarrow£     | 4          |
| £\leftrightarrow£ | 5          |

### Logical Equivalences

Tautology
:   A compound proposition that is _true_, no matter what values the propositional variables hold.

Contradiction
:   A compound proposition that is _false_, no matter what values the propositional variables hold.

Contingency
:   Compound propositions that are neither a tautology or a contradiction.

- £p \lor \neg p£ is a tautology
- £p \land \neg p£ is a contradiction
- £p \lor q£ is a contingency

Two compound propositions are _logically equivilent_ if they have the same truth values in all cases. This occors when £p \leftrightarrow q£ is a tautology, where £p£ and £q£ are compound propositions. £p \equiv q£ is a statement, denoting that £p£ and £q£ are logically equivilent.

### Important Equivalences

| Equivalence | Name |
| --- | --- |
| £p \land \top \equiv p\\p \lor \bot \equiv p£ | Identity laws |
| £p \lor \top  \equiv \top \\ p \land \bot \equiv \bot £ | Domination laws |
| £p \lor p \equiv p \\ p \land p \equiv p£ | Idempotent laws |
| £¬¬p \equiv p£ | Double negation law |
| £p \lor q \equiv q \lor p \\ p \land q \equiv q \land p£ | Commutative laws |
| £(p \lor q) \lor r \equiv p \lor (q \lor r) \lor p \\ (p \land q) \land r \equiv p \land (q \land r) \land p£ | Associative laws |
| £p \lor (q \land r) \equiv (p \lor q) \land (p \lor r) \\ p \land (q \lor r) \equiv (p \land q) \lor (p \land r)£ | Distributive laws |
| £¬(p \land q) \equiv ¬p \lor ¬q \\ ¬(p \lor q) \equiv ¬p \land ¬q£ | De Morgan's laws |
| £p \lor (p \land q) \equiv p \\ p \land (p \lor q) \equiv p£ | Absorption laws |
| £p \lor ¬p \equiv \top \\ p \land ¬p \equiv \bot£ | Negation laws |
| £ p \rightarrow q \equiv ¬p \lor q \\ p \rightarrow q \equiv ¬q \rightarrow ¬p \\ p \lor q \equiv ¬p \rightarrow q \\ p \land q \equiv ¬(p \rightarrow ¬q) \\ ¬(p \rightarrow q) \equiv p \land ¬q \\ (p \rightarrow q) \land (p \rightarrow r) \equiv p \rightarrow (q \land r) \\ (p \rightarrow q) \lor (p \rightarrow r) \equiv p \rightarrow (q \lor r) \\ (p \rightarrow r) \land (q \rightarrow r) \equiv (p \lor q) \rightarrow r \\ (p \rightarrow r) \lor (q \rightarrow r) \equiv (p \land q) \rightarrow r £ | Logical equivalences involving conditional statements |
| £ p \leftrightarrow q \equiv (p \rightarrow q) \land (q \rightarrow p) \\ p \leftrightarrow q \equiv ¬p \leftrightarrow ¬q\\ p \leftrightarrow q \equiv (p \land q) \lor (¬p \land ¬q)\\ ¬(p \leftrightarrow q) \equiv p \leftrightarrow ¬q £ | Logical equivalences involving biconditionals |

### Notation

Simular to £\sum£, their exsists a notation for £\lor£ and £\land£.

%
$$
p_0 \lor p_1 \lor ... \lor p_n \equiv \bigvee^n_{i = 0}p_i
$$
%
%
$$
p_0 \land p_1 \land ... \land p_n \equiv \bigwedge^n_{i = 0}p_i
$$
%

### Constructing new logical equivalences

Using equivalences we already know, we can prove expressions are tautologys or that two expressions are logically equivelent. While a truth table could also be used, it is much shorted to apply laws.

> Show that £(p \land q) \rightarrow (p \lor q)£ is a tautology.
> %
\begin{align}
(p \land q) \rightarrow (p \lor q) &\equiv ¬(p \land q) \lor (p \lor q) & \\
&\equiv (¬p \lor ¬q) \lor (p \lor q) &\text{De Morgan's Law} \\
&\equiv (¬p \lor p) \lor (¬q \lor q) &\text{Assosiative and Commutative Law} \\
&\equiv \top \lor \top &\text{Negation Law} \\
&\equiv \top &\text{Domination Law}
\end{align}
%

### Satisfaction

Satisfiable
:   A compound proposition were there _is a_ assignment of truth values that make it true.

Unsatisfiable
:   A compound proposition were there _is no_ assignment of truth values that make it true.

The values which make a compound proposition true is called the _solution to the satisfiability problem_.

## Predicates and Quantifiers

### Predicates

Statements that involve variables such as £x + 3 = y£ and £x > 1£ are undecided when their variables are not given a value. We need a more powerfull logic, _predicate logic_, to model these statements.

We turn the statement £x > 1£ into the predicate £P(x)£ where £P£ is £x > 1£. When we give £x£ a value, the statement becomes a proposition, e.g. £P(4)£ becomes £4 > 1£ which is £\top£.

A predicate can have any number of variables, £P(x_1, x_2, ..., x_n)£. A predicate with £n£ variables is called an £n£-ary predicate.

### Quantifiers

Assigning variables is not the only way to form a proposition from a predicate. __Quantification__ expresses the extend to which a predicate is true over a range.

| Name | Example | Note |
| :--- | --- | :--- |
| Universal quantifier | £\forall x P(x)£ | is true if £P(x)£ is true for all x (domain) |
| Existential quantifier | £\exists x P(X)£ | is true if £P(x)£ is true for at least one value in the domain |

> Is £\forall x (x^2 > x)£ where the domain is all real numbers true.
>
> No, if £x = \frac{1}{2}£, £x^2 > x£) is false, thus not all elements in the domain make £x^2 > x£ true.

### Restricting the domain

Consider £\forall x (x^2 > 0)£ where the domain of £x£ is £x < 0£. We could express that as:

%
$$
\forall x \;(x < 0 \rightarrow x^2 > 0)
$$
%

Their is a shorter notation for restricting the domain

%
$$
\forall x < 0 \;(x^2 > 0)
$$
%

### Precedence of Quantifiers
£\forall£ and £\exists£ have a higher precedence that all other logical operators.

### Binding Variables

When a quantifier is used on variable, or the variable is assigned a value, the variable is said to be __bound__. Predicates must have all the variables bound to be turned into a proposition. Variables that are not bound are __free__.

The __scope__ of a quantifier is the part of the logical expression to which it is applied, hence variables outside of the scope of all quantifiers are free (if their value has not been assigned).

### Logical Equivalence

Two expressions involving predicates and quantifiers are equal if their truth values are the same throughout the domain.

> Show that £\forall x (P(x) \land Q(x))£ and £\forall x P(x) \land \forall x Q(x)£ are logically equivalent.
> 
> - Let £a£ be some element in the domain, thus £P(a) \land Q(a)£ must be £\top£.
> - If £P(a) \land Q(a)£ is £\top£, £P(a)£ and £Q(a)£ must both be £\top£.
> - Since £P(a)£ and £Q(a)£ are £\top£ for all element in the domain, £\forall x P(x) \land \forall x Q(x)£ must also be $\top$.
>
> So
> %
$$
\forall x \; (P(x) \land Q(x)) \equiv \forall x \; P(x) \land \forall x \; Q(x)
$$
%

### Negation

| Statement | Equivalent | Note |
| --- | --- | :--- |
| £¬\forall x \; P(x)£ | £\exists x \; ¬P(x)£ | Their is an £x£ for which £P(x)£ is £\bot£ |
| £¬\exists x \; P(x)£ | £\forall x \; ¬P(x)£ | For every £x£, £¬P(x)£ is £\top£  |

> Prove £¬\forall x \; P(x) \equiv \exists x \; ¬P(x)£
>
> - £¬\forall x \; P(x)£ is £\top£, if and only if £\forall x \; P(x)£ is £\bot£
> - If £\forall x \; P(x)£ is £\bot£, then their is atleast one element in the domain for which £¬P(x)£ is true.
> - It follows then the £\exists x \; ¬P(x)£

### Nested Quantifiers

More complex statements often involve more than one quantifier. For example the logical statement that _if £x£ is positive and £y£ is negative, £xy£ is negative_ can be expressed as:

%
$$
\forall x \forall y \; ((x > 0) \land (y < 0) \rightarrow (xy < 0))
$$
%

## Proof

### Rules of Inference

Proofs are mathmatical arguments that determine the truth of a statement. __By an argument__, means a sequence of statements that end in a conclusion. __By valid__, means the conclusion must follow from the arguments. __By premise__, means the argument is valid if and only if it is impossible for all premises to be true and the conclusion false.

An __argument__ is propositional logic is a sequence of propositons, where the final proposition is the conclusion and all others are the premises. An __argument form__ in propositional logic is a sequence of compound propositions that is _valid_ no matter what propositions are substitude for a premise, so long as the premises are true.

The __modus ponens__ (law of detachment) is one rule we can use to proof statements. 
%
$$
(p \land (p \rightarrow q)) \rightarrow q
$$
%

> Let £p£ be "it snows" and £q£ be "will go skiing", if "we will go skiing if it snows" is "we will go skiing" true?
>
> %
\begin{align*}
& p \rightarrow q \\
& p \\
\therefore \; & q
\end{align*}
%

| Rule of Inference | Tautology | Name |
| --- | --- | --- |
| %\begin{align*} & p \rightarrow q \\ & p \\ \therefore \; & q \end{align*}% | £(p \land (p \rightarrow q)) \rightarrow q£ | Modus ponens |
| %\begin{align*} & p \rightarrow q \\ & ¬q \\ \therefore \; & ¬p \end{align*}% | £ (¬q \land (p \rightarrow q)) \rightarrow ¬p £ | Modus tollens |
| %\begin{align*} & p \rightarrow q \\ & q \rightarrow r \\ \therefore \; & p \rightarrow r \end{align*}% | £ ((p \rightarrow q) \land (q \rightarrow r)) \rightarrow (p \rightarrow r) £ | Hypothetical syllogism |
| %\begin{align*} & p \lor q \\ & ¬p \\ \therefore \; & q \end{align*}% | £ ((p \lor q) \land ¬p) \rightarrow q £ | Disjunctive syllogism |
| %\begin{align*} & p \\ \therefore \; & p \lor q \end{align*}% | £ p \rightarrow (p \lor q) £ | Addition |
| %\begin{align*} & p \land q \\ \therefore \; & p \end{align*}% | £ (p \land q) \rightarrow p £ | Simplification |
| %\begin{align*} & p \\ & q \\ \therefore \; & p \land q \end{align*}% | £ ((p) \land (q)) \rightarrow (p \land q) £ | Conjunction |
| %\begin{align*} & p \lor q \\ & ¬p \lor r \\ \therefore \; & q \lor r \end{align*}% | £ ((p \lor q) \land (¬p \lor r)) \rightarrow (q \lor r) £ | Resolution |

### Using Rules of Inference to Build Arguments

> Given the premesis: £¬p \land q£, £r \rightarrow p£, £¬r \rightarrow s£, £s \rightarrow t£ find an argument that shows the premisies lead to the conclusion £t£.
>
> %
\begin{align}
¬p \land q && \text{premise} \\
¬p && \text{simplification (1)} \\
r \rightarrow p && \text{premise} \\
¬r && \text{modus tollens (2)(3)} \\
¬r \rightarrow s && \text{premise} \\
s && \text{modus ponens (4)(5)} \\
s \rightarrow t && \text{premise} \\
t && \text{modus ponens (6)(7)}
\end{align}
%

### Fallacies

£(p \land (p \rightarrow q)) \rightarrow q£ is a tautology, fallacies often look like tautologys but are just contingencies:

Fallacy of affirming the conclusion
:   occors when £(q \land (p \rightarrow q)) \rightarrow p£ is treated as a tautology, but it is false when £p£ is false and £q£ is true.

Fallacy of denying the hypothesis
:   occors when £(¬p \land (p \rightarrow q)) \rightarrow ¬q£ is treated as a tautology, but it is false when £p£ is false and £q£ is true.

### Rules of Inference for Quantified Statements

| Rule of Inference | Name | Notes |
| --- | :--- | :--- |
| %\begin{align*} & \forall x P(x) \\ \therefore \; & P(c) \end{align*}% | Universal instantiation | £P(c)£ is true, where £c£ is an element of the domain, since all elements are true. |
| %\begin{align*} & P(c) \\ \therefore \; & \forall x P(x) \end{align*}% | Universal generalization | £\forall x P(x)£ is true, if £P(c)£ (where £c£ is an arbitary element in the domain) is true. Since we do not make any assumptions about £c£, other than its an element of the domain, all values of the domain must be true. |
| %\begin{align*} & \exists x P(x) \\ \therefore \; & P(c) \end{align*}% | Existential instantiation | Their is an element £c£ in the domain that makes £P£ true. Note £c£ is not arbitary since some elements in the domain do not make £P£ true. |
| %\begin{align*} & P(c) \\ \therefore \; & \exists x P(x) \end{align*}% | Existential generalization | If we know one element £c£ in the domain that makes £P£ true, then it follows that £\exists x P(x)£ |

> Show that the premesis "A student in the class has not read the book" and "Everyone in the class passed the exam" implys the conclusion that "Someone who passed the exam had not read the book"
>
> - Let £C(x)£ be "£x£ is in the class"
> - Let £P(x)£ be "£x£ passed the exam"
> - Let £B(x)£ be "£x£ has read the book"
>
> %
\begin{align}
\exists x (C(x) \land ¬B(x)) && \text{Premise} \\
C(a) \land ¬B(a) && \text{Existential instantiation (1)} \\
C(a) && \text{Simplification (2)} \\
\forall x (C(x) \rightarrow P(x)) && \text{Premise} \\
C(a) \rightarrow P(a) && \text{Universal instantiation (4)} \\
P(a) && \text{Modus ponens (3, 5)} \\
¬B(a) && \text{Simplification (2)} \\
P(a) \land ¬B(a) && \text{Conjunction (6, 7)} \\
\exists x (P(x) \land ¬B(x)) && \text{Existential generalization (8)}
\end{align}
%

## Sets, Functions, Relations, Sequences and Sums

### Set

Set
:   An unordered collection of elements

#### Set Operations

| Name | Example |
| :--- | --- |
| Equality | £\{1, 2, 3\} = \{3, 1, 2\}£ |
| Membership | £3 \in \{1, 2, 3\}£ |
| Non-Membership | £5 \notin \{1, 2, 3\}£ |
| Empty Set | £\emptyset = \{\}£ |
| Union | £A \cup B£ |
| Intersection | £A \cap B£ |
| Diffrence | £A - B£ |
| Complement | £\bar{A}£ |
| Subset | £A \subseteq B£ |
| Superset | £A \supseteq B£ |
| Power Set | £P(A)£ (set of all subsets) |
| Cardinality | £\vert A \vert£ |
| Cartesian Product | £A \times B£ |

#### Common Sets

| Name | Symbol | Description |
| :--- | --- | --- |
| Booleans | £\mathbb{B}£ | £\{true, false\}£ |
| Natural numbers | £\mathbb{N}£ | £\{0, 1, 2, ...\}£ |
| Integer | £\mathbb{Z}£ | £\{..., -2, -1, 0, 1, 2, ...\}£ |
| Positive Integers | £\mathbb{Z}^+£ | £\\{z \in Z \mid z > 0\\}£ |
| Real Numbers | £\mathbb{R}£ |  |
| Rational | £\mathbb{Q}£ | £\\{\frac{a}{b} \mid a \in \mathbb{Z}, b \in \mathbb{Z}^+\\}£ |
| Complex Numbers | £\mathbb{C}£ |  |

#### Set Identitys

- £A \cup A = A£
- £A \cap A = A£
- £\bar{\bar{A}} = A£
- £A \cup B = B \cup A£
- £A \cap B = B \cap A£
- £A \cup (B \cap C) = (A \cap B) \cup (A \cap C)£
- £\bar{A \cap B} = \bar{A} \cup \bar{B}£
- £\bar{A \cup B} = \bar{A} \cap \bar{B}£
- £A \cup (A \cap B) = A£
- £A \cap (A \cup B) = A£

### Functions

#### Syntax

Function
:   A function £f£ from set £A£ to set £B£ assigns an element from £A£ to £B£, this is written as £f: A \rightarrow B£.

Examples:

- Ceil - £\lceil \cdot \rceil : \mathbb{R} \rightarrow \mathbb{Z}£
- Floor - £\lfloor \cdot \rfloor : \mathbb{R} \rightarrow \mathbb{Z}£
- Identity - £\iota_A : A \rightarrow A£
- Factorial - £! : \mathbb{N} \rightarrow \mathbb{N}£

| Type of function | Condition | Examples |
| --- | --- | --- |
| Injective | £\forall a, c \in A (\text{if } f(a) = f(c) \text{ then } a = c)£ | £\iota_A : A \rightarrow A£, £\sqrt{\cdot} : \mathbb{R}^+ \rightarrow \mathbb{R}^+£ |
| Surjective | £\forall b \in B \; \exists a \in A (f(a) = b)£ | £\iota_A : A \rightarrow A£, £\mathbb{Z} \mod m \;|\; m > 1£ |
| Bijection | Injective and surjective | £\iota_A : A \rightarrow A£, £\sqrt{\cdot} : \mathbb{R}^+ \rightarrow \mathbb{R}^+£ |

#### Composition

Let £f : B \rightarrow C£ and £g: A \rightarrow B£. The composition function £f \circ g : A \rightarrow C£ is £(f \circ g)(a) = f(g(a))£

- The composition of two functions is a function
- The composition of two injective functions is a injective function
- The composition of two surjective functions is a surjective function
- The composition of two bijections is a bijection

#### Inverse

If £f: A \rightarrow B£ is a bijection, then the inverse of £f£, written £f^{-1}:B\rightarrow A£ is £f^{-1}(b) = a£ iff £f(a) = b£

- Inverse of the identity function, is the identity function
- Inverse of £\sqrt{x} : \mathbb{R}^+ \rightarrow \mathbb{R}^+£ is £x^2 : \mathbb{R}^+ \rightarrow \mathbb{R}^+£ 
- £f^{-1} \circ f£ and £f \circ f^{-1}£ is the identity function

### Relations

A binary relation £R£ on sets £A£ and £B£ is a subset £R \subseteq A \times B£

- Often written as £a\;R\;b£ for £(a, b) \in R£
- A function £f£ is a restricted relation where £\forall a \in A \exists b \in B \; (((a, b) \in f) \land \forall c \in B \; ((a, c) \in f \rightarrow c = b))£
    - For all a in £A£ their exsists a £b£ in £B£
    - where (a, b) in relation £f£
    - and £b£ is unique  
- Given sets £A_1, ..., A_n£ a subset £R \subseteq A_1 \times ... \times A_n£ is an £n£-ary relation.

£R \subseteq A \times B£ where £A£ is students and £B£ is courses, £(\text{Ben}, \text{DMMR}) \in R£

#### Relation composition

Let £R \subseteq B \times C£ and £S \subseteq A \times B£. The composition relation £(R \circ S) \subseteq A \times C£ is £\{(a, c) \;|\; \exists b \; (a, b) \in S \land (b, c) \in R\}£

The expression specifys the relations where £R£ and £S£ have a common £B£, thus £R \circ S \subseteq A \times C£

Closure £R£ is a relation on £A£:

- £R^0£ is the identity relation £\iota_A£
- £R^{n+1} = R^n \circ R£
- £R^* = \bigcup_{n \geq 0}R^n£

#### Types of relation

| Type of relation | Condition | Example |
| --- | --- | --- |
| Reflexive | £\forall x \in A (x, x) \in R£ | £\leq£, £=£ |
| Symetric | £\forall x, y \in A ((x, y) \in R \rightarrow (y, x) \in R)£ | £=£ |
| Antisymetric | £\forall x, y \in A (((x, y) \in R \land (y, x) \in R) \rightarrow x = y)£ | £\leq£, £=£, £<£ |
| Transitive | £\forall x, y, z \in A (((x, y) \in R \land (y, z) \in R \rightarrow (x, z) \in R)£ | £\leq£, £=£, £<£ |
| Equivalance | Reflexive, symetric and transitive | £=£ |

#### Equivalance classes

Let £R£ be an equivalence realtion on a set £A£ and £a \in A£ let £[a]_R = \{s \;|\; (a, s) \in R\}£ be the equivalance class of a w.r.t £R£.

If £b \in [a]_R£ the £b£ is called a representative of the equivalance class.

Let £R£ be an equivalance realtion on £A£ amd £a, b \in A£. Then following statements are equivalnet

- £a R b£
- £[a]_R = [b]_R£
- £[a]_R \cap [b]_R \ne \emptyset£

#### Partitions of a Set

A partition of set £A£ is a collection of disjoint, nonempty subsets that have £A£ as their union, in other words the collection of subsets £A_i \subseteq A£ with £i \in I£ (where £I£ is the index set) forms a partition of £A£ iff

- £A_i \ne \emptyset£ for all £i \in I£
- £A_i \cap A_j = \emptyset£ for all £i \ne j \in I£
- £\bigcup_{i\in I} A_i = A£

From this can see:

- If £R£ is an equivalance class on £A£, then the equivalance classes of £R£ form a partion of £A£.
- Conversly, given a partition £\{A_j \mid i \in I\}£ of £A£, there exsists an equivalance relation £R£ that has the sets £A_i£, £i \in I£, as its equivalence classes.

### Sequences

Sequence
:   Ordered list of elements for example, £f : \mathbb{Z}^+ \rightarrow \mathbb{Q}£ is £f(n) = \frac{1}{n}£ defines the sequence £1, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}£

Geometric progressions
:   A sequence in the form £a, ar, ar^2, ar^3, ...£

Arithmetic progressions
:   A sequence in the form £a, a + d, a + 2d, a + 3d, ...£

#### Recurrence relations

Recurrence relations
:   A recurance relations for £\{a_n\}_{n \in \mathbb{N}}£ is an equation that expreses £a_n£ in terms of one or more elements of £a_0, a_1, a_{n-1}£

- After 1 month a pair of rabbits is placed on an island
- After every 2 months, each pair of rabbits produces a new pait of rabbits 

The realtion is:
%
$$
\begin{cases*}
f(1) & $= 1$ \\
f(2) & $= 1$ \\
f(n) & $= f(n-1) + f(n - 2)$
\end{cases*}
$$
%

Solving a recurrence relations if finding the nth term, one way of solving is an iterative aproach

> Supose a person deposits $1000 in savings with 3 percent intrest, how much is the account worth after 20 years
>
> - Let £P_n£ denote the amount after £n£ years
> - £P_n = 1.03 \times P_{n-1}£
> - £P_0 = 1000£
> - £P_1 = 1.03 \times P_0, ...,  P_n = (1.03)^n \times P_0£

### Sumations

Given a sequence £\{a_n\}£, the sum of the terms is 
%$$a_m + a_{m+1} + ... + a_l \text{ or } \sum_{j=m}^{l}{a_j}$$%


#### Usefull sumations

| Sum | Closed form |
| --- | --- |
| £\sum^n_{k=0}{ar^k}\;(r \ne 0)£ | £\frac{ar^{n+1}-a}{r-1}£, £r \ne 1£ |
| £\sum^n_{k=1}{k}£ | £\frac{n(n+1)}{2}£ |
| £\sum^n_{k=1}{k^2}£ | £\frac{n(n+1)(2n+1)}{6}£ |
| £\sum^n_{k=1}{k^3}£ | £\frac{n^2(n+1)^2}{4}£ |
| £\sum^{\infty}_{k=0}{x^k}\;(\lvert x \rvert < 1)£ | £\frac{1}{1-x}£ |
| £\sum^{\infty}_{k=1}{kx^{k-1}}\;(\lvert x \rvert < 1)£ | £\frac{1}{(1-x)^2}£ |

#### Product

Given a sequence £\{a_n\}£, the product of the terms is 
%
$$
a_m \times a_{m+1} \times ... \times a_l \text{ or } \prod_{j=m}^{l}{a_ j}
$$
%

or more generally for a finite index set £S£, 
%
$$
\prod_{j \in S}{a_j}
$$
%

## Cartinality

Finite set
:   A set £S£ is finite with cardinality £n \in N£ if there is a bijection from the set £\{0, 1, ..., n - 1\}£ to £S£.

Infinite set
:   A set that is not finite

> Prove the set of natural numbers, £N£, is an infinite set.
>
> - Consider the function £f: N \rightarrow N£ defined as £f(x) = 3x£
> - £f£ is injective, since every element in the domain has an element in the codomain which is mapped to it.
> - £f£ is not subjective, since £2£ is in the codomain but is has no element in the domain which maps to it.
> - Thus £f£ is not a bijection.
> - Thus £N£ is an infinite set.

### Countable sets

Countable
:   A set that is either finite or has the same cardinality as the set of the positive integers

Uncountable
:   A set that is not countable

An infinite set £S£ is countable, we denote the cardinality of £S£ by £\aleph_0£ 

- If £A£ and £B£ are countable sets, then £A \cup B£ is also countable
- If £I£ is countable and for each £i \in I£ the set £A_i£ is countable then £\bigcup_{i \in I} A_i£ is countable

> Show that the set of real numbers is uncountable 
>
> - Assume that the set of real numbers is countable
> - The the real numbers between £0£ and £1£ must also be countable
> - We can list these numbers with decimal noation %
\begin{align*}
r_1 &= 0.d_{11} d_{12} d_{13} ...\\
r_2 &= 0.d_{21} d_{22} d_{23} ...\\
r_3 &= 0.d_{31} d_{32} d_{33} ...\\
...
\end{align*}
%
> - Where £d_{ij} \in \{0, 1, 2, 3, 4, 5, 6, 7, 8 9\}£
> - We can define a number £j = 0.d_1 d_2 d_3 ...£
> - Where %
$$
d_i = \begin{cases*}
2 & if $d_{ij} \ne 2$ \\
3 & if $d_{ij} = 2$
\end{cases*}
$$
%
> - So £j£ defines a number that is diffrent from £r_i£ in the £i^{th}£ number
> - Thus their is a real number between £0£ and £1£ that is not in the list
> - Therefore the set of real numbers cannot be listed.

### Schröder-Bernstein Theorem

If £A£ and £B£ are sets with £\lvert A \rvert \leq \lvert B \rvert£ and £\lvert B \rvert \leq \lvert A \rvert£, then £\lvert A \rvert = \lvert B \rvert£. In other words, if there are one-to-one functions £f£ from £A£ to £B£ and £g£ from £B£ to £A£, then there is a one-to-one correspondence between £A£ and £B£.

> Show that £\lvert (0, 1) \rvert = \lvert (0, 1] \rvert£
>
> - Since £(0, 1) \subset (0, 1]£, their is a one-to-one function (e.g. identity function) from £(0, 1)£ to £(0, 1]£
> - Lets define £g(x) = \dfrac{x}{2}£, which is a mapping from £(0, 1]£ to £(0, \frac{1}{2}]£, £(0, \frac{1}{2}] \subset (0, 1)£ so their is a one £(0, 1]£ to £(0, 1)£.
> - Thus £\lvert (0, 1) \rvert = \lvert (0, 1] \rvert£, due to Schröder-Bernstein Theorem

### Cantor’s theorem

£\lvert A \rvert < \lvert \mathcal{P}(A) \rvert£

> Proof
>
> - Consider the injection £f: A \rightarrow \mathcal{P}(A)£ with £f(a) = \{a\}£ for any £a \in A£.
> - Therefore £\lvert A \rvert \leq \lvert \mathcal{P}(A) \rvert£
> - Assume a surjection £f£ exsists
> - Let £B \subseteq A : B = \{x \in A \mid x \not\in f(x)\}£
> - Since £f£ is a surjection, there must exist an £a \in A£ such that £B = f(a)£   
>       - If £a \in B£ then by definition of £B£, £a \not\in f(a)£, thus £a \not\in B£ (contradiction)
>       - If £a \not\in B£ then £a \in f(a)£, by definition of £B£, £a \in B£ (contradiction)

One consequence of cantors theorem is that their is an infinite hierarchy of sets of larger cardinality.

## Induction

Mathematical Induction
:   To prove £P(n)£ is true for all positive integers, where £P(n)£ is a propositional function

Basic Step
:   Verifying £P(1)£ is true

Inductive step
:   Showing that the conditional £P(k) \rightarrow P(k+1)£ is true for all positive integers £k£

> Prove that if £n£ is a positive integer £P(n) = \displaystyle\sum^n_{k=1}{k} = \dfrac{n(n+1)}{2}£
>
> - £P(1) = \dfrac{1(1+1)}{2} = 1£, thus £P(1)£ is true
> - Assuming £P(k)£ holds, then it must be shown that £P(k+1)£ holds %
\begin{align*}
P(k+1) &= \frac{(k+1)[(k+1)+1]}{2}\\
&= \frac{(k+1)(k+2)}{2}
\end{align*}
%
> - Thus if we can show £P(k) + (k+1) = P(k+1)£, then £P(k) \rightarrow P(k+1)£
%
\begin{align*}
\frac{(k+1)(k+2)}{2} &= \frac{k(k+1)}{2} + (k+1) \\
&= \frac{k(k+1)}{2} + \frac{2(k+1)}{2} \\\
&= \frac{k(k+1) + 2(k+1)}{2} \\
&= \frac{(k+1)(k+2)}{2}
\end{align*}
%

### Strong induction

Mathematical Strong Induction
:   To prove £P(n)£ is true for all positive integers, where £P(n)£ is a propositional function

Basic Step
:   Verifying £P(1)£ is true

Inductive step
:   Showing that the conditional £(P(1) \land ... \land P(k)) \rightarrow P(k+1)£ is true for all positive integers £k£

> Prove that if £n > 1£, then £n£ can be written as the product of primes
>
> - £P(2)£ is true since £2 = 2£ (£2£ is a prime itself).
> - £P(k+1)£ is either a prime or a composite number
>       - If it is prime, then itself is a product of primes
>       - If it is composite, then £k+1£ is the product of two positive integers £a£ and £b£ that are £2 \leq a \leq b < (k+1)£.
>           - Thus since both are less than £k+1£, by strong induction they can be rewritten as the product of primes
>           - Thus £k+1£ can be written as the product of primes

## Multiplicative Inverses

Linear congruence
:   A congruence in the form £ax = b \; (\text{mod } m)£

Inverse
:   An interger £\bar{a}£, for which £\bar{a} a = 1 \; (\text{mod } m)£

Their is an efficent algorithum for computing the inverse of £a \text{ mod } m£ when £\text{gcd}(a, m) = 1£. We can find the linear combination £sa + tm = 1£, reducing both sides by modulo £m£ gives £s£ as an inverse.

### Example

Find an inverse of £101£ modulo £4620£

%
\begin{align*}
4620 &= 45 \times 101 + 75 \\
101 &= 1 \times 75 + 26 \\
75 &= 2 \times 26 + 23 \\
26 &= 1 \times 23 + 3 \\
23 &= 7 \times 3 + 2 \\
3 &= 1 \times 2 + 1 \\
2 &= 2 \times 1 && \text{Thus gcd(101, 4620) = 1}
\end{align*}
%

%
\begin{align*}
1 &= 3 - 1 \times 2 \\
&= 3 - 1 \times (23 - 7 \times 3) = -1 \times 23 + 8 \times 3 \\
&= -1 \times 23 + 8 \times (26 - 1 \times 23) = -9 \times 23 + 8 \times 26 \\
&= -9 \times (75 - 2 \times 26) + 8 \times 26 = -9 \times 75 + 26 \times 26 \\
&= -9 \times 75 + 26 \times (101 - 1 \times 75) = 26 \times 101 - 35 \times 75 \\
&= 26 \times 101 - 35 \times (4620 - 45 \times 101) = -35 \times 4620 + 1601 \times 101 \\ 
\end{align*}
%

Thus £1601£ is the inverse of £101 \text{ mod } 4620£

### The chinese remainder theorem

Let £m_1, m_2, ..., m_n£ be pairwise relative primes greater than 1.

%
\begin{align*}
x &\equiv a_1 \; (\text{mod } m_1) \\
x &\equiv a_2 \; (\text{mod } m_2) \\
\vdots \\
x &\equiv a_n \; (\text{mod } m_n) \\
\end{align*}
%

Then the system above has a unique solution modulo £m = m_1 \times m_2 \times ... \times m_n£

#### Example

%
\begin{align*}
x &\equiv 2 \; (\text{mod } 3) \\
x &\equiv 3 \; (\text{mod } 5) \\
x &\equiv 5 \; (\text{mod } 7) \\
\\
m &= 3 \times 5 \times 7 \\
&= 105 \\
\\
M_1 &= 35 && \text{2 is an inverse of $M_1$ mod 3} \\
M_2 &= 21 && \text{1 is an inverse of $M_2$ mod 5} \\
M_3 &= 15 && \text{1 is an inverse of $M_3$ mod 2} \\
\\
x &= 2 \cdot 35 \cdot 2 + 3 \cdot 21 \cdot 1 + 5 \cdot 15 \cdot 1 \\
&= 278 \\
\\
278 &\equiv 68 \; (\text{mod } 105)
\end{align*}
%

### Fermat's little theorem

If £p£ is prime and £a£ is an integer not divisible by £p£ then:

%$$ a^{p-1} \equiv 1 \; (\text{mod } p) \quad \text{and} \quad a^p \equiv a \; (\text{mod } p) $$%

#### Example

Find £7^{222} \text{ mod } 11£.

£p = 11£ and £a = 7£, so by fermat's little theorem £7^{11 - 1} \equiv 7^{10} \equiv 1 \; (\text{mod } 11)£. £(7^{10})^k \equiv 1 \; (\text{mod } 11)£ for every positive integer £k£. Therefore £7^{222} = 7^{22 \times 10 + 2} = (7^{10})^{22} \times 7^2 = (7^{10})^{22} \times 49£. £(7^{10})^{22} \times 49 \equiv 1^{22} \times 49 \equiv 5 \; (\text{mod } 11)£. Hence £7^{222} \text{ mod } 11 = 5£.

## Counting

### Product rule

If £A£ and £B£ are finite sets £|A \times B| = |A| \cdot |B|£ where £A \times B = \{(a, b) \mid a \in A \land b \in B \}£

#### Example

How many diffrent car license plates can be made of 3 uppercase letters and 3 digits.

£26 \times 26 \times 26 \times 10 \times 10 \times 10 = 17576000£

### Counting subsets

A finite set £S£ has £2^{|S|}£ distinct subsets.

#### Proof

Theis is bijection between the bit strings of length £|S|£, since an arbitary bit string tells us what elements from set £|S|£ is in the subset. Thus by the product rule their are £2^{|S|}£ distinct subsets.

### Counting functions

For all finite sets £A£ and £B£, the number of distinct functuons £F: A\rightarrow B£ is £|B|^{|A|}£

#### Proof

Their is a bijection between between functions £f£ and strings of length £|A|£ over an alphabet £|B|£. This is because each string gives all the values of a function £f£.

### Sum rule

If £A£ and £B£ are disjoint then £|A| \cup |B| = |A + B|£.

#### Example

Suppose variables can be 1 uppercase letter or 1 uppercase letter and a number

£26 + (10 \times 26) = 286£, since the sets are disjoint.

### Subtraction rule

For sets £A£ and £B£, £|A| \cup |B| = |A| + |B| - |A \cap B|£.

#### Example

How many bit strings of lenghth 8 either start with a 1 bit, or end with two 00 bits.

£2^7 + 2^6 - 2^5 = 160£

### The pigeonhole principle

For any positive integer £k£, if £k+1£ objects, are placed in £k£ boxes,then at least one box contains two or more objects.

Or more formally, if £f : A \rightarrow B£ maps finite set £A£ with £|A| = k£

### Generalized pigeon hole

If £N \geq 0£ objects placed in £k \geq 1£ boxes, then at least one box contains at least £\lceil{\frac{N}{k}} \rceil£.

#### Example

Atleast £d£ students were born in the dame month, what is the least £d£?

£\lceil \frac{145}{12} \rceil = 13£.

## Permutations

A permutations of a set £S£ is an ordered arrangement of elements of £S£ i.e. a sequence of every element in £S£ once.

In otherwords their is a bijection £\pi : S \rightarrow S£ which matches some element in £S£ with another element in £S£, creating a unique permutation, since it is one-to-one. So a set £S = \{s_1, ..., s_m\}£ has a permutation £\pi (s_1), ..., \pi (s_m)£.

### r-Permutation

An ordered sequence of £r£ distinct elements of £S£, for example a 2-permutation of set £\{1, 2, 3\}£ would be £\{3, 1\}£ or £\{1, 2\}£ etc.

In otherwords their is a bijection £f : \{1, ..., r\} \rightarrow S£ which orders a subset of the elements in £S£, creating a unique r-permutation. So an r-permutation would be £f (1), f(2), ..., f(r)£.

### Number of r-Permutations
The number of r-permutations will be:

%
$$
P(n, r) = n \cdot (n - 1) \cdot ... \cdot (n - r + 1)
$$
%

Since their are £n£ choises of what can go in the first position, and £n-1£ choises for the second, and so on. This simplifys to:

%
$$
P(n, r) = \frac{n!}{(n - r)!}
$$
%

For the number of permutations we get:

%
$$
P(n, n) = \frac{n!}{(n - n)!} = n!
$$
%

### Example

How many permutations of the letters `ABCDEFGH` contain `ABC` as a consecutive substring.

`ABCDEFGH` = `ABC,D,E,F,G,H` = £P(6, 6) = 6! = 720£

### Stirling's approximation formula

%
$$
n! \approx \sqrt{2 \pi n} \cdot (\frac{n}{e})^n
$$
%

We can show that its and approximation, by showing that it grows at the same rate as £n!£:

%
$$
lim_{n \rightarrow \infty} {\frac{n!}{\sqrt{2 \pi n} \cdot (\frac{n}{e})^n}} = 1
$$
%

Its often usefull to have lower and upper bounds:

%
$$
\sqrt{2 \pi n} \cdot (\frac{n}{e})^n \cdot e^{\frac{1}{12n+1}} \leq n! \leq \sqrt{2 \pi n} \cdot (\frac{n}{e})^n \cdot e^{\frac{1}{12n}}
$$
%

## Combination

An unordered collection of elemenets of £S£.

The number of combinations will be the number of permutations divided by the number of orderings which is £P(r, r) = r!£.

%
$$
C(n, r) = \binom{n}{r} = \frac{P(n, r)}{P(r, r)} = \frac{n!}{r! \cdot (n - r)!}
$$
%

### Aproximations

From Stirlings approximation formular, we can derive the following bounds:

%
$$\left( \frac{n}{r} \right)^r \leq \binom{n}{r} \leq \left( \frac{n \cdot e}{r} \right)^r$$
$$\binom{2n}{n} \approx \frac{2^{2n}}{\sqrt{\pi n}}$$
$$\frac{2^{2n}}{2n + 1} \leq \binom{n}{r} \leq 2^{2n}$$
%

### Example

How many diffrent 5 card poker hands can be dealt from 52 cards.

%
$$
\binom{52}{5} = \frac{52!}{5! \times 47!} = 2598960
$$
%

### Identity

%
$$
\binom{n}{r} = \binom{n}{n-r}
$$
%

Proof:

%
$$
\binom{n}{r} = \frac{n!}{r! \cdot (n - r)!} = \frac{n!}{(n - r)! \cdot (n - (n - r))!} = \binom{n}{n-r}
$$
%

### Binomial coeffiecients

Consider:

%
$$
(x + y)^n = (x + y) \cdot (x + y) \cdot ... \cdot (x + y)
$$
%

By exanding the terms we can write it as a sum-of-monomials

%
$$
(x + y)^n = x^n + x^{n-y} \cdot y + ... + y^n = \sum_{j=0}^n{c_j x^{n-j} y^j}
$$
%

were £c_j£ is the binomial coeffiects

%
$$
(x + y)^n = \sum_{j=0}^n{ \binom{n}{j} x^{n-j} y^j}
$$
%

### Pascal's Identity

For all integers £n \geq 0£, and all integers £r£, £0 \leq r \leq n+1£:

%
$$
\binom{n+1}{r} = \binom{n}{r-1} + \binom{n}{r}
$$
%

Proof:

Consider the subset £S = \{s_0, s_1, s_2, ... s_n \}£. Consider the subset £A£ where £|A| = r£. Their are two cases

- £s_0 \in A£
- £s_0 \not\in A£

Their are:

- £\binom{n}{r-1}£ of the first kind, since £s_0£ was already "choosen" their are £r-1£ left to choose out of £n£ (not £n+1£ options).
- £\binom{n}{r}£ of the second kind, since no elements have been "choosen" their are £r£ left to choose out of £n£ (not £n+1£ options).

Thus it follows that:
%
$$
\binom{n+1}{r} = \binom{n}{r-1} + \binom{n}{r}
$$
%

### Vandermonde's identity

For £m, n, r \geq m£ and £r \leq n£:

%
$$
\binom{m+n}{r} = \sum_{k=0}^r{\binom{m}{r-k} \binom{n}{k}}
$$
%

Consider two disjoint subsets £A£ and £B£, with £|A| = m£ and £|B| = n£, thus £|A \cup B| = m + n£. Chosing r elements from £A \cup B£, we get the following cases:

- £r£ elements from £A£, £0£ elements from £B£
- £r-1£ element from £A£, £1£ elements from £B£
- ...
- £0£ elements from £A£, £r£ elements from £B£

So their is £\binom{m}{r-k} \binom{n}{k}£ of kind k. So the sum of all cases is:

%
$$
\binom{m+n}{r} = \sum_{k=0}^r{\binom{m}{r-k} \binom{n}{k}}
$$
%

### Combinations with repetition

A multi-set is an unordered collection of elements with possible repetition, were the size of a multi-set is the number of elements (including repetition). For example consider the multi-sets: £[R, R, B]£ and £[R, B, R]£ by definition £[R, R, B] = [R, B, R]£.

For all integers £n, r \geq 1£, the number of r-combinations with repetitions, from a set £S£ of size £n£ is:

%
$$
\binom{n+r-1}{r} = \binom{n+r-1}{n-1}
$$
%

We can represent each r-Combination with repetition as a string of length £n + r - 1£ with £n - 1£ bars and £r£ stars. For example for the set £S = \{ R, G, B, Y \}£, then we can map multi-sets to strings.

- £[R, R, Y, Y]£ is `**|||**`
- £[R, G, G, G, B]£ is `*|***|*|`
- £[R, Y, Y]£ is `*|||**`

Thus, the number of r-Combinations with repetition is equal to the number of strings of length £n + r - 1£ with £n - 1£ bars and £r£ stars which is:

%
$$
\binom{n+r-1}{r} = \binom{n+r-1}{n-1}
$$
%

#### Example

How many solutions to £x_1 + x_2 + x_3 = 11£ are their.

This is equivilent to 11-combinations with repetion, where the set size is 3. Thus:

%
$$
\binom{11 + 3 - 1}{11} = \binom{13}{11} = \binom{13}{2} = \frac{13 \cdot 12}{2 \cdot 1} = 78
$$
%

## Multinomial coefficients

For integers £n, n_1, n_2, ..., n_k \geq 0£ such that £n = n_1 + n_2 + ... + n_k£, let:

%
$$
\binom{n}{n_1, n_2, ... n_k} = \frac{n!}{n_1! n_2! ... n_k!}
$$
%

For all £n \geq 0£, and all £k \geq 1£:

%
$$
(x_1 + x_2 + ... + x_k)^n = \sum_{0 \leq n_1, n_2, ..., n_k \leq n \text{ where } n_1 + n_2 + ... + n_k = n}{ \binom{n}{n_1, n_2, ... n_k} x_1^{n_1} x_2^{n_2} ... x_k^{n_k} }
$$
%

Note the binomial coefficent is the special case were £k = 2£

### Example

How many diffrent strings can be made from reordering the letters "SUCCESS".

%
$$
\binom{7}{3,1,2,1} = \frac{7!}{3! \cdot 1! \cdot 2! \cdot 1!} = \frac{5040}{12} = 420
$$
%

## Graphs

Graph
:   A non-empty set of vertices (or nodes) and a set of edges that connect (pairs of) nodes

Undirected graph
:   - Their is at most one edge between distinct nodes
- No self loops
- Edges have no direction

Directed graphs
:   - At most one directed edge from one not to another (so their can be 2 edges, one back and one forward)
- No self loops
- Only directed edges

### Formal defintion

A directed graph £G = (V, E)£ consists of a non-empty set £V£ of vertices and a set £E \subseteq V \times V£ of directed edges. Each edge £(u, v) \in E£ has a start vertex £u£ and an end vertex £v£. 

A undirected graph £G = (V, E)£ consits of a non-empty set £V£ of vertices and a set £E \subseteq [V]^2£ of undirected edges, where £\forall \{u, v\} \in E \mid u \ne v£. Here we use £[V]^k£ to denote the £k£-element subsets of £V£.

### Degree and neighborhood

Degree
:   The number of edges incident with it, denoted by £deg(v)£.

Neighborhood
:   Set of vertices adjactent to £v£ denoted by £N(v)£.

### Handshanking theorem

If £G = (V, E)£ is an undirected graph with £m£ edges then:

%
$$
2m = \sum_{v \in V}{deg(v)}
$$
%

Proof: Every edge contributes to the sum of the degrees twice since their it connects a pair of nodes.

### Even number of odd degree vertices

Their is always an even number of odd degree vertices.

Proof:

First we use the handshaking lemma, and split the sum inot £V_1£ (odd degree vertices) and £V_2£ (even degree vertices).

%
$$
2m = \sum_{v \in V_1}{deg(v)} + \sum_{v \in V_2}{deg(v)}
$$
%

Next we subtract the sum of even vertices from both sides.

%
$$
2m - \sum_{v \in V_2}{deg(v)} = \sum_{v \in V_1}{deg(v)} 
$$
%

Now we notice the lhs is even, since £2m£ is even and the sum of even numbers is even. If the lhs is even the rhs must also be even, thus the sum of odd degree vertices is even.

### Directed graphs

in-degree
:   Number of edges comming into £v£, denoted by £deg-(v)£.

out-degree
:   Number of edges comming out of £v£, denoted by £deg+(v)£.

### Special graphs

Complete graph
:   Denoted by £k_n£, a simple graph that contains one edge between each pair of distinct vertices.

Cycle
:   todo

n-Cubes
:   An n-dimensional hypercube, or n-cube, is a graph with £2^n£ vertices representing all bit strings of lenth £n£, where their is an edge between two vertices iff they differ in exactly one bit position.

Bipartite graphs
:   A graph where it is possible to split vertices into two sets where all the edges go from one set to the other. An equivalent definition is that is is possible to color the vertices either red or blue so that no two adjacent vertices are the same color.

Complete bipartite graph
:   A bitite graph, dentoted by £K_{m, n}£ where their is £m£ vertices in one partition and £n£ veritces in the other partition, with every edge between the sets connected by an edge.

Subgraph
:   A subgraph of a graph £G = (V, E)£ is a graph £(W, F)£ where £W \subseteq V£ and £F \subset E£.

Proper subgraph
:   A subgraph which is not equal to the graph.

Induced subgraph
:   Let £G = (V, E)£ be a graph. The subgraph induced by a subset £W£ of the vertex set £V£ is the graph £H = (W, F)£ whos edge set £F£ contains an edge in £E£ iff both endpoints are in £W£.

### Bipartite grapgs matching

Bipartite graphs can be used to match elements in two sets, such as job assignments.

Matching
:   A subset of edges of graph £G£ such thet does not exsit two distinct edges in incident on the same vertex.

Maximum matching
:   A graph £G£ is a matching in £G£ iwth the maximum possible edges.

#### Halls marriage theorem

For a bipartite graph £G =(V, E)£ with a bipartition £(V_1, V_2)£, there exsists a matching £M \subseteq E£ that covers £V_1£ iff for all £S \subseteq V_1£, £|S| \leq |N(S)|£.

Proof:

For £G = (V, E)£ with £A \subseteq V£, let £N_G(A)£ denote the neignbors of £A£ in £G£. 

First "only if" direction:

- Supose there is a matching £M£ in £G£ that covers £V_1£
- We show that £\forall S \subseteq V_1, |S| \leq |N_G(S)|£.
- Suppose that there is a subset £S \subseteq V_1£ such that £|S| > |N_G(S)|£.
- Their is no matching £M£ that could cover by the pigeon hall theorem

"if" direction:

