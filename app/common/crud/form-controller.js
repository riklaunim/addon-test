import Ember from 'ember';

export default Ember.Controller.extend({
  listRouteName: undefined,
  editRouteName: undefined,
  modelName: undefined,
  imageUploadApiBaseUrl: undefined,
  saveMessageKey: undefined,
  imageFieldName: 'image',
  initialData: Ember.computed('place', function() {
    return {'place': this.get('place')};
  }),
  placeController: Ember.inject.controller('place'),
  place: Ember.computed.reads('placeController.model'),
  notificationService: Ember.inject.service('notifications'),
  uploadService: Ember.inject.service('image-uploader'),
  intl: Ember.inject.service(),
  doSuccessTransition: function () {
    this.transitionToRoute(this.get('listRouteName'));
  },
  actions: {
    cancel: function() {
      this.transitionToRoute(this.get('listRouteName'));
    },
    saveObject: function(modelObject, pickedFile) {
      if (this.get('removeImage')) {
        pickedFile = undefined;
      }
      modelObject.save().then(
        (modelObject) => {
          this.get('notificationService').success(this.get('intl').t(this.get('saveMessageKey')));
          if (pickedFile) {
            let baseURL = this.get('imageUploadApiBaseUrl');
            let apiEndpointUrl = `${baseURL}${modelObject.id}/`;
            this.get('uploadService').uploadImageToModel(apiEndpointUrl, pickedFile, this.get('imageFieldName'), (successResponse) => {
              let imageUrl = successResponse.data.attributes[this.get('imageFieldName')];
              modelObject.set(this.get('imageFieldName'), imageUrl);
              this.doSuccessTransition(modelObject);
            }, () => {
              this.get('notificationService').error(this.get('intl').t('controllers.errorSavingImage'));
              this.transitionToRoute(this.get('editRouteName'), modelObject);
            });
          } else {
            this.doSuccessTransition(modelObject);
          }
        }, () => {
        }
      );
    },
    newInstance() {
      return this.store.createRecord(this.get('modelName'), this.get('initialData'));
    }
  }
});
