new Vue({
	el: '#app',
	data() {
		return {
			course: '',
			time: 0,
			courses: [],
			accumulatedTime: 0,
		};
	},
	methods: {
		addCourse() {
			let repeated = this.courses.filter((c) => c.courseName == this.course);
			if (this.course != '' && this.time > 0 && repeated.length === 0) {
				this.courses.push({
					courseName: this.course,
					courseTime: this.time,
				});
				this.accumulatedTime += parseInt(this.time);
			}
		},
	},
});
