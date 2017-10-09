## Use Cases

Use case
:   A task involving the system which has value for one or more stakeholders.

Actors
:   A stakeholder who takes an active part in the use case.

Primary Actor
:   Stakeholder with primary intrest in use case (usually the one triggering the use case).

Supporting actors
:   Actors also envolved

Some stakeholders may not be participating in a use case (so neither primary or supporting actors).

Actors can be:

- Users of a system
- An external system, which interacts with the system

Usually a use case is a sequence of steps, however they may other paths, they may succeed, fail, or succeed in an alternate way.

### Example

Main success scenario
```
1. Customer selects item
2. Customer checks out
3. ...
4. Email confirmation
```

Extensions - variations of the main success scenario

```
6a. Credit card auth fails
    .1 Re-enter details
```

### Use case templates

- __Goal:__ What the primary actor wishes to acheive
- __Summary:__ Description of use case
- Stakeholders and each’s Interest in the use case
- Primary actor
- Supporting actors
- __Trigger:__ The event that leads to this use case being performed.
- __Pre-conditions/Assumptions:__ What can be assumed to be true when the use case starts
- __Guarantees:__ What the use case ensures at its end
    - Success guarantees
    - Failure guarantees
    - Minimal guarantees
- Main Success Scenario
- Alternative scenarios

A use case can:
- Diffrent levels of detail
    - Depending on part of development process
- May refer to other use cases
- Descripe diffrent scopes

### Requirements capture

1. Identify actors
2. For each actor
    - What do they need
    - Any other expected interactions
    - Which use cases have priority
    
Use cases are often functional requirements, with non-functional requirements attached. Other times. Non-functional requirements apply to subsets or all of use-cases.

### Other uses

- Drive design
- Design validation
    - Does the design work
- Testing
    - Good source for system tests
    
### Problems

- May be to much detail (constraining design)
- Supporting actors may not be strictly necessary i.e. librarian may not be involved in borrowing a book (in a modern library)
- Less attension to architecture and static object structure.
- May miss requirements not associated with actors.

## Design

Design
:   How softawre will meet the requirements

Outputs of design:

- Models
    - UML / SImulink
    - Often graphical
    - Can be executable
- Written documents
    - Record reasons for decisions (
    - trace back when problem occors to relevent stakeholder

Criteria:

- The design can meet the requirements
- Is it maintainable?
- Can it be explained to implementors
- Fits constraints of exsisting technology (legacy components)
- Makes future design choices easy

High level (architectural) design
:   How subsytems are split up

Low level (detailed) design
:   How subsystems are composed

At each level:

- What are the responsibilities of each component?
- what are the interfaces?
- What are the messages exchanged (what protocols)?

Architecture
:   The way that components work together.

- What are the components
    - Where shall we put the encapsulation barriers?
    - Which decisions do we want to hide inside components (so they can be changed without effecting the rest of the system)?
    
- What are the connectors?
    - How/what do the components need to communicate?
    - What should be the interfaces?
    - What protocols should be used?
    
### More architecutral decisions:
- What language and/or component standard is going to be used?
- Is their an appropriate exising framework?
- What conventions for error handling?
    - backups
    - resiliance
    - fail gracefully
    
## Detailed design

- Architecture has be designed
- Each person/team is in charge of designing one subsystem
- What external interfaces must it work with?
- What classes and behaviour are needed?
- Coordination with system architect to change interface if required.

### Principles

Cohesion
:   A mesure of the strenth o fthe realationship between the pieces of functionality within the component. High cohesion has increased understandability, maintainability and reliability.

Coupling
:   A mesure of the strength of the inter-connection between components. Loose coupling increases understandability and maintainablilty.

Abstraction
:   A view of some entity that focuses on the infomation relevent to a particular purpose.

Encapsulation
:   Grouping and packaging the elements and internal details of an abstraction and making those details inaccessible.

Seperation of interface/implementation
:   Specifing a public interface, known to the clients, separate from the details of how the component is realized.

Decomposition
:   Divinding large systems into smaller components with distinct responsibilitys.

## Modeling

Model
:   A precise represntation of some of the information needed to solve a problem using a computer.

A UML model
- represented by set of diagrams
- structured represnetation too (XML)
- must obey rules of UML standard
- (fairly) precise meaning
- Used informally (talking around whiteboard)

### Big design up front

- Often unavoidable
- If done right, simplifys developent
- Error prone (changing requirements)
- Wastefull (mistakes in requirements)

XP maxinms:

- You aint going to need it
- Do the simplest thing that could possibly work

## Dynamic aspects of design

Their are two types of behaviour within OO systems

Inter-object bhaviour
:   Who sends whcih messages to whom?

Intra-object behaviour
:   What state changes does each object undergo as it revieves messages? How does this effect its behaviour?

### Inter-object behaviour

- Classes should correspond to domain consepts
- Data encapsulated should match real world model
- Work out what operations are needed for the usecases

It may not be obvious when several objects that have to collaborate. CRC cards can help.

### Interaction diagrams

Describes dynamic interactions, good for showing how the system realized a use case. UML has two diagrams, sequence and communication diagrams.

1. Decide exactly what behaviour to model
2. Name the objects which are involved
3. Identify the sequence of messages which objects sends
4. Record this in the syntax of an interaction diagram

### Good interaction diagrams

Conceptual coherence
:   Does it make sence for thus class to have that operation

Maintainability
:   Which aspects might change, how hard woull it be to change the itnterataction

Performance
:   Is all the work being done neccessary