import EmberUploader from 'ember-uploader';
import Ember from 'ember';

export default EmberUploader.FileField.extend({
  classNames: ['imageUpload'],
  filesDidChange: function(files) {
    const uploader = EmberUploader.Uploader.create({
      url: 'http://localhost:8080/users/uploadImg',
      method: 'POST',
    });

    if(!Ember.isEmpty(files)) {
      uploader.upload(files[0], {name: this.get('id')});
    }
  }
});
