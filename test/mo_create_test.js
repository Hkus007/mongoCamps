const Student = require('../app/student');
const assert = require('assert');

describe('Create records', () => {
  it('create a user in DB', () => {
    //
    const sam = new Student({ name: 'Sam' });
    sam
      .save()
      .then(() => {
        assert(!sam.isNew);
      })
      .catch(() => {
        console.log('error');
      });
  });
});

describe('read test ', () => {
  let reader;
  beforeEach((done) => {
    reader = Student({ name: 'Reader' });
    reader.save().then(() => {
      done();
    });
  });

  it('read a user: Reader', (done) => {
    Student.find({ name: 'Reader' }).then((student) => {
      assert(reader._id.toString() === student[0]._id.toString());
      done();
    });
  });
});
