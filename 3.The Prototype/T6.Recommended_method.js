const studentPrototype = {
    study: function() {
        console.log("student is studying...");
    },
};

// ✅ Recommended way of making prototype -->  ❌ instead of using '__proto__' propterty
const student = Object.create(studentPrototype);
student.study();
