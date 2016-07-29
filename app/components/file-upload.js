import EmberUploader from 'ember-uploader';
import Ember from 'ember';

export default EmberUploader.FileField.extend({
  classNames: ['imageUpload'],
  notify: Ember.inject.service('notify'),
  filesDidChange: function(files) {
    var _this = this;
    const uploader = EmberUploader.Uploader.create({
      url: 'http://localhost:8080/users/uploadImg',
      method: 'POST',
    });

    if(!Ember.isEmpty(files)) {
      uploader.upload(files[0], {name: this.get('id')}).then(function(result) {
        if(result.status === 'File uploaded!') {
          _this.get('notify').success(result.status);
        }
        else {
          _this.get('notify').error(result.status);
        }
      });
    }
  }
});
