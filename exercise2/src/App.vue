<template>
    <div class="container">
        <form v-show="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label>First Name</label>
                        <input type="text" v-model="firstName">
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" v-model="lastName">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" v-model="email">
                    </div>

                    <div class="form-group">
                        <label>password</label>
                        <input type="password" v-model="password">
                    </div>
                    <label>Store Data</label>
                    <div class="form-group">
                        <label>
                            <input type="radio" value="Yes" v-model="storeData">Yes
                        </label>
                        <label>
                            <input type="radio" value="No" v-model="storeData">No
                        </label>
                    </div>
                    <button @click.prevent="submitted=true" class="btn btn-primary">Submit</button>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-show="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            storeData: "Yes",
            submitted: false
        };
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    }
};
</script>

<style>
</style>
