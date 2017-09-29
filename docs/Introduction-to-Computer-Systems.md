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