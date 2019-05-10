'use strict';
/**
 * Make FOIA Work API server
 * 
 * Guide page Model
 * @module Guide
 * @class Guide
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = global.keystone;
var Types = keystone.Field.Types;

/**
 * Guide model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var Guide = new keystone.List('Guide', 
	{
		label: 'Guides/Syllabi',
		singular: 'Guides'
	});

// Storage adapter for Azure
var azureFile = new keystone.Storage({
    adapter: require('keystone-storage-adapter-azure'),
    azure: {
      container: 'elabpublication',
      generateFilename: function (file) {
        // Cleanup filename
        return file.originalname.replace(/[\\'\-\[\]\/\{\}\(\)\*\+\?\\\^\$\|]/g, "").replace(/ /g, '_').toLowerCase();
      }
    },
    schema: {
      path: true,
      originalname: true,
      url: true
    }
  });

/**
 * Model Fields
 * @main Guide
 */
Guide.add({
	
	name: { type: String, default: "Guide Name", required: true, initial: true },
  description: { type: Types.Textarea, required: true, initial: true},
  isSyllabus: { type: Boolean },
	image: { type: Types.CloudinaryImage, folder: 'make-foia-work/guides' },
  file: { type: Types.File, storage: azureFile }
});

/**
 * Model Registration
 */
Guide.defaultSort = '-createdAt';
Guide.defaultColumns = 'name';
Guide.register();
