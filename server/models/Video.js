'use strict';
/**
 * Make FOIA Work API server
 * 
 * Video page Model
 * @module Video
 * @class Video
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = global.keystone;
var Types = keystone.Field.Types;

/**
 * Video model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var Video = new keystone.List('Video', 
	{
		label: 'Videos',
		singular: 'Video'
	});

/**
 * Model Fields
 * @main Video
 */
Video.add({
	
	name: { type: String, default: "Video Name", required: true, initial: true },
	description: { type: Types.Textarea, required: true, initial: true},
	// url: { type: Types.Url, label: "URL to Video on Vimeo", required: true, initial: true}
	videoId: { type: String, label: "ID of video on Vimeo", note: "This is in URL of video", required: true, initial: true}
});

/**
 * Model Registration
 */
Video.defaultSort = '-createdAt';
Video.defaultColumns = 'name';
Video.register();
