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

### Arithmatica and Logical Operations

- `add a, b, c` $a = b + c$
- `sub a, b, c` $a = b - c$
- `sll a, b, c` $a = b << c$
- `srl a, b, c` $a = b >> c (logical)$
- `sra a, b, c` $a = b >> c (arithmatic)$

### Register

Register
:   Storage locations inside the processor that holds program variables and control state

### MIPS instruction

Each assemby instruction translates into 1 machine instruction as shown bellow:

|| Main opcode | 1<sup>st</sup> operand | 2<sup>nd</sup> operand | result | shift | sub-function opcode |
| --- | --- | --- | --- | --- | --- | --- |
|  | op | rs | rt | rd | shamt | func |
| `add $s1, $s2, $s3` | 0 | 18 | 19 | 17 | 0 | $32_{10}$ | 
| `sub $t0, $s2, $t1` | 0 | 18 | 9 | 8 | 0 | $34_{10}$ | 
