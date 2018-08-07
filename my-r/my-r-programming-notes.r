# R v3.2.1 - older version
# R v3.2.2 - current version
#
# R is world’s most widely used statistics programming language.
# It's the # 1 choice of data scientists and
#     supported by a vibrant and talented community of contributors.
# R is taught in universities and deployed in mission critical business applications.
#
# R is a
#     programming language and
#     software environment
#         for
#           statistical analysis,
#           graphics representation and
#           reporting.

# initially written by
#     Ross Ihaka and
#     Robert Gentleman
#         at the Department of Statistics of
#               the University of Auckland in
#               Auckland, New Zealand.
#
# R made its first appearance in 1993.
#     A large group of individuals has contributed to R by sending code and bug reports.
#     Since mid-1997 there has been a core group (the "R Core Team") who can modify the R source code archive.
#
# R is freely available
#     under the GNU General Public License, and
#       pre-compiled binary versions are provided for various operating systems like
#           Linux,
#           Windows and
#           Mac.
#
#
# important features of R
#   R is a well-developed, simple and effective programming language which includes
#       conditionals, loops, user defined recursive functions and input and output facilities.
#   R has an effective data handling and storage facility,
#   R provides a suite of operators for calculations on arrays, lists, vectors and matrices.
#   R provides a large, coherent and integrated collection of tools for data analysis.
#   R provides graphical facilities for data analysis and display either directly at the computer or printing at the papers.
#
#
# core of R is an interpreted computer language
#     interpreted code is translated to machine instructions, step-by-step, while the program is being executed
#     compiled code is translated to machine instructions, before program execution
#         compiled code can be executed directly by the computer's CPU
#         executable code is specified in the CPU's "native" language (assembly language)
#         interpreted code is be translated, by interpreter, at run-time, from any format to CPU machine instructions.
#
# in general, interpreted computer languages are slower than compiled computer programming language
#     however C# and Java are not so, at times, they are as fast as compiled programming language
#
#
# R allows branching and looping
# also, modular programming using functions.
# allows integration with the
#     procedures written in the
#         C
#         C++
#         .Net
#         Python or
#         FORTRAN languages
#             for efficiency.
#
# Download
#     For Windows it's here: https://cran.r-project.org/bin/windows/base/
#     For Linux it's here:   https://cran.r-project.org/bin/linux/
#
# For Windows
# Install
#     double/single click and install, accept defaults and click on Next for all screens
#     After installation the exe file will be at:
#         C:\Program Files\R\R-3.4.3\bin\i386\Rgui.exe
# Run
#   From start menu, you can launch the icon named:
#     R x64 3.4.3
#       OR
#     R x86 3.4.3
#
# R-GUI will open, and has R console to do R Programming.
#
# For Linux
# Install
#   Excecute below command:
#     yum install R
# Run
#     R
#
# programming
#
print("Hello World")
# [1] "Hello World"
#
print(23.9 + 11.6)
# [1] 35.5
#
# For 3D charts, use install command, with package as "plotrix", as below:
install.packages("plotrix")
#
# Example output:
#		--- Please select a CRAN mirror for use in this session ---
#		trying URL 'https://cloud.r-project.org/bin/windows/contrib/3.4/plotrix_3.7.zip'
#		Content type 'application/zip' length 697147 bytes (680 KB)
#		downloaded 680 KB
#		
#		package ‘plotrix’ successfully unpacked and MD5 sums checked
#		
#		The downloaded binary packages are in
#		        C:\Users\PORMA09\AppData\Local\Temp\Rtmp6ZSFx1\downloaded_packages
#
#		
# you can program either
#	at R command prompt or
#	write an R script file
#
#
# -----------------
# R Command Prompt
# -----------------
# Typing R (opening R i386 3.4.3 in Windows from Start menu)
# 	will launch R interpreter and you will get a prompt >
#
# Type following statements:
#
myString <- "Hello, World!"
print ( myString)
#
# You will see the following output:
# [1] "Hello, World!"
#
# Details:
# 1. defines a string variable myString, assigns "Hello, World!"
# 2. prints the value in myString
#
#
# -----------------
# R Script File
# -----------------
# writing your programs in script file
# then you execute those scripts, at your command prompt, with the help of R interpreter called Rscript
#
# Copy paste below, in file, "myNotes.R"
myString <- "Hello, World!"
print ( myString)
#
# -----------------------------
# From now on all code is in 
# Execute following command
#
#     RScript myNotes.R
#
# NOTE:
#   if you get 'RScript' is not recognized as an internal or external command, operable program or batch file.
# then you need append path of RScript in PATH of Windows Environment variables, by following below:
#
# Start menu Control Panel\System and Security\System > Advanced system settings >
#   > Advanced > Environment Variables > User Variables > PATH > Edit
#	Append below to existing PATH
#		;C:\Program Files\R\R-3.4.3\bin\i386
#
# https://www.google.co.in/search?q=my-r-programming-notes&oq=my-r-programming-notes&aqs=chrome..69i57j69i60.241j0j7&sourceid=chrome&ie=UTF-8
# -----------------------------
#
#  For further notes, 
#    goto:
#      myNotes.R
#
# 
# =============
# https://www.datacamp.com/community/tutorials/r-or-python-for-data-analysis
# https://www.kdnuggets.com/2015/05/r-vs-python-data-science.html
# 
# https://stackoverflow.com/questions/2470248/write-lines-of-text-to-a-file-in-r
# https://stackoverflow.com/questions/2470248/write-lines-of-text-to-a-file-in-r/2470277#2470277
# https://en.wikibooks.org/wiki/R_Programming/Mathematics
# https://www.tutorialspoint.com/r/index.htm
# 
# =============
# R
# 
# You can search through all R packages at Rdocumentation.
# 	https://www.rdocumentation.org/
# http://cran.r-project.org/
# 	There is also CRAN, a huge repository of curated R packages to which users can easily contribute.
# 
# 
# When getting started with R, a good first step is to install the amazing RStudio IDE.
# Once this is done, we recommend you to have a look at the following popular packages:
# 
# 	dplyr, plyr and data.table to easily manipulate packages,
# 	stringr to manipulate strings,
# 	zoo to work with regular and irregular time series,
# 	ggvis, lattice, and ggplot2 to visualize data, and
# 	caret for machine learning
# 
# 
# 
# R: Pros and Cons
# 
# Pro: A picture says more than a thousands words
# Visualized data can often be understood more efficiently and effectively than the raw numbers alone. R and visualization are a perfect match. Some must-see visualization packages are ggplot2, ggvis, googleVis and rCharts.
# 
# Pro: R ecosystem
# R has a rich ecosystem of cutting-edge packages and active community. Packages are available at CRAN, BioConductor and Github. You can search through all R packages at Rdocumentation.
# 
# Pro: R lingua franca of data science
# R is developed by statisticians for statisticians. They can communicate ideas and concepts through R code and packages, you don’t necessarily need a computer science background to get started.  Furthermore, it is increasingly adopted outside of academia.
# 
# Pro/Con: R is slow
# R was developed to make the life of statisticians easier, not the life of your computer. Although R can be experienced as slow due to poorly written code, there are multiple packages to improve R’s performance: pqR, renjin and FastR, Riposte and many more.
# 
# Con: R has a steep learning curve
# R’s learning curve is non-trivial, especially if you come from a GUI for your statistical analysis. Even finding packages can be time consuming if you’re not familiar with it.
# 
# Python: Pros and Cons
# 
# Pro: IPython Notebook
# The IPython Notebook makes it easier to work with Python and data. You can easily share notebooks with colleagues, without having them to install anything.  This drastically reduces the overhead of organizing code, output and notes files. This will allow you to spend more time doing real work.
# 
# Pro: A general purpose language
# Python is a general purpose language that is easy and intuitive. This gives it a relatively flat learning curve, and it increases the speed at which you can write a program. In short,  you need less time to code and you have more time to play around with it!
# 
# Furthermore, the Python testing framework is a built-in, low-barrier-to-entry testing framework that encourages good test coverage. This guarantees your code is reusable and dependable.
# 
# Pro: A multi purpose language
# Python brings people with different backgrounds together. As a common, easy to understand language that is known by programmers and that can easily be learnt by statisticians, you can build a single tool that integrates with every part of your workflow.
# 
# Pro/Con: Visualizations
# Visualizations are an important criteria when choosing data analysis software. Although Python has some nice visualization libraries, such as Seaborn, Bokeh and Pygal, there are maybe too many options to choose from. Moreover, compared to R, visualizations are usually more convoluted, and the results are not always so pleasing to the eye.
# 
# Con: Python is a challenger
# Python is a challenger to R. It does not offer an alternative to the hundreds of essential R packages.  Although it’s catching up, it’s still unclear if this will make people give up R?
# 
# 
# =====
# python
# 
# 	While the infancy of Python packages for data analysis was an issue in the past, this has improved significantly over the years. Make sure to install NumPy /SciPy (scientific computing) and pandas (data manipulation) to make Python usable for data analysis.  Also have a look at matplotlib to make graphics, and scikit-learn for machine learning.
# 
# 	Unlike R, Python has no clear “winning” IDE. We recommend you to have a look at Spyder, IPython Notebook and Rodeo to see which one best fits your needs.
# 
# 	Similar to R, Python has packages as well. PyPi is the Python Package index and consists of libraries to which users can contribute. Just like R, Python has a great community but it is a bit more scattered
# =====
# 	
#
# ======================================================================================================
# ======================================================================================================
# ======================================================================================================
# ======================================================================================================

# This is Single line comment, that wont execute

# This is R Script File

# This can be executed using below command:

# 	RScript my-notes.R

# 		Learning from: https://www.tutorialspoint.com/r/r_basic_syntax.htm

# assign some value to myString
myString <- "Hello world"

# print myString value
print (myString)

"May be print is not required to print"

"May be print is not required
	to print
	in multi-lines
"

# Trick for, Multi line comment (includes if FALSE and a string)
if(FALSE) {
	"
	  This is a trick for multi-line comments
		it should be put inside
			either a single OR double quote.
			Must be enclosed in the if FALSE block (from open bracket to close bracket)
	"
}

if(FALSE) {
	'
	Data Types
		character
		wide character
		integer
		       floating point
		double floating point
		Boolean
		
	R-Objects
		Vectors
		Lists
		Matrices
		Arrays
		Factors
		Data Frames
	
	The variables are assigned with R-Objects and
		the data type of the R-object
			becomes
				the data type of the variable

	atomic vectors
		six classes of vectors
			six data types of these atomic vectors
			other R-Objects are built upon the atomic vectors			
			
			
	Data Type	Example
	===========================
	logical			TRUE, FALSE	
	Integer			2L, 34L, 0L	
	Numeric			12.3, 5, 999	
	Complex			3 + 2i	
	Character		\'a\' , "good", "TRUE", \'23.4\'	
	Raw	"Hello"		48 65 6c 6c 6f	
	
	NOTE: number of classes is not confined to only the above six types
	
	'
}print ('====================================================')
print ('============ SINGLE ELEMENT EXAMPLES ===============')
print ('====================================================')

print ('============ L ===============')
v <- TRUE 
print (v)
print (class(v))
# [1] TRUE
# [1] "logical"

print ('============== N =============')
v <- 23.5
print (v)
print(class(v))
# [1] 23.5
# [1] "numeric"

print ('============== I =============')
v <- 2L
print (v)
print(class(v))
# [1] 2
# [1] "integer"

print ('============= C ==============')
v <- 2+5i
print (v)
print(class(v))
# [1] 2+5i
# [1] "complex"

print ('============== CH =============')
v <- "name1"
print (v)
print(class(v))
# [1] "name1"
# [1] "character"

print ('============== R =============')

v <- charToRaw("ABC .. XYZ")
print (v)
print(class(v))
# [1] 41 42 43 20 2e 2e 20 58 59 5a
# [1] "raw"

v <- charToRaw("abc .. 	xzy")
print (v)
print(class(v))
# [1] 61 62 63 20 2e 2e 20 78 7a 79
# [1] "raw"print ('====================================================')
print ('============ MULTI ELEMENT EXAMPLES ===============')
print ('====================================================')

print ('============== Vectors =============')

# use c() function to combine the elements into a vector

fruits <- c('apple', 'orange', 'grapes', 123.12)
print (fruits)
print (class(fruits))
#  "apple"  "orange" "grapes"
#  "character"print ('============== Lists =============')

# A list is an R-object which can contain
#	many different types of elements inside it like
#		vectors,
#		functions and
#		even another list
#			inside it.

fruits <- list(c('one', 'two', 'three', 12.322))
print (fruits)
print (class(fruits))
# [[1]]
# 	[1] "one"    "two"    "three"  "12.322"
#
# [1] "list"

# # Create a list.
# list1 <- list(c(2,5,3),21.3,sin)
# # Print the list.
# print(list1)

print ('============== Matrices =============')

# Matrices
# A matrix is a two-dimensional rectangular data set.
#
# 2row x 3 columns = 2x3
#  _         _
# |           |
# |   1 2 3   |
# |   4 5 6   |
# |           |
#  _         _
# 

m <- matrix( c(1,2,3,4,5,6), nrow=2, ncol=3, byrow=TRUE )
m = matrix( c(1,2,3,4,5,6), nrow=2, ncol=3, byrow=TRUE )
print (m)
print (class(m))
#
#       [,1] [,2] [,3]
#  [1,]    1    2    3
#  [2,]    4    5    6
#
#  [1] "matrix"

print ('============== Matrices - 2 =============')# 2row x 3 columns = 2x3
#  _         _
# |           |
# |   1 2 3   |
# |   4 5 'a' |
# |           |
#  _         _
# 
#
m <- matrix( c(1,2,3,4,5,'a'), nrow=2, ncol=3, byrow=TRUE )
m = matrix( c(1,2,3,4,5,'a'), nrow=2, ncol=3, byrow=TRUE )
print (m)
print (class(m))
#
#      [,1] [,2] [,3]
# [1,] "1"  "2"  "3"
# [2,] "4"  "5"  "a"
# [1] "matrix"

print ('============== == =============')
# Create a matrix.
# M = matrix( c('1','2','3','4','5','6'), nrow = 2, ncol = 3, byrow = TRUE)
# print(M)
