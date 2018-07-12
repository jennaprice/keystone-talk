var keystone = require('keystone');
var Types = keystone.Field.Types;


var TeamMember = new keystone.List('TeamMember', {
    map: { name: 'title'},
});


TeamMember.add({
    name: {type: String, required: true, default: 'Name'},
    title: { type: String, required: true, default: 'Title' },
    image: { type: Types.CloudinaryImage }, 
    content: { type: Types.Html, wysiwyg: true, height: 100} 
    

});

TeamMember.defaultColumns = 'name, title';
TeamMember.register();