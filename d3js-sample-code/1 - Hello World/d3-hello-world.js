define(['./d3.min'], function(d3) {
	return {
		paint: function($element, layout) {
			d3.select($element.get(0))
				.append('p')
				.text('Hello World')
		}
	}
});