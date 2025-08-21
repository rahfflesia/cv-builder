export default class GeneralInfo {
  constructor(
    picture = "",
    fullName = "",
    email = "",
    location = "",
    phoneNumber = ""
  ) {
    this.picture = picture;
    this.fullName = fullName;
    this.email = email;
    this.location = location;
    this.phoneNumber = phoneNumber;
  }
}
