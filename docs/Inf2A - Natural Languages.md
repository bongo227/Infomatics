# Inf2A - Natural Languages

## Morphology parsing

Morphology
:   They study of the structure of words.

Stem
:   Part of a word with no _affixes_

Affix
:   Parts of a word added to the stem, including prefixes, suffixes, infixes and circumfixes

Inflection
:   stem + grammer affix - word does not change grammatical class e.g. walk £\rightarrow£ walking

Derivation
:   stem + grammar affix - word changes grammatical form e.g. computerize £\rightarrow£ computerization

Componding
:   stem + stem e.g. doghouse

Cliticization
:   e.g. I've, we're, he's

Lexical form
:   stem + the properties of that word e.g. cats £\rightarrow£ cat+N+PL, walking £\rightarrow£ walk+V+PresPart, smoothest £\rightarrow£ smooth+Adj+Sup

Morphology parsing
:   Extracting the lexical form from a a word

### Why morphology parsing?

- Prerequsite of _grammatical parsing_.
- _Search engines_, a search for 'foxes' should also return documents including 'fox'.
- _Spell checking_, usings rules to check if the correct form of a word is used.

### Finite-state transducers

Finite-state transducers are an extension of finite state machines which also produce and output.

<center>
    <svg width="400" height="300" viewBox="0 25 300 70" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <ellipse stroke="black" stroke-width="1" fill="none" cx="91.5" cy="91.5" rx="30" ry="30"/>
        <ellipse stroke="black" stroke-width="1" fill="none" cx="91.5" cy="91.5" rx="24" ry="24"/>
        <ellipse stroke="black" stroke-width="1" fill="none" cx="210.5" cy="91.5" rx="30" ry="30"/>
        <path stroke="black" stroke-width="1" fill="none" d="M 184.911,106.903 A 91.788,91.788 0 0 1 117.089,106.903"/>
        <polygon fill="black" stroke-width="1" points="184.911,106.903 175.63,105.212 179.325,114.505"/>
        <text x="134.5" y="134.5" font-family="Times New Roman" font-size="20">b : &#949;</text>
        <path stroke="black" stroke-width="1" fill="none" d="M 117.686,77.106 A 97.49,97.49 0 0 1 184.314,77.106"/>
        <polygon fill="black" stroke-width="1" points="117.686,77.106 126.913,79.071 123.496,69.673"/>
        <text x="134.5" y="62.5" font-family="Times New Roman" font-size="20">b : &#949;</text>
        <path stroke="black" stroke-width="1" fill="none" d="M 78.275,64.703 A 22.5,22.5 0 1 1 104.725,64.703"/>
        <text x="74.5" y="14.5" font-family="Times New Roman" font-size="20">a : 0</text>
        <polygon fill="black" stroke-width="1" points="104.725,64.703 113.473,61.17 105.382,55.292"/>
        <path stroke="black" stroke-width="1" fill="none" d="M 197.275,64.703 A 22.5,22.5 0 1 1 223.725,64.703"/>
        <text x="193.5" y="14.5" font-family="Times New Roman" font-size="20">a : 1</text>
        <polygon fill="black" stroke-width="1" points="223.725,64.703 232.473,61.17 224.382,55.292"/>
        <polygon stroke="black" stroke-width="1" points="5.5,91.5 61.5,91.5"/>
        <polygon fill="black" stroke-width="1" points="61.5,91.5 53.5,86.5 53.5,96.5"/>
    </svg>
</center>

For example the string `aabaaabbab` becomes `001111`

#### Formal defintion

- An input language £\Sigma£ and an output language £\Pi£
- Sets £Q, S, F£ as in an ordinary NFA
- A transition relation £\Delta \subseteq Q \times (\Sigma \cup \{ \epsilon \}) \times (\Pi \cup \{ \epsilon \}) \times Q£

### Lexical to intermediate form

We want to convert a lexical form such as `fox+N+PL` into an intermediate form `fox ^ s #`, while taking into account irregualr forms such as goose/geese. We can do this with a transducer.

<svg width="800" height="300" viewBox="0 50 800 350" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="95.5" cy="191.5" rx="30" ry="30"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="286.5" cy="82.5" rx="30" ry="30"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="286.5" cy="191.5" rx="30" ry="30"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="286.5" cy="299.5" rx="30" ry="30"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="449.5" cy="82.5" rx="30" ry="30"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="449.5" cy="191.5" rx="30" ry="30"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="449.5" cy="299.5" rx="30" ry="30"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="649.5" cy="191.5" rx="30" ry="30"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="649.5" cy="191.5" rx="24" ry="24"/>
	<polygon stroke="black" stroke-width="1" points="125.5,191.5 256.5,191.5"/>
	<polygon fill="black" stroke-width="1" points="256.5,191.5 248.5,186.5 248.5,196.5"/>
	<text x="134.5" y="182.5" font-family="Times New Roman" font-size="20">irregular noun</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 104.079,162.809 A 144.406,144.406 0 0 1 257.434,75.292"/>
	<polygon fill="black" stroke-width="1" points="257.434,75.292 250.205,69.231 248.818,79.134"/>
	<text x="59.5" y="83.5" font-family="Times New Roman" font-size="20">regular noun</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 256.895,304.072 A 158.872,158.872 0 0 1 106.842,219.225"/>
	<polygon fill="black" stroke-width="1" points="256.895,304.072 248.615,299.551 249.203,309.533"/>
	<text x="50.5" y="304.5" font-family="Times New Roman" font-size="20">irregular noun</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 475.094,66.99 A 123.964,123.964 0 0 1 648.662,161.585"/>
	<polygon fill="black" stroke-width="1" points="648.662,161.585 652.419,152.931 642.53,154.416"/>
	<text x="590.5" y="62.5" font-family="Times New Roman" font-size="20">+PL : ^s#</text>
	<polygon stroke="black" stroke-width="1" points="479.5,191.5 619.5,191.5"/>
	<polygon fill="black" stroke-width="1" points="619.5,191.5 611.5,186.5 611.5,196.5"/>
	<text x="518.5" y="182.5" font-family="Times New Roman" font-size="20">+SG : #</text>
	<polygon stroke="black" stroke-width="1" points="316.5,82.5 419.5,82.5"/>
	<polygon fill="black" stroke-width="1" points="419.5,82.5 411.5,77.5 411.5,87.5"/>
	<text x="343.5" y="73.5" font-family="Times New Roman" font-size="20">+N : &#949;</text>
	<polygon stroke="black" stroke-width="1" points="316.5,191.5 419.5,191.5"/>
	<polygon fill="black" stroke-width="1" points="419.5,191.5 411.5,186.5 411.5,196.5"/>
	<text x="343.5" y="182.5" font-family="Times New Roman" font-size="20">+N : &#949;</text>
	<polygon stroke="black" stroke-width="1" points="316.5,299.5 419.5,299.5"/>
	<polygon fill="black" stroke-width="1" points="419.5,299.5 411.5,294.5 411.5,304.5"/>
	<text x="343.5" y="320.5" font-family="Times New Roman" font-size="20">+N : &#949;</text>
	<polygon stroke="black" stroke-width="1" points="25.5,191.5 65.5,191.5"/>
	<polygon fill="black" stroke-width="1" points="65.5,191.5 57.5,186.5 57.5,196.5"/>
	<polygon stroke="black" stroke-width="1" points="475.897,285.246 623.103,205.754"/>
	<polygon fill="black" stroke-width="1" points="623.103,205.754 613.688,205.156 618.439,213.955"/>
	<text x="554.5" y="266.5" font-family="Times New Roman" font-size="20">+PL : #</text>
	<polygon stroke="black" stroke-width="1" points="475.842,96.856 623.158,177.144"/>
	<polygon fill="black" stroke-width="1" points="623.158,177.144 618.526,168.925 613.741,177.706"/>
	<text x="554.5" y="127.5" font-family="Times New Roman" font-size="20">+SG : #</text>
</svg>

First we copy the _stem_, then we map the labels to the correct intermediate output.

### Intermediate to surface form

To convert from intermediate form to surface form, we apply a number of _orthographic rules_ such as:

- _E-insertion:_ Insert `e` after `s`, `z`, `x`, `ch` and `sh` before a word-final morpheme e.g. fox £\rightarrow£ foxes.
- _E-deletion:_ Delete `e` before a suffix beginning with `e` or `i` e.g. love £\rightarrow£ loving.
- _Constant doubling:_ Single consonants `b`, `s`, `g`, `k`, `l`, `m`, `n`, `p`, `r`, `s`, `t`, `v` are doubled before suffix `ed` or `ing` e.g. beg £\rightarrow£ begging 

## Parts-of-speech

Parts-of-speech is the process of tagging words in a sentence. Words are split into classes with the same distribution, such as:

- Crocodile
- Pencil
- Mistake

These (singular, countable) nouns can appear in the same grammatical contexts such as:

- Jim saw the crocodile
- Jim saw the penci
- Jim saw the mistake

### Classifying words

Criteria for classifying words:

- __Distributional__ criteria - Where can the words occor?
- __Morphological__ criteria - What form doest the word have? What affixes doest it have?
- __Notinal__ criteria - What consept doest the word refer to, e.g. nouns refer to people, places and things.

Classes of words are split into open and clossed:

- __Open classes__ are large, and fluid, and (often) stable under translation, e.g. nouns, verbs, adjectives adverbs.
- __Closed classes__ small, fixed class which varys across languages.

### Nouns

- __Notionaly__ nouns generally refer to living things, places, non-living things or concepts.
- __Formally__ `-ness`, `-tion`, `-ity` and `-ance` tend to indicate nouns.
- __Distributionaly__ nouns can appear with posession e.g. `his car`

### Verbs

- __Notionaly__ verbs refer to actions.
- __Formally__ `-ate`, `-ize` tend to be verbs, and `-ing` tends to be the present participle of a verb.
- __Distributionaly__ verbs appear in diffrent contexts based on their type, for example base form verbs can appear as infinitives e.g. `to jump`.

### Adjectives

- __Notionaly__ opinions about nouns.
- __Formally__ `-al`, `-ble` and `-ous` tend to be adjectives.
- __Distributionaly__ adjectives usually appear before a noun or after a form of `be`.

### Adverbs

- __Notionaly__ opinions about verbs.
- __Formally__ `-ly` tend to be adverbs.
- __Distributionaly__ adverbs tend to appear next to a verb, adjective or the start of a sentence.

### Close classes

- __Propositions:__ on, under, over, near, by, at, from, to, with
- __Determiners:__ a, an, the
- __Conjunctions:__ and, but, or, as, if, when
- __Particles:__ up, down, on, off, in, out, at, by
- __Numerals:__ one, two, three, first, second, third

### Zipf's law

Given some courpus the _frequeny_ of any word is inversely proporitonal to its _rank_. £f \propto \frac{1}{r}£

In other words, their is a small number of very common words, and a large number of infrequent words.

## Parts-of-speech tagging

### POS ambiguity

The difficulty of POS tagging is tagging ambigoius word tokens. In the brown corpus, only 10.4% of _word types_ are ambigious, but die to Zipfians distribution, these make up 50% of _word tokens_.

- He wants `that/DT` hat.
- It is obvious `that/CS` he wants a hat.
- He wants a hat `that/WPS` fits.

### Bigram tagging

With bigram tagging, for each word we build a table of tags that counts how many instances of a tag appears after another tag.

%
\begin{tabular}{r|l|l|l}
	\textbf{still} 	& DT & MD & JJ \\ \hline
	NN 		& 8 & 0 & 6 \\
	JJ 		& 23 & 0 & 14 \\
	VB 		& 1 & 12 & 2 \\
	RB 		& 6 & 45 & 3 \\
\end{tabular}
%

The problem with this model is that one error will cause problems for the rest of the sentence.

### Hidden markow models

The idea is to model and agent, who generate the senntece by a semi-random process. Our aim is to compute the seequence of hidden states with the highest probability. 

Formal definition:

- A set £Q = \{q_0, q_1, ..., q_T\}£ of _states_ with £q_0£ as the start state. (The non-start staes correspond to parts-of-speech).
- A _transtion probability matrix_ £A = (a_{ij} \mid 0 \leq i \leq T, 1 \leq j \leq T)£ where £a_ij£ is the probability of jumping from £q_i£ to £q_j£. For each £i£ we require £\sum_{j=1}^T{a_{ij}} = 1£.
- For each non-start state £q_i£ and word type £w£, an _emission probability_ £b_i(w)£ of outputting £w£ upon entry into £q_i£. (Ideally for each £i£, £\sum_w b_i(w) = 1£). 
- Assume were given an _observed sequence_ £w_1, w_2, ... w_n£ of word token genered by the HMM.

For example the sentence `Edinburgh has a very rich history.` has the following probability for one particular sequence of tags:

%
\begin{align*}
p(NNP, <s>) \times p(Edinburgh \mid NNP) \times \\
p(VBZ, NNP) \times p(has \mid VBZ) \times \\
p(DT, VBZ) \times p(a \mid DT) \times \\
p(RB, DT) \times p(very \mid RB) \times \\
p(JJ, RB) \times p(rich \mid JJ) \times \\
p(NN, JJ) \times p(history \mid NN)
\end{align*}
%

#### The virterbi algorithum

The example was just 1 possible way of tagging the sentence, for a set of tags £V£ and a sentence length £n£, we would need to check £|V|^n£ possible taggings.

The virterbi algorithum gives us a way of reducing the exponential problem using dynamic programming.

1. Create a table £Table(POS, i)£ where £POS£ ranges over the tags and £i£ ranges of the indices in the sentence.
2. For all £T£ and £i£ %
$$
Table(T, i + 1) \leftarrow maxTable(T', i) \times p(T \mid T') \times p(w_i+1 \mid T)
$$
$$
Table(T, 1) \leftarrow p (T \mid <s>)
$$
%

Essentially we find the probability of ending on the first word, then we can use this to define the probability of the second words (for each tag), and so on.

#### Example

Given the sentence `deal talks fail` and the possible tags £V£ (verb) and £N£ (noun), find the highest probable sequence of tags, given the following transition matrix:

%
\begin{tabular}{r|l|l}
  & to N & to V \\ \hline
from start & 0.8 & 0.2 \\
from N & 0.4 & 0.6 \\
from V & 0.8 & 0.2 
\end{tabular}
%

and emission matrix:
%
\begin{tabular}{r|l|l|l}
  & deal & fail & talks \\ \hline
N & 0.2 & 0.05 & 0.2 \\
V & 0.3 & 0.3 & 0.3 \\
\end{tabular}
%

We get the following table:

%
\begin{tabular}{r|l|l|l}
  & deal & talks & fail \\ \hline
N & 0.16 & 0.0128 & 0.01152 \\
V & 0.06 & 0.0288 & 0.002304 \\
\end{tabular}
%

The max of the last column is `fail/N`, `fail/N` came from `talks/V` which came from `deal/N`. Thus the highest probable sequence is `deal/N talks/V fail/N`.

## Parsing natrual language

Constiuents
:	Groups of words which stand on their own.

For example,`Kim [read a book], [gave it to Sandy], and [left].`

### Head and Phrases

The head of the phrase is the most important word in the pharse, for example `read` in `read a book`.

Their are diffrent types of phrase:
- Noun phrase
- Adjective phrase
- Propositional phrase
- ...

Diffrent languages have _heads_ in diffrent places, for example Japanese is _head-final_ and Irish is _head-intial_.

### Desirable properies of a grammer

- A _finitite_ specification of strings of the language (rather than a list of sentences).
- Sould be _reavealing_, in allowing strings to be associated with meaning (semantics) in a systematic way.

- CFG's provide a good approximation
- Some NL features require context sensative

### Grammer for english

Grammer rules

```
S  -> NP VP
NP -> Det N
NP -> Det N PP
NP -> Pro
VP -> V NP PP
VP -> V NP
VP -> V
PP -> Prep NP
```

Lexical rues

```
Det -> a  | the | her
N -> man | park | duck | telescope
Pro -> you
V -> saw
Prep -> 
```

### Structual ambiguity

### Parsing algorithums

- __Recursive desent__ (top-down). Simple, but innefficent.
- __Shift-reduce__ (bottom up).
- __Cocke-Younger-Kasami algorithm__ (bottom up). Works for
any CFG with reasonable efficiency.
- __Earley algorithm__ (top down). Chart parsing enhanced
with prediction.

### Recursive desent

### Shift-reduce

### CYK algorithm

By restructuring grammer to remove left-recursion we may make it less _revealing_. For example:

- John’s sister
- John’s mother’s sister
- John’s mother’s uncle’s sister
- John’s mother’s uncle’s sister’s niece

#### Number of parse trees

Let £C(n)£ be the number of binary trees over a sentence of length £n£. The root of this tree has two subtrees: one over £k£ words £(1 \leq k < n)£ and one over £n - k£. Hence for all £k£ we can combine any subtree over £k£ words with any subtree over £n - k£ words.

%
$$
C(n) = \sum_{k=1}^{n-1}{C(k) \times C(n-k)}
C(n) = \frac{(2n)!}{(n+1)!n!}
$$
%

#### Algorithum

General algorithum:

```
function CKY-Parse(words, grammar) returns table for
	# Loop over the columns
	j ← from 1 to Length(words) do
		# Fill the bottom cell
		table[j − 1, j] ← {A | A → words[j] ∈ grammar}
		# Fill cells i, j
		for i ← from j − 2 downto 0 do
			for k ← i + 1 to j − 1 do
				# Check the grammer for rules that link [i, k] with [k, j]. 
				# For every rule store it in [i, j].
				table[i, j] ← table[i, j] ∪ 
					{A | A → BC ∈ grammar, B ∈ table[i, k], C ∈ table[k, j]}
```

#### Succint representation of CKY

If we have a boolean £Chart£ such that £Chart[A, i, j]£ is true if their is a subphrase that domminates i through j words.

%
$$
Chart[A, i, j] = \bigvee^{j-1}_{k=i+1} \bigvee_{A \rightarrow B C} Chart[B, i, k] \land Chart[C, k, j]
$$
%

Seed for £i + 1 = j£.

£Chart[A, i, j]£ is true if their is a rule £A \rightarrow w_{i+1}£ where £w_{i+1}£ is the £i+1£ word in the string.

#### Disadvantages

- __Grammers not in CNF__: The CYK algorithum can work with non CNF grammers by splitting spans into all possible subspans of the RHS. The problem with this is that complexity goes up steeply, £O(n^{k+1})£ where £k£ is the maxumum length of the RHS.
- __Unnessisary constinuents__: For the language of £(b|c)a*£ with grammer rules £X \rightarrow a£ and £Y \rightarrow a£, if we parse strings such as `caaaaa` we generate both £X£ and £Y£ constituents, however at the end only one of them is needed

### Earley Parsing

The key idea is as well as _completed productions_ (ones whose entire RHS have been recognized), we also record _incomplete productions_ (ones for which there may so far be only partial evidence).

The table entries are represented as _dotted-rules_

- £S \rightarrow \cdot VP£ [0, 0] - A £VP£ is _predicted_ at the start of the sentence
- £NP \rightarrow Det \cdot Nominal£ [1, 2] - An £NP£ is _in progress_ seen £Det£, £Nominal£ expected
- £VP \rightarrow V NP \cdot£ [0, 3] - A £VP£ _has been found_ starting at 0 and ending at 3

#### Basic algorithum

1. Predict all the starts upfrount, working topdown from £S£
2. For each word in the input
	1. Scan in the word
	2. Complete or extend exsisting states based on matches
	3. Add new predictions
3. When out of words, look at the chart for a parse

#### Prediction
#### Scanner
#### Completer

#### Example 

%
\begin{tabular}{r|l|c|l}
State & rule & start/end & reason \\ \hline
S1 & $S \rightarrow \cdot NP VP$ & [0, 0] & Pridictor \\
S2 & $S \rightarrow \cdot Aux NP VP$ & [0, 0] & Pridictor \\
S3 & $S \rightarrow \cdot VP$ & [0, 0] & Pridictor \\
\end{tabular}
%

## Probablistic Context-Free Grammers

Why use probabilities in grammars:

- __Syntatic disambiguation__. Ambigiuity is unavoidable in natural language.
- __Coverage__. Handle production that we havent seen before.
- __Representativeness__. Handle diffrent types of texts.

CYK and Earley algorithum returns all possible parses of a sentence however some of those parses may not make sence. By introducing probability we can discard the unlikey parses in order to find the best parse.

### Formal definition

A PCFG £\langle N, \Sigma, R, S \rangle£ is defined as follows:

- £N£ is the set of non-terminal symbols
- £\Sigma£ is the terminals (disjoint from £N£)
- £R£ is a set of rules of the form £A \rightarrow \beta [p]£  where £A \in N£ and £\beta \in (\sigma \cup N)*£ and £p£ is a number between 0 and 1.
- £S£ a start symbol £S \in N£

A PCFG is a CFG with a probability £[p]£ attached to it.

### Disambiguation

A PCFG assigns a probability to every parse tree, this is the product of all the rules that build it.

%
$$
P(T, S) = \prod_{i=1}^n {P(A_i \rightarrow \beta_i)}
$$
%

To find the most likey derivation we do the folllowing

%
$$
\max_T P(T, S) = \max_T \frac{P(T, S)}{P(S)} = \max_T P(T, S)
$$
%

Since £P(S)£ is positive and does not depend on £T£ we can ignore it.

### Probabilistic CYK

Instead of a 2d table with a list of non-terminals that span £i£ through £j£, we have a 3d table (with the 3rd dimension being the non-terminals) where each cell represents the probability of a non-terminal spanning £i£ through £j£.

Call £Chart[A, i, j]£ the probability of the highest-probability derivation of £w_{i+1}, ..., w_j£ from £A£.

%
\begin{align*}
Chart[A, i, i+i] &= p(A \rightarrow w_{i+1}) \\
Chart[A, i, j] &= \max_{k : i < k < j} \max_{B, C : A \rightarrow B C \in G} \\
& \; \; Chart[B, i, k] \times Chart[C, k, j] \times p(A \rightarrow B C)
\end{align*}
%

For each child we pick the best children mulitplied by the probabiltity to generate those children.

#### Example

%
\begin{tabular}{lrlrlrlr}
S $\rightarrow$ NP VP & 1.0 & NP $\rightarrow$ NP N & 0.2 & N $\rightarrow$ orange & 0.3 & A $\rightarrow$ orange 1.0 \\ 
NP $\rightarrow$ N & 0.6 & VP $\rightarrow$ V & 0.8 & N $\rightarrow$ tree & 0.5 & V $\rightarrow$ blossoms 1.0 \\
NP $\rightarrow$ A NP & 0.2 & VP $\rightarrow$ V Adv & 0.2 & N $\rightarrow$ blossoms & 0.2 & Adv $\rightarrow$ early 1.0
\end{tabular}
%

%
\begin{tabular}{l|l|l|l|l}
		   & 1 orange & 2 tree & 3 blossoms & 4 early \\ \hline
0 orange   & \shortstack{N 0.3 \\ A 1.0 \\ NP 0.18} & \shortstack{NP 0.06} & \\ \hline
1 tree     & & \shortstack{N 0.5 \\ NP 0.3} & \shortstack{NP 0.012 \\ S 0.24} & \\ \hline
2 blossoms & & & \shortstack{N 0.2 \\ NP 0.12 \\ V 1.0 \\ VP 0.8} & \shortstack{VP 0.2} \\ \hline
3 early    & & & & \shortstack{Adv 1.0} \\
\end{tabular}
%