#D3js and Qlik Sense  
##A love story  

Data visualization has exploded in popularity in the last years and we can't go a single day without being exposed to it in some form. Not only in our proffesional life but also in our personal life do we encounter forms of data analysis, from the newspapers we read to the apps we use on our phones.  

Partially it's because we generate more data then ever before but we have also closed the gap in technology, it has never been this easy to create stunning graphics and exploring data. D3js has contributed a lot to the field of data visualization over the last years and has become pretty close to a de facto standard when it comes to data viualization for the web. You have probably seen a lot of pieces that have been created with D3js without knowing it. The New York Times and the Washington Post has been instrumental in promoting data driven journalism and tools such as Qlik and Power BI has all extended their products to make use of it.

##D3js - not a charting tool  
The great popularity of D3 is most likely because of the enourmous amount of examples that are available for it, most of them around data visualization. However D3 is not a charting library per se, it has no concept of a line or bar chart. The secret behind D3 lies in it's name, Data Driven Documents. It's a simple concept where it will bind data to the document, in this case the DOM, and then operate on the data through what is called data joins. It also comes packed with mathematical functions and helper functions to make it easier to draw things using SVG. D3 is quite low-level but with that comes the benefit of having enormous freedom in terms of expresivness and the ability to create whatever you want.  

##So how does Qlik fit into the picture?  
Qlik does what D3 does not, the ability to offload heavy calculations and data crunching to the server with sub-second response times. We remove the need to pre-calculate and aggregate data due to the limiations of browsers and loading speeds. Qlik's data engine was also built for data visualizations in mind, we give you the calculated minimum and maximum values of a calculation up-front without having to load the entire dataset, allowing a developer to construct axis's, scales and drawing dimensions while still streaming in data to the browser. We send back metadata such as max glyph counts in dimension labels and data type tags.  

All of this greatly reduces the bottlenecks that you otherwise might encounter when working with larger datasets in the browser.  

D3js is not a subsition for Qlik Sense normal charts but sometimes you want a very specific chart for a specific purpose. Or maybe you want to create a highly interactive story that uses Qlik Sense data and our unique association engine. Perhaps that boring old annual report could be turned into a interactive data graphic?  

##But everyone keeps telling me D3 is super hard!  
And they are probably correct, D3 has a little bit of a learning curve but once you master it it becomes a great tool. D3 is based around 3 core technologies, JavaScript, HTML and SVG. Some previous expereince with these three greatly helps you getting started with D3 and the Qlik APIs.  

This was the first article in a multi-part series on how to get started with D3js and Qlik Sense. In the next article we will cover how to build your first D3 graph together with Qlik Sense.