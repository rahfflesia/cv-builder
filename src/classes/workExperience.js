export default class WorkExperience {
  constructor(
    company = "",
    location = "",
    startDate = "",
    endDate = "",
    role = "",
    roleDescription = ""
  ) {
    this.company = company;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.role = role;
    this.roleDescription = roleDescription;
  }
}
