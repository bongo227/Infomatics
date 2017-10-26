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
