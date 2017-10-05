## Floating point

Mantissa/significand
:   Fractional part

Exponent
:   Power of $2$

> Convert $25_{10}$ in floating point form
>
> $25_{10} = 011001_2$
>
> $1.1001 \times 2^4$

### Why normalize?
1. Simplifiys machine representation
2. Simplifys comparisons e.g. $0.00000101$ vs $0.000001$
3. More compact for small/large numbers

### IEEE 654 Floating Point Standard

- 1'st bit is sign bit ($s$)
- 8 bits for exponent ($exp$)
- rest for mantissa ($m$)

Encoding:
$s \times m \times 2 ^ {exp - 127}$

(127 is the __bias__)

$0.75_{10} = 0.11_2 = {(1.1 \times 2^{-1})}_2$

### Why bias?

- Exponent can always be positive (no need to store sign bit)
- Simplifys comparison operations

### Special values

| Exponenent | Mantisa | Number |
| --- | --- | --- |
| 0 | 0 | 0 |
| 1-254 | Anything | Floating point number |
| 255 | 0 | Infinity (signed) |
| 255 | non-zero | NaN (not a number) |

## MIPS

ISA
:   Instruction set architecture - The interface between the hardware and the software

MIPS
:   A real world ISA used by many diffrent processors since the 80s

### Instruction set

Assemble Language
:   Symbolic representation of machine instructions.

Machine code are instructions stored as binary values, assembly language is a one-to-one mapping that allow human programmers to reason about programs.

High level:
```
a[0] = b[0] + 10
```

MIPS:
```
lw r4, 0(r2)    # Load word - Get the value fo b[0] from memory and store in r4
add r5,r4,10    # Add - Compute b[0]+10 and store in r5
sw r5,0(r1)     # Save word - Store r5 into a[0]
```

MIPS does not allow accessing and operating on data at the same time

### Arithmatic and Logical Operations

- `add a, b, c` £a = b + c£
- `sub a, b, c` £a = b - c£
- `sll a, b, c` £a = b << c£
- `srl a, b, c` £a = b >> c£ (logical)
- `sra a, b, c` £a = b >> c£ (arithmatic)

### Registers

Register
:   Storage locations inside the processor that holds program variables and control state

- Some registers are special purpose
    - Register `$zero` is always zero for example
    - `$pc` is the program counter, the adress of the next instruction
    - `$ra` stores the return adress to return to after executing a method
- Most are for general use
    - `$s0-$s7` are variables
    - `$t0-$t9` are tempory variables

### Endinness

Endinness
:   The sequential order in which bytes are arranged in memory

Big-endian
:   Bytes orders by most significant bit

Little-endian
:   Bytes ordered by least significant bit

### MIPS instruction format

Each assembly instruction translates into 1 machine instruction. Their are 3 formts of instructions

- R-format (e.g. `add`, `sub`, `and`, `or` ...) %
\begin{tabular}{|c|c|c|c|c|c|}
\hline
op & rs & rt & rd & shamt & func \\ \hline
6 & 5 & 5 & 5 & 5 & 6 \\ \hline
\end{tabular}
%

- I-format (e.g. `addi`, `lw`, `sw`, ...) %
\begin{tabular}{|c|c|c|c|}
\hline
op & rs & rt & immediate \\ \hline
6 & 5 & 5 & 16 \\ \hline
\end{tabular}
%

- J-format (`j`) %
\begin{tabular}{|c|c|}
\hline
op & target \\ \hline
6 & 26 \\ \hline
\end{tabular}
%

### MIPS examples

#### Swap

This function swaps two consecutive array elements 
```mips
# Compute the adress of the array
sll $t0, $a1 2      # reg $t0 = idx * 4
add $t0, $a0, $t0   # reg $t0 = v + (idx * 4)
                    # $t0 holds the address of array[idx]

# Load the two values to be swapped
lw $t1, 0($t0)      # reg $t0 = array[idx]
lw $t1, 4($t0)      # reg $t0 = array[idx + 1]

# Store the swapped values back in memory
sw $t2, 0($t0)      # array[idx] = $t2
sw $t1, 4($t0)      # array[idx+1] = $t0
```

#### If

```mips
beq $s1,$s2,label2      # if(s1 == s2) jump to label2
stmnt1                  # else
j label3 # skip stmnt2  # continue from label3
label2: stmnt2          # body of if
label3: stmnt3          # continue from if
```

#### Loop

```mips
loop:
    beq $s1,$zero,end               # $s1 holds count
    ...                             # Body of loop                           
    j loop                          # Jump back to start
end:
    ...
```

### Method calls

To jump into a method use `jal label` (jump and link) which:

1. Sets `$ra` to `$pc + 4` (the next instruction)
2. Sets `$pc` to the adress of the label

When returning user `jr $ra` (jump register) which:

1. Sets `$pc` to the value of `$ra`, the adress we want to return to

#### Convention

It is convention to use registers in a certain way

- `$a0` - `$a4` as method parameters
- `$r1` and `$r2` as return values
- `$s0` - `$s7` are preserved across call boundrys
- `$t0` - `$t9` are _not_ preserved across call boundrys

#### Nested calls

If we have a nested call, we can store the return adress onto the stack allowing us to nest "infinitly" (or until the machine runs out of stack space)

To push a word:

1. Move the stack pointer down with `addi $sp, $sp, -4`
2. Save the return adress onto the stack `sw $ra 0($sp)`

To pop a word:

1. Fetch return adress from the stack `lw $ra, 0($sp)`
2. Move stack pointer up with `addi $sp, $sp 4`

The stack is also used to:

- Save `$s` registers
- Pass and return values if their isnt enough registers
- Local variables inside a function (that dont fit into registers)