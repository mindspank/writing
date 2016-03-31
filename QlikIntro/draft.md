# What makes Qlik tick  

## Introduction

The Qlik platform features many powerful features such as responsive and intelligent visualizations, collaboration and storytelling features and robust data and feature access control.  
But underneath it all, or as some would say "our secret sauce", lies what we call the Qlik Engine or QIX for short. The Qlik Engine is the piece that is responsible for the magic, the indexing and association of data as well as the blazingly fast in-memory inferance and calculation engine that powers our visualizations.  
**This is the story of QIX.** 

<!--BREAK-->
## The Associative Experience
Some odd 20 years ago the founders of Qlik had a brilliant but simple idea, to show the logical relationship within a set of data using color coding.  
Today the same idea still holds true, by combining the free form exploration of how data relates to each other with a powerful in-memory computation engine we are able to deliver answers to questions without the need to write complex database queries or be constrained within a set schema.  

### The short version
The QIX engine will ingest data from one or multiple data sources. Index every datapoint and connect the ingested tables based on common keys, in our case field names. As you later click around within the data QIX will automatically figure out the logical relationships within the data and filter it accordingly. The simple idea is that we color code data based on what you have selected or in other words, the state of the data.

* Green - Values you have currently selected
* White - Values that are associated (available) with your selected values
* Grey - Values that are exluded based on your current selections.

It's easy to overlook the Grey but more often than not there are great insights into what's not there. For example, imagine you have a dataset with Doctors, Patients and Prescriptions. You might be interested in how many prescriptions are being described per doctor but what's more interesting might be which aren't. Maybe there is a cheaper and more effective drug on the market? By selecting the cheaper and more effective drug we can see which doctors are prescribing it but more importantly we also see which doctors that aren't and act based on that information.  

**Still sounds like magic?**  
Here is a simple example. Go ahead, try it for yourself.

LISTBOXES  

See, not that hard!


### The Long version
**Link to a video of HIC if we have one**

<!--BREAK-->
## The HyperCube
No, we are not refering to the sequal to the Sci-fi thriller [Cube](http://www.imdb.com/title/tt0123755/).  

In addition to the associative experience we also have what we refer to as virtual, in-memory computational cubes or HyperCubes for short.  
These HyperCubes consists of Dimensions and Expressions (or Columns and Rows in non-data-geek-speak) and will evaluate based on the available data and expand into a data matrix and meta-data.  
The HyperCubes core function is to provide calculations and aggregations on top of the associative data model.

For example, if we have a table of Directors and Movies and we could specify the field Director as the dimension (Column) and write a expression (rows) to count the number of movies for each director.
  
Dimension: Director  
Expression: Count(Movie)  

