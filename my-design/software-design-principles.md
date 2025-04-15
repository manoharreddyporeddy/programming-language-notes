# software design
#   principles

# SOLID is a mnemonic acronym for
#   five design principles intended to make
#       software designs more
#           understandable,
#           flexible and
#           maintainable

# SOLID
	* Single responsibility principle
		a class should have only a single responsibility
			(i.e. changes to   only one part of the software's specification   should be able to   affect the specification of the class)
			only one part of the software's specification -> specification of the class
			1 software's specification/ functionality => 1 class/module - only one reason to change
			1 concern => 1 class/module
			more robust
			report compilation (creation), report printing (on paper)

	* Open/closed principle
		software entities
			should be
				open for extension
				but closed for modification.

	* Liskov substitution principle
		objects in a program
			should be replaceable with
				instances of their subtypes
				without altering
					the correctness of that program.

		if base class implements some behaviour, it should be valid for derived class too. Otherwise, move the behavior down to derived class.

	* Interface segregation principle
			many
				client-specific interfaces
					are better than
						one general-purpose interface.
	
	* Dependency inversion principle
	
			one should
				"depend upon abstractions,
					[not] concretions."




# KISS
    Keep it simple stupid
        most systems
            work best
                if they are kept
                    simple
                    rather than
                        made complicated;
        therefore
            simplicity
                should be a key goal
                in design,
                and that
                    unnecessary complexity
                    should be
                        avoided

# YAGNI
    You aren't gonna need it
    You ain't gonna need it
    You aren't going to need it

    a principle of extreme programming (XP) states
        a programmer
            should not add functionality
            until deemed necessary.

    XP co-founder Ron Jeffries has written:
        "Always implement things
            when you actually need them,
            never when
                you just foresee that
                    you need them."

# DRY
    Don't repeat yourself
    principle of software development
        aimed at
            reducing repetition of software patterns,
                replacing it with abstractions, or
            repetition of the same data,
                using data normalization to avoid redundancy.
    Every piece of knowledge
        must have
            a single, unambiguous, authoritative representation
                within a system

    Violations of DRY are typically referred to as WET solutions, which is commonly taken to stand for either "write everything twice", "we enjoy typing" or "waste everyone's time".
    WET solutions are common in multi-tiered architectures where a developer may be tasked with, for example, adding a comment field on a form in a web application.
        The text string "comment" might be repeated in the label, the HTML tag, in a read function name, a private variable, database DDL, queries, and so on.
        A DRY approach eliminates that redundancy by leveraging frameworks that reduce or eliminate all those edit tasks excepting the most important one,
            leaving the extensibility of adding new knowledge variables in one place.

# GRASP
    General responsibility assignment software patterns (or principles),
        abbreviated GRASP,
        consist of guidelines for
            assigning responsibility
            to classes and objects
                in object-oriented design.
    The different patterns and principles used in GRASP are
        controller,
        creator,
        indirection,
        information expert,
        high cohesion,
        low coupling,
        polymorphism,
        protected variations, and
        pure fabrication
    TBD
        https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)

# Package principles
    https://en.wikipedia.org/wiki/Package_principles



