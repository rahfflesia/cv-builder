export default class EducationHistory {
  constructor(
    schoolName = "",
    location = "",
    startDate = "",
    endDate = "",
    degree = "",
    degreeDescription = ""
  ) {
    this.schoolName = schoolName;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.degree = degree;
    this.degreeDescription = degreeDescription;
  }
}
