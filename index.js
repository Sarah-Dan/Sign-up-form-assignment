new Vue({
    el: "#app",
    data() {
      return {
        message: "Create an account",
        firstName: " ",
        lastName: " ",
        email: " ",
        phone: " ",
      };
    },
    methods: {
      showFirstName: function (e) {
        this.firstName = e.target.value;
      },
      showLastName: function (e) {
        this.lastName = e.target.value;
      },
      showEmail: function (e) {
        this.email = e.target.value;
      },
      showPhone: function (e) {
        this.phone = e.target.value;
      },
      prevDefault: function (e) {
        let firstName = this.firstName;
        e.preventDefault();
        alert(
          `Kudos ${firstName}! you have successfully created an account🎉🎉🎉. Check your email for more details`);
  
        //clear the input section
        this.$refs["myFirstName"].value = "";
        this.$refs["myLastName"].value = "";
        this.$refs["myEmail"].value = "";
        this.$refs["myPhone"].value = "";
  
        // clear the paragraph with user details
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phone = "";
      }
    },
    });
  
  