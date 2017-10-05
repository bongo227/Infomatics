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
> - Since £(0, 1) \subset (0, 1]£, their is a one-to-one function from £(0, 1)£ to £(0, 1]£
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
>       - If £a \in B£ then by definition of £B£, £a \not\in B = f(a)£ (contradiction)
>       - If £a \not\in B£ then £a \not\in f(a)£, by definition of £B£, £a \in B£ (contradiction)

One consequence of cantors theorem is that their is an infinite hierarchy of sets of larger cardinality.